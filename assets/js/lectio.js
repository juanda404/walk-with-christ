document.addEventListener('DOMContentLoaded', () => {
  initLectioPage();
});

/**
 * Carga los datos de la Lectio Divina desde el JSON
 */
async function initLectioPage() {
  const today = new Date(); 

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayKey = `${year}-${month}-${day}`; // "2026-07-31"

  // Ruta corregida a la carpeta de assets
  const jsonPath = 'assets/data/lectio-august-2026.json';

  try {
    const response = await fetch(jsonPath);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const weekData = await response.json();
    const todayData = weekData[todayKey]; 

    if (!todayData) {
      console.warn(`No Lectio Divina found for date: ${todayKey}`);
      renderFallbackUI();
      return;
    }

    renderLectioData(todayData);

  } catch (error) {
    console.error("Error loading Lectio Divina data:", error);
    renderFallbackUI();
  }
}

/**
 * Inyecta la información en los nodos del DOM
 */
function renderLectioData(data) {
  const dateElem = document.getElementById('liturgical-date');
  const refElem = document.getElementById('gospel-ref');
  const gospelContainer = document.getElementById('gospel-text');
  const questionsList = document.getElementById('meditation-questions');
  const prayerElem = document.getElementById('prayer-guide');
  const actionElem = document.getElementById('action-resolution');

  if (dateElem) dateElem.textContent = data.liturgicalDate;
  if (refElem) refElem.textContent = data.gospelRef;

  if (gospelContainer) {
    if (Array.isArray(data.gospelText)) {
      gospelContainer.innerHTML = data.gospelText.map(paragraph => `<p>${paragraph}</p>`).join('');
    } else {
      gospelContainer.innerHTML = `<p>${data.gospelText}</p>`;
    }
  }

  if (questionsList && Array.isArray(data.meditationQuestions)) {
    questionsList.innerHTML = data.meditationQuestions.map(q => `<li>${q}</li>`).join('');
  }

  if (prayerElem) prayerElem.textContent = `"${data.prayerGuide}"`;
  if (actionElem) actionElem.textContent = `"${data.actionResolution}"`;
}

/**
 * Interfaz de fallback por si falla la carga
 */
function renderFallbackUI() {
  const dateElem = document.getElementById('liturgical-date');
  const refElem = document.getElementById('gospel-ref');
  const gospelContainer = document.getElementById('gospel-text');

  if (dateElem) dateElem.textContent = "Today's Reflection";
  if (refElem) refElem.textContent = "Lectio Divina";
  if (gospelContainer) {
    gospelContainer.innerHTML = `<p>Daily reading is currently being updated. Please check back soon.</p>`;
  }
}



        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.header-nav-menu');
        menuToggle.addEventListener('click', () => {
            // quita o pone la clase 'active' cada que haces click
            navMenu.classList.toggle('active');
        });
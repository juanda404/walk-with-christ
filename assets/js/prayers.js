// assets/js/prayers.js

import { PRAYERS } from './data.js';

// --- NODOS DEL DOM ---
const prayersGrid = document.getElementById('prayersGrid');
const prayerModal = document.getElementById('prayerModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalBody = document.getElementById('modalBody');
const copyBtn = document.getElementById('copyBtn');

// NUEVO: Nodos para Filtros y Búsqueda
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');

// --- ESTADO LOCAL ---
let currentCategory = 'ALL';
let searchQuery = '';

/**
 * Renderiza la cuadrícula de tarjetas
 */
function renderPrayers(list) {
  if (list.length === 0) {
    prayersGrid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
        <p style="font-size: 1.1rem; color: var(--color-texto-secundario);">
          No prayers found matching your criteria.
        </p>
      </div>
    `;
    return;
  }

  prayersGrid.innerHTML = list.map(prayer => `
    <article class="prayer-dynamic-card" data-id="${prayer.id}">
      <div>
        <span class="card-tag">${prayer.category}</span>
        <h3>${prayer.title}</h3>
        <p>${prayer.summary}</p>
      </div>
      <button class="action-btn read-btn" data-id="${prayer.id}">Read Prayer</button>
    </article>
  `).join('');
}

/**
 * Aplica el filtro combinado (Categoría + Texto de Búsqueda)
 */
function filterPrayers() {
  const filtered = PRAYERS.filter(prayer => {
    // 1. Validar Categoría
    const matchesCategory = currentCategory === 'ALL' || prayer.category === currentCategory;

    // 2. Validar Texto de Búsqueda (coincidencia en título, resumen o tags)
    const term = searchQuery.toLowerCase().trim();
    const matchesSearch = term === '' || 
      prayer.title.toLowerCase().includes(term) ||
      prayer.summary.toLowerCase().includes(term) ||
      prayer.tags.some(tag => tag.toLowerCase().includes(term));

    return matchesCategory && matchesSearch;
  });

  renderPrayers(filtered);
}

/**
 * Abre el modal de lectura
 */
function openModal(prayerId) {
  const prayer = PRAYERS.find(p => p.id === prayerId);
  if (!prayer) return;

  modalTitle.textContent = prayer.title;
  modalCategory.textContent = prayer.category;
  modalBody.innerHTML = prayer.content.map(paragraph => `<p>${paragraph}</p>`).join('');

  prayerModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de lectura
 */
function closeModal() {
  prayerModal.classList.remove('active');
  document.body.style.overflow = '';
}

// --- EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
  renderPrayers(PRAYERS);

  // 1. Evento de Búsqueda en Tiempo Real (input)
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterPrayers();
  });

  // 2. Evento de Filtros por Categoría (Delegación en botones)
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      // Remover clase active de todos los botones
      categoryFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      
      // Activar el botón seleccionado
      e.target.classList.add('active');

      // Actualizar categoría actual y re-filtrar
      currentCategory = e.target.getAttribute('data-category');
      filterPrayers();
    }
  });

  // 3. Abrir modal desde la cuadrícula
  prayersGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-btn')) {
      const prayerId = e.target.getAttribute('data-id');
      openModal(prayerId);
    }
  });

  // 4. Cerrar modal (Botón X)
  modalClose.addEventListener('click', closeModal);

  // 5. Cerrar modal (Fondo oscuro)
  prayerModal.addEventListener('click', (e) => {
    if (e.target === prayerModal) closeModal();
  });

  // 6. Cerrar modal (Tecla ESC)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && prayerModal.classList.contains('active')) closeModal();
  });

  // 7. Copiar al portapapeles
  copyBtn.addEventListener('click', () => {
    const textToCopy = Array.from(modalBody.querySelectorAll('p'))
      .map(p => p.textContent)
      .join('\n\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = '✅ Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    });
  });
});



        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.header-nav-menu');
        menuToggle.addEventListener('click', () => {
            // quita o pone la clase 'active' cada que haces click
            navMenu.classList.toggle('active');
        });
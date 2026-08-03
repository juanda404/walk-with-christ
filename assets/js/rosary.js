// assets/js/rosary.js

import { MYSTERIES, getTodayMystery } from './rosaryData.js';

// --- NODOS DEL DOM ---
const mysterySelector = document.getElementById('mysterySelector');
const mysteryTitle = document.getElementById('mysteryTitle');
const mysteryDescription = document.getElementById('mysteryDescription');

// Nodos del Stepper
const stepCounter = document.getElementById('stepCounter');
const fruitTag = document.getElementById('fruitTag');
const stepTitle = document.getElementById('stepTitle');
const stepScripture = document.getElementById('stepScripture');
const stepReflection = document.getElementById('stepReflection');
const currentPrayerText = document.getElementById('currentPrayerText');
const prevStepBtn = document.getElementById('prevStepBtn');
const nextStepBtn = document.getElementById('nextStepBtn');

// --- ESTADO LOCAL ---
let currentMysteryGroup = null; // Objeto del grupo activo (ej. Joyful)
let currentStepIndex = 0;       // Índice del misterio actual (0 a 4)

/**
 * Carga un grupo de misterios en la interfaz y reinicia el stepper al primer paso
 * @param {Object} mysteryGroup - Objeto de misterio proveniente de MYSTERIES
 */
function loadMysteryGroup(mysteryGroup) {
  currentMysteryGroup = mysteryGroup;
  currentStepIndex = 0;

  // Actualizar banner principal
  mysteryTitle.textContent = `${mysteryGroup.name} (${mysteryGroup.dayNames})`;
  mysteryDescription.textContent = mysteryGroup.description;

  // Actualizar botones de selección
  const buttons = mysterySelector.querySelectorAll('.mystery-btn');
  buttons.forEach(btn => {
    const isSelected = btn.getAttribute('data-mystery') === mysteryGroup.id;
    btn.classList.toggle('active', isSelected);
  });

  // Renderizar el primer paso
  renderStep();
}

/**
 * Renderiza el estado del stepper según currentStepIndex
 */
function renderStep() {
  if (!currentMysteryGroup) return;

  const totalSteps = currentMysteryGroup.items.length;
  const currentItem = currentMysteryGroup.items[currentStepIndex];

  // Actualizar header del paso
  stepCounter.textContent = `Mystery ${currentItem.order} of ${totalSteps}`;
  fruitTag.textContent = `Fruit: ${currentItem.fruit}`;

  // Actualizar contenido del misterio
  stepTitle.textContent = `${currentItem.order}. ${currentItem.title}`;
  stepScripture.textContent = `📖 ${currentItem.scripture}`;
  stepReflection.textContent = currentItem.reflection;

  // Guía rápida de oraciones para la década
  currentPrayerText.textContent = `1x Our Father • 10x Hail Mary • 1x Glory Be • 1x Fatima Prayer`;

  // Control de estado de botones (Disabled/Enabled)
  prevStepBtn.disabled = currentStepIndex === 0;
  nextStepBtn.disabled = currentStepIndex === totalSteps - 1;
}

/**
 * Identifica el día actual y activa las insignias "Today" en los botones del selector
 */
function highlightTodayBadges() {
  const todayMystery = getTodayMystery();
  const todayBadgeNode = document.getElementById(`badge-${todayMystery.id}`);
  
  if (todayBadgeNode) {
    todayBadgeNode.classList.remove('hidden');
  }

  // Carga inicial basada en el día de hoy
  loadMysteryGroup(todayMystery);
}

// --- EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar la vista con el misterio del día
  highlightTodayBadges();

  // 2. Selección manual de grupo de misterios (Delegación de eventos)
  mysterySelector.addEventListener('click', (e) => {
    const btn = e.target.closest('.mystery-btn');
    if (!btn) return;

    const mysteryId = btn.getAttribute('data-mystery').toUpperCase();
    if (MYSTERIES[mysteryId]) {
      loadMysteryGroup(MYSTERIES[mysteryId]);
    }
  });

  // 3. Botón "Anterior" en el Stepper
  prevStepBtn.addEventListener('click', () => {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      renderStep();
    }
  });

  // 4. Botón "Siguiente" en el Stepper
  nextStepBtn.addEventListener('click', () => {
    if (currentStepIndex < currentMysteryGroup.items.length - 1) {
      currentStepIndex++;
      renderStep();
    }
  });
});


        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.header-nav-menu');
        menuToggle.addEventListener('click', () => {
            // quita o pone la clase 'active' cada que haces click
            navMenu.classList.toggle('active');
        });
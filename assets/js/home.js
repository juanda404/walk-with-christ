// assets/js/home.js
import { PRAYERS } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    initPopularPrayers();
    initModalEvents();
});

function initPopularPrayers() {
    const grid = document.getElementById('popularPrayersGrid');
    if (!grid) {
        console.warn("No se encontró el contenedor #popularPrayersGrid");
        return;
    }

    // Filtrar oraciones que tengan la propiedad popular: true
    const populars = PRAYERS.filter(prayer => prayer.popular);

    if (populars.length === 0) {
        console.warn("No hay oraciones marcadas como popular: true en data.js");
        return;
    }

    // Renderizar grilla
    grid.innerHTML = populars.map(prayer => `
        <div class="prayer-card" data-id="${prayer.id}" style="cursor: pointer;">
            <img src="${prayer.icon}" alt="${prayer.title}">
            <p>${prayer.title}</p>
        </div>
    `).join('');

    // Listener de clicks con delegación
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.prayer-card');
        if (!card) return;

        const prayerId = card.getAttribute('data-id');
        openPrayerModal(prayerId);
    });
}

function openPrayerModal(prayerId) {
    const prayer = PRAYERS.find(p => p.id === prayerId);
    const modal = document.getElementById('homePrayerModal');

    if (!prayer || !modal) {
        console.error("No se encontró la oración o el modal con el ID asignado");
        return;
    }

    const modalIcon = document.getElementById('homeModalIcon');
    const modalTitle = document.getElementById('homeModalTitle');
    const modalBody = document.getElementById('homeModalBody');
    const modalLink = document.getElementById('homeModalLink');

    if (modalIcon) modalIcon.src = prayer.icon;
    if (modalTitle) modalTitle.textContent = prayer.title;

    if (modalBody) {
        modalBody.innerHTML = prayer.content
            .map(paragraph => `<p style="margin-bottom: 0.8rem; line-height: 1.6;">${paragraph}</p>`)
            .join('');
    }

    if (modalLink) {
        modalLink.href = `./prayers.html?id=${prayer.id}`;
    }

    // Mostrar modal
    modal.classList.add('open');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePrayerModal() {
    const modal = document.getElementById('homePrayerModal');
    if (!modal) return;
    
    modal.classList.remove('open');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function initModalEvents() {
    const closeBtn = document.getElementById('closeHomePrayerModal');
    const modal = document.getElementById('homePrayerModal');

    closeBtn?.addEventListener('click', closePrayerModal);

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closePrayerModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePrayerModal();
    });
}
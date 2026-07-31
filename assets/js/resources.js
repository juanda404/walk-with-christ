// assets/js/resources.js

import { RESOURCES } from './resourcesData.js';

const resourcesGrid = document.getElementById('resourcesGrid');
const filterBar = document.getElementById('filterBar');
const videoModal = document.getElementById('videoModal');
const closeVideoBtn = document.getElementById('closeVideoModal');
const videoPlayerContainer = document.getElementById('videoPlayerContainer');

let activeFilter = 'all';

/**
 * Renderiza los recursos aplicando el filtro activo
 */
function renderResources() {
    if (!resourcesGrid) return;
    resourcesGrid.innerHTML = '';

    const filteredData = RESOURCES.filter(res => {
        if (activeFilter === 'all') return true;
        return res.type.class.includes(activeFilter);
    });

    filteredData.forEach(res => {
        const card = document.createElement('article');
        card.className = 'resource-card';

        const isVideo = res.type.name === 'Video Lesson';

        // Thumbnail de YouTube
        const thumbnailHtml = isVideo ? `
            <div class="card-thumbnail-container play-video-trigger" data-youtube-id="${res.youtubeId}">
                <img src="https://img.youtube.com/vi/${res.youtubeId}/hqdefault.jpg" alt="${res.title}" loading="lazy">
                <div class="play-overlay-badge">▶</div>
            </div>
        ` : '';

        // Botón CTA
        let actionBtnHtml = '';
        if (isVideo) {
            actionBtnHtml = `<button type="button" class="resource-btn play-video-trigger" data-youtube-id="${res.youtubeId}">
                                🎬 Watch Video
                             </button>`;
        } else if (res.type.name === 'PDF Guide') {
            actionBtnHtml = `<a href="${res.link}" class="resource-btn" download>
                                📄 Download PDF
                             </a>`;
        } else {
            actionBtnHtml = `<a href="${res.link}" class="resource-btn" target="_blank" rel="noopener">
                                🔗 Visit Resource
                             </a>`;
        }

        const sizeMeta = res.size ? `<span class="resource-size">${res.size}</span>` : '';

        card.innerHTML = `
            ${thumbnailHtml}
            <div class="card-body">
                <div class="card-header-meta">
                    <span class="type-badge">${res.type.name}</span>
                    ${sizeMeta}
                </div>
                <h3>${res.title}</h3>
                <p>${res.summary}</p>
                <div class="card-footer">
                    ${actionBtnHtml}
                </div>
            </div>
        `;

        resourcesGrid.appendChild(card);
    });
}

/**
 * Abre el modal inyectando el iframe de forma segura
 */
function openVideoModal(youtubeId) {
    if (!youtubeId || !videoModal || !videoPlayerContainer) return;

    videoPlayerContainer.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0" 
            title="YouTube video player" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>`;
    
    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Bloquea scroll solo de la página de fondo
}

/**
 * Cierra el modal y limpia el iframe para evitar consumo de memoria/audio
 */
function closeVideoModal() {
    if (!videoModal || !videoPlayerContainer) return;

    videoModal.classList.remove('open');
    videoPlayerContainer.innerHTML = '';
    document.body.style.overflow = ''; // Libera el scroll
}

// --- EVENT LISTENERS (CON CONTROL DE PROPAGACIÓN) ---

document.addEventListener('DOMContentLoaded', () => {
    renderResources();

    // Filtros
    if (filterBar) {
        filterBar.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;

            filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            activeFilter = btn.getAttribute('data-filter');
            renderResources();
        });
    }

    // Evento Clic en Recursos (Captura de disparo de video)
    if (resourcesGrid) {
        resourcesGrid.addEventListener('click', (e) => {
            const trigger = e.target.closest('.play-video-trigger');
            if (trigger) {
                e.preventDefault();
                e.stopPropagation(); // Evita bucle/conflicto de eventos en el DOM
                const youtubeId = trigger.getAttribute('data-youtube-id');
                openVideoModal(youtubeId);
            }
        });
    }

    // Modal Events
    if (closeVideoBtn) {
        closeVideoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeVideoModal();
        });
    }

    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('open')) {
            closeVideoModal();
        }
    });
});
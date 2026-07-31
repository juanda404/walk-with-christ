// assets/js/resourcesData.js

export const RESOURCE_TYPES = {
    PDF: { name: 'PDF Guide', icon: '📄', class: 'type-pdf' },
    YOUTUBE: { name: 'Video Lesson', icon: '🎬', class: 'type-video' },
    EXTERNAL: { name: 'External Resource', icon: '🔗', class: 'type-external' },
    BOOK: { name: 'Recommended Book', icon: '📚', class: 'type-book' }
};

export const RESOURCES = [
    // --- RECURSOS PDF LOCALES ---
    {
        id: 'guide-lectio-divina',
        title: 'Lectio Divina Step-by-Step Guide',
        type: RESOURCE_TYPES.PDF,
        size: '1.2 MB',
        summary: 'A printable guide covering the 4 steps of Lectio Divina: Read, Meditate, Pray, Contemplate.',
        link: 'assets/docs/lectio-divina-guide.pdf',
        featured: true
    },
    {
        id: 'confession-guide',
        title: 'Complete Confession & Examination Guide',
        type: RESOURCE_TYPES.PDF,
        size: '850 KB',
        summary: 'An Examination of Conscience based on the Ten Commandments to prepare for Reconciliation.',
        link: 'assets/docs/confession-guide.pdf',
        featured: true
    },

    // --- VIDEOS DE YOUTUBE (CON MODAL) ---
    {
        id: 'video-how-to-rosary',
        title: 'How to Pray the Rosary (Beginner Guide)',
        type: RESOURCE_TYPES.YOUTUBE,
        youtubeId: 'EHpLiUyZNH4', // <-- ID Extraído de la URL
        summary: 'A visual walkthrough of the Rosary beads, prayers, and daily mysteries.',
        link: 'https://youtu.be/EHpLiUyZNH4',
        featured: false
    },
    {
        id: 'video-mass-explained',
        title: 'The Eucharist: The Mass Explained',
        type: RESOURCE_TYPES.YOUTUBE,
        youtubeId: 'Dh40Srl-lkY', // <-- ID Extraído de la URL
        summary: 'Understand the parts and symbolism of the Holy Mass from beginning to end.',
        link: 'https://youtu.be/Dh40Srl-lkY',
        featured: false
    },

    // --- ENLACES EXTERNOS ---
    {
        id: 'catechism-vatican',
        title: 'Catechism of the Catholic Church',
        type: RESOURCE_TYPES.EXTERNAL,
        summary: 'Access the complete online version hosted on the official Vatican website.',
        link: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM',
        featured: false
    }
];
import { indicatorData, verifikasiData, kecamatanData } from './data.js';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initScrollReveal();
    renderKecamatanCards();
    initCardEvents();
    initSearch();
    initModalClosing();
    handleActiveNav();
    initBackToTop();
});

// --- Back to Top ---
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    btn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

// --- Header Scroll Effect ---
function initHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// --- Scroll Reveal with Intersection Observer ---
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// --- Modal Functionality ---
function openModal(id) {
    const modal = document.getElementById('indicator-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    const data = indicatorData[id] || verifikasiData[id] || kecamatanData[id];

    if (data) {
        modalTitle.textContent = data.title;
        modalContent.innerHTML = data.content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function initCardEvents() {
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.indicator-card, .verifikasi-card, .kecamatan-card');
        if (!card) return;

        const id = card.getAttribute('data-indicator') ||
            card.getAttribute('data-verifikasi') ||
            card.getAttribute('data-kecamatan');

        if (id) openModal(id);
    });
}

function initModalClosing() {
    const modal = document.getElementById('indicator-modal');
    const closeBtn = document.querySelector('.close-modal');

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    if (closeBtn) closeBtn.onclick = closeModal;

    window.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// --- Kecamatan Module ---
function renderKecamatanCards(filter = '') {
    const grid = document.getElementById('kecamatanGrid');
    if (!grid) return;

    grid.innerHTML = '';

    Object.keys(kecamatanData).forEach(key => {
        const item = kecamatanData[key];
        if (item.title.toLowerCase().includes(filter.toLowerCase())) {
            const card = document.createElement('div');
            card.className = 'kecamatan-card scroll-reveal';
            card.setAttribute('data-kecamatan', key);

            const priorityClass = item.priority === 'KRITIS' ? 'badge-red' : 'badge-amber';

            card.innerHTML = `
                <div style="padding: 2.5rem; text-align: left;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
                        <span class="object-badge ${priorityClass}">${item.priority}</span>
                        <span style="font-size: 1.5rem;">📍</span>
                    </div>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-dark); margin-bottom: 0.75rem;">${item.title}</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${item.subtitle}</p>
                    <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); color: var(--primary-blue); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
                        LIHAT TEMUAN LENGKAP ➔
                    </div>
                </div>
            `;
            grid.appendChild(card);

            // Re-trigger reveal check for new cards
            setTimeout(() => card.classList.add('active'), 10);
        }
    });
}

function initSearch() {
    const searchInput = document.getElementById('kecamatanSearch');
    if (searchInput) {
        searchInput.oninput = (e) => renderKecamatanCards(e.target.value);
    }
}

// --- Navigation Active State ---
function handleActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (current && a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
}

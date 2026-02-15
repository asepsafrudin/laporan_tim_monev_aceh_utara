import { indicatorData, verifikasiData, kecamatanData } from './data.js';

// Search functionality for kecamatan cards
const searchInput = document.getElementById('kecamatan-search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.kecamatan-card');

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Modal functions
function openModal(indicator) {
    const modal = document.getElementById('indicator-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    let data = indicatorData[indicator] || kecamatanData[indicator] || verifikasiData[indicator];

    if (data) {
        modalTitle.textContent = data.title;
        modalContent.innerHTML = data.content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('indicator-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Card Event Listeners
function initCardEvents() {
    // Indicators
    document.querySelectorAll('.indicator-card').forEach(card => {
        const indicator = card.getAttribute('data-indicator');
        card.onclick = () => openModal(indicator);
    });

    // Kecamatan
    document.querySelectorAll('.kecamatan-card').forEach(card => {
        const kecamatan = card.getAttribute('data-kecamatan');
        card.onclick = () => openModal(kecamatan);
    });

    // Verifikasi
    document.querySelectorAll('.verifikasi-card').forEach(card => {
        const verifikasi = card.getAttribute('data-verifikasi');
        card.onclick = () => openModal(verifikasi);
    });
}

initCardEvents();

// Close modal on outside click
document.getElementById('indicator-modal').addEventListener('click', (e) => {
    if (e.target.id === 'indicator-modal') closeModal();
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
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

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Progress bar animation
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.progress-fill').forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => fill.style.width = width, 100);
            });
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.progress-bars').forEach(el => progressObserver.observe(el));

// Active Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.parentElement.classList.add('active');
            navLink?.style.setProperty('color', 'var(--primary-blue)');
        } else {
            navLink?.parentElement.classList.remove('active');
            navLink?.style.setProperty('color', 'var(--text-secondary)');
        }
    });
});


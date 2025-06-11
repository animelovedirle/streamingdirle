// Data Anime (bisa diganti dengan API asli)
const animeData = [
    {
        title: "Demon Slayer",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        rating: 9.8,
        episode: "Ep 24",
        type: "TV"
    },
    {
        title: "Jujutsu Kaisen",
        image: "https://images.unsplash.com/photo-1633356122543-f996324d8011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.6,
        episode: "Ep 18",
        type: "TV"
    },
    {
        title: "Attack on Titan",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.7,
        episode: "Final",
        type: "Movie"
    },
    {
        title: "One Piece",
        image: "https://images.unsplash.com/photo-1633613287208-5d9a46eef5cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.5,
        episode: "Ep 1000+",
        type: "TV"
    },
    {
        title: "Tokyo Revengers",
        image: "https://images.unsplash.com/photo-1633613287365-4f2c76319a58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.0,
        episode: "New",
        type: "TV"
    },
    {
        title: "My Hero Academia",
        image: "https://images.unsplash.com/photo-1633613287140-611fec0a1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.2,
        episode: "S5",
        type: "TV"
    }
];

const newReleasesData = [
    {
        title: "Spy x Family",
        image: "https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.4,
        episode: "Ep 12",
        type: "TV"
    },
    {
        title: "Suzume",
        image: "https://images.unsplash.com/photo-1533279443086-d1c19a186416?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.3,
        episode: "Movie",
        type: "Movie"
    },
    {
        title: "Chainsaw Man",
        image: "https://images.unsplash.com/photo-1633613286858-0a40a0d01d6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.6,
        episode: "Ep 10",
        type: "TV"
    },
    {
        title: "Bleach",
        image: "https://images.unsplash.com/photo-1633613286997-611fe299c4bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.1,
        episode: "New",
        type: "TV"
    },
    {
        title: "Vinland Saga",
        image: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.5,
        episode: "S2",
        type: "TV"
    },
    {
        title: "Oshi no Ko",
        image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 9.7,
        episode: "Ep 8",
        type: "TV"
    }
];

const categoriesData = [
    { name: "Action", icon: "fas fa-fist-raised" },
    { name: "Comedy", icon: "fas fa-laugh-beam" },
    { name: "Romance", icon: "fas fa-heart" },
    { name: "Horror", icon: "fas fa-ghost" },
    { name: "Sci-Fi", icon: "fas fa-rocket" },
    { name: "Fantasy", icon: "fas fa-hat-wizard" },
    { name: "Adventure", icon: "fas fa-dragon" },
    { name: "School", icon: "fas fa-user-graduate" }
];

// Fungsi untuk membuat kartu anime
function createAnimeCard(anime) {
    return `
        <div class="anime-card">
            <div class="anime-type">${anime.type}</div>
            <img src="${anime.image}" alt="${anime.title}">
            <div class="anime-info">
                <h3>${anime.title}</h3>
                <div class="anime-meta">
                    <span class="anime-rating"><i class="fas fa-star"></i> ${anime.rating}</span>
                    <span>${anime.episode}</span>
                </div>
            </div>
        </div>
    `;
}

// Fungsi untuk membuat kategori
function createCategoryCard(category) {
    return `
        <div class="category-card">
            <i class="${category.icon}"></i>
            <h4>${category.name}</h4>
        </div>
    `;
}

// Fungsi untuk memuat anime trending
function loadTrendingAnime() {
    const animeGrid = document.querySelector('.anime-grid');
    animeGrid.innerHTML = animeData.map(createAnimeCard).join('');
}

// Fungsi untuk memuat rilisan baru
function loadNewReleases() {
    const newReleasesGrid = document.querySelector('.new-releases');
    newReleasesGrid.innerHTML = newReleasesData.map(createAnimeCard).join('');
}

// Fungsi untuk memuat kategori
function loadCategories() {
    const categoryGrid = document.querySelector('.category-grid');
    categoryGrid.innerHTML = categoriesData.map(createCategoryCard).join('');
}

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.querySelector('i').classList.toggle('fa-bars');
    mobileToggle.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.querySelector('i').classList.add('fa-bars');
        mobileToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

// Anime card hover effect
function setupAnimeCardHover() {
    const animeCards = document.querySelectorAll('.anime-card');
    animeCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const x = e.pageX - card.offsetLeft;
            const y = e.pageY - card.offsetTop;
            
            card.style.transform = `perspective(1000px) rotateX(${(y - card.offsetHeight/2) / 15}deg) rotateY(${(x - card.offsetWidth/2) / 15}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    loadTrendingAnime();
    loadNewReleases();
    loadCategories();
    setupAnimeCardHover();
    
    // Animasi saat halaman dimuat
    document.body.style.opacity = '1';
});

// Smooth scroll untuk semua link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek scroll untuk header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '15px 5%';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.padding = '20px 5%';
        header.style.boxShadow = 'none';
    }
});
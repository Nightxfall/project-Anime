const books = [
    {
        id: 1,
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        category: "ficcion",
        rating: 4.8,
        pages: 417,
        year: 1967,
        language: "Español",
        description: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. Una obra maestra del realismo mágico que explora temas de soledad, destino y el tiempo circular.",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
        id: 2,
        title: "Breve historia del tiempo",
        author: "Stephen Hawking",
        category: "ciencia",
        rating: 4.6,
        pages: 256,
        year: 1988,
        language: "Inglés",
        description: "Una introducción accesible a los conceptos más profundos del cosmos: desde el Big Bang hasta los agujeros negros, pasando por la teoría de la relatividad y la mecánica cuántica.",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
    },
    {
        id: 3,
        title: "Sapiens: De animales a dioses",
        author: "Yuval Noah Harari",
        category: "historia",
        rating: 4.7,
        pages: 443,
        year: 2011,
        language: "Hebreo",
        description: "Un recorrido por la historia de la humanidad, desde la evolución de los primeros humanos hasta la revolución tecnológica del siglo XXI, analizando cómo hemos construido nuestra realidad social.",
        cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop"
    },
    {
        id: 4,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "tecnologia",
        rating: 4.5,
        pages: 464,
        year: 2008,
        language: "Inglés",
        description: "Una guía fundamental para escribir código limpio y mantenible. El tío Bob comparte principios, patrones y prácticas esenciales para todo desarrollador de software profesional.",
        cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=600&fit=crop"
    },
    {
        id: 5,
        title: "El arte de amar",
        author: "Erich Fromm",
        category: "filosofia",
        rating: 4.4,
        pages: 133,
        year: 1956,
        language: "Alemán",
        description: "Un análisis psicológico y filosófico sobre la naturaleza del amor. Fromm argumenta que el amor es un arte que requiere conocimiento y esfuerzo, no solo una emoción pasajera.",
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
    },
    {
        id: 6,
        title: "1984",
        author: "George Orwell",
        category: "ficcion",
        rating: 4.7,
        pages: 328,
        year: 1949,
        language: "Inglés",
        description: "Una distopía clásica que retrata un régimen totalitario donde el Gran Hermano lo ve todo. Una advertencia profética sobre la vigilancia masiva, la manipulación de la verdad y la pérdida de la libertad individual.",
        cover: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&h=600&fit=crop"
    },
    {
        id: 7,
        title: "El origen de las especies",
        author: "Charles Darwin",
        category: "ciencia",
        rating: 4.3,
        pages: 502,
        year: 1859,
        language: "Inglés",
        description: "La obra fundacional de la biología evolutiva. Darwin presenta su teoría de la selección natural, revolucionando para siempre nuestra comprensión de la vida y su diversidad en la Tierra.",
        cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=600&fit=crop"
    },
    {
        id: 8,
        title: "Historia del arte",
        author: "E.H. Gombrich",
        category: "arte",
        rating: 4.6,
        pages: 688,
        year: 1950,
        language: "Inglés",
        description: "La introducción más popular y amena a la historia del arte occidental. Gombrich guía al lector desde las pinturas rupestres hasta el arte moderno con un estilo claro y apasionado.",
        cover: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=600&fit=crop"
    },
    {
        id: 9,
        title: "Fundación",
        author: "Isaac Asimov",
        category: "ficcion",
        rating: 4.5,
        pages: 244,
        year: 1951,
        language: "Inglés",
        description: "El inicio de la saga épica que sigue a Hari Seldon y su teoría de la psicohistoria. Una visión ambiciosa del futuro de la humanidad a través del colapso y renacimiento de un imperio galáctico.",
        cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop"
    },
    {
        id: 10,
        title: "Cosmos",
        author: "Carl Sagan",
        category: "ciencia",
        rating: 4.8,
        pages: 396,
        year: 1980,
        language: "Inglés",
        description: "Un viaje extraordinario a través del universo. Sagan combina ciencia, historia y filosofía para explorar nuestro lugar en el cosmos con una prosa poética y accesible.",
        cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop"
    },
    {
        id: 11,
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        category: "ficcion",
        rating: 4.9,
        pages: 96,
        year: 1943,
        language: "Francés",
        description: "Un cuento filosófico aparentemente simple pero profundamente conmovedor. El principito viaja por planetas y enseña lecciones sobre el amor, la amistad y lo esencial que es invisible a los ojos.",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    },
    {
        id: 12,
        title: "Meditaciones",
        author: "Marco Aurelio",
        category: "filosofia",
        rating: 4.5,
        pages: 304,
        year: 180,
        language: "Griego",
        description: "Las reflexiones personales del emperador romano sobre la vida, la virtud, la muerte y la naturaleza del universo. Un pilar del estoicismo que sigue siendo relevante dos mil años después.",
        cover: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&h=600&fit=crop"
    }
];

let currentFilter = 'todos';
let currentView = 'grid';
let searchQuery = '';

const booksGrid = document.getElementById('booksGrid');
const booksList = document.getElementById('booksList');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const viewBtns = document.querySelectorAll('.view-btn');
const modal = document.getElementById('bookModal');
const modalClose = document.getElementById('modalClose');

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<span class="star">★</span>';
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star empty">★</span>';
        }
    }
    return stars;
}

function renderBooks() {
    let filtered = books.filter(book => {
        const matchesFilter = currentFilter === 'todos' || book.category === currentFilter;
        const matchesSearch = !searchQuery || 
            book.title.toLowerCase().includes(searchQuery) ||
            book.author.toLowerCase().includes(searchQuery) ||
            book.category.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });

    const gridHTML = filtered.map(book => `
        <div class="book-card" onclick="openModal(${book.id})">
            <img src="${book.cover}" alt="${book.title}" class="book-cover" loading="lazy">
            <div class="book-info">
                <div class="book-category">${book.category}</div>
                <h4 class="book-title">${book.title}</h4>
                <p class="book-author">${book.author}</p>
                <div class="book-rating">
                    ${generateStars(book.rating)}
                    <span class="rating-value">${book.rating}</span>
                </div>
            </div>
        </div>
    `).join('');

    const listHTML = filtered.map(book => `
        <div class="book-list-item" onclick="openModal(${book.id})">
            <img src="${book.cover}" alt="${book.title}" class="book-list-cover" loading="lazy">
            <div class="book-list-info">
                <div class="book-category">${book.category}</div>
                <h4 class="book-title">${book.title}</h4>
                <p class="book-author">${book.author}</p>
                <div class="book-rating">
                    ${generateStars(book.rating)}
                    <span class="rating-value">${book.rating}</span>
                </div>
                <p class="book-list-desc">${book.description}</p>
            </div>
        </div>
    `).join('');

    booksGrid.innerHTML = gridHTML || '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No se encontraron libros.</p>';
    booksList.innerHTML = listHTML || '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No se encontraron libros.</p>';
}

function openModal(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('modalCover').src = book.cover;
    document.getElementById('modalCategory').textContent = book.category;
    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = book.author;
    document.getElementById('modalRating').innerHTML = generateStars(book.rating) + `<span class="rating-value">${book.rating}</span>`;
    document.getElementById('modalDescription').textContent = book.description;
    document.getElementById('modalPages').textContent = book.pages;
    document.getElementById('modalYear').textContent = book.year;
    document.getElementById('modalLanguage').textContent = book.language;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderBooks();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderBooks();
    });
});

viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        if (currentView === 'grid') {
            booksGrid.style.display = 'grid';
            booksList.style.display = 'none';
        } else {
            booksGrid.style.display = 'none';
            booksList.style.display = 'flex';
        }
    });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialize
renderBooks();

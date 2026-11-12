const books = [
  {
    id: 1,
    title: "Marriagetoxin",
    author: "Joumyaku",
    artist: "Mizuki Yoda",
    type: "manga",
    demography: "seinen",
    category: [
      "comedia",
      "shonen",
      "sci-fi",
      "drama",
      "romance",
      "gender-bender",
    ],
    year: 2022,
    language: ["Español Latino", "Japones"],
    status: "Leyendo",
    lastChapter: 173,
    rating: 4.2,
    description:
      "Hikaru Gero un experto del veneno perteneciente a una de las cinco familias principales del bajo mundo, emprende la misión de casarse para salvar a su hermana de la obligación de dar a luz a un sucesor. Como carece por completo de habilidades sociales con las mujeres, decide contratar los servicios de Mei Kisonaki, una hábil estafadora matrimonial. Juntos iniciarán una peculiar aventura llena de acción y enredos.",
    cover: "../../assets/img/manga/marriagetoxin.webp",
    link: "https://manhwa-latino.com/manga/marriagetoxin/",
  },
  {
    id: 2,
    title: "Kusunoki-san wa Koukou Debut ni Shippai shite Iru",
    author: "Mitsuki Mii",
    type: "manga",
    category: ["slice of life", "romance", "comedia"],
    year: 2022,
    language: "Español",
    status: "leyendo",
    lastChapter: "322",
    rating: 4.8,
    description:
      "Luego de años llenos de trauma durante la Escuela Secundaria, Keisuke Shizuki decide darle un giro a su vida, y consigue un cambio total de imagen para su &quot;renovación&quot; escolar. Su nueva vida parece prometedora ya que nadie está al tanto de su pasado... Excepto por una persona: Shizuka Kusunoki, ¡quien también se propició un cambio en la búsqueda de una vida escolar más exitosa! Mientras sus destinos se cruzan, ¡¿al final Keisuke podrá vivir una vida tranquila en su Preparatoria...?!",
    cover: "../../assets/img/manga/kusunoki-san.webp",
    link: "https://manhwaweb.com/manhwa/kusunoki-san-wa-koukou-debut-ni-shippaishiteiru_1751657817114",
  },
  {
    id: 3,
    title: "Mieruko-chan",
    author: "Tomoki Izumi",
    type: "manga",
    category: ["drama", "comedia", "sobrenatural", "horror"],
    year: 2018,
    language: "Español",
    status: "leyendo",
    lastChapter: 322,
    rating: 4.6,
    description:
      "una chica que puede ver monstruos grotescos a su alrededor, pero nadie más puede y en lugar de huir, o enfrentarlos, ella simplemente reúne todo su coraje y.… los ignora. Únete a su vida cotidiana mientras mantiene su mejor cara de póquer a pesar de los acontecimientos sobrenaturales.",
    cover: "../../assets/img/manga/mieruko-chan.jpg",
    link: "https://manhwaweb.com/manhwa/mieruko-chan_1695468367162",
  },
  {
    id: 4,
    title: "100-man no Inochi no Ue ni Ore wa Tatte Iru",
    author: "Naoki Yamakawa",
    artist: "Akinaro Nao",
    type: "manga",
    category: ["drama", "comedia", "fantasia", "aventura", "accion"],
    year: 2016,
    lenguage: "español",
    status: "leyendo",
    lastChapter: 102,
    rating: 4.2,
    description:
      "ULa historia sigue a Yusuke Yotsuya, un estudiante solitario que es transportado a un mundo fantástico donde debe completar misiones junto a sus compañeras de clase para sobrevivir, descubriendo que sus acciones tienen consecuencias reales y éticas muy pesadas.",
    cover: "../../assets/img/manga/100-man-no-inochi.jpg",
    link: "https://zonatmo.net/manga/100-man-no-inochi-no-ue-ni-ore-wa-tatte-iru",
  },
  {
    id: 5,
    title: "Drama Queen",
    author: "Ichikawa Kuraku",
    type: "manga",
    category: ["comedia", "sci-fi", "drama", "crimen", "aliens", "accion"],
    year: 2024,
    language: ["Español Latino", "Japones"],
    status: "leyendo",
    lastChapter: 322,
    rating: 3.8,
    description:
      "Tras salvar la Tierra, los extraterrestres se han asentado entre los humanos en Japón. Nomamoto, un obrero con un jefe extraterrestre abusivo, conoce un día a Kitami, quien le cuenta que su propia familia fue asesinada por extraterrestres. Los dos entablan rápidamente una amistad, pero un día Kitami hace lo impensable...",
    cover: "../../assets/img/manga/drama-queen.webp",
    link: "https://mangadex.org/chapter/56a1cdd6-9473-4a17-9ff3-a878e94c93c1",
  },
  {
    id: 6,
    title: "Super no Ura de Yani Suu Futari",
    author: "Jinushi",
    type: "manga",
    category: ["comedia", "slice of life", "romance"],
    year: 333,
    language: ["Español Latino", "Japones"],
    status: "leyendo",
    lastChapter: 2022,
    rating: 4.7,
    description:
      "Sasaki, un asalariado con exceso de trabajo, pasa por un día estresante promedio solo por una sola luz al final del túnel: Yamada, la siempre alegre empleada de su tienda de conveniencia favorita. Un día, Sasaki se toma una cantidad extra de tiempo en una reunión de la empresa, y cuando llega a la tienda de conveniencia, Yamada ya se había marchado. Sin embargo, cuando se va, se da cuenta de que una mujer joven con piercings fuma detrás de la tienda.",
    cover: "../../assets/img/manga/super-no-ura.webp",
    link: "https://www.kumanga.com/manga/6594/historias-que-ocurren-al-fumar-en-la-parte-trasera-del-supermercado",
  },
  {
    id: 7,
    title: "Sentai Daishikkaku",
    author: "Negi Haruba",
    type: "manga",
    category: [
      "comedia",
      "drama",
      "accion",
      "Sci-Fi",
      "superpoderes",
      "psicologico",
    ],
    year: 2021,
    language: ["Español Latino", "Japones"],
    status: "leyendo",
    lastChapter: 322,
    rating: 3.7,
    description:
      "¡Hace trece años, de repente, el Ejército Villano del mal apareció en su gigantesco castillo flotante a 10000 metros en el cielo para invadir la Tierra! El ejército de villanos tiene capacidades revitalizadoras que los hacen inmortales, lo que los convierte en una seria amenaza para la humanidad. Para protegernos contra estos invasores, los Divine Dragon Rangers, los Dragon Keepers, ejercen sus poderes milagrosos y sus armas, Divine Tools, ¡y luchan continuamente por nuestra seguridad! ¡El asalto del ejército de villanos! ¡La vigilancia de los Guardianes del Dragón! ¿Tendrán éxito en su conquista…? ¡Descúbrelo en la serie de superhéroes llena de acción de tu vida!",
    cover: "../../assets/img/manga/sentai-daishikkaku.jpg",
    link: "https://www.kumanga.com/manga/5722/sentai-daishikkaku",
  },
  {
    id: 8,
    title: "Dame-dol to Sekai ni Hitori Dake no Fan 1",
    author: "no me acuerdo",
    type: "manga",
    category: "comedia",
    rating: 3.7,
    pages: 123,
    year: 333,
    language: ["Español Latino", "Japones"],
    description: "Una historia de dulces",
    cover: "../../assets/img/manga/dame-dol.jfif",
    link: "https://jkanime.net",
  },
  {
    id: 9,
    title: "Munou na Nana",
    author: "Looseboy",
    artist: "Iori Furuya",
    type: "manga",
    category: [
      "drama",
      "horror",
      "sobrenatural",
      "vida-escolar",
      "psicologico",
      "shounen",
    ],
    year: 2016,
    language: ["Español Latino", "Japones"],
    status: "leyendo",
    lastChapter: 322,
    rating: 3.9,
    description:
      "Es el año 20XX. La tierra ha sido asediada por monstruos llamados “enemigos de la humanidad”. En orden para detenerlos, escuelas especiales compuestas por adolescentes con poderes extraordinarios fueron inauguradas. Estas personas se llegaron a conocer como los talentosos, que tienen habilidades que desafían las reglas de la realidad. Entre estos superpoderosos estaba un intruso, alguien que fue enviada a una de estas escuelas sin tener ninguna habilidad especial.",
    cover: "../../assets/img/manga/munou-na-nana.jpg",
    link: "https://www.kumanga.com/manga/1116/munou-na-nana",
  },

  {
    id: 10,
    title: "Urasekai Picnic",
    author: "no me acuerdo",
    type: "manga",
    category: "comedia",
    rating: 3.7,
    pages: 123,
    year: 333,
    language: ["Español Latino", "Japones"],
    description: "Una historia de dulces",
    cover: "../../assets/img/manga/urasekai-picnic.jpg",
    link: "https://jkanime.net",
  },
  {
    id: 11,
    title: "Ruri Dragon",
    author: "Masaoki Shindo",
    type: "manga",
    category: "comedia",
    rating: 3.7,
    pages: 123,
    year: 333,
    language: ["Español Latino", "Japones"],
    description: "Una historia de dulces",
    cover: "../../assets/img/manga/ruri-dragon.jpg",
    link: "https://jkanime.net",
  },
  {
    id: 12,
    title: "Tower Dungeon",
    author: "Nihei Tsutomu",
    artist: "Nihei Tsutomu",
    type: "manga",
    category: ["comedia", "accion", "aventura", "fatansia"],
    year: 2023,
    language: ["Español Latino", "Ingles"],
    status: "Leyendo",
    lastChapter: 26,
    rating: 3.8,
    language: ["Español Latino", "Japones"],
    description:
      "The setting is a certain kingdom. In order to save the kidnapped princess of the kingdom, the Kingsguard squadron challenges the Dragon Tower, a gigantic structure floating in the middle of the sky, but they are blocked by powerful demons. A provocation is made by a neighboring village to replenish the injured personnel, and when a young man is sent to the tower, the wheel of fate begins to turn.",
    cover: "../../assets/img/manga/tower-dungeon.jfif",
    link: "https://mangadex.org/title/b05918e4-fb1a-4b10-a919-eaecf00fd7dd/tower-dungeon",
  },
  {
    id: 13,
    title: "Ki ni Natteru Hito ga Otoko Janakatta",
    author: "no me acuerdo",
    type: "manga",
    category: "comedia",
    rating: 3.7,
    pages: 123,
    year: 333,
    language: ["Español Latino", "Japones"],
    description: "Una historia de dulces",
    cover: "../../assets/img/manga/ki-ni-natteru.jfif",
    link: "https://manhwa-latino.com/manga/ki-ni-natteru-hito-ga-otoko-janakatta/",
  },
  {
    id: 14,
    title: "Kowloon Generic Romance",
    author: "no me acuerdo",
    type: "manga",
    category: "comedia",
    rating: 3.7,
    pages: 123,
    year: 333,
    status: "por-leer",
    language: ["Español Latino", "Japones"],
    description: "Una historia de dulces",
    cover: "../../assets/img/manga/kowloon-generic.jfif",
    link: "https://manhwa-latino.com/manga/kowloon-generic-romance/",
  },
  {
    id: 15,
    title: "Imasara desu ga, Osananajimi o Suki ni Natteshimaimashita",
    author: "no me acuerdo",
    type: "manga",
    category: "comedia",
    rating: 3.7,
    pages: 123,
    year: 333,
    language: ["Español Latino", "Japones"],
    description: "Una historia de dulces",
    cover: "../../assets/img/manga/imasara-desu-ga.jfif",
    link: "https://manhwa-latino.com/manga/imasara-desu-ga-osananajimi-wo-suki-ni-natte-shimaimashita/",
  },
  {
    id: 16,
    title: "Akatsuki no Yona",
    author: "no me acuerdo",
    type: "manga",
    category: "comedia",
    rating: 3.7,
    pages: 123,
    year: 2024,
    language: ["Español Latino", "Japones"],
    description: "Una historia de dulces",
    cover: "../../assets/img/manga/akatsuki-no-yona.jfif",
    link: "https://manhwa-latino.com/manga/imasara-desu-ga-osananajimi-wo-suki-ni-natte-shimaimashita/",
  },
  {
    id: 17,
    title: "Fire Ring",
    type: "one-shot",
    category: ["comedia", "drama", "romance", "vida escolar"],
    author: "Kenta SK",
    status: "terminado",
    rating: 4.7,
    pages: 123,
    year: 2024,
    description:
      "Podrías leer mi manga? Una simple pregunta que puede cambiar la vida de alguien. ¿Que tan grande son tus sueños? ¿¡Cuanto eres capaz de hacer para lograrlos!? La pasión y los sueños no se desvaneces y prevalecen ante la incertidumbre y el peor de los destinos como un aro de fuego que es capaz de rodear la tierra. ",
    cover: "../../assets/img/manga/fire-ring.jfif",
    link: "https://lectortmo.vip/manga-chapter/fire-ring-cap-1/",
  },
  {
    id: 18,
    title: "Lector Omniciente",
    type: "manwha",
    category: ["drama", "romance", "vida escolar"],
    author: "Kenta SK",
    status: "leyendo",
    rating: 4.7,
    pages: 123,
    year: 2024,
    description:
      "Podrías leer mi manga? Una simple pregunta que puede cambiar la vida de alguien. ¿Que tan grande son tus sueños? ¿¡Cuanto eres capaz de hacer para lograrlos!? La pasión y los sueños no se desvaneces y prevalecen ante la incertidumbre y el peor de los destinos como un aro de fuego que es capaz de rodear la tierra. ",
    cover: "../../assets/img/manga/omniscient-reader.jfif",
    link: "https://lectortmo.vip/manga-chapter/fire-ring-cap-1/",
  },
];

let currentFilter = "todos";
let currentView = "grid";
let searchQuery = "";
let activeBookId = null;

let activeGenres = [];
let activeStatuses = ["todos"];

let selectedType = "todos";

const booksGrid = document.getElementById("booksGrid");
const booksList = document.getElementById("booksList");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const viewBtns = document.querySelectorAll(".view-btn");
const modal = document.getElementById("bookModal");
const modalClose = document.getElementById("modalClose");

function generateStars(rating) {
  let stars = "";
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
  let filtered = books.filter((book) => {
    //Filtro de generos multiples por pildoras
    const categoriasLibro = (
      Array.isArray(book.category) ? book.category : [book.category || ""]
    ).map((c) => c.toLowerCase());

    const matchesGenreFilter =
      activeGenres.length === 0 ||
      activeGenres.every((g) => categoriasLibro.includes(g));

    //Filtro de tipos por tipo
    const tipoLibro = (book.type || "").toLowerCase();
    const matchesType = selectedType === "todos" || tipoLibro === selectedType;

    //estado
    const statusLibro = (book.status || "").toLowerCase();
    const matchesStatus =
      activeStatuses.length === 0 ||
      activeStatuses.includes(statusLibro) ||
      activeStatuses.includes("todos");

    const titulo = (book.title || "").toLowerCase();
    const autor = (book.author || "").toLowerCase();
    const categoriasString = categoriasLibro.join(" ");

    const matchesSearch =
      !searchQuery ||
      titulo.includes(searchQuery) ||
      autor.includes(searchQuery) ||
      categoriasString.includes(searchQuery);

    return matchesGenreFilter && matchesSearch && matchesType && matchesStatus;
  });

  const gridHTML = filtered
    .map(
      (book) => `
        <div class="book-card" onclick="openModal(${book.id})">
            <img src="${book.cover}" alt="${book.title}" class="book-cover" loading="lazy">
            
            <div class="book-type">${book.type}</div>
           
            <div class="book-info">
             
                <h4 class="book-title">${book.title}</h4>

                <div class="book-rating">
                    ${generateStars(book.rating)}
                    <span class="rating-value">${book.rating}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("");

  const listHTML = filtered
    .map(
      (book) => `
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
    `,
    )
    .join("");

  booksGrid.innerHTML =
    gridHTML ||
    '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No se encontraron resultados.</p>';
  booksList.innerHTML =
    listHTML ||
    '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No se encontraron resultados.</p>';
}

function openModal(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (!book) return;

  activeBookId = bookId;

  document.getElementById("modalCover").innerHTML =
    `<img src="${book.cover}" alt= "${book.title}" class="modal-img">`;
  //document.getElementById("modalCategory").textContent = book.category;
  document.getElementById("modalTitle").textContent = book.title;

  const contenedorCatergorias = document.getElementById("modalCategory");

  if (contenedorCatergorias) {
    contenedorCatergorias.innerHTML = "";
    book.category.forEach((category) => {
      contenedorCatergorias.innerHTML += `<span class="category-badge">${category}</span>`;
    });
  }

  document.getElementById("modalAuthor").textContent = book.author;
  document.getElementById("modalRating").innerHTML =
    generateStars(book.rating) +
    `<span class="rating-value">${book.rating}</span>`;
  document.getElementById("modalDescription").textContent = book.description;
  document.getElementById("modalStatus").textContent = book.status;
  document.getElementById("modalYear").textContent = book.year;
  // document.getElementById("modalLanguage").textContent = book.language;
  document.getElementById("modalLastChapter").textContent = book.lastChapter;

  //nueva funcion para redirigir con el enlace
  const linkBoton = document.getElementById("modalLink");
  if (linkBoton) {
    linkBoton.href = book.link;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("btnIncrementOne").addEventListener("click", () => {
  const input = document.getElementById("inputChapter");
  input.value = parseInt(input.value || 0) + 1;
});

document.getElementById("btnActualizar").addEventListener("click", () => {
  if (!activeBookId) return;

  const input = document.getElementById("inputChapter");
  const nuevoCapitulo = parseInt(input.value);

  if (isNaN(nuevoCapitulo) || nuevoCapitulo < 0) {
    alert("Ingrese un numero válido");
    return;
  }

  const book = books.find((b) => b.id === activeBookId);
  if (book) {
    book.lastChapter = nuevoCapitulo;
    document.getElementById("modalLastChapter").textContent = nuevoCapitulo;

    if (typeof renderBooks === "function") renderBooks();
    alert(`!Capítulo guardado con éxito para ${book.title}!`);
  }
});

// Event listeners
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderBooks();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderBooks();
  });
});

viewBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentView = btn.dataset.view;
    if (currentView === "grid") {
      booksGrid.style.display = "grid";
      booksList.style.display = "none";
    } else {
      booksGrid.style.display = "none";
      booksList.style.display = "flex";
    }
  });
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

const genreButtons = document.querySelectorAll(".genre-tag-btn");
genreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const genero = btn.getAttribute("data-genre");
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
      activeGenres.push(genero);
    } else {
      activeGenres = activeGenres.filter((g) => g !== genero);
    }
    renderBooks();
  });
});

const typeTabs = document.querySelectorAll(".type-tab");
const btnType = document.querySelector('.type-tab[data-type="todos"]');
typeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tipoPresionado = tab.getAttribute("data-type").toLowerCase();

    if (tipoPresionado === "todos") {
      typeTabs.forEach((t) => t.classList.remove("active"));
      btnType.classList.add("active");
      selectedType = "todos";
    } else if (selectedType === tipoPresionado) {
      tab.classList.remove("active");
      btnType.classList.add("active");
      selectedType = "todos";
    } else {
      typeTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      selectedType = tipoPresionado;
    }
    renderBooks();
    /*
      document.querySelector(".type-tab.active")?.classList.remove("active");
      tab.classList.add("active");
      let ex = selectedType;
      selectedType = tab.getAttribute("data-type").toLowerCase();
      if (ex === selectedType) {
        selectedType = "todos";
        document.querySelector(".type-tab.active")?.classList.remove("active");
      }

      if (selectedType.length === 0) {
        selectedType = "todos";
        btnType.classList.add("active");
      }
      renderBooks();
    */
  });
});

/*

  const statusButtons = document.querySelectorAll(".status-tab");
  statusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const estado = btn.getAttribute("data-status").toLowerCase();
      btn.classList.toggle("active");

      if (btn.classList.contains("active")) {
        activeStatuses.push(estado);
      } else {
        activeStatuses = activeStatuses.filter((s) => s !== estado);
      }
      renderBooks();
    });
  });
*/

const statusButtons = document.querySelectorAll(".status-tab");
const btnTodos = document.querySelector('.status-tab[data-status="todos"]');
statusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const estado = btn.getAttribute("data-status").toLowerCase();
    if (estado === "todos") {
      statusButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeStatuses = ["todos"];
    } else {
      btnTodos.classList.remove("active");
      activeStatuses = activeStatuses.filter((s) => s !== "todos");
      btn.classList.toggle("active");
      if (btn.classList.contains("active")) {
        activeStatuses.push(estado);
      } else {
        activeStatuses = activeStatuses.filter((s) => s !== estado);
      }

      if (activeStatuses.length === 0) {
        btnTodos.classList.add("active");
        activeStatuses = ["todos"];
      }
    }
    renderBooks();
  });
});

//boton de reset
document.getElementById("btnResetAll").addEventListener("click", () => {
  searchQuery = "";
  selectedType = "todos";
  activeGenres = [];
  activeStatuses = ["todos"];
  document.getElementById("searchInput").value = "";
  document
    .querySelectorAll(".genre-tag-btn, .status-tab, .type-tab")
    .forEach((b) => b.classList.remove("active"));

  const defaultTypeBtn = document.querySelector('.type-tab[data-type="todos"]');
  const defaultStatusBtn = document.querySelector(
    '.status-tab[data-status="todos"]',
  );

  if (defaultStatusBtn) defaultTypeBtn.classList.add("active");

  if (defaultStatusBtn) defaultStatusBtn.classList.add("active");

  renderBooks();
});

// Initialize
renderBooks();
/*
function updateGenreCounters() {
  const genreCounts = {};

  books.forEach((book) => {
    const categorias = Array.isArray(book.category)
      ? book.category
      : [book.category || ""];

    categorias.forEach((cat) => {
      const generoLimpio = cat.trim().toLowerCase();
      if (generoLimpio) {
        genreCounts[generoLimpio] = (genreCounts[generoLimpio] || 0) + 1;
      }
    });
  });

  const genreButtons = document.querySelectorAll(".genre-tag-btn");

  genreButtons.forEach((btn) => {
    const generoAttr = btn.getAttribute("data-genre").toLowerCase();
    const cantidad = genreCounts[generoAttr] || 0;

    if (!btn.hasAttribute("data-original-text")) {
      btn.setAttribute("data-original-text", btn.innerText.trim());
    }

    const textoOriginal = btn.getAttribute("data-original-text");

    btn.innerHTML = `${textoOriginal} <span class="genre-counter-num">(${cantidad})</span>`;
  });
}
*/

function updateFilterCounters() {
  const genreCounts = {};
  const typeCounts = {};
  const statusCounts = {};

  books.forEach((book) => {
    // Conteo de Géneros (Arreglo)
    const categorias = Array.isArray(book.category)
      ? book.category
      : [book.category || ""];
    categorias.forEach((cat) => {
      const generoLimpio = cat.trim().toLowerCase();
      if (generoLimpio)
        genreCounts[generoLimpio] = (genreCounts[generoLimpio] || 0) + 1;
    });

    // Conteo de Tipos (Texto simple)
    const tipoLimpio = (book.type || "").trim().toLowerCase();
    if (tipoLimpio) typeCounts[tipoLimpio] = (typeCounts[tipoLimpio] || 0) + 1;

    // Conteo de Estados (Texto simple, ej: "leyendo")
    const statusLimpio = (book.status || "").trim().toLowerCase();
    if (statusLimpio)
      statusCounts[statusLimpio] = (statusCounts[statusLimpio] || 0) + 1;
  });

  // 3. Helper interno para actualizar los botones en el HTML sin repetir código
  function renderCounterOnButtons(selector, attributeName, countsObject) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach((btn) => {
      const attrValue = btn.getAttribute(attributeName)?.toLowerCase();

      // Si el botón es el comodín "todos", no le ponemos contador numérico
      if (attrValue === "todos") return;

      const cantidad = countsObject[attrValue] || 0;

      if (!btn.hasAttribute("data-original-text")) {
        btn.setAttribute("data-original-text", btn.innerText.trim());
      }
      const textoOriginal = btn.getAttribute("data-original-text");

      btn.innerHTML = `${textoOriginal} <span class="filter-counter-num">(${cantidad})</span>`;
    });
  }

  // 4. Ejecutamos el helper para cada grupo de botones
  renderCounterOnButtons(".genre-tag-btn", "data-genre", genreCounts);
  renderCounterOnButtons(".type-tab", "data-type", typeCounts);
  renderCounterOnButtons(".status-tab", "data-status", statusCounts);
}

// 🚀 La ejecutas una sola vez al cargar la página
updateFilterCounters();

updateGenreCounters();

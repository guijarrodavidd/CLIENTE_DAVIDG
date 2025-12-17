var sneakers = [
    {
        id: 1,
        brand: "Nike",
        model: "Air Jordan 1 High",
        edition: "Chicago Lost and Found",
        size: "42 EU",
        price: 180,
        image: "https://placehold.co/300x200?text=Jordan+1"
    },
    {
        id: 2,
        brand: "Adidas",
        model: "Yeezy Boost 350 V2",
        edition: "Zebra",
        size: "43 EU",
        price: 230,
        image: "https://placehold.co/300x200?text=Yeezy+350"
    },
    {
        id: 3,
        brand: "New Balance",
        model: "550",
        edition: "White Green",
        size: "41 EU",
        price: 120,
        image: "https://placehold.co/300x200?text=NB+550"
    },
    {
        id: 4,
        brand: "Nike",
        model: "Dunk Low",
        edition: "Panda",
        size: "44 EU",
        price: 110,
        image: "https://placehold.co/300x200?text=Dunk+Panda"
    },
    {
        id: 5,
        brand: "Converse",
        model: "Chuck 70 High",
        edition: "Comme des Garçons",
        size: "40 EU",
        price: 150,
        image: "https://placehold.co/300x200?text=CDG+Converse"
    },
    {
        id: 6,
        brand: "Puma",
        model: "LaMelo Ball MB.02",
        edition: "Rick and Morty",
        size: "45 EU",
        price: 175,
        image: "https://placehold.co/300x200?text=MB.02"
    },
    {
        id: 7,
        brand: "Asics",
        model: "Gel-Lyte III",
        edition: "Sean Wotherspoon",
        size: "42 EU",
        price: 160,
        image: "https://placehold.co/300x200?text=Asics+SW"
    },
    {
        id: 8,
        brand: "Reebok",
        model: "Club C 85",
        edition: "Vintage",
        size: "41 EU",
        price: 90,
        image: "https://placehold.co/300x200?text=Club+C+85"
    },
    {
        id: 9,
        brand: "Nike",
        model: "Air Max 1",
        edition: "Patta Waves",
        size: "43 EU",
        price: 190,
        image: "https://placehold.co/300x200?text=Air+Max+1"
    },
    {
        id: 10,
        brand: "Salomon",
        model: "XT-6",
        edition: "Black/Phantom",
        size: "44 EU",
        price: 180,
        image: "https://placehold.co/300x200?text=Salomon+XT6"
    },
    {
        id: 11,
        brand: "Vans",
        model: "Old Skool",
        edition: "Classic Black",
        size: "42 EU",
        price: 75,
        image: "https://placehold.co/300x200?text=Old+Skool"
    },
    {
        id: 12,
        brand: "Adidas",
        model: "Samba",
        edition: "OG White",
        size: "41 EU",
        price: 100,
        image: "https://placehold.co/300x200?text=Samba+OG"
    },
    {
        id: 13,
        brand: "Nike",
        model: "Air Force 1",
        edition: "Triple White",
        size: "46 EU",
        price: 120,
        image: "https://placehold.co/300x200?text=AF1+White"
    },
    {
        id: 14,
        brand: "Balenciaga",
        model: "Triple S",
        edition: "Clear Sole",
        size: "43 EU",
        price: 950,
        image: "https://placehold.co/300x200?text=Triple+S"
    },
    {
        id: 15,
        brand: "Croc",
        model: "Pollex Clog",
        edition: "Salehe Bembury",
        size: "42 EU",
        price: 85,
        image: "https://placehold.co/300x200?text=Pollex+Clog"
    }
];

let body = document.querySelector("body")
let container = document.createElement("div")
container.className = "container"
body.appendChild(container);

// --- PASO 3: FUNCIÓN PARA LIMPIAR EL CONTENEDOR ---
    function cleanContainer() {
        container.innerHTML = "";
    }
    
let filterDiv = document.createElement("div");
filterDiv.className = "filter-bar";

// Filtro 1: Input para buscar por texto (Modelo)
let searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Buscar modelo...";
searchInput.id = "search-input";

// Filtro 2: Select para Marcas
let brandSelect = document.createElement("select");
brandSelect.id = "brand-select";
// Opción por defecto
let defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.innerText = "Todas las marcas";
brandSelect.appendChild(defaultOption);

// Filtro 3: Input de Precio Máximo
let priceInput = document.createElement("input");
priceInput.type = "number";
priceInput.placeholder = "Precio máx";
priceInput.id = "price-input";

// Botón de Reset
let btnReset = document.createElement("button");
btnReset.innerText = "Limpiar Filtros";

// Añadimos todo al div de filtros y luego al body (antes del container)
filterDiv.appendChild(searchInput);
filterDiv.appendChild(brandSelect);
filterDiv.appendChild(priceInput);
filterDiv.appendChild(btnReset);

// Insertamos la barra de filtros ANTES del contenedor de zapatillas
body.insertBefore(filterDiv, container);

// --- PASO 2: LLENAR EL SELECT DINÁMICAMENTE ---

// 1. Sacamos solo las marcas del array original
const brands = [];
for(let i = 0; i < sneakers.length; i++) {
    // Si la marca no está ya en la lista, la añadimos (para no repetir)
    if(!brands.includes(sneakers[i].brand)) {
        brands.push(sneakers[i].brand);
    }
}

// 2. Creamos los options
for(let i = 0; i < brands.length; i++) {
    let option = document.createElement("option");
    option.value = brands[i];
    option.innerText = brands[i];
    brandSelect.appendChild(option);
}

// --- PASO 4: FUNCIÓN FILTRADORA ---
function filterSneakers() {
    // 1. Capturamos los valores actuales de los inputs
    let textValue = searchInput.value.toLowerCase(); // Pasamos a minúsculas para evitar errores
    let brandValue = brandSelect.value;
    let priceValue = priceInput.value;

    // 2. Filtramos el array
    let filtered = sneakers.filter(function(sneaker) {
        
        // Condición A: El nombre incluye el texto escrito?
        let matchText = sneaker.model.toLowerCase().includes(textValue) || 
                        sneaker.edition.toLowerCase().includes(textValue);
        
        // Condición B: Coincide la marca? (Si es "" significa 'todas')
        let matchBrand = brandValue === "" || sneaker.brand === brandValue;

        // Condición C: El precio es menor o igual al input? (Si está vacío, pasa siempre)
        let matchPrice = priceValue === "" || sneaker.price <= parseFloat(priceValue);

        // Devuelve TRUE solo si cumple LAS TRES condiciones
        return matchText && matchBrand && matchPrice;
    });

    // 3. Limpiamos y redibujamos
    cleanContainer();
    drawAllSneakers(filtered);
    
    // Bonus: Mensaje si no hay resultados
    if(filtered.length === 0) {
        let msg = document.createElement("h2");
        msg.innerText = "No se encontraron zapatillas con esos filtros 😔";
        msg.style.color = "white";
        msg.style.gridColumn = "1 / -1"; // Que ocupe todo el ancho
        msg.style.textAlign = "center";
        container.appendChild(msg);
    }
}

// --- PASO 5: EVENT LISTENERS ---
// Usamos 'input' para que filtre mientras escribes (tiempo real)
searchInput.addEventListener("input", filterSneakers);
brandSelect.addEventListener("change", filterSneakers);
priceInput.addEventListener("input", filterSneakers);

// Botón Reset
btnReset.addEventListener("click", function() {
    // Vaciar inputs
    searchInput.value = "";
    brandSelect.value = "";
    priceInput.value = "";
    // Volver a mostrar todo
    filterSneakers();
});
function drawSneakers(sneaker) {
    let card = document.createElement("div");
    card.className = "card"
    card.id = sneaker.id

    let brand = document.createElement("h1");
    brand.innerText = sneaker.brand

    let model = document.createElement("h2");
    model.innerText = sneaker.model

    let edition = document.createElement("p");
    edition.innerText = sneaker.edition

    let size = document.createElement("p");
    size.innerText = sneaker.size

    let price = document.createElement("p");
    price.innerText = sneaker.price

    let image = document.createElement("img");
    image.src = sneaker.image

    container.appendChild(card);
    card.appendChild(brand);
    card.appendChild(model);
    card.appendChild(edition);
    card.appendChild(size);
    card.appendChild(price);
    card.appendChild(image);
}

function drawAllSneakers(sneakers) {
    for (i=0; i < sneakers.length; i++) {
        drawSneakers(sneakers[i]);
    }
}
drawAllSneakers(sneakers)
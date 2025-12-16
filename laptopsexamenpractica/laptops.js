var laptops = [
    {
        id: 1,
        brand: "Apple",
        model: "MacBook Air M2",
        ram: "8GB",
        processor: "Apple M2",
        disk: "256GB SSD",
        price: 1129
    },
    {
        id: 2,
        brand: "Dell",
        model: "XPS 13 Plus",
        ram: "16GB",
        processor: "Intel Core i7-1360P",
        disk: "512GB SSD",
        price: 1499
    },
    {
        id: 3,
        brand: "HP",
        model: "Spectre x360",
        ram: "16GB",
        processor: "Intel Core i7-1355U",
        disk: "1TB SSD",
        price: 1699
    },
    {
        id: 4,
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon Gen 11",
        ram: "32GB",
        processor: "Intel Core i7-1365U",
        disk: "1TB SSD",
        price: 2100
    },
    {
        id: 5,
        brand: "Asus",
        model: "ROG Zephyrus G14",
        ram: "16GB",
        processor: "AMD Ryzen 9 7940HS",
        disk: "1TB SSD",
        price: 1899
    },
    {
        id: 6,
        brand: "Acer",
        model: "Swift Go 14",
        ram: "16GB",
        processor: "Intel Core i5-1335U",
        disk: "512GB SSD",
        price: 849
    },
    {
        id: 7,
        brand: "Microsoft",
        model: "Surface Laptop 5",
        ram: "8GB",
        processor: "Intel Core i5-1235U",
        disk: "256GB SSD",
        price: 999
    },
    {
        id: 8,
        brand: "Razer",
        model: "Blade 15",
        ram: "16GB",
        processor: "Intel Core i7-13800H",
        disk: "1TB SSD",
        price: 2499
    },
    {
        id: 9,
        brand: "Samsung",
        model: "Galaxy Book3 Pro",
        ram: "16GB",
        processor: "Intel Core i7-1360P",
        disk: "512GB SSD",
        price: 1399
    },
    {
        id: 10,
        brand: "MSI",
        model: "Raider GE78",
        ram: "32GB",
        processor: "Intel Core i9-13980HX",
        disk: "2TB SSD",
        price: 3599
    }
];

let body = document.querySelector("body");
let container = document.createElement("div");
container.className = "container";
body.appendChild(container)

function cleanContainer() {
    container.innerHTML = ""
}

function drawLaptop(laptop) {
    let card = document.createElement("div");
    card.className = "card"
    card.dataset.id = laptop.id
    let brand = document.createElement("h2");
    brand.innerText = laptop.brand;
    let model = document.createElement("h3");
    model.innerText = laptop.model;
    let ram = document.createElement("p");
    ram.innerText = laptop.ram;
    let processor = document.createElement("p");
    processor.innerText = laptop.processor;
    let disk = document.createElement("p");
    disk.innerText = laptop.disk;
    let price = document.createElement("p");
    price.innerText = laptop.price;

    card.appendChild(brand);
    card.appendChild(model);
    card.appendChild(ram);
    card.appendChild(processor);
    card.appendChild(disk);
    card.appendChild(price);

    container.appendChild(card);
}

function drawAllLaptops(laptops) {
    for (let i = 0; i < laptops.length; i++) {
        drawLaptop(laptops[i])
    }
}
drawAllLaptops(laptops);
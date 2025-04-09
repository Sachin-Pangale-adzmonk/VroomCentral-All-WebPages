// cars filter section start
const products = [
  {
    category: "Cars",
    name: "Tata Punch",
    image: "Images/tata-punch-1.jpg",
    description:
      "The Tata Punch has revolutionized the compact SUV segment in India, offering a perfect mix affordability etc...",
    link: "Tata-Punch.html",
    views: "105k+ Views",
  },
  {
    category: "Cars",
    name: "Mercedes-Benz G-Class",
    image: "Images/mercedes-benz-g-class-1.jpg",
    description:
      "The Mercedes-Benz G-Class, also known as the G-Wagon, is an iconic SUV etc...",
    link: "Mercedes-Benz-G-Class.html",
    views: "25k+ Views",
  },
  {
    category: "Cars",
    name: "Audi Q5",
    image: "Images/audi-q5-1.jpg",
    description:
      "The Perfect Blend of Luxury and Performance",
    link: "Audi-Q5.html",
    views: "301k+ Views",
  },
  {
    category: "Cars",
    name: "Tata Nexon",
    image: "Images/tata-nexon-3.jpg",
    description:
      "The Ultimate Compact SUV in India",
    link: "Tata-nexon.html",
    views: "421k+ Views",
  },
  {
    category: "Cars",
    name: "Maruti Suzuki Grand Vitara",
    image: "Images/maruti-suzuki-grand-vitara-1.jpg",
    description:
      "A Premium Hybrid SUV for India",
    link: "Maruti-Suzuki-Grand-Vitara.html",
    views: "380k+ Views",
  },
  {
    category: "Cars",
    name: "Maruti Suzuki Alto K10",
    image: "Images/maruti-suzuki-alto-k10-1.jpg",
    description: "Affordable Compact Hatchback for Every Journey.",
    link: "Maruti-Suzuki-Alto-K10.html",
    views: "895k+ Views",
  },
  {
    category: "Cars",
    name: "Kia Carnival",
    image: "Images/kia-carnival-1.jpg",
    description: "The Ultimate Luxury MPV for Families and Businesses",
    link: "Kia-Carnival.html",
    views: "115k+ Views",
  },
  {
    category: "Bike",
    name: "Upcoming TVS Bike",
    image: "https://via.placeholder.com/100",
    description: "Modern design table lamp.",
    link: "",
    views: "4k+ Views",
  },
];

function displayProducts(filteredProducts) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
    <a href="${product.link}">
      <div id="car" class="content-cards">
      <div class="content-image" style="position: relative">
      <img  src="${product.image}" alt="${product.name}" width="100%"/>
      <span class="view-box">${product.views}</span>
      </div>
      <div class="car-details" style="padding: 16px">
      <h5 style="margin: 0">${product.name}</h5>
      <p style="margin: 0; color: #484848; font-size: 12px">${product.description}</p>
      </div>
      </div>
    </a>
`;
    productList.appendChild(div);
  });
}

function filterProducts(category) {
  // Remove active class from all buttons
  document.querySelectorAll(".article-h-box button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to the clicked button
  if (document.getElementById(category.toLowerCase())) {
    document
      .getElementById(category.toLowerCase())
      .classList.add("active");
  }

  // Get search input value
  const searchValue = document
    .getElementById("search-input")
    .value.toLowerCase();

  // Filter products based on category and search input
  const filtered = products.filter(
    (product) =>
      (category === "all" ||
        product.category.toLowerCase() === category.toLowerCase()) &&
      product.name.toLowerCase().includes(searchValue)
  );

  displayProducts(filtered);
}

// Event listener for search input (filters as you type)
document.getElementById("search-input").addEventListener("input", () => {
  const activeCategory =
    document.querySelector(".article-h-box .active")?.id || "all";
  filterProducts(activeCategory);
});

// Event listener for search button click
document.getElementById("search-button").addEventListener("click", () => {
  const activeCategory =
    document.querySelector(".article-h-box .active")?.id || "all";
  filterProducts(activeCategory);
});

// Ensure all products are shown initially
document.addEventListener("DOMContentLoaded", () => {
  filterProducts("all");
});

// cars filter section end 

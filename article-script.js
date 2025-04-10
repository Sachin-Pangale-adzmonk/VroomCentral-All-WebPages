const ArticleProducts = [
  {
    name: "India are Solving the EV Battery Recycling Problem",
    image: "Images/Battery-Recycling-2.jpg",
    link: "Battery-Recycling.html",
  },
  {
    name: "How India is Pushing EV Adoption",
    image: "Images/EV-4.jpg",
    link: "EV-Adoption.html",
  },
  {
    name: "What’s the Future of Clean Mobility in India?",
    image: "Images/Hydrogen-Electric-2.jpg",
    link: "Hydrogen-Electric.html",
  },
  {
    name: "The Future of EVs in India",
    image: "Images/EVs-Future-2.jpg",
    link: "EVs-Future.html",
  },
  {
    name: "The Future of EV Batteries",
    image: "Images/EV-Batteries-2.jpg",
    link: "EV-Batteries.html",
  },
  {
    name: "Electric Scooters Vs Bikes",
    image: "Images/Electric-Two-Wheelers-1.jpg",
    link: "Electric-Two-Wheelers.html",
  },
];

function displayProducts(filteredArticleProducts) {
  const productList = document.getElementById("article-product-list"); // Corrected ID
  productList.innerHTML = ""; // Clear previous results

  if (filteredArticleProducts.length === 0) {
    productList.innerHTML = "<p>No articles found</p>"; // Show message if empty
    return;
  }

  filteredArticleProducts.forEach((ArticleProduct) => {
    const div = document.createElement("div");
    div.classList.add("article-product");
    div.innerHTML = `
  <a href="${ArticleProduct.link}">
    <div class="content-cards">
      <div class="content-image" style="position: relative">
        <img src="${ArticleProduct.image}" alt="${ArticleProduct.name}" width="100%"/>
      </div>
      <div class="car-details" style="padding: 16px">
        <h5 style="margin: 0">${ArticleProduct.name}</h5>
      </div>
    </div>
  </a>
  `;
    productList.appendChild(div);
  });
}

function filterArticles() {
  const searchValue = document
    .getElementById("article-search-input")
    .value.toLowerCase();
  const filtered = ArticleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchValue)
  );
  displayProducts(filtered);
}

document
  .getElementById("article-search-input")
  .addEventListener("input", filterArticles);
document
  .getElementById("article-search-button")
  .addEventListener("click", filterArticles);

// Show all articles on page load
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(ArticleProducts);
});
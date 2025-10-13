import { topsellers, newarrival, topPicks } from "./productlist.js";

function renderProducts(products, containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = "";

  products.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "col-md-3 col-sm-4 col-6 mb-4";

    card.innerHTML = `
      <div class="card shadow-sm h-100 text-center border-1 rounded-4">
        <img src="${item.image}" class="card-img-top p-3" alt="${item.title}" style="height: 250px; object-fit: contain;">
        <div class="card-body">
          <h6 class="card-title fw-bold" title="${item.title}">${item.title}</h6>
          <p class="text-muted mb-1">Brand: ${item.brand}</p>
          <p class="text-warning">⭐ ${item.rating}</p>
          <button class="btn btn-success w-100 fw-semibold" onclick="viewProduct(${index}, '${containerSelector}')">
            ${item.buttonText}
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Store selected product and redirect
function viewProduct(index, containerSelector) {
  let products;
  switch (containerSelector) {
    case ".tcontainer":
      products = topsellers;
      break;
    case ".ncontainer":
      products = newarrival;
      break;
    case ".tpcontainer":
      products = topPicks;
      break;
    default:
      console.error("Unknown container selector");
      return;
  }

  // Save selected product to localStorage
  localStorage.setItem("selectedProduct", JSON.stringify(products[index]));

  // Redirect to single product page
  window.location.href = "products/singleproductpage.html";
}

// Make it accessible globally (for inline onclick)
window.viewProduct = viewProduct;

// Render all categories
renderProducts(topsellers, ".tcontainer");
renderProducts(newarrival, ".ncontainer");
renderProducts(topPicks, ".tpcontainer");


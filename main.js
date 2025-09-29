import { topsellers, newarrival, topPicks } from "./productlist.js";

function renderProducts(products, containerSelector, cardClass, modalPrefix) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = ""; // avoid duplicates if re-rendered

  products.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "p-3", cardClass);

    const modalId = `${modalPrefix}-modal-${index}`;

    card.innerHTML = `
      <div class="card-subtitle" style="font-weight: bold">${item.brand}</div>
      <div class="card-subtitle" style="font-weight: bold; font-size: 12px">${item.rating}</div>
      <div style="height: auto">
        <img class="card-img-top" src="${item.image}" title="${item.title}" alt="${item.brand}" />
      </div>
      <div class="card-title" style="font-size: 12px; font-weight: bold" title="${item.title}">
        ${item.title}
      </div>
      <button class="border border-black" style="border-radius: 5px" data-bs-toggle="modal" data-bs-target="#${modalId}">
        ${item.buttonText}
      </button>

      <!-- Modal -->
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${item.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row align-items-center">
                <!-- Left: Image -->
                <div class="col-md-6 text-center">
                  <img src="${item.image}" alt="${item.title}" class="img-fluid rounded" />
                </div>
                <!-- Right: Details -->
                <div class="col-md-6">
                  <p><strong>Brand:</strong> ${item.brand}</p>
                  <p><strong>Rating:</strong> ${item.rating}</p>
                  <p><strong>Product:</strong> ${item.title}</p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Render each category with unique modal prefixes
renderProducts(topsellers, ".tcontainer", "top-sellers", "topseller");
renderProducts(newarrival, ".ncontainer", "new-arrival", "newarrival");
renderProducts(topPicks, ".tpcontainer", "top-picks", "toppick");

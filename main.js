import { topsellers, newarrival, topPicks } from "./productlist.js";

function renderProducts(products, containerSelector, cardClass, modalPrefix) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = ""; 

  const body = document.body;

  products.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "p-4","m-0", "m-lg-2", cardClass);

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
    `;

    container.appendChild(card);

    // Create modal separately and append to body
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = modalId;
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${item.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-center">
              <div class="col-md-6 text-center">
                <img src="${item.image}" alt="${item.title}" class="img-fluid rounded" />
              </div>
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
    `;
    body.appendChild(modal);
  });
}


// Render each category with unique modal prefixes
renderProducts(topsellers, ".tcontainer", "top-sellers", "topseller");
renderProducts(newarrival, ".ncontainer", "new-arrival", "newarrival");
renderProducts(topPicks, ".tpcontainer", "top-picks", "toppick");

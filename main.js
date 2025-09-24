import { topsellers } from "./productlist.js";
import { newarrival } from "./productlist.js";
import { topPicks } from "./productlist.js";

const topContainer = document.querySelector(".tcontainer");

topsellers.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card", "p-3", "top-sellers");

  card.innerHTML = `
    <div class="card-subtitle" style="font-weight: bold">${item.brand}</div>
    <div class="card-subtitle" style="font-weight: bold; font-size: 12px">${item.rating}</div>
    <div style="height: auto" ><img class="card-img-top" src="${item.image}" title="${item.title}" alt="${item.brand}" /></div>
    <div class="card-title" style="font-size: 12px; font-weight: bold" title="${item.title}">${item.title}</div>
    <button class="border border-black" style="border-radius: 5px">${item.buttonText}</button>
  `;

  topContainer.appendChild(card);
});

const newContainer = document.querySelector(".ncontainer");

newarrival.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card", "p-3", "new-arrival");

  card.innerHTML = `
    <div class="card-subtitle" style="font-weight: bold">${item.brand}</div>
    <div class="card-subtitle" style="font-weight: bold; font-size: 12px">${item.rating}</div>
    <div style="height: auto" ><img class="card-img-top" src="${item.image}" title="${item.title}" alt="${item.brand}" /></div>
    <div class="card-title" style="font-size: 12px; font-weight: bold" title="${item.title}">${item.title}</div>
    <button class="border border-black" style="border-radius: 5px">${item.buttonText}</button>
  `;

  newContainer.appendChild(card);
});

const tpContainer = document.querySelector(".tpcontainer");

topPicks.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card", "p-3", "top-picks");

  card.innerHTML = `
    <div class="card-subtitle" style="font-weight: bold">${item.brand}</div>
    <div class="card-subtitle" style="font-weight: bold; font-size: 12px">${item.rating}</div>
    <div style="height: auto" ><img class="card-img-top" src="${item.image}" title="${item.title}" alt="${item.brand}" /></div>
    <div class="card-title" style="font-size: 12px; font-weight: bold" title="${item.title}">${item.title}</div>
    <button class="border border-black" style="border-radius: 5px">${item.buttonText}</button>
  `;

  tpContainer.appendChild(card);
});
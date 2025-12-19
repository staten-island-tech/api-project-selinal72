import "./style.css";
const apiUrl = "https://api.nookipedia.com/villagers";
const apiKey = "94692e6f-677f-4348-85fe-6375ae013248";

/* function getData() {
  fetch(apiUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": "94692e6f-677f-4348-85fe-6375ae013248",
      "Accept-Version": "1.7.0",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const list = data;
      console.log("API Response:", list);
      return list;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getData(); */

async function getData() {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-API-KEY": "94692e6f-677f-4348-85fe-6375ae013248",
        "Accept-Version": "1.7.0",
      },
    });
    if (!response.ok) throw new Error(`Error! Status: ${response.status}`);
    const data = await response.json();
    printData(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function printData(data) {
  console.log(data);
  console.log(data[0]);
  data.forEach((villager) => {
    if (villager.name === "Admiral") {
      console.log(villager);
    }
  });
  data.forEach((villager) => inject(villager));
}

getData();

function inject(villager) {
  let dynamicColor = villager.title_color;
  document.querySelector(".card-container").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h1 class="text-[#${dynamicColor}]">${villager.name} is a ${villager.species}</h1>`
  );
}

let villagers = [];
function villagerDetails() {}

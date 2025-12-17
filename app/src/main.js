import "./style.css";
const apiUrl = "https://api.nookipedia.com/villagers";
const apiKey = "94692e6f-677f-4348-85fe-6375ae013248";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

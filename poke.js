async function getData(poke) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

getData("Squirtle");

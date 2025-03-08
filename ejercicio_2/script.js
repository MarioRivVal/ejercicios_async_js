const catchPokemon = () => {
  const randomNum = Math.floor(Math.random() * 151) + 1;
  getData(randomNum);
};

const getData = async (id = 1) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    formatData(data);
  } catch (err) {
    console.error(err);
  }
};

const printData = (data) => {
  document.querySelector(".pokemon-image").src = data.img;
  document.querySelector(".pokemon-name").textContent = data.name;
  document.querySelector(".pokemon-species").textContent = data.species;
  document.querySelector(".pokemon-types").textContent = data.types;
  document.querySelector(".pokemon-abilities").textContent = data.abilities;
  document.querySelector(".pokemon-weight").textContent = data.weight;
  document.querySelector(".pokemon-height").textContent = data.height;
};

const formatData = async (data) => {
  if (data) {
    const formattedData = {
      name: data.name,
      img: data.sprites.front_default,
      species: data.species.name,
      types: data.types.map((type) => type.type.name).join(", "),
      abilities: data.abilities
        .map((ability) => ability.ability.name)
        .join(", "),
      weight: data.weight / 10,
      height: data.height / 10,
    };
    printData(formattedData);
  } else {
    console.log("Could not get pokemon data");
  }
};

document
  .querySelector(".pokemon-button")
  .addEventListener("click", catchPokemon);

getData();

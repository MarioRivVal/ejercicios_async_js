// https://thronesapi.com/api/v2/Characters

const selectEl = document.getElementById("character");
let charactersInfo = [];
let charactersName = [];

const buildOptionEl = (opName) => {
  const optionEl = document.createElement("OPTION");
  optionEl.value = opName;
  optionEl.textContent = opName;

  return optionEl;
};

const printOptionsEl = () => {
  charactersName.forEach((el) => {
    selectEl.insertAdjacentElement("beforeend", buildOptionEl(el));
  });
};

const printCharacterInfo = (character) => {
  document.getElementById("fullname").textContent = character.fullName;
  document.getElementById("family").textContent = character.family;
  document.getElementById("royal").textContent = character.title;
  document.getElementById("char-img").src = character.imageUrl;
};

const getCharacterNames = () => {
  fetch(`https://thronesapi.com/api/v2/Characters`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      charactersInfo = data;
      charactersName = data
        .map((el) => el.fullName)
        .sort((a, b) => a.localeCompare(b));

      printOptionsEl();
    })
    .catch((error) => {
      console.error(error);
    });
};

const getCharacterInfo = (e) => {
  const name = e.target.value;
  const character = charactersInfo.filter((el) => el.fullName === name).at(0);

  if (!character) return;
  printCharacterInfo(character);
};

selectEl.addEventListener("change", (e) => getCharacterInfo(e));

getCharacterNames();

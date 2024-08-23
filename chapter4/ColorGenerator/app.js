const colorInput = document.querySelector(".color-input");
const typesContainer = document.querySelector(".types");
const direction = document.querySelector(".direction");
const change = document.querySelector(".change");
const generate = document.querySelector(".generate");
const colorsContainer = document.querySelector(".colorsContainer");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");

const types = ["color", "background-color", "background"];
const directions = ["right", "top", "left", "bottom"];

let typeCheck = "";
let directionCheck = "";

// rendering options
const renederTypes = () => {
  types.map((t, i) => {
    typesContainer.innerHTML += `
     <option value=${t}>${t}</option>
    `;
  });

  directions.map((d) => {
    direction.innerHTML += `
     <option  value=${d}>to ${d}</option>
    `;
  });
};

// types container
typesContainer.addEventListener("change", (e) => {
  const selectedIndex = e.target.selectedIndex;
  const selectedOption = e.target.options[selectedIndex];
  typeCheck = selectedOption.value;

  if (typeCheck === "background") {
    direction.classList.add("flex");
    direction.classList.remove("hidden");
    colorsContainer.classList.add("flex");
    colorsContainer.classList.remove("hidden");
  } else {
    direction.classList.add("hidden");
    direction.classList.remove("flex");
    colorsContainer.classList.add("hidden");
    colorsContainer.classList.remove("flex");
  }
});

// direction container
direction.addEventListener("change", (e) => {
  const selectedIndex = e.target.selectedIndex;
  const selectedOption = e.target.options[selectedIndex];
  directionCheck = selectedOption.value;
});

change.classList.add("hidden");

const generateBTN = () => {
  change.classList.remove("hidden");

  if (typeCheck === "background") {
    change.style.background = `linear-gradient(to ${directionCheck},${c1.value},${c2.value},${c3.value})`;
    change.innerHTML = `
    <h1 class="text-xl text-white font-thin"><b>${typeCheck}</b>:linear-gradient(to ${directionCheck},${c1.value},${c2.value},${c3.value})</h1>
`;
  } else {
    change.innerHTML = `
      <h1 class="text-xl text-white font-thin"><b>${typeCheck}</b>: ${colorInput.value}</h1>
      `;
    change.style.backgroundColor = colorInput.value;
  }
};

generate.addEventListener("click", generateBTN);

renederTypes();

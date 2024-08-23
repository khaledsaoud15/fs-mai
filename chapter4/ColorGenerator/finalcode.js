const colorInput = document.querySelector(".color-input");
const typesContainer = document.querySelector(".types");
const direction = document.querySelector(".direction");
const change = document.querySelector(".change");

const types = ["color", "background-color", "background"];

let typeCheck = "";

const renederTypes = () => {
  types.map((t, i) => {
    typesContainer.innerHTML += `
     <option value=${t}>${t}</option>
    `;
  });
};

typesContainer.addEventListener("change", (e) => {
  const selectedIndex = e.target.selectedIndex;
  const selectedOption = e.target.options[selectedIndex];
  typeCheck = selectedOption.value;
  change.style.backgroundColor = colorInput.value;
  change.innerHTML = `
            <h1 class="text-xl text-white font-thin"><b>${typeCheck}</b>: ${colorInput.value}</h1>
    `;
  if (typeCheck === "background") {
    direction.classList.add("flex");
    direction.classList.remove("hidden");
    
  } else {
    direction.classList.add("hidden");
    direction.classList.remove("flex");
  }
});

renederTypes();

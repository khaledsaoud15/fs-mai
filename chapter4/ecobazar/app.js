const productsList = document.querySelector("#products");
const shopCart = document.querySelector("#shopCart");
const total = document.querySelector("#total");
const totalCart = document.querySelector("#totalCart");
const count = document.querySelector("#count");
const topCount = document.querySelector("#top-count");
const shop = document.querySelector("#shop");
const del = document.querySelector("#del");
const mainCart = document.querySelector("#mainCart");
const gridContainer = document.querySelector("#gridDeals");
const gridContainer1 = document.querySelector("#gridBest");
const gridContainer2 = document.querySelector("#gridSeller");

total.textContent = `$${0}`;
totalCart.textContent = `$${0}`;

// tersem wash eadna comme produits f la page
const renderProducts = () => {
  products.map((p) => {
    productsList.innerHTML += `
            <div class="flex flex-col gap-2 w-full h-fit  border rounded-lg shadow-lg">
            <img src=${p.img} alt=${p.title} class="w-full h-[30vh] object-cover"/>
            <div class="flex flex-col gap-1 p-4">
            <h2 class="text-lg font-thin">${p.title}</h2>
            <div class="flex items-center justify-between">
            <p class="text-base font-bold">$${p.price}</p>
            <img onclick=addToCart(${p.id}) class="h-5 cursor-pointer" alt="cart" src="assets/icons/bag.svg"/>
            </div>
            </div>
            </div>
        `;
  });
};

// hadi bash ybano les produits f la page ta3na
renderProducts();

// hadi nkhaloha fargha bash nzidolha les produits le n3ebzou 3ihum bash nzidohom fl la cart
const cart = [];

let quantity = 1;

// hadi bash nzido l la cart ta3na w nshofo ila fiha dejaa ..ila kan fiha produits rah nzidolo quanityt berk w total ta3o
const addToCart = (id) => {
  const product = products.find((p) => p.id === id);
  const inCart = cart.find((c) => c.id === product.id);

  if (inCart) {
    inCart.quantity += 1;
    inCart.total = inCart.quantity * inCart.price;
  } else {
    cart.push({ ...product, quantity });
  }

  // hado bash ndiro update l la cart w les texts taw3na
  renderCart();
  updateText();
};

// hadi li tersem wash kayn dakhel la cart
const renderCart = () => {
  shopCart.innerHTML = "";
  cart.map((c, i) => {
    shopCart.innerHTML += `
       <div class="flex items-center justify-between h-[15vh] p-2 border-b">
          <img src=${c.img} alt="" class="h-full" />
          <div class="flex flex-col mr-auto">
            <h3 class="font-medium">${c.title}</h3>
            <p class="text-gray-600">
              1kg x <span class="font-medium text-black">$${c.total}</span>
            </p>
          </div>
          <p class="cursor-pointer" onclick=deleteItem(${i}) >X</p>
        </div>
    `;
  });

  calcTotal();
};

// hadi te7seb total ta3na ta3 kamel les produits li dakhle la cart
const calcTotal = () => {
  const cartTotal = cart.reduce((acc, item) => acc + item.total, 0);
  total.textContent = `$${Math.round(cartTotal)}`;
  totalCart.textContent = `$${Math.round(cartTotal)}`;
};

// w hadi tsuprimi item blwahed 3la hsab la position ta3o bl index
const deleteItem = (index) => {
  cart.splice(index, 1);
  renderCart();
  updateText();
};

const updateText = () => {
  count.textContent = cart.length + " products";
  topCount.textContent = `Shopping Card (${cart.length})`;
};

updateText();

shop.addEventListener("click", () => {
  mainCart.classList.add("right-0");
  mainCart.classList.remove("-right-3/4");
});
del.addEventListener("click", () => {
  mainCart.classList.add("-right-3/4");
  mainCart.classList.remove("right-0");
});

const renderGridDeals = () => {
  gridDeals.map((i) => {
    gridContainer.innerHTML += `
       
            <div
              class="flex items-center gap-3 w-full h-[15vh] border px-2 rounded-md shadow-lg"
            >
              <img
                src=${i.img}
                alt="apple"
                class="w-1/5 h-fit object-cover"
              />
              <div class="flex flex-col w-fit">
                <span class="text-green-500 text-xs">${i.title}</span>
                <h2 class="font-medium text-sm">$14.99</h2>
                <div class="flex items-center">
                  <img src="assets/icons/Vector.svg" alt="" />
                  <img src="assets/icons/Vector-1.svg" alt="" />
                  <img src="assets/icons/Vector-2.svg" alt="" />
                  <img src="assets/icons/Vector-3.svg" alt="" />
                  <img src="assets/icons/Vector-4.svg" alt="" />
                </div>
              </div>
            </div>
    `;
  });
  gridBest.map((i) => {
    gridContainer1.innerHTML += `
       
            <div
              class="flex items-center gap-3 w-full h-[15vh] border px-2 rounded-md shadow-lg"
            >
              <img
                src=${i.img}
                alt="apple"
                class="w-1/5 h-fit object-cover"
              />
              <div class="flex flex-col w-fit">
                <span class="text-green-500 text-xs">${i.title}</span>
                <h2 class="font-medium text-sm">$14.99</h2>
                <div class="flex items-center">
                  <img src="assets/icons/Vector.svg" alt="" />
                  <img src="assets/icons/Vector-1.svg" alt="" />
                  <img src="assets/icons/Vector-2.svg" alt="" />
                  <img src="assets/icons/Vector-3.svg" alt="" />
                  <img src="assets/icons/Vector-4.svg" alt="" />
                </div>
              </div>
            </div>
    `;
  });
  gridSeller.map((i) => {
    gridContainer2.innerHTML += `
       
            <div
              class="flex items-center gap-3 w-full h-[15vh] border px-2 rounded-md shadow-lg"
            >
              <img
                src=${i.img}
                alt="apple"
                class="w-1/5 h-fit object-cover"
              />
              <div class="flex flex-col w-fit">
                <span class="text-green-500 text-xs">${i.title}</span>
                <h2 class="font-medium text-sm">$14.99</h2>
                <div class="flex items-center">
                  <img src="assets/icons/Vector.svg" alt="" />
                  <img src="assets/icons/Vector-1.svg" alt="" />
                  <img src="assets/icons/Vector-2.svg" alt="" />
                  <img src="assets/icons/Vector-3.svg" alt="" />
                  <img src="assets/icons/Vector-4.svg" alt="" />
                </div>
              </div>
            </div>
    `;
  });
};

renderGridDeals();




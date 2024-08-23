const ham = document.querySelector(".hamburger");
let toggler = false;

const toggleMenue = () => {
  toggler = !toggler;
  toggleHamburger(toggler);
  toggleLinks(toggler, window.innerWidth);
};

ham.addEventListener("click", toggleMenue);

const container = document.querySelector(".swiper-wrapper");

const renderData = () => {
  knives.map((n) => {
    container.innerHTML += `
                 <div
              class="swiper-slide w-full h-auto flex flex-col gap-2 p-4 border border-gray-300 rounded-md shadow-md"
            >
              <img
                src=${n.img}
                alt=""
                class="w-full h-fit object-cover"
              />
              <h1 class="font-bold text-base mt-auto">${n.title}</h1>
              <div class="flex items-center w-full justify-between">
                <p class="text-base font-bold">
                  Price: <span class="font-thin">$${n.price}</span>
                </p>
                <p class="text-base font-bold">
                  Reviews: <span class="font-thin">${n.reviews}<b>k</b></span>
                </p>
              </div>
              <button onclick=addToCart(${n.id}) class="bg-black text-white rounded-md mt-auto mb-3 py-2">
                Buy Now
              </button>
            </div>
                `;
  });
};

renderData();

// Create the cart
const cart = [];
let counter = 1;

const addToCart = (id) => {
  const item = knives.find((n) => n.id === id);
  const itemInCart = cart.find((el) => el.id === item.id);

  if (!itemInCart) {
    cart.push({ ...item, quantity: counter, total: item.price * counter });
  } else {
    itemInCart.quantity += counter;
    itemInCart.total = itemInCart.quantity * item.price;
    counter++;
  }
  counter = 1;
  console.log(cart);
};

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");

const verifyUserAndLogin = () => {
  const user = users.find((u) => u.email === email.value);

  if (user) {
    error.classList.remove("hidden");
    error.classList.add("text-green-500");
    if (user.password !== password.value) {
      error.textContent = "incorrect email or password ";
      error.classList.add("text-red-500");
    }
  }

  email.value = "";
  password.value = "";
};

btn.addEventListener("click", verifyUserAndLogin);

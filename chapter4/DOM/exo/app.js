const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const username = document.querySelector(".username");
const register = document.querySelector(".register");
const container = document.querySelector(".container");

const verifyUserAndLogin = () => {
  const user = usersData.find((u) => u.email === email.value);

  if (user) {
    error.classList.remove("hidden");
    error.classList.add("text-green-500");
    if (user.password !== password.value) {
      error.textContent = "incorrect email or password ";
      error.classList.add("text-red-500");
    }
  } else {
    error.textContent = "Account does not Exist please Register";
    error.classList.remove("hidden");
    error.classList.add("text-red-500");
  }

  if ((btn.textContent === "SIGN UP")) {
    const userNameTest = usersData.find((u) => u.username == username.value);
    const emailTest = usersData.find((u) => u.email == email.value);
    if (userNameTest || emailTest) {
      error.textContent = "The Username or the Email already exist !";
      error.classList.add("text-red-500");
    } else {
      usersData.push({
        _id: Math.random().toString(36).slice(2, 8),
        username: username.value,
        email: email.value,
        password: password.value,
      });
      error.textContent = "Registered successfuly";
      error.classList.remove("text-red-500");
      error.classList.add("text-green-500");
    }
  }

  username.value = "";
  email.value = "";
  password.value = "";
};

btn.addEventListener("click", verifyUserAndLogin);

register.addEventListener("click", () => {
  document.querySelector("h1").textContent = "SIGN UP";
  btn.textContent = "SIGN UP";
  username.classList.remove("hidden");
  container.style.height = "80%";
  error.textContent = ""
});

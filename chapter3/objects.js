const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function checkManySkills(users) {
  let count = 0;
  let maxUserSkill = "";
  for (let user in users) {
    if (users[user].skills.length > count) {
      count = users[user].skills.length;
      maxUserSkill = user;
    }
  }

  return maxUserSkill;
}

console.log(checkManySkills(users));

function countLoggedIn(users) {
  let loggedCount = 0;
  let pointCount = 0;
  for (let user in users) {
    if (users[user].isLoggedIn) {
      loggedCount++;
    }

    if (users[user].points >= 50) {
      pointCount++;
    }
  }

  return { loggedCount, pointCount };
}

console.log(countLoggedIn(users));

function checkMern(users) {
  let mernUsers = "";
  for (let u in users) {
    if (
      users[u].skills.includes("React") &&
      users[u].skills.includes("MongoDB") &&
      users[u].skills.includes("Node") &&
      users[u].skills.includes("Express")
    ) {
      mernUsers += u + " ";
    }
  }

  return mernUsers;
}

console.log(checkMern(users));

function setName(users, user, u) {
  const newUsers = { ...users };
  newUsers[user] = u;

  return newUsers;
}

const newUser = {
  email: "lhaj@paul.com",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "Node",
    "Python",
    "VBA",
    "C++",
    "VB6",
    "Dotnet",
    "Wireshark",
    "Blender",
    "UnrealEngine6",
    "Java",
    "C",
    "Assembly",
  ],
  age: 120,
  isLoggedIn: true,
  points: 150 ** 150,
};

console.log(setName(users, "lhaj", newUser));

const usersArray = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

function signUp(email, usersArray, user) {
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].email === email) {
      return "This email is already registered";
    }
  }

  const newUser = {
    id: Math.random().toString(36).slice(2, 8),
    username: user.username,
    email: email,
    password: user.password,
    createdAt: new Date().toISOString().slice(0, 10),
    isLoggedIn: false,
  };

  usersArray.push(newUser);

  return usersArray;
}

const u = {
  username: "John",
  password: "123456",
};

console.log(signUp("alex@alex.com", usersArray, u));
console.log(signUp("khaled@gmail.com", usersArray, u));
console.log(signUp("khaled@gmail.com", usersArray, u));

function logIn(email, usersArray) {
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].email !== email) {
      continue;
    }
    if (usersArray[i].email === email) {
      if (usersArray[i].isLoggedIn === true) {
        return "Already logged in";
      }
      usersArray[i].isLoggedIn = true;
      return "logged in succefully";
    }
  }
  return "account does not exist or invalid email";
}

console.log(logIn("khaled@gmail.com", usersArray));
console.log(logIn("thomas@thomas.com", usersArray));
console.log(logIn("thomas@thomas.", usersArray));
console.log(logIn("martha@martha.com", usersArray));

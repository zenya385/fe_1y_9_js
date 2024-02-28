const heroes = [
  {
    hero: "Aragorn",
    weapon: "Andúril",
    skills: ["Swordsmanship", "Leadership", "Tracking"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKWIYTbXKEZLocWHB1-W7YJgCtPE63NYaAg&usqp=CAU",
  },
  {
    hero: "Legolas",
    weapon: "Bow of the Galadhrim",
    skills: ["Archery", "Swordsmanship", "Agility"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42x-0T51YGCrxbKZQbhsyoERYzHjGeE4jHw&usqp=CAU",
  },
  {
    hero: "Gandalf",
    weapon: "Glamdring",
    skills: ["Wizardry", "Staff-fighting", "Wisdom"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMeZQlldJPmrcIQP-mWf0P4Iwt2vGuoZlLA&usqp=CAU",
  },
  {
    hero: "Frodo Baggins",
    weapon: "Sting",
    skills: ["Stealth", "Courage", "Resilience"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnsHhI7FcRqwTwDLhB3xBVRx8bfNQSxMW-DA&usqp=CAU",
  },
  {
    hero: "Gollum",
    weapon: "His bare hands",
    skills: ["Stealth", "Climbing", "Survival"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8G_iAS6Crtfr4-Vno4SwvQbVyl00OQEzTw&usqp=CAU",
  },
];

console.log(heroes);

const heroesJson = JSON.stringify(heroes);

console.log(heroesJson);

console.log(JSON.stringify(heroesJson));

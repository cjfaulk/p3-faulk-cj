class LunchGenerator {

  constructor(name, photo) {
    this.name = name;
    this.photo = photo;
  }

  colorChange() {
    document.getElementById("header").display.backgroundColor = "blue";
  }

  showResult() {
    document.getElementById("lunch-name").innerHTML = this.name;
    document.getElementById("lunch-photo").src = this.photo;
  }
};

let lunch = [ // Array of Lunches
  ["Sushi", "img/sushi.jpeg"],
  ["Burger", "img/burger.jpeg"],
  ["Cheese Board", "img/cheeseboard.jpeg"],
  ["Grilled Cheese", "img/grilledcheese.jpeg"],
  ["Lo Mein", "img/lomein.jpeg"],
  ["Nachos", "img/nachos.jpeg"],
  ["Pizza", "img/pizza.jpeg"],
  ["Salad", "img/salad.jpeg"],
  ["Spaghetti", "img/spaghetti.jpeg"],
  ["Sub", "img/sub.jpeg"],
  ["Tacos", "img/taco.jpeg"],
];

function random_item() { // Randomizing Function
  return lunch[Math.floor(Math.random() * lunch.length)];
}

const currentLunch = random_item();
export const lunchGenerator = new LunchGenerator(currentLunch[0], currentLunch[1]);

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

class LunchGenerator {

  constructor(name, photo) {
    this.name = name;
    this.photo = photo;
  }

  colorChange() {
    document.getElementById("button").addEventListener('click', ()=>{
      document.getElementsByTagName("h2")[0].classList.toggle("color-change");
      document.getElementsByTagName("p")[0].classList.toggle("color-change");
    });
  }


  showResult() {
    document.getElementById('button').addEventListener('click', ()=>{
      const currentLunch = random_item();
    document.getElementById("lunch-name").innerHTML = currentLunch[0];
    document.getElementById("lunch-img").src = currentLunch[1];
    });
  }
};

export const lunchGenerator = new LunchGenerator(currentLunch[0], currentLunch[1]);

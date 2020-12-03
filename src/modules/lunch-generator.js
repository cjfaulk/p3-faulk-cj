class LunchGenerator {

  constructor(menu, name, photo) {
    this.menu = menu;
    this.name = name;
    this.photo = photo;
  }

  randomizeLunches() {
    function randomize() {
      return lunch[Math.floor(Math.random() * lunch.length)];
    };

    let lunch = [
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
  }

  showResult() {
    let lunchName = lunch[0][0];
    let lunchPhoto = lunch[0][1];
  }

}

export const lunchGenerator = new LunchGenerator('Menu:', "", "");

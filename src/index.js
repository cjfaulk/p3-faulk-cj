import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';
import { footer } from './modules/footer';

class App {

  constructor() {
    this.renderTemplate();
    lunchGenerator.showResult();
    // lunchGenerator.colorChange();
  }

  renderTemplate() {
    const template = `
      <header id="header">
        <h1>${header.title}</h1>
        <img src="${header.logoGif}"/>
      </header>

      <div id="lunch-content">
        <main>
          <h2>Today's Menu:</h2>
          <h3 id="lunch-name">${lunchGenerator.name}</h3>
          <img id="lunch-img" src="${lunchGenerator.photo}">
        </main>

        <footer>
          <p>${footer.caption}</p>
          <button onclick=${lunchGenerator.showResult()}>Button</button>
          <a href="index.html">${footer.button}</a>

        </footer>
      </div>
    `;

    document.body.innerHTML = template;
  }
}

new App;

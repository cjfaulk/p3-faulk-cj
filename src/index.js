import { header } from './modules/header';

import { footer } from './modules/footer';

class App {

  constructor() {
    this.renderTemplate();
  }

  renderTemplate() {
    const template = `
      <header>
        <h1>${header.title}</h1>
        <img src="${header.logoGif}"/>
      </header>

      <div id="lunch-content">
        <main>
          <h2></h2>
          <h3></h3>
        <main>

        <footer>
          <p>${footer.caption}</p>
          <button>${footer.button}</button>
        <footer>
      <div>
    `;

    document.body.innerHTML = template;
  }
}

new App;

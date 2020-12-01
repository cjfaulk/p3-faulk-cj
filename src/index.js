import { header } from './modules/header';

class App {

  constructor() {
    this.renderTemplate();
  }

  renderTemplate() {
    const template = `
      <h1>${header.title}</h1>
      <p>${header.logoGif}</p>
    `;

    document.body.innerHTML = template;
  }
}

new App;

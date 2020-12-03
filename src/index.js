import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';
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
          <h2>${lunchGenerator.menu}</h2>
          <h3 id="lunch-name">${lunchGenerator.name}</h3>
          <img id="lunch-photo" src="${lunchGenerator.photo}">
        <main>

        <footer>
          <p>${footer.caption}</p>
          <button><a href="index.html">${footer.button}</a></button>
        <footer>
      <div>
    `;

    document.body.innerHTML = template;
  }
}

new App;

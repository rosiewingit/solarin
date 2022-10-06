let root = null;

const host = "https://rosiewingit.github.io/solarin/theme3/resources/";
const mainPages = [`main-page-1`, `main-page-2`, `main-page-3`, `main-page-4`];

window.onload = () => {
  console.log("ONLOAD");

  root = $("#root");
  mainPages.forEach((page) => {
    const content = new mainContent(page);
    content.init();
  });
};

class mainContent {
  constructor(id) {
    this.id;
    this.imageUrl = `${host}${id}.png`;
  }

  init() {
    root.append(this.createSection());
  }

  createSection() {
    return `
    <section id="${this.id}" class="main-body-content"></section>
    `;
  }

  setBackground() {
    $(`#${this.id}`).css("background-image", `url(${this.imageUrl})`);
  }
}

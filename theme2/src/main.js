let root = null;
let mainContainer = null;

const mainBgUrl = "../resources/index-bg.jpg";
const productsBgUrl = "../resources/products-bg.jpg";
const sustainabilityBgUrl = "../resources/sustainability-bg.jpg";

window.onload = () => {
  console.log("ONLOAD");

  root = $("#root");
  mainContainer = $("#mainContainer");
  // loadMainPage();
};

const loadMainPage = () => {
  root.css("background-image", `url(${mainBgUrl})`);
  mainContainer.html(createMainPage());
};

const createMainPage = () => {
  return `
  <div class="index-text">
    <div class="index-title">Make convenient with new ideas.</div>
    <div class="index-subtitle">새로운 생각, 편리한 생활</div>
  </div>
  <div class="arrow-button-container">
    <span class="arrow-button-text">learn more</span>
    <span class="arrow-button">
      <a href="#"></a>
    </span>
  </div>`;
};

const createAboutUsPage = () => {};

const loadProductsPage = () => {
  root.css("background-image", `url(${productsBgUrl})`);
  mainContainer.html(createProductsPage());
};

const createProductsPage = () => {
  return `
  <div class="index-text">
    <div class="index-title">Technology for Humans</div>
    <div class="index-subtitle">인간을 위한 기술.</div>
  </div>
  <div class="arrow-button-container">
    <span class="arrow-button-text">learn more</span>
    <span class="arrow-button">
      <a href="#"></a>
    </span>
  </div>`;
};

const loadSustainabilityPage = () => {
  root.css("background-image", `url(${sustainabilityBgUrl})`);
  mainContainer.html(createSustainabilityPage());
};

const createSustainabilityPage = () => {
  return `
  <div class="index-text">
    <div class="index-title">Sustainability</div>
    <div class="index-subtitle">미래 성장을 위한 새로운 동력.</div>
  </div>
  <div class="arrow-button-container">
    <span class="arrow-button-text">learn more</span>
    <span class="arrow-button">
      <a href="#"></a>
    </span>
  </div>`;
};

const clickNav1Page = () => {
  console.log("Nav1");
};

const clickNav2Page = () => {
  console.log("Nav2");
};

const clickNav3Page = () => {
  console.log("Nav3");
  loadProductsPage();
};

const clickNav4Page = () => {
  console.log("Nav4");
  loadSustainabilityPage();
};

const clickNav5Page = () => {
  console.log("Nav5");
};

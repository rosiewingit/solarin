let body = null;
let root = null;

const host = "https://rosiewingit.github.io/solarin/theme2/resources/";
const mainBgUrl = `${host}index-bg.jpg`;
const productsBgUrl = `${host}products-bg.jpg`;
const sustainabilityBgUrl = `${host}sustainability-bg.jpg`;

window.onload = () => {
  console.log("ONLOAD");

  body = $("body");
  root = $("#root");
  // loadMainPage();
};

const loadMainPage = () => {
  body.css("background-image", `url(${mainBgUrl})`);
  root.html(createMainPage());
};

const createMainPage = () => {
  return `
  <div class="index-text">
    <div class="index-title">Make convenient with new ideas.</div>
    <div class="index-subtitle">새로운 생각으로 일상을 더 편리하게.</div>
    <div class="index-subtitle">아이디어를 현실로 만드는 기업 솔라인.</div>
  </div>
`;
};

const createAboutUsPage = () => {};

const loadProductsPage = () => {
  body.css("background-image", `url(${productsBgUrl})`);
  root.html(createProductsPage());
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
  body.css("background-image", `url(${sustainabilityBgUrl})`);
  root.html(createSustainabilityPage());
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

const clickProducts = () => {
  showPage(productsPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(productsPageId, "products-page-1");
  content.init();
  content.setPath("Home > <b>Products</b>");

  $.getJSON("./data/products.json", (data) => {
    for (const item in data) {
      const product = new Product(data[item]);
      product.init();
      console.log(data[item]);
    }
  });
};

const clickProductsImage = () => {
  const imageUrl = $("#productsImage").css("background-image");
  $("#imageViewer").removeClass("hidden");
  $("#bigImage").css("background-image", imageUrl);
};

const closeImageViewer = () => {
  $("#imageViewer").addClass("hidden");
};

class Product {
  constructor(info) {
    this.info = info;
  }

  init() {
    this.addProductArticle();
  }

  addProductArticle() {
    $(`#products-page-1`).append(this.createProductArticle());
  }

  createProductArticle() {
    if (!this.info) {
      console.log("Failed to get info");
      return;
    }
    const title = this.info.title;
    const details = this.info.details;
    const model = details.model;
    const description = details.description;
    const purpose = details.purpose;
    const power = details.power;
    const performance = details.performance;
    const size = details.size;
    const media = details.performance;
    return `
    <article class="product-article">
        <div class="products-left">
          <div class="products-left-top">
            <div
              id="productsImage"
              onclick="clickProductsImage()"
              class="products-image"
            ></div>
          </div>
          <div class="products-left-bottom">
            <div class="products-thumbnails">
              <div class="products-thumb products-left-arrow"></div>
              <div class="products-thumb">
                <div id="productsThumb1" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb2" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb3" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb4" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb5" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb6" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb7" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb products-right-arrow"></div>
            </div>
          </div>
        </div>
        <div class="products-right">
          <h1 class="products-title">${title}</h1>
          <table class="products-table">
            <tbody>
              <tr class="products-tr">
                <th>모델명</th>
                <td>${model}</td>
              </tr>
              <tr class="products-tr">
                <th>개요</th>
                <td>${description}</td>
              </tr>
              <tr class="products-tr">
                <th>목적</th>
                <td>${purpose}</td>
              </tr>
              <tr class="products-tr">
                <th>동력</th>
                <td>${power}</td>
              </tr>
              ${this.getArrayElement("성능", performance)}
              ${this.getArrayElement("제원", size)}
            </tbody>
          </table>
        </div>
      </article>
      `;
  }

  getArrayElement(title, array) {
    if (!array) {
      console.log("Invalid array");
      return;
    }
    const rowspan = array.length;
    let result = `
    <tr class="products-tr">
      <th rowspan="${rowspan}">${title}</th>
      <td>
        ${array[0].main}
        <p class="products-td-light">${array[0].sub}</p>
      </td>
    </tr>
    `;

    for (let i = 1; i < rowspan; i++) {
      result += `<tr>
      <td>
        ${array[i].main}
        <p class="products-td-light">${array[i].sub}</p>
      </td>
    </tr>`;
    }

    return result;
  }
}

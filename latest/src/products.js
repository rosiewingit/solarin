const clickProducts = () => {
  showPage(productsPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(productsPageId, "products-page-1");
  content.init();
  content.setPath("Home > <b>Products</b>");

  $.getJSON("./data/products.json", (data) => {
    for (const item in data) {
      const product = new Product(item, data[item]);
      product.init();
      console.log(data[item]);
    }
  });
};

const clickProductsImage = (imageUrl) => {
  $("#imageViewer").removeClass("hidden");
  $("#bigImage").css(
    "background-image",
    `url("./resources/products/${imageUrl}")`
  );
};

const changeMainImage = (id, url) => {
  const imageElement = $(`#${id}`).find(".products-image");
  console.log(id);
  imageElement.css("background-image", `url("./resources/products/${url}")`);
};

const closeImageViewer = () => {
  $("#imageViewer").addClass("hidden");
};

class Product {
  constructor(id, info) {
    this.id = id;
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
    const media = details.media;
    return `
    <article id="${this.id}" class="product-article">
        <div class="products-left">
          <div class="products-left-top">
            <div
              onclick="clickProductsImage('${media[0]}')"
              class="products-image"
              style="background-image: url(./resources/products/${media[0]});"
            ></div>
          </div>
          <div class="products-left-bottom">
            <div class="products-thumbnails">
              <div class="products-thumb products-left-arrow"></div>
              <div class="products-thumb">
                <div class="products-thumb-image"
                style="background-image: url(./resources/products/${media[0]});"
                onclick="changeMainImage('${this.id}','${media[0]}')"
                ></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"
                style="background-image: url(./resources/products/${media[1]});"
                onclick="changeMainImage('${this.id}','${media[1]}')"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"
                style="background-image: url(./resources/products/${
                  media[2]
                });" onclick="changeMainImage('${this.id}','${
      media[2]
    }')"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"></div>
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
              ${this.getArrayElement("개요", description)}
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
    if (!Array.isArray(array)) {
      return `
      <tr class="products-tr">
        <th>${title}</th>
        <td>${array}</td>
      </tr>
      `;
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

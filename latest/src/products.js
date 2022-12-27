const clickDevelopment = () => {
  showPage(productsPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(productsPageId, "products-page-1");
  content.init();
  content.setPath("Home > <b>Products</b>");

  const articles = $("#products-page-1").find("article");

  $.getJSON("./data/products.json", (data) => {
    if (articles.length === Object.keys(data).length) {
      return;
    }
    for (const item in data) {
      const product = new Product(item, data[item]);
      product.init();
    }
  });
};

const clickPrototype = () => {
  showPage(prototypePageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(prototypePageId, "prototype-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Prototype</b>");

  const cards = $("#developmentBody").find(".development-card");

  $.getJSON("./data/prototypes.json", (data) => {
    const hostUrl = data.hostUrl;
    const prototypes = data.prototypes;

    if (cards.length === prototypes.length) {
      return;
    }
    for (const item of prototypes) {
      const prototype = new Prototype(hostUrl, item);
      prototype.init();
    }
  });
};

const changeMainImage = (id, url) => {
  if (url === undefined || url === "undefined" || url === null) {
    return;
  }
  const imageElement = $(`#${id}`).find(".products-image");
  imageElement.css(
    "background-image",
    `url("./resources/images/developments/${url}")`
  );
};

class Product {
  constructor(id, info) {
    this.id = id;
    this.info = info;
  }

  init() {
    this.addProductArticle();
    this.addEvents();
  }

  addProductArticle() {
    $(`#products-page-1`).append(this.createProductArticle());
  }

  addEvents() {
    $(".products-image").click((e) => {
      const imageUrl = e.currentTarget.style.backgroundImage;

      $("body").addClass("scroll-block");
      openImageViewer(imageUrl);
    });
  }

  createProductArticle() {
    if (!this.info) {
      console.log("Failed to get info");
      return;
    }
    const title = this.info.title;
    const details = this.info.details;
    const media = details.media;
    return `
    <article id="${this.id}" class="product-article">
        <div class="products-left">
          <div class="products-left-top">
            <div
              class="products-image"
              style="background-image: url(./resources/images/developments/${
                media[0]
              });"
            ></div>
          </div>
          <div class="products-left-bottom">
            <div class="products-thumbnails">
              <div class="products-thumb products-left-arrow"></div>
              <div class="products-thumb">
                <div class="products-thumb-image"
                style="background-image: url(./resources/images/developments/${
                  media[0]
                });"
                onclick="changeMainImage('${this.id}','${media[0]}')"
                ></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"
                style="background-image: url(./resources/images/developments/${
                  media[1]
                });"
                onclick="changeMainImage('${this.id}','${media[1]}')"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"
                style="background-image: url(./resources/images/developments/${
                  media[2]
                });"
                onclick="changeMainImage('${this.id}','${media[2]}')"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"style="background-image: url(./resources/images/developments/${
                  media[3]
                });"
                onclick="changeMainImage('${this.id}','${media[3]}')"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"style="background-image: url(./resources/images/developments/${
                  media[4]
                });"
                onclick="changeMainImage('${this.id}','${media[4]}')"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"style="background-image: url(./resources/images/developments/${
                  media[5]
                });"
                onclick="changeMainImage('${this.id}','${media[5]}')"></div>
              </div>
              <div class="products-thumb">
                <div class="products-thumb-image"style="background-image: url(./resources/images/developments/${
                  media[6]
                });"
                onclick="changeMainImage('${this.id}','${media[6]}')"></div>
              </div>
              <div class="products-thumb products-right-arrow"></div>
            </div>
          </div>
        </div>
        <div class="products-right">
          <h1 class="products-title">${title}</h1>
          ${this.getTableElement(details)}
        </div>
      </article>
      `;
  }

  getTableElement(details) {
    const mode = details.mode;
    const model = details.model;
    const description = details.description;
    const purpose = details.purpose;
    const power = details.power;
    const performance = details.performance;
    const size = details.size;

    let result = "";

    if (mode === "ready") {
      result += `
      <div class="table-cover">
        <div class="table-cover-wrapper">
          <p class="table-cover-text">페이지 준비중 입니다</p>
        </div>
      </div>`;
    } else {
      result += `<table class="products-table">
      <tbody>
        ${this.getArrayElement("모델명", model)}
        ${this.getArrayElement("개요", description)}
        ${this.getArrayElement("목적", purpose)}
        ${this.getArrayElement("동력", power)}
        ${this.getArrayElement("성능", performance)}
        ${this.getArrayElement("제원", size)}
      </tbody>
    </table>`;
    }

    return result;
  }

  getArrayElement(title, array) {
    if (array === undefined || array === null || array === "") {
      return `<tr></tr>`;
    }
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
        ${this.getSubTextElement(array, 0)}
      </td>
    </tr>
    `;

    for (let i = 1; i < rowspan; i++) {
      result += `<tr>
      <td>
        ${array[i].main}
        ${this.getSubTextElement(array, i)}
      </td>
    </tr>`;
    }

    return result;
  }

  getSubTextElement(array, index) {
    const sub = array[index].sub;
    if (sub === undefined || array === null) {
      return `<p></p>`;
    }
    return `
    <p class="products-td-light">${sub}</p>
    `;
  }
}

class Prototype {
  constructor(hostUrl, item) {
    this.hostUrl = hostUrl;
    this.index = item.index;
    this.name = item.name;
    this.medias = item.medias;
    this.id = `developmentCard${item.index}`;
  }

  init() {
    this.addPrototypeCard();
  }

  addPrototypeCard() {
    $(`#developmentBody`).append(this.createPrototypeCard());

    for (const media of this.medias) {
      if (media.includes("mp4")) {
        continue;
      }
      $(`#image-${this.id}`).append(this.createCardImage(media));
    }
    $(`#image-${this.id} div:first-child`).addClass("active");
  }

  createPrototypeCard() {
    return `
    <div class="development-card">
        <h1 class="development-title">
          <div class="title-bar-top-line"></div>
          ${this.name}
        </h1>
        <div
          id="${this.id}"
          class="carousel slide"
          data-bs-touch="false"
        >
          <div id="image-${this.id}" class="carousel-inner"></div>
          <button
            class="carousel-control-prev prev-carousel"
            type="button"
            data-bs-target="#${this.id}"
            data-bs-slide="prev"
          ></button>
          <button
            class="carousel-control-next next-carousel"
            type="button"
            data-bs-target="#${this.id}"
            data-bs-slide="next"
          ></button>
        </div>
      </div>
    `;
  }

  createCardImage(filename) {
    const TYPE = {
      portrait: "portrait",
      landscape: "landscape",
    };
    if (filename.includes(TYPE.portrait)) {
      return `
      <div class="carousel-item">
        <div>
          <div class="carousel-main-image blur">
            <img
              src="${this.hostUrl}/${this.index}/${filename}"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-main-image development-main-image">
            <img
            src="${this.hostUrl}/${this.index}/${filename}"
            class="d-block h-100 carousel-position"
          />
          </div>
        </div>
      </div>
      `;
    } else {
      return `
      <div class="carousel-item">
        <div>
          <div class="carousel-main-image development-main-image">
            <img
            src="${this.hostUrl}/${this.index}/${filename}"
            class="d-block w-100 carousel-position"
          />
          </div>
        </div>
      </div>
      `;
    }
  }
}

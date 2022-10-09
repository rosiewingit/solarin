const rootPageId = "#root";
const rndcenterPageId = "#rndcenterPage";
const patentPageId = "#patentPage";
const certificationPageId = "#certificationPage";
const productsPageId = "#productsPage";

const pages = [
  rootPageId,
  rndcenterPageId,
  patentPageId,
  certificationPageId,
  productsPageId,
];

const showPage = (pageId) => {
  pages.forEach((page) => {
    if (page === pageId) {
      $(`${page}`).removeClass("hidden");
    } else {
      $(`${page}`).addClass("hidden");
    }
  });
};

class PPTContent {
  constructor(page, id) {
    this.page = page;
    this.id = id;
  }

  init() {
    if ($(`#${this.id}`).length > 0) {
      return;
    }

    switch (this.page) {
      case rndcenterPageId:
        $(this.page).append(this.createRndSection());
        break;
      case patentPageId:
        $(this.page).append(this.createPatentSection());
        break;
      case productsPageId:
        $(this.page).append(this.createProductsSection());
        break;
      case certificationPageId:
        $(this.page).append(this.createCertificationSection());
      default:
        break;
    }
  }

  createRndSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path">Home > Technology > <b>R&D Center</b></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article"></article>
      </section>
      `;
  }

  createPatentSection() {
    return `<section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > Technology > <b>R&D Center</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article">
        <div class="patent-item">
          <div class="row patent-item-row">
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
          </div>
          <div class="row patent-item-row">
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
          </div>
        </div>
      </article>
    </section>`;
  }

  createProductsSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path">Home > Technology > <b>R&D Center</b></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article"></article>
      </section>
      `;
  }

  createCertificationSection() {
    return `<section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > Technology > <b>R&D Center</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article">
        <div class="patent-item">
          <div class="row patent-item-row">
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
          </div>
          <div class="row patent-item-row">
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
          </div>
        </div>
      </article>
    </section>`;
  }

  setPath(path) {
    $(`#${this.id}`).find(".ppt-path").html(path);
  }
}

const rndcenterPageId = "#rndcenterPage";
const patentPageId = "#patentPage";
const certificationPageId = "#certificationPage";

const clickRndCenter = () => {
  $("#root").addClass("hidden");
  $(`${patentPageId}`).addClass("hidden");
  $(`${certificationPageId}`).addClass("hidden");
  $(`${rndcenterPageId}`).removeClass("hidden");
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(rndcenterPageId, "rnd-page-1");
  content.init();
  content.setPath("Home > Technology > <b>R&D Center</b>");
};

const clickPatent = () => {
  $("#root").addClass("hidden");
  $(`${certificationPageId}`).addClass("hidden");
  $(`${rndcenterPageId}`).addClass("hidden");
  $(`${patentPageId}`).removeClass("hidden");
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(patentPageId, "patent-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Patent</b>");
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
      case patentPageId:
        $(this.page).append(this.createPatentSection());
        break;
      case certificationPageId:
        $(this.page).append(this.createCertificationSection());
        break;
      case rndcenterPageId:
        $(this.page).append(this.createRndSection());
      default:
        break;
    }
  }

  createRndSection() {
    return `
    <section id="${this.id}" class="technology-body-content">
      <div class="ppt-path">Home > Technology > <b>R&D Center</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article"></article>
    </section>
    `;
  }

  createPatentSection() {
    return `<section id="${this.id}" class="technology-body-content">
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

  createCertificationSection() {
    return `<section id="${this.id}" class="technology-body-content">
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

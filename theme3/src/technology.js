const clickRndCenter = () => {
  $("#root").addClass("hidden");
  $("#patentPage").addClass("hidden");
  $("#rndcenterPage").removeClass("hidden");
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const rndcenterPageId = "#rndcenterPage";
  const content = new PPTContent(rndcenterPageId, "rnd-page-1");
  content.init();
  content.setPath("Home > Technology > <b>R&D Center</b>");
};

const clickPatent = () => {
  $("#root").addClass("hidden");
  $("#rndcenterPage").addClass("hidden");
  $("#patentPage").removeClass("hidden");

  const rndcenterPageId = "#patentPage";
  const content = new PPTContent(rndcenterPageId, "patent-page-1");
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
    $(this.page).append(this.createSection());
  }

  createSection() {
    return `
    <section id="${this.id}" class="technology-body-content">
      <div class="ppt-path">Home > Technology > <b>R&D Center</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article"></article>
    </section>
    `;
  }

  setPath(path) {
    $(`#${this.id}`).find(".ppt-path").html(path);
  }
}

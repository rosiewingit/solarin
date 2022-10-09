const clickRndCenter = () => {
  $("#root").addClass("hidden");
  $("#technologyPage").removeClass("hidden");
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent("rnd-page-1");
  content.init();
};

class PPTContent {
  constructor(id) {
    this.id = id;
  }

  init() {
    $("#technologyPage").append(this.createSection());
  }

  createSection() {
    return `
    <section id="${this.id}" class="technology-body-content">
      <div class="ppt-path">Home > Technology > R&D Center</div>
      <hr class="ppt-hr" />
    </section>
    `;
  }
}

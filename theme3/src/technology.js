const clickRndCenter = () => {
  $("#root").addClass("hidden");
  $("#technologyPage").removeClass("hidden");

  const content = new PPTContent(page.id);
  content.init();
};

class PPTContent {
  constructor(id) {
    this.id = id;
  }

  init() {
    root.append(this.createSection());
  }

  createSection() {
    return `
    <section id="${this.id}" class="technology-body-content">
    </section>
    `;
  }
}

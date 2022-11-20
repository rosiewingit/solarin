const clickCoreTechnology = () => {
  showPage(coretechnologyPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(coretechnologyPageId, "coretechnology-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Core Technology</b>");

  const cards = $(".core-tech-card");
  for (let card of cards) {
    addCoreTechCardHover($(card));
  }
};

const clickDevelopment = () => {
  showPage(developmentPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(developmentPageId, "development-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Development</b>");
};

const clickRndCenter = () => {
  showPage(rndcenterPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(rndcenterPageId, "rnd-page-1");
  content.init();
  content.setPath("Home > Technology > <b>R&D Center</b>");
};

const clickPatent = () => {
  showPage(patentPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(patentPageId, "patent-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Patent</b>");
};

const clickTechCoreCard1 = () => {
  showPage(coretechnologyDetailPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(
    coretechnologyDetailPageId,
    "core-detail-page-1"
  );
  content.init();
  content.setPath(
    "Home > Technology > Core Technology > <b>용존산소증폭기</b>"
  );
};

const addCoreTechCardHover = (element) => {
  element.hover(
    () => {
      // $(this).animate({});
      element.css("cursor", "pointer");
      element.css("background-blend-mode", "overlay");
      element.css("background-color", "rgba(0, 166, 52, 0.7)");
      element.find(".core-tech-learn-more-btn").removeClass("hidden");
      element.find(".core-tech-subtitle").addClass("hidden");
      element.find(".core-tech-description").removeClass("hidden");
      element.find(".core-tech-bottom").css("padding-top", "10%");
      // $("#navMenuDrop1").css("opacity", "1");
      // $("#navMenuDrop1").css("transition", "0.4s all");
      // $("#navMenuDrop1").css("visibility", "visible");
    },
    () => {
      element.css("cursor", "none");
      element.css("background-blend-mode", "none");
      element.css("background-color", "rgba(0, 166, 52, 0)");
      element.find(".core-tech-learn-more-btn").addClass("hidden");
      element.find(".core-tech-subtitle").removeClass("hidden");
      element.find(".core-tech-description").addClass("hidden");
      element.find(".core-tech-bottom").css("padding-top", "40%");
    }
  );
};

const clickProducts = () => {
  showPage(productsPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(productsPageId, "products-page-1");
  content.init();
  content.setPath("Home > Products > <b>침수선박배수펌프</b>");
};

const clickProductsImage = () => {
  const imageUrl = $("#productsImage").css("background-image");
  $("#imageViewer").removeClass("hidden");
  $("#bigImage").css("background-image", imageUrl);
};

const closeImageViewer = () => {
  $("#imageViewer").addClass("hidden");
};

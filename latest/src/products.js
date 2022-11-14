const clickProducts = () => {
  showPage(productsPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(productsPageId, "products-page-1");
  content.init();
  content.setPath("Home > <b>Products</b>");
};

const clickProductsImage = () => {
  const imageUrl = $("#productsImage").css("background-image");
  $("#imageViewer").removeClass("hidden");
  $("#bigImage").css("background-image", imageUrl);
};

const closeImageViewer = () => {
  $("#imageViewer").addClass("hidden");
};

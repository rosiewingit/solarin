const clickCertification = () => {
  $("#root").addClass("hidden");
  $(`${patentPageId}`).addClass("hidden");
  $(`${rndcenterPageId}`).addClass("hidden");
  $(`${certificationPageId}`).removeClass("hidden");
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(certificationPageId, "certification-page-1");
  content.init();
  content.setPath("Home > PR Center > <b>Certification</b>");
};

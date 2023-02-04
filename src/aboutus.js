const clickOverview = () => {
  showPage(overviewPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(overviewPageId, "overview-page-1");
  content.init();
  content.setPath("Home > About Us > <b>Overview</b>");
};

const clickCeoMessage = () => {
  showPage(ceoMessagePageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(ceoMessagePageId, "ceomessage-page-1");
  content.init();
  content.setPath("Home > About Us > <b>CEO Message</b>");
};

const clickHistory = () => {
  showPage(historyPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(historyPageId, "history-page-1");
  content.init();
  content.setPath("Home > About Us > <b>History</b>");
};

const clickCsr = () => {
  showPage(csrPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(csrPageId, "csr-page-1");
  content.init();
  content.setPath("Home > About Us > <b>CSR</b>");
};

const clickEsg = () => {
  showPage(esgPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(esgPageId, "esg-page-1");
  content.init();
  content.setPath("Home > About Us > <b>ESG</b>");
};

const clickAccess = () => {
  showPage(accessPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(accessPageId, "access-page-1");
  content.init();
  content.setPath("Home > About Us > <b>Access</b>");

  drawMap("mainMap", { lat: 37.4363913419989, lng: 127.17004436645088 });
};
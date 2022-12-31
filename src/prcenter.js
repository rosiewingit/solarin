const clickCertification = () => {
  showPage(certificationPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(certificationPageId, "certification-page-1");
  content.init();
  content.setPath("Home > PR Center > <b>Certification</b>");

  $.getJSON("./data/certifications.json", (data) => {
    const hostUrl = data.hostUrl;
    const certifications = data.certifications;

    const certificationItems = new Certification(
      "certifications",
      hostUrl,
      certifications
    );
    certificationItems.init();
  });
};

const clickNews = () => {
  showPage(newsPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(newsPageId, "news-page-1");
  content.init();
  content.setPath("Home > PR Center > <b>News</b>");
};

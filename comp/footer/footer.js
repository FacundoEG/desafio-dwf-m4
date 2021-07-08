function insertFooter(element) {
  const headerCompEl = document.createElement("header");
  headerCompEl.innerHTML = `<div class="footer-comp">
    <img src="https://raw.githubusercontent.com/FacundoEG/desafio-dwf-m4/main/images/logo.png" class="footer-comp__logo">
    <div class="footer-comp__media-box">
    <a href="https://www.instagram.com/__ansuz/" class="footer-comp__media-box-unit">
    <span class="footer-comp__text">Instagram</span>
    <img src="https://raw.githubusercontent.com/FacundoEG/desafio-dwf-m4/main/images/instagram-vector.png"  class="footer-comp__icon"></a>
    <a class="footer-comp__media-box-unit">
   <span class="footer-comp__text">Linkedin</span>
   <img src="https://raw.githubusercontent.com/FacundoEG/desafio-dwf-m4/main/images/linkedin-vector.png"  class="footer-comp__icon"></a>
    <a href="https://github.com/FacundoEG" class="footer-comp__media-box-unit">
    <span class="footer-comp__text">Github</span>
    <img src="https://raw.githubusercontent.com/FacundoEG/desafio-dwf-m4/main/images/github-vector.png"  class="footer-comp__icon"></a>
   </div>
  </div>`;
  element.appendChild(headerCompEl);
}
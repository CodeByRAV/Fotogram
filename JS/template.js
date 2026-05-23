function getImgTemplate(currentIndex) {
    return `<div class="single_element">
        <header>
        <h2 id="dialog-image-title">${currentTitles[currentIndex]}</h2>
        </header>
        <img class="dialog-img" src="./img/dialog/500kb/${myImg[currentIndex]}" alt="${myAlts[currentIndex]}">
        <footer class="dialog-navigation"> 
        <button onclick="previousImg()" id="previous-img" aria-label="Previous image"><img src="./img/button_left.svg" alt="Arrow left"></button>
        <h3 id="image-counter"
        aria-label="Image ${currentIndex + 1} of ${myImg.length}">
        ${currentIndex + 1}/${myImg.length}
        </h3> 
        <button onclick="nextImg()" id="next-img" aria-label="Next image"><img src="./img/button_right.svg" alt="Arrow right"></button>
        </footer>
        </div>`;
}
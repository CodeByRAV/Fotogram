let myImg = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
]



let currentTitles = [
    "Tunnel vision",
    "Superstar",
    "Job Interview",
    "Purple fit",
    "Ready to go",
    "Masked",
    "The Journal",
    "Living in the clouds",
    "The Observer",
    "Johnny Depp",
    "Fake Autumn",
    "Christmas time",
]

let myAlts = [
    "Man walks on a bridge with his hands in his pockets",
    "Man carries a leather bag while adjusting his sunglasses and walking away from a bench",
    "Man smiles at the camera in a blue shirt and tie",
    "Man with purple shirt sits on stairs in front of columns",
    "Man with purple shirt holds his jacket on his back with two fingers",
    "Man with and Adidas hoodie wears an n95-mask in front of a brick wall",
    "Man sitting on a red metalic chair focused writing into his journal",
    "Man with a Puma hoodie looks off to the distance with river reflecting clouds in the background",
    "Man with sunglasses sits on a stone wall",
    "Johnny Depp look with sunglasses frowns while brushing through his hair",
    "Man with sunglasses wearing a t-shirt with tiger and leafs pattern looks away from the camera",
    "Man with christmas sweater laughs while covering his face",
]

let currentIndex = 0;
let finalImg = myImg.length;


function renderFiltered(currentIndex = index) {
    render()
}


function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = getImgTemplate(currentIndex);

}

function nextImg() {
    if (currentIndex === myImg.length - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }
    render();
}

function previousImg() {
    if (currentIndex <= 0) {
        currentIndex = myImg.length - 1;
    }
    else {
        currentIndex--;
    }
    render();
}


function removeOpenedClass() {
    dialogRef.classList.remove("opened");

}


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


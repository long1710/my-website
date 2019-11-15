var Index = 0;

function Slide(n) {// + 1 -> 1, -1 go back
    Index += n;
    transformSlides(Index);
}

function transformSlides(n) {
    var slide = document.getElementsByClassName('information');
    var rotate = [0,120,240];
    var translate = [0, 500, 500];
    var transform = ["","",""];
    for (i = 0; i < slide.length; i++) {
        transform[i] = "rotateY(" + rotate[i] + "deg)  translateZ(" + translate[i] + "px)";//after insertion I have 3 transform at 3 different location
        console.log("this work");
    }
    if (n > 2) { Index = 0; }
    if (n < 0) { Index = 2; }
    console.log(Index);
    switch (Index) {
        case 0:

            slide[0].style.transform = transform[0];
            slide[1].style.transform = transform[1];
            slide[2].style.transform = transform[2];
            break;
        case 1:
            slide[0].style.transform = transform[1];
            slide[1].style.transform = transform[2];
            slide[2].style.transform = transform[0];
            break;
        case 2:
            slide[0].style.transform = transform[2];
            slide[1].style.transform = transform[0];
            slide[2].style.transform = transform[1];
            break;
        default:
            console.log(-1);
    }
}

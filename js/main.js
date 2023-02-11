let buttonFirstTF = document.querySelector('.change-tf');
let cnt = 0;
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');

let changeColor = () => {
    cnt += 1;
    if(cnt % 3 === 1){
        green.classList.add('hide-bg');
        red.classList.remove('hide-bg');
    }else if(cnt % 3 === 2){
        red.classList.add('hide-bg');
        yellow.classList.remove('hide-bg');
    }else{
        yellow.classList.add('hide-bg');
        green.classList.remove('hide-bg');
    }
};

buttonFirstTF.addEventListener('click', changeColor);

//перебираем все цвета на всех светофорах
let topLeftRed = document.querySelector('.top-left .red');
let topLeftYellow = document.querySelector('.top-left .yellow');
let topLeftGreen = document.querySelector('.top-left .green');

let topRightRed = document.querySelector('.top-right .red');
let topRightYellow = document.querySelector('.top-right .yellow');
let topRightGreen = document.querySelector('.top-right .green');

let bottomLeftRed = document.querySelector('.bottom-left .red');
let bottomLeftYellow = document.querySelector('.bottom-left .yellow');
let bottomLeftGreen = document.querySelector('.bottom-left .green');

let bottomRightRed = document.querySelector('.bottom-right .red');
let bottomRightYellow = document.querySelector('.bottom-right .yellow');
let bottomRightGreen = document.querySelector('.bottom-right .green');

const topLeftRedActive = () => {
    topLeftRed.classList.remove('hide-bg');
    topLeftYellow.classList.add('hide-bg');
    topLeftGreen.classList.add('hide-bg');
};

const topLeftYellowActive = () => {
    topLeftRed.classList.add('hide-bg');
    topLeftYellow.classList.remove('hide-bg');
    topLeftGreen.classList.add('hide-bg');
};

const topLeftGreenActive = () => {
    topLeftRed.classList.add('hide-bg');
    topLeftYellow.classList.add('hide-bg');
    topLeftGreen.classList.remove('hide-bg');
};

const topLeftRedYellowActive = () => {
    topLeftRed.classList.remove('hide-bg');
    topLeftYellow.classList.remove('hide-bg');
    topLeftGreen.classList.add('hide-bg');
};


const topRightRedActive = () => {
    topRightRed.classList.remove('hide-bg');
    topRightYellow.classList.add('hide-bg');
    topRightGreen.classList.add('hide-bg');
};

const topRightYellowActive = () => {
    topRightRed.classList.add('hide-bg');
    topRightYellow.classList.remove('hide-bg');
    topRightGreen.classList.add('hide-bg');
};

const topRightGreenActive = () => {
    topRightRed.classList.add('hide-bg');
    topRightYellow.classList.add('hide-bg');
    topRightGreen.classList.remove('hide-bg');
};

const topRightRedYellowActive = () => {
    topRightRed.classList.remove('hide-bg');
    topRightYellow.classList.remove('hide-bg');
    topRightGreen.classList.add('hide-bg');
};

const bottomLeftRedActive = () => {
    bottomLeftRed.classList.remove('hide-bg');
    bottomLeftYellow.classList.add('hide-bg');
    bottomLeftGreen.classList.add('hide-bg');
};

const bottomLeftYellowActive = () => {
    bottomLeftRed.classList.add('hide-bg');
    bottomLeftYellow.classList.remove('hide-bg');
    bottomLeftGreen.classList.add('hide-bg');
};

const bottomLeftGreenActive = () => {
    bottomLeftRed.classList.add('hide-bg');
    bottomLeftYellow.classList.add('hide-bg');
    bottomLeftGreen.classList.remove('hide-bg');
};

const bottomLeftRedYellowActive = () => {
    bottomLeftRed.classList.remove('hide-bg');
    bottomLeftYellow.classList.remove('hide-bg');
    bottomLeftGreen.classList.add('hide-bg');
};

const bottomRightRedActive = () => {
    bottomRightRed.classList.remove('hide-bg');
    bottomRightYellow.classList.add('hide-bg');
    bottomRightGreen.classList.add('hide-bg');
};

const bottomRightYellowActive = () => {
    bottomRightRed.classList.add('hide-bg');
    bottomRightYellow.classList.remove('hide-bg');
    bottomRightGreen.classList.add('hide-bg');
};

const bottomRightGreenActive = () => {
    bottomRightRed.classList.add('hide-bg');
    bottomRightYellow.classList.add('hide-bg');
    bottomRightGreen.classList.remove('hide-bg');
};

const bottomRightRedYellowActive = () => {
    bottomRightRed.classList.remove('hide-bg');
    bottomRightYellow.classList.remove('hide-bg');
    bottomRightGreen.classList.add('hide-bg');
};


//горит красный на левом верхнем и нижнем правом. Зеленый - на правом верхнем и нижнем левом
const redFirstGroup = () => {
    topLeftRedActive();
    bottomRightRedActive();
    topRightGreenActive();
    bottomLeftGreenActive();
    setTimeout(redYellowFirstGroup, 8 * 1000);
};

//горит красный и желтый на левом верхнем и нижнем правом. Желтый - на правом верхнем и нижнем левом
const redYellowFirstGroup = () => {
    topLeftRedYellowActive();
    bottomRightRedYellowActive();
    topRightYellowActive();
    bottomLeftYellowActive();
    setTimeout(greenFirstGroup, 2 * 1000);
};

//горит зеленый на левом верхнем и нижнем правом. Красный - на правом верхнем и нижнем левом
const greenFirstGroup = () => {
    topLeftGreenActive();
    bottomRightGreenActive();
    topRightRedActive();
    bottomLeftRedActive();
    setTimeout(redYellowSecondGroup, 8 * 1000);
};

//горит красный и желтый на правом верхнем и нижнем левом. Желтый - на левом верхнем и нижнем правом
const redYellowSecondGroup = () => {
    topLeftYellowActive();
    bottomRightYellowActive();
    topRightRedYellowActive();
    bottomLeftRedYellowActive();
    setTimeout(redFirstGroup, 2 * 1000);
};

setTimeout(redFirstGroup, 2 * 1000);



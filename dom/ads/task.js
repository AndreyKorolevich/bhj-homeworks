const rotatorCases = document.querySelectorAll('.rotator__case');
const rotatorCasesArr = [...rotatorCases];
let speed = rotatorCases[0].dataset.speed;
const changeText = () => {
    let numberRotator = rotatorCasesArr.indexOf(document.querySelector('.rotator__case_active'));
    rotatorCases[numberRotator].classList.remove('rotator__case_active');

    if ((numberRotator + 1) === rotatorCasesArr.length) {
        numberRotator = 0;
        const colorSlide = rotatorCases[numberRotator].dataset.color;
        rotatorCases[numberRotator].style.color = colorSlide;
        rotatorCases[numberRotator].classList.add('rotator__case_active');
        speed = rotatorCases[numberRotator].dataset.speed;
    } else {
        const colorSlide = rotatorCases[numberRotator + 1].dataset.color;
        rotatorCases[numberRotator + 1].classList.add('rotator__case_active');
        rotatorCases[numberRotator + 1].style.color = colorSlide;
        speed = rotatorCases[numberRotator + 1].dataset.speed;
        numberRotator = numberRotator + 1;
    }
    timer = setTimeout(changeText, speed)
}

let timer = setTimeout(changeText, speed)
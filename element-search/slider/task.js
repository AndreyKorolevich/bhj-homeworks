const sliderArrow = document.querySelectorAll('.slider__arrow');
const sliderDot = document.querySelectorAll('.slider__dot');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');
const arrSliderDots = [...sliderDots]
let numberSlide = 0;

const showSlide = (slider, number, type) => {  
    if (slider[number] === undefined && number > 0) {
        slider[0].classList.add(`slider__${type}_active`);
        slider[numberSlide].classList.remove(`slider__${type}_active`);
        return
    } else if(slider[number] === undefined) {
        slider[slider.length - 1].classList.add(`slider__${type}_active`);
        slider[numberSlide].classList.remove(`slider__${type}_active`);
        return
    }
    slider[number].classList.add(`slider__${type}_active`);
    slider[numberSlide].classList.remove(`slider__${type}_active`);
}

sliderArrow.forEach(e => e.onclick = (event) => {
    const target = event.target;
    if (target.classList.contains('slider__arrow_next')) {
        showSlide(sliderItems, numberSlide+1, 'item')
        showSlide(sliderDots, numberSlide+1, 'dot');
        numberSlide++;
        if (numberSlide > sliderItems.length - 1) {
            numberSlide = 0;
        }
    } else {
        showSlide(sliderItems, numberSlide-1, 'item');
        showSlide(sliderDots, numberSlide-1, 'dot');
        numberSlide--;
        if (numberSlide < 0) {
            numberSlide = sliderItems.length - 1;
        }
    }
})

sliderDot.forEach(e => e.onclick = (event) => {
    const target = event.target;
    number = arrSliderDots.indexOf(target);
    showSlide(sliderDots, number, 'dot')
    showSlide(sliderItems, number, 'item')
    numberSlide = arrSliderDots.indexOf(target);
})

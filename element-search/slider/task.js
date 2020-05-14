const sliderArrow = document.querySelectorAll('.slider__arrow');
const sliderDot = document.querySelectorAll('.slider__dot');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');
let activeItem = document.querySelector('.slider__item_active');
let activeDot = document.querySelector('.slider__dot_active');
const arrSliderDots = [...sliderDots]
let numberSlide = 0;

const showNexDot = () => {
    if (activeDot.nextElementSibling === null) {
        sliderDots[0].classList.add('slider__dot_active');
        activeDot.classList.remove('slider__dot_active');
        activeDot = sliderDots[0];
        return
    }
    activeDot.nextElementSibling.classList.add('slider__dot_active');
    activeDot.classList.remove('slider__dot_active');
    activeDot = activeDot.nextElementSibling;
}

const showPrevDot = () => {
    if (activeDot.previousElementSibling === null) {
        sliderDots[sliderDots.length-1].classList.add('slider__dot_active');
        activeDot.classList.remove('slider__dot_active');
        activeDot = sliderDots[sliderDots.length-1];
        return
    }
    activeDot.previousElementSibling.classList.add('slider__dot_active');
    activeDot.classList.remove('slider__dot_active');
    activeDot = activeDot.previousElementSibling;
}

const showNextItem = () => {
    if (activeItem.nextElementSibling === null) {
        sliderItems[0].classList.add('slider__item_active');
        activeItem.classList.remove('slider__item_active');
        activeItem = sliderItems[0];
        return
    }
    activeItem.nextElementSibling.classList.add('slider__item_active');
    activeItem.classList.remove('slider__item_active');
    activeItem = activeItem.nextElementSibling;

}

const showPrevItem = () => {
    if (activeItem.previousElementSibling === null) {
        sliderItems[sliderItems.length-1].classList.add('slider__item_active');
        activeItem.classList.remove('slider__item_active');
        activeItem = sliderItems[sliderItems.length-1];
        return
    }
    activeItem.previousElementSibling.classList.add('slider__item_active');
    activeItem.classList.remove('slider__item_active');
    activeItem = activeItem.previousElementSibling;
}

sliderArrow.forEach(e => e.onclick = (event) => {
    const target = event.target;
    if (target.classList.contains('slider__arrow_next')) {
        numberSlide++;
        if(numberSlide > sliderItems.length - 1) {
            numberSlide = 0;
        }
        showNextItem();
        showNexDot();
    } else {
        numberSlide--;
        if(numberSlide < 0) {
            numberSlide = sliderItems.length - 1;
        }
        showPrevItem();
        showPrevDot()
    }
})

sliderDot.forEach(e => e.onclick = (event) => {
    const target = event.target;
    
    target.classList.add('slider__dot_active');
    activeDot.classList.remove('slider__dot_active');
    activeDot = event.target;

    sliderItems[numberSlide].classList.remove('slider__item_active');
    numberSlide = arrSliderDots.indexOf(target);
    sliderItems[numberSlide].classList.add('slider__item_active');
    activeItem = sliderItems[numberSlide];  
})



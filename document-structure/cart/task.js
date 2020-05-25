const cartProducts = document.querySelector('.cart__products');

const createElement = (id,img, count)=> {
    const cartProduct = document.createElement('div');
    const cartProductCount = document.createElement('div');
    const cartProductImage = document.createElement('img');
    const cardRemove = document.createElement('div');

    cartProduct.className = 'cart__product';
    cartProductCount.className = 'cart__product-count';
    cartProductImage.className = 'cart__product-image';
    cardRemove.className = 'card__remove';

    cartProduct.dataset.id = id;
    cartProductImage.src = img;
    cartProductCount.innerText = count;
    cardRemove.innerHTML = '&times;';

    cartProduct.insertAdjacentElement('afterBegin', cartProductImage);
    cartProduct.insertAdjacentElement('beforeEnd', cartProductCount);
    cartProduct.insertAdjacentElement('beforeEnd', cardRemove);
    cartProducts.insertAdjacentElement('afterBegin', cartProduct);
};

const addObjectStorage = (img, count,id ) => {
    let storeValue = {
        img,
        count,
        id,
    };

    let serialStoreValue = JSON.stringify(storeValue);
    localStorage.setItem(id, serialStoreValue);
}

if (localStorage.length !== 0) {
    document.querySelector('.cart').classList.remove('cart__hide');

    for (let localStorageKey in localStorage) {
        const value = JSON.parse(localStorage.getItem(localStorageKey));
        if(value === null) {
            continue
        }
        createElement(value.id,value.img,value.count);
    }
}


const productMinus = (target) => {
    let productQuantity = target.nextElementSibling.innerText;
    if (productQuantity > 1) {
        productQuantity--;
        target.nextElementSibling.innerText = productQuantity;
    }
};

const productPlus = (target) => {
    let productQuantity = target.previousElementSibling.innerText;
    productQuantity++;
    target.previousElementSibling.innerText = productQuantity;
};

const animationAddProduct = (product, img, imgInCart) => {

    let coordImgClone = img.getBoundingClientRect();
    let coordImgInCart = imgInCart.getBoundingClientRect();
    const translateX = coordImgInCart.x - coordImgClone.x;
    const translateY = coordImgInCart.y - coordImgClone.y;
    const imgClone = img.cloneNode();
    product.insertBefore(imgClone, img);
    img.classList.add('object');
    img.style.transform = `translate(${translateX}px, ${translateY}px)`;
    setTimeout(() => {
        img.remove()
    }, 400);
}

const addProduct = (target) => {
    document.querySelector('.cart').classList.remove('cart__hide');
    const product = target.closest('.product');
    const idProduct = product.dataset.id;
    const productCount = +target.parentElement.querySelector('.product__quantity-value').innerText;
    const countCartProducts = cartProducts.querySelectorAll('.cart__product');
    const img = target.closest('.product').querySelector('.product__image');
    const adddressImg = img.src;
    let exitFunction = 0;
    countCartProducts.forEach(element => {
        if (element.getAttribute('data-id') === idProduct) {
            const imgInCart = element.querySelector('.cart__product-image');
            animationAddProduct(product, img, imgInCart);
            let elementProductCount = +element.querySelector('.cart__product-count').innerText;
            const newProductCount = elementProductCount + productCount;
            element.querySelector('.cart__product-count').innerText = newProductCount;

            localStorage.removeItem(idProduct);
            addObjectStorage(adddressImg, newProductCount,idProduct);
            exitFunction = 1;

        }
    });
    if (exitFunction === 1) {
        exitFunction = 0;
        return
    }
    createElement(idProduct,adddressImg,productCount);
    addObjectStorage(adddressImg, productCount,idProduct);
};

const changeProduct = (event) => {
    const target = event.target;
    if (target.classList.contains('product__quantity-control_dec')) {
        productMinus(target);
    } else if (target.classList.contains('product__quantity-control_inc')) {
        productPlus(target);
    } else if (target.classList.contains('product__add')) {
        addProduct(target);
    }
};

const deleteCard = (event) => {
    const target = event.target;
    if (target.classList.contains('card__remove')) {
        target.closest('.cart__product').remove();
        localStorage.removeItem(target.closest('.cart__product').dataset.id);
        if (document.querySelectorAll('.cart__product').length === 0) {
            document.querySelector('.cart').classList.add('cart__hide');
        }
    }
}

document.querySelector('.products').addEventListener('click', changeProduct);
cartProducts.addEventListener('click', deleteCard);
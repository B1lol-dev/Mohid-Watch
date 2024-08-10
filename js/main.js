// Header
const header = document.getElementById('header');

const navbar_collection_open = document.getElementById('navbar_collection_open')
const nav_menu = document.getElementById('nav_menu')

window.addEventListener('scroll', () => {
    let WinByY = window.scrollY;

    if (WinByY > 0) {
        header.style.backgroundColor = 'var(--bg-pr)';
    } else {
        header.style.backgroundColor = '';
    }
});

let nav_menu_open = false

nav_menu.addEventListener('click' , () =>{
    if (!nav_menu_open) {
        navbar_collection_open.style.transform='translateY(0)'
        navbar_collection_open.style.opacity='1'
        header.style.backgroundColor = 'var(--bg-pr)';
        nav_menu_open = true
    } else{
        navbar_collection_open.style.transform=''
        navbar_collection_open.style.opacity=''
        nav_menu_open = false
    }
})

// Prices for recent products
const def_price = 255.00;
const def_not_price = 300.00;

const fr_price = 399.00;
const fr_not_price = 450.00;

const sc_price = 115.00;

const updatePrices = () => {
    document.getElementById('not_price1').innerText = `$${def_not_price.toFixed(2)}`;
    document.getElementById('price1').innerText = `$${def_price.toFixed(2)}`;

    document.getElementById('not_price2').innerText = `$${def_not_price.toFixed(2)}`;
    document.getElementById('price2').innerText = `$${def_price.toFixed(2)}`;

    document.getElementById('not_price3').innerText = `$${def_not_price.toFixed(2)}`;
    document.getElementById('price3').innerText = `$${def_price.toFixed(2)}`;

    document.getElementById('not_price4').innerText = `$${fr_not_price.toFixed(2)}`;
    document.getElementById('price4').innerText = `$${fr_price.toFixed(2)}`;

    document.getElementById('not_price5').innerText = `$${def_not_price.toFixed(2)}`;
    document.getElementById('price5').innerText = `$${def_price.toFixed(2)}`;

    document.getElementById('not_price6').style.display = 'none';
    document.getElementById('price6').innerText = `$${sc_price.toFixed(2)}`;
};

updatePrices();

// Carousel
const carousel1 = document.getElementById('carousel1');
const carousel2 = document.getElementById('carousel2');
const carousel3 = document.getElementById('carousel3');
const carousel4 = document.getElementById('carousel4');
const carousel5 = document.getElementById('carousel5');

const carousel_item1 = document.getElementById('carousel_item1');
const carousel_item2 = document.getElementById('carousel_item2');
const carousel_item3 = document.getElementById('carousel_item3');
const carousel_item4 = document.getElementById('carousel_item4');
const carousel_item5 = document.getElementById('carousel_item5');

carousel1.style.backgroundColor = 'var(--bg-sc)';

carousel1.addEventListener('click', () => {
    carousel_item1.style.marginLeft='0'

    carousel1.style.backgroundColor = 'var(--bg-sc)';
    carousel2.style.backgroundColor = '';
    carousel3.style.backgroundColor = '';
    carousel4.style.backgroundColor = '';
    carousel5.style.backgroundColor = '';

    
    // setTimeout(() => {
    //     carousel_item1.style.display='flex'
    //     carousel_item2.style.display='none'
    //     carousel_item3.style.display='none'
    //     carousel_item4.style.display='none'
    //     carousel_item5.style.display='none'
    // }, 200);
});

carousel2.addEventListener('click', () => {
    carousel_item1.style.marginLeft='calc((5px + 100%) * -1)'

    carousel1.style.backgroundColor = '';
    carousel2.style.backgroundColor = 'var(--bg-sc)';
    carousel3.style.backgroundColor = '';
    carousel4.style.backgroundColor = '';
    carousel5.style.backgroundColor = '';

    
    // setTimeout(() => {
    //     carousel_item1.style.display='none'
    //     carousel_item2.style.display='flex'
    //     carousel_item3.style.display='none'
    //     carousel_item4.style.display='none'
    //     carousel_item5.style.display='none'
    // }, 200);
});

carousel3.addEventListener('click', () => {
    carousel_item1.style.marginLeft='calc((5px + 200%) * -1)'

    carousel1.style.backgroundColor = '';
    carousel2.style.backgroundColor = '';
    carousel3.style.backgroundColor = 'var(--bg-sc)';
    carousel4.style.backgroundColor = '';
    carousel5.style.backgroundColor = '';

    // setTimeout(() => {
    //     carousel_item1.style.display='none'
    //     carousel_item2.style.display='none'
    //     carousel_item3.style.display='flex'
    //     carousel_item4.style.display='none'
    //     carousel_item5.style.display='none'
    // }, 200);
});

carousel4.addEventListener('click', () => {
    carousel_item1.style.marginLeft='calc((5px + 300%) * -1)'

    carousel1.style.backgroundColor = '';
    carousel2.style.backgroundColor = '';
    carousel3.style.backgroundColor = '';
    carousel4.style.backgroundColor = 'var(--bg-sc)';
    carousel5.style.backgroundColor = '';

    // setTimeout(() => {
    //     carousel_item1.style.display='none'
    //     carousel_item2.style.display='none'
    //     carousel_item3.style.display='none'
    //     carousel_item4.style.display='flex'
    //     carousel_item5.style.display='none'
    // }, 200);
});

carousel5.addEventListener('click', () => {
    carousel_item1.style.marginLeft='calc((5px + 400%) * -1)'

    carousel1.style.backgroundColor = '';
    carousel2.style.backgroundColor = '';
    carousel3.style.backgroundColor = '';
    carousel4.style.backgroundColor = '';
    carousel5.style.backgroundColor = 'var(--bg-sc)';

    // setTimeout(() => {
    //     carousel_item1.style.display='none'
    //     carousel_item2.style.display='none'
    //     carousel_item3.style.display='none'
    //     carousel_item4.style.display='none'
    //     carousel_item5.style.display='flex'
    // }, 200);
});








// Shop
const nav_shop = document.getElementById('nav_shop');
const shop_page = document.getElementById('shop_page');
const close_shop = document.getElementById('close_shop');
const body = document.querySelector('body');

let if_shop_open = true;

nav_shop.addEventListener('click', () => {
    if (if_shop_open) {
        shop_page.style.display = 'block';
        if_shop_open = false;
        body.style.overflowY = 'hidden';
    } else {
        shop_page.style.display = 'none';
        if_shop_open = true;
        body.style.overflowY = 'scroll';
    }
});

close_shop.addEventListener('click', () => {
    shop_page.style.display = 'none';
    if_shop_open = true;
    body.style.overflowY = 'scroll';
});




// ChatGPT yordam bergan joyi, lekn nma dganissi cummirkan
// uwancun ozm toldrgan joylarmam bor)

// Toggle heart color and update shop page
const toggleHeart = (heart, card) => {
    const isHeartRed = heart.classList.contains('red');
    if (isHeartRed) {
        heart.classList.remove('red');
        heart.classList.add('white');
        removeFromShopPage(card);
    } else {
        heart.classList.add('red');
        heart.classList.remove('white');
        addToShopPage(card);
    }
};

// Add card to shop page
const addToShopPage = (card) => {
    const shopPage = document.getElementById('shop_page');
    const shop_cards = document.getElementById('shop_cards');

    // Clone and append the card
    const cardClone = card.cloneNode(true);
    cardClone.style.display = 'flex';
    shop_cards.appendChild(cardClone);

    calculateTotal();
};

// Remove card from shop page
const removeFromShopPage = (card) => {
    const shop_cards = document.getElementById('shop_cards');
    const cardToRemove = shop_cards.querySelector(`.card[data-id="${card.dataset.id}"]`);

    if (cardToRemove) {
        shop_cards.removeChild(cardToRemove);
        calculateTotal();
    }
};

// Calculate total price
const calculateTotal = () => {
    let total = 0;
    const shopCards = document.querySelectorAll('#shop_cards .card');
    shopCards.forEach(card => {
        const priceElement = card.querySelector('.card_price');
        if (priceElement) {
            const priceText = priceElement.innerText.replace('$', '').trim();
            const price = parseFloat(priceText);
            if (!isNaN(price)) {
                total += price;
            }
        }
    });
    document.getElementById('shop_total').innerText = `Total: $${total.toFixed(2)}`;
};

// Handle heart click event
const handleHeartClick = (event) => {
    const target = event.target;
    if (!target.classList.contains('card_heart')) return;

    const card = target.closest('.card');
    if (!card) return;

    toggleHeart(target, card);
};

// Add event listeners to hearts in recent_products
const recentProducts = document.querySelector('.recent_products');
if (recentProducts) {
    recentProducts.addEventListener('click', handleHeartClick);
}

// Add event listeners to hearts in shop_page
const shopPage = document.getElementById('shop_page');
if (shopPage) {
    shopPage.addEventListener('click', handleHeartClick);
}

// Initialize shop card prices
const initializeShopCardPrices = () => {
    const shopCards = document.querySelectorAll('#shop_cards .card');
    shopCards.forEach(card => card.style.display = 'none');
    calculateTotal();
};

initializeShopCardPrices();

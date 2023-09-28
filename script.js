'use-strict';


const shopData = [{
  id: 'shirt1',
  image: "images/shirt1.jpg",
  Name: 'Turkey Short sleeves',
  price: 50,
  desc: 'fast delivery',
  rating: '4.5 star'
},
{
  id: 'earphone1',
  image: "images/headphone-black.jpg",
  Name: 'Headphone',
  price: 25,
  desc: 'fast delivery',
  rating: '4 star'
},
{
  id: 'tv1',
  image: "images/tv-1.jpg",
  Name: 'Samsung HD television',
  price: 150,
  desc: 'fast delivery',
  rating: '5 star'
},
{
  id: 'airpod1',
  image: "images/airpod-black.jpg",
  Name: 'Airpod black',
  price: 50,
  desc: 'fast delivery',
  rating: '4 star'
},
{
  id: 'shirt2',
  image: "images/shirt2.jpg",
  Name: 'Turkey Short sleeves',
  price: 50,
  desc: 'out of stock',
  rating: '4.5 star'
},
{
  id: 'glasses1',
  image: "images/glasses.jpg",
  Name: 'Blue light filter Glasses',
  price: 44,
  desc: 'out of stock',
  rating: '4 star'
},
{
  id: 'backpack1',
  image: "images/back-pack.webp",
  Name: 'Addidas backpack',
  price: 54,
  desc: 'fast delivery',
  rating: '4.5 star'
},
{
  id: 'chair1',
  image: "images/chair-1.jpg",
  Name: 'Comfy Sofa',
  price: 80,
  desc: 'fast delivery',
  rating: '5 star'
},

]



const cartItems = []



const btnAddCart = document.querySelector('.btn-add-Cart');
const cartCountEl = document.querySelector('.cart-count');
const myCart = document.querySelector('.cart-container')

 const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const accountBtn = document.querySelector('.account-btn');
const btnloginSignup = document.querySelector('.accounts-btn')
const showAccnt = document.querySelector('.show-account-btn');
const signInBtn = document.querySelector('.btn-sign-in');
const signInForm = document.querySelector('.accounts-log-in');
const signUpBtn = document.querySelector('.btn-sign-up');
const signUpForm = document.querySelector('.accounts-sign-up');
const search = document.querySelector('.search');
const cartContainer = document.querySelector('.cart-contents');
const nav = document.querySelector('.navigation');
const section = document.querySelector('.products')
// btnAddCart.addEventListener('click', e => {



// })

//// SEARCHING FOR PRODUCTS

const filterSearch = (term) => {
  shopData.name

}

search.addEventListener('keyup', e => {

  e.preventDefault()
  const term = search.value;

  filterSearch(term)
  console.log(term);
})


///////
  
let currentItemId = ''
let itemId = document.getElementById(currentItemId);



cartCountEl.textContent = 0

////////Building the shopping cart///

const shop = document.getElementById('shop');

//  generateShop = function(e) {



//   return (shop.innerHTML = shopData.map((i)=>{
//     const {id, Name, image, price, rating, desc} = i;

//     return `
//   <div class="products-cards-1 products-cards-card">
//     <figure class="products-cards-image"><img src="${image}" alt="shirt1" class="img"></figure>
//     <div class="products-cards-desc">
//       <h3 class="heading-3">
//         ${Name}
//       </h3>
//       <h2 class="item-id" id="${id}">${id}</h2>
//       <p class="paragraph products-cards-price">
//         <span class="price">Price</span>
//         <span class="price-dolar"> $ ${price}</span>
//       </p>
// <div class="products-cards-rating">
//   <h4 class="heading-4">
//     Rating
//   </h4>
//   <div class="products-rating-stars 4.5-star">
//     <i class="bi bi-star-fill"></i>
//     <i class="bi bi-star-fill"></i>
//     <i class="bi bi-star-fill"></i>
//     <i class="bi bi-star-fill"></i>
//     <i class="bi bi-star-fill"></i>
    
// </div>
//   </div>
  
//   <div class="products-cards-delstock">
//   <h4 class="products-cards-fastdelivery">
//     Fast delivery
//   </h4>
//   <h4 class="products-cards-fastdelivery products-cards-oos">
//     Out of stock
//   </h4>
//   </div>

//   <button class="btn-addCart"><i class="bi bi-cart4"></i>   <span class="txt-addcart">ADD TO CART</span></button>

//     </div>
//   </div>
  
//   `
//   }).join(''))
 

// };

generateShop = function(e) {
  // Get a reference to the "shop" element
  const shop = document.getElementById('shop');

  // Generate the HTML for the shop items
  shop.innerHTML = shopData.map((i) => {
    const { id, Name, image, price, rating, desc } = i;

    return `
      <div class="products-cards-1 products-cards-card">
        <figure class="products-cards-image"><img src="${image}" alt="shirt1" class="img"></figure>
        <div class="products-cards-desc">
          <h3 class="heading-3">${Name}</h3>
          <h2 class="item-id" id="${id}"></h2>
          <p class="paragraph products-cards-price">
            <span class="price">Price</span>
            <span class="price-dolar"> $ ${price}</span>
          </p>
          <div class="products-cards-rating">
            <h4 class="heading-4 rating-head">Rating</h4>
            <div class="products-rating-stars 4.5-star">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
          </div>
          <div class="products-cards-delstock">
            <h4 class="products-cards-fastdelivery">Fast delivery</h4>
            <h4 class="products-cards-fastdelivery products-cards-oos">Out of stock</h4>
          </div>
          <button class="btn-addCart"><i class="bi bi-cart4"></i><span class="txt-addcart">ADD TO CART</span></button>
        </div>
      </div>
    `;
  }).join('');

  // Get all the "Add To Cart" buttons
  const addToCartButtons = document.querySelectorAll('.btn-addCart');

  // Add a click event listener to each button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Get the text content of the clicked button
      // const buttonText = button.querySelector('.txt-addcart').textContent;
      // console.log(buttonText);
  const itemId = event.target.closest('.products-cards-card').querySelector('.item-id').id;
      // console.log(itemId);
      addToCart(itemId)

    });
  });
};

generateShop();


itemId = document.getElementById(currentItemId);

const openModal = function (e) {
  e.preventDefault();
if (modal.classList != null && modal.classList != undefined ) {
  modal.classList.remove('hidden');
}
  
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};



const openAccountbtn = function(e) {
  e.preventDefault()
  btnloginSignup.classList.remove('hidden')
   modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('btn is working');
}
 
 


const signIn = function(e) {
  e.preventDefault()

  signInForm.classList.remove('hidden')
 modal.classList.remove('hidden');
  overlay.classList.remove('hidden');;
  console.log('sign in works');
}
signInBtn.addEventListener('click', signIn)




const signUp = function(e) {
  e.preventDefault()

  signUpForm.classList.remove('hidden')
 modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('sign in works');
}


 signUpBtn.addEventListener('click', signUp)
 
showAccnt.addEventListener('click', openAccountbtn);



btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.forEach(btn => btn.addEventListener('click', 
function(e) {
   modal.classList.add('hidden');
  overlay.classList.add('hidden');
   signInForm.classList.add('hidden')
   signUpForm.classList.add('hidden')
    btnloginSignup.classList.add('hidden')
}
));


overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



///// adding items to cart

 addToCart = function(itemId) {
const currentItem = itemId;
shopData.forEach((item) => {
  if (item.id === currentItem) {
cartItems.push(item);

const html = `
<li class="cart-content flex">
<img class="products-cards-image img" src="${item.image}" alt=""/>
<h3 class="heading-3">${item.Name}</h3>
<span class="price-dolar"> $${item.price}</span>
<span className="remove-cart">x</span>
</li>
`
cartContainer.innerHTML = html;

// console.log(cartContainer);
// console.log(item.id, currentItem);
  }
})
const cartCount = cartItems.length;
cartCountEl.textContent = cartCount;
}


//// Building the fading effect on the navigation

const hoverHandler = function(e, opacity) {
  if (e.target.classList.contains('navigation-link')) {
    const link = e.target
    const sibling = link.closest('.navigation').querySelectorAll('.naviagtion-link')
    const logo = link.closest('.navigation').querySelector('img')

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
  
}

nav.addEventListener('mouseover', hoverHandler.bind(0.5))
nav.addEventListener('mouseout', hoverHandler.bind(1))

////sticky navigation

const initialCoords = section.getBoundingClientRect()
console.log(initialCoords);

window.addEventListener('scroll', function() {
if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky')
else nav.classList.remove('sticky')
})


// const navHeight = nav.getClientRects().height;
// const stickyNav = function(entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) {nav.classList.add('sticky')
// } else nav.classList.remove('sticky')
// }

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   // rootMargin: `-${navHeight}px`
// })

// headerObserver.observe(nav)





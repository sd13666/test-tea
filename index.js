// let alldivs = document.getElementsByTagName("div");
// alldivs[0].classList.add("dalliv");
// console.log(alldivs);

// let a = document.querySelectorAll("div > div >p");
// a.forEach(e => e.classList.add("div"));
// console.log(a)

// let btn = document.querySelectorAll(".header_flex .contact");
// btn.forEach(e => e.classList.add("active"));
// console.log(btn)

// function addActive (element) {
//     element.classList.toggle("active");
// }

// btn.forEach(e => e.addEventListener("click", function() {addActive(e)}));
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
let menu = [
  {
    title: "Allia Salad",
    description: "Description of the item",
    price: "23.00",
    rating: 4.7,
    wishlist: true,
  },
  {
    title: "Allia Salad",
    description: "Description of the item",
    price: "26.00",
    rating: 4.1,
    wishlist: false,
  },
  {
    title: "Alliadd Salad",
    description: "Description of the item",
    price: "29.00",
    rating: 4.2,
    wishlist: true,
  },
  {
    title: "ddddd Salad",
    description: "Description of the item",
    price: "27.00",
    rating: 4.3,
    wishlist: false,
  },
];

let btn = document.querySelectorAll(".btn_load_more");
let slider = document.querySelectorAll(".slider");

function addWishes(element) {
  slider[0].innerHTML += `<div class="menu_card">
                    <div class="menu_card_content">
                        <div class="manu_cart_whishlist">
                            <img src=${element.wishlist ? "./img/section3/fi-sr-heart.svg" : "./img/section3/fi-br-heart.svg"} alt="wishlist">
                        </div>
                    <div class="menu_card_content_img">
                            <img src="./img/section3/Egg salad.png" alt="salad">
                    </div>
                    <div class="menu_card_content_title">${element.title}</div>
                    <div class="menu_card_content_desc">${element.description}</div>
                    <div class="menu_card_content_bottom_line">
                        <div class="menu_card_content_meal_price">${element.price}</div>
                        <div class="menu_card_content_meal_rating">
                            <img src="./img/section1/fi-sr-star.svg" alt="star">
                            <span>${element.rating}</span>
                    </div>
        </div>
    </div>
</div>
    `;
}

btn.forEach((e) => 
    e.addEventListener("click", function() {
        menu.forEach((item => addWishes(item)))
    })
);

// variables 
let searchForm = document.querySelector(".header .search-form");
let searchBtn = document.querySelector('#search-btn');
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let slides = document.querySelectorAll('.home .slide');


//search btn function
searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

// menu btn function 
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let index = 0;
// function next 
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}
// function prev 
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}


// function deloy 
let products = productsDb;
productsDom = document.querySelector(".box-container")

let productsUi = products.map((item) => {
    return `
    <div class="box">
    <div class="image">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-share"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="${item.imgUrl}">
    </div>
    <div class="content">
        
        <h3>${item.title}</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$20.00 <span>$25.00</span></div>
    </div>
</div>
    `

})

productsDom.innerHTML = productsUi.join("")

// blogs ui 
let blogs = blogsDb;
blogsDom = document.querySelector(".blogs .box-container");

let blogsUi = blogs.map((item) => {
    return `
    <div class="box">
    <div class="image">
        <img src="${item.imgBl}" alt="blog">
    </div>
    <div class="content">
        <h3>blog title goes here...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, inventore?</p>
        <a href="#" class="btn">read more</a>
        <div class="icons">
            <a href="#"> <i class="fas fa-clock"></i> 21st may, 2021 </a>
            <a href="#"> <i class="fas fa-user"></i> by admin </a>
        </div>
    </div>
</div>
    `
})
blogsDom.innerHTML = blogsUi.join("");

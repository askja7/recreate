window.addEventListener('load', setup);

function setup() {
    setUpBurgerNav()
}

function setUpBurgerNav() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    burger.addEventListener('click', e => {
        burger.classList.toggle('open');
        nav.classList.toggle('open');
    })
}

fetch("http://lorastaneva.com/kea-projects/second-semester/cms/recreate/wp-json/wp/v2/backpack?per_page=100")
    .then(res => res.json())
    .then(loopThroughBackpack)

function loopThroughBackpack(backpack) {
    backpack.forEach(backpack => {
        const template = document.querySelector("template").content;
        const copy = template.cloneNode(true);
        copy.querySelector(".img-backpack").src = backpack.image.guid;
        copy.querySelector(".title").textContent = backpack.title.rendered;
        copy.querySelector(".model").innerHTML = backpack.model;
        copy.querySelector(".price").innerHTML = backpack.price;
        copy.querySelector(".color").innerHTML = backpack.color;
        copy.querySelector(".in_stock").innerHTML = backpack.in_stock;
        document.querySelector("main").appendChild(copy)
    })
}








/*

function getData() {
  fetch("http://lorastaneva.com/kea-projects/second-semester/cms/recreate/wp-json/wp/v2/posts")
   .then(res=>res.json())
.then(loopThroughPosts)

function loopThroughPosts(posts){
  posts.forEach(post=>{
    const template = document.querySelector("template").content;s
    const copy = template.cloneNode(true);
    copy.querySelector(".brand").textContent = post.brand.rendered;
    copy.querySelector(".model").innerHTML=post.model.rendered;
      copy.querySelector(".price").innerHTML=post.price.rendered;
      copy.querySelector(".color").innerHTML=post.color.rendered;
      copy.querySelector(".stock").innerHTML=post.stock.rendered;
    document.querySelector("main").appendChild(copy)
  })
} */

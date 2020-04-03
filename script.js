window.addEventListener('load', setup);

function setup(){
    setUpBurgerNav()
}

function setUpBurgerNav(){
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    burger.addEventListener('click', e=> {
        burger.classList.toggle('open');
        nav.classList.toggle('open');
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

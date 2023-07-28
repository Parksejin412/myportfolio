var s = skrollr.init();

let number = document.querySelector('.number');
window.addEventListener("scroll", function () {
    let wScroll = window.pageYOffset;
    console.log(parseInt(wScroll))
    number.innerHTML = parseInt(wScroll)
})


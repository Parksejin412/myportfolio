let currentCookie = document.cookie;
let cookieCheck = currentCookie.indexOf('green');

console.log(cookieCheck)

if(cookieCheck > -1){
    document.querySelector('.notice').style.display = "none";
}else{
    document.querySelector('.notice').style.display = "block";
}

document.querySelector('.hide').addEventListener('click' , () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let setCookie = "CookieName = green;";
        setCookie += "expires" + date.toUTCString();

        document.cookie = setCookie;
})

document.querySelector('.closeBtn').addEventListener('click',function(){
    this.parentElement.style.display="none";
})



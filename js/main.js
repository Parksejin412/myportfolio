/* skrollr.js */
skrollr.init([
  smoothScrolling=true,
]);

/* 메뉴 이동 */
function scrollToPosition(scrollValue) {
  // Smooth scrolling animation
  // You can adjust the duration (e.g., 1000) as needed.
  window.scrollTo({
    top: scrollValue,
    behavior: 'smooth'
  });
}

/* 메인페이지 메뉴 */
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const tabMenu = document.querySelectorAll("#menu li, #menu a");
let isMenuOpen = false; // 메뉴 상태를 저장하는 변수 추가

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    isMenuOpen = true;
    menu.style.height = "100vh";
    menu.style.borderRadius = "0";
    tabMenu.forEach((item) => (item.style.display = "block"));
    showMenuImages(); // 이미지 표시 함수 호출
  } else {
    isMenuOpen = false;
    menu.style.height = "110px";
    menu.style.borderRadius = "0 0 0 100px";
    tabMenu.forEach((item) => (item.style.display = "none"));
  }
});

function showMenuImages() {
  const menuImages = document.querySelectorAll("#menu li .img img");
  if (isMenuOpen) {
    menuImages.forEach((image) => (image.style.opacity = 1));
  } else {
    menuImages.forEach((image) => (image.style.opacity = 0));
  }
}

/* 스킬바 */
let offset = 24500; // 스크롤 데이터 값이 24000일 때 애니메이션 실행
let executed = false;

$(window).scroll(function() {
  let wScroll = $(this).scrollTop();
  console.log(wScroll);
  
  if (wScroll > offset) {
    if (!executed) {
      $('.skill-per').each(function() {
        let $this = $(this);
        let per = $this.attr('per');

        $this.css({ width: per + "%" });
        $({ aniValue: 0 }).animate(
          { aniValue: per },
          {
            duration: 1000,
            step: function() {
              $this.attr("per", Math.ceil(this.aniValue) + "%");
            }
          }
        );
      });
      executed = true;
    }
  }
});


/* 이미지카드 */
$('.img_card').on('click', function () {
  $('.card').toggleClass('flipped');
});

/* 이미지슬라이더 */
let buttons = document.querySelectorAll('button');
let contentWrap = document.querySelectorAll('.contentWrap');
let imgArr = document.querySelectorAll('img');
let title = document.querySelector('h2');
let pageNum = 0;
let totalNum = 0;
totalNum = contentWrap.length// 3 (이미지가 들어있는 묶음)

buttons[0].addEventListener('click',function(){
    preFunc();
})
buttons[1].addEventListener('click',function(){
    nextFunc();
})

function preFunc(){
   if(pageNum>0){
        pageNum--;
   }else{
        pageNum=totalNum -1 ;
   }
    pageSetFunc();
}
function nextFunc(){
    if(pageNum<totalNum -1){
        pageNum++;
   }else{
        pageNum=0;
   }
    pageSetFunc();
}

function pageSetFunc(){
    imgArr.forEach((img)=>{
        img.classList.remove('active');
    })
    contentWrap[pageNum].querySelectorAll('img').forEach((img)=>{
        img.classList.add('active')
    })
}

pageSetFunc();


/* 큐브 */
let rotationX=0;
let rotationY=0;
let cube=document.querySelector('.box-area');

function front(){
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`;
}

function rotateXAxis(n){
    rotationX+=(90*n)
    cube.style.transform=`rotateX(${rotationX}deg) rotateY(0deg)`;
    three.style.transform='rotateX(180deg)';

}
function rotateYAxis(n){
    rotationY+=(90*n)
    cube.style.transform=`rotateX(0deg) rotateY(${rotationY}deg)`;
    three.style.transform='rotateY(180deg)';

}

/* 시계 */
setInterval(function () {
  let today = new Date();

  let dayList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  let dayListEn = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



  let hh = addZero(today.getHours()); //시
  let mm = addZero(today.getMinutes()); //분
  let ss = addZero(today.getSeconds()); //초
  let yy = today.getFullYear();
  let Mm = today.getMonth() + 1;
  let DD = today.getDate();
  let dd = dayListEn[today.getDay()]; //.toUpperCase();

  document.querySelector('#hours').innerHTML = hh;
  document.querySelector('#min').innerHTML = mm;
  document.querySelector('#sec').innerHTML = ss;
  document.querySelector('#year').innerHTML = yy;
  document.querySelector('#month').innerHTML = Mm;
  document.querySelector('#date').innerHTML = DD;
  document.querySelector('#day').innerHTML = dd;

  console.log(ss)

  function addZero(num) {

      return (num < 10 ? "0" + num : '' + num)
  }
}, 1000)

/* 스킬서클 */
$('.chart').easyPieChart({
  //your options goes here
  barColor:'#17d3e6',
  scaleColor:false,
  trackColor:'#373737',
  lineWidth : 15,
  size:180,
  animate:2000,
  lineCap:"butt",
});


let counterDate=$('.circle_box h3');
let executed2=false;

$(window).scroll(function(){
  let $scroll=$(this).scrollTop() + 200;
  let $offset=$('.easypiechart').offset().top;

  if($scroll>$offset){
      pieChart()

      if(!executed2){
          counterDate.each(function(){
              let currrent=$(this);
              let target=currrent.attr('data-rate');// 90 85
              //A.animate({width:100%},시간,이징,끝나는할일)
              //$({변수:초기값}).animate({변수:종료값},{옵션})
               $({rate:0}).animate({rate:target},{
                  duration:2500,
                  progress:function(){//중간중간에 할일
                      let now=this.rate;
                      
                      currrent.text(Math.ceil(now)+"%")
                  }
              })
          })
          executed2=true
      }
     
  }
})

function pieChart(){
  $('.chart').easyPieChart({
      //your options goes here
      barColor:'#17d3e6',
      scaleColor:false,
      trackColor:'#373737',
      lineWidth:15,
      size:180,
      animate:2000,
      lineCap:"butt"
  });

}

/* 타이핑텍스트 */
$(function(){
  $("#first").typed({
    strings: ["이번 페이지에서는 웹퍼블리셔로서<br>제가 보유하고 있는 기술과 능력을 보여 드리려고 합니다.<br>웹접근성에 신경쓴 반응형 웹페이지를 포함하여,<br> 제가 만든 다양한 작업물들을 소개하고 있으니 함께 구경해보세요!"],
    typeSpeed: 80
  });
});


/* tab2 slick */
$('.slide_box').slick({
  dots:true,
  centerMode:true,
  centerPadding:"380px",
});



/* 탭메뉴 */
const tabmenu = document.querySelectorAll('.right_tab > div');
        const leftTabs = document.querySelectorAll('.tab_menu > div[class^="left"]');

        // 초기에 모든 left_tabs을 숨김
        leftTabs.forEach(tab => {
            tab.style.display = 'none';
            $('.slide_box').slick('setPosition');
        });

        // 초기에 left_tab1을 보이도록 설정
        leftTabs[0].style.display = 'block';

        // 메뉴를 클릭하면 해당 메뉴의 탭을 보여주는 함수
        function showTab(index) {
            leftTabs.forEach(tab => {
                tab.style.display = 'none';
            });
            leftTabs[index].style.display = 'block';

            // 선택된 메뉴에 active 클래스 추가
            tabmenu.forEach((menuItem, i) => {
                if (i === index) {
                    menuItem.classList.add('active');
                } else {
                    menuItem.classList.remove('active');
                }
            });
        }

        tabmenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                showTab(index);
                 $('.slide_box').slick('setPosition'); 
            });
        });

//첫 페이지 실행하자마자 보이는 값
document.getElementById('defultOpne').click();


/* 갤러리 박스 */
function openModal(){
  document.getElementById('myModal').style.display='block';
}

function closeModal(){
  document.getElementById('myModal').style.display='none';
}

function plusSlides(n){
  showSlides(slideIndex += n)
}
function currentSlide(n){
  showSlides(slideIndex = n)}

let slideIndex =1;

function showSlides(n){
  let slides = document.getElementsByClassName('mySlides');
  let captionText = document.getElementById('caption');

  if(n>slides.length){
      slideIndex = 1 //12341234...반복
  }
  if(n<1){slideIndex = slides.length}

  for(let i=0; i<slides.length; i++){
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
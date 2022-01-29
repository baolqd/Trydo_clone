document.getElementById("hamburgerOpen").addEventListener("click", openSideNav);
document.getElementById("closeSideNav").addEventListener("click", closeSideNav);





function openSideNav(){
    document.getElementById("side-nav").classList.add("width-full");
}
function closeSideNav(){
    document.getElementById("side-nav").classList.remove("width-full");
}

jQuery('ul.side-nav-con > li a').click(function() {
    jQuery(this).siblings('ul').slideToggle(150);
});
jQuery('ul.side-nav-con > li ul.sub-menu').hide();


//Feedback-part//
var tabLinks = document.querySelectorAll(".feedback-item");
var tabContent =document.querySelectorAll(".feedback-part");

tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
   var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
 
   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + electronic).classList.add("active");
   
   btn.classList.add("active");
}
//increasing numbers on fun facts//

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
      viewed = true;
      $('.value').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}
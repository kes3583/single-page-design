/* Menu
$("#menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
}); */
(function ( $ ) {

}( jQuery ));
$(document).ready(function(){
	$(".main-container").onepage_scroll({
		sectionContainer: "section",
        easing: "ease",
        animationTime: 1000,
        pagination: true,
        updateURL: false,
        keyboard: true,
        beforeMove: null,
        afterMove: null,
        loop: true,
        responsiveFallback: false,
        direction : 'vertical'
	});
});
function load(){
	// $('body').addClass('loaded');
	// $('h1').css('color','#222222');
	var loaded = document.getElementsByTagName("body")[0];
	loaded.className = "loaded";
}

window.onload = function() {
	setTimeout(function(){load()}, 3000);
};

// $(".main-container .page1").heightFull();
// $(window).resize(function() {
//   $(".mainContainer .page1").heightFull();
// });



var menuWrapper = document.querySelector(".menu-wrapper");
var isActive = false;
var hamburgerMenu = document.querySelector(".hamburger-menu");
var prevScrollpos = window.pageYOffset;
//console.log()
window.onscroll = function() {
    scrollFunction();

    /* console.log(currentScrollPos);
    if (currentScrollPos > 20) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      //prevScrollpos = currentScrollPos; */
};

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;
    //console.log(currentScrollPos);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || currentScrollPos > 20){
        document.getElementById("navbar").style.top = "0";
        menuWrapper.classList.add("remove");

    } else {
        document.getElementById("navbar").style.top = "-90px";
        menuWrapper.classList.remove("remove");
    }
}


menuWrapper.onclick = function() {
    //$('.hamburger-menu').toggleClass('animate');
    if (isActive) {
        hamburgerMenu.classList.remove('animate');
        document.getElementById("navbar").style.top = "-90px";
    } else {
        hamburgerMenu.classList.add('animate');
        document.getElementById("navbar").style.top = "0px";
    }

    isActive = !isActive;
}



/* handwriting */
// var text = document.getElementById("text");
// var tl = new TimelineMax({repeat:-1});
// var ease = Linear.easeNone;

/* TweenMax.set(text, {autoAlpha:1});
TweenMax.set("path", {drawSVG:0, stroke:"#fffff"}); */

/* tl.to("#path5", 0.45, {drawSVG:'100%', ease:Sine.easeOut});
tl.to("#path6", 0.75, {drawSVG:'100%', ease:Sine.easeOut});
tl.to("#path7", 1, {drawSVG:'100%', ease:Sine.easeOut});
var myPath = document.getElementById("my-path"),
    segment = new Segment(myPath);

segment.draw("25%", "75% - 10", 1);
*/

// var myPath = document.getElementById("#path5");
// var segment = new Segment(myPath, 200, 400);
// segment.draw("25%", "75%", 1);
/* TweenLite.to("#path5", 1, { strokeDasharray: segment.strokeDasharray('0%', '100%') }); */

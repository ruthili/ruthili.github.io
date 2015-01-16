/**
 * Created by Ruth on 16.01.2015.
 */

/* Fade-In Scrollbar */
window.addEventListener("scroll", function() {
    if (window.scrollY < 570){
       $('.navbar-fixed-top').fadeOut(0);
    }
    else {
        $('.navbar-fixed-top').fadeIn(10);
    }
},false);



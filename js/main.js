$(document).ready(function(){
   $('.owl-carousel').owlCarousel({

      autoplay:true,
      autoplayhoverpause: true,
      autoplaytimeout:100,
      items:3.5,
      nav: true,
      loop:true,
      slideBy:3,
      dots: false,
      responsive:{
         0:{
            items:1,
            nav:false,
            dots:false,
         },
         480:{
            items:1.5,
            nav:true,
            dots: false,
            margin: 30,
      },
         650:{
            items:2,
            nav:true,
            dots: false,
            margin: 30,
         },
         1000:{
            items:2.5,
            nav:true,
            dots:false,
            loop:false,
            margin: 20,
         },
         1200:{
            items:3.5,
            nav:true,
            dots:false,
            loop:false,
            margin: 20,
         }
      }
   })
});
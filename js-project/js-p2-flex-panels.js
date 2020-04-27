const panels = document.querySelectorAll('.panel');
function toggleOpen(){
    console.log('Hello');
    this.classList.toggle('open');
    
}

function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
    
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// This is jaQuery Mathood
// (function ($) {
//     "use strict";
    
//     jQuery(document).ready(function($){
//         // this is off canvs menu on
//         $(".panels").on('click', function(){
//             $(".panel2").addClass("open");
//            // $(".panel-overlay").addClass("open");
//         });
//         // $(".menu-close i.fa, .panel-overlay").on('click', function(){
//         //     $(".panel2").removeClass("open");
//         //     $(".panel-overlay").removeClass("open");
//         // });

//     });

//     jQuery(window).load(function(){

//     });

// }(jQuery));
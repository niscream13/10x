$(function(){
    let header=$("#header");
    let header_top=$("#header-top");
    let headerHeight=header.height();
    let scrollPos=$(window).scrollTop();
    let nav=$("#nav");

    $(window).on("scroll", function(){
        scrollPos=$(this).scrollTop();
        if (scrollPos>headerHeight) {
            header_top.addClass("fixed");
        }
        else {
            header_top.removeClass("fixed");
        }
        console.log(scrollPos);
    });
    $("[data-scroll").on("click",function(event){
        event.preventDefault();
        let elementId=$(this).data('scroll');
        let elementOffset=$(elementId).offset().top;
        console.log(elementId);


        $("html, body").animate({
            scrollTop:elementOffset -70
        });
    });
});
const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".menu-links");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});
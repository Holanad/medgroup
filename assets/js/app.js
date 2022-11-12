// JavaScript Code

const headerLangCurrentElem = document.querySelector('.header-lang');

headerLangCurrentElem.addEventListener('click', () => {
    document.querySelector('.header-lang-inner').parentElement.classList.toggle('active')
})
// jQuery function
$(document).ready(function() {
    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header').toggleClass('active');
            $('.header-info').toggleClass('active');
            
            if($('.header').hasClass('active')) {
                $('html').addClass('hidden');
            } else {
                $('html').removeClass('hidden');
            }
        });
    };
    headerBurger();
    function scrollLink() {
        $(".manufactures-line__link").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
            }, 1500);
            return false;
        });
    };
    scrollLink()
});
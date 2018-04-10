/* Navigation on Home Page */
let clicked = false;
const topLine = document.querySelector('.navigation__icon-top');
const middleLine = document.querySelector('.navigation__icon-middle');
const bottomLine = document.querySelector('.navigation__icon-bottom');
const navLinks = document.getElementsByClassName('navigation__box-link');
const navBg = document.querySelector('.navigation__box-background');
const navBox = document.querySelector('.navigation__box');

document.querySelector('.navigation__btn').onclick = iconTransition;

function iconTransition () {

    if (clicked === false) {
        setTimeout(() => {
            navBox.style.pointerEvents='auto';
        }, 500);
        
        middleLine.style.backgroundColor = 'transparent';
        Object.assign(topLine.style, {transform:'rotate(135deg)', top: '3rem', left: '3rem'} );
        Object.assign(bottomLine.style, {transform:'rotate(-135deg)', top: '3rem', left: '3rem'});
        for (i = 0 ; i<=4 ; i++) {
            navLinks[i].classList.toggle('activeNav');
        }
        navBg.classList.toggle('activeNavBg');
        Object.assign(navBg.style, {transition: '.1s'});

        clicked = true;

    } else if (clicked === true) {
        navBox.style.pointerEvents='none';
        middleLine.style.backgroundColor = '#fff';
        Object.assign(topLine.style, {transform:'rotate(0) translate(0.5rem, -1rem)', top: '2.8rem', left: '2.35rem'} );
        Object.assign(bottomLine.style, {transform:'rotate(0) translate(0.5rem, -1rem)', top: '4.8rem', left: '2.35rem'});
        for (i = 0 ; i<=4 ; i++) {
            navLinks[i].classList.toggle('activeNav');
        }
        navBg.classList.toggle('activeNavBg');
        Object.assign(navBg.style, {transitionDelay: '.35s'});

        clicked = false;
    }
}
$('.jq-wp-2').waypoint(function(direction){
    $('.navigation__box-background').css('backgroundColor', '#f7f7df');
}, {
    offset: '-20%'
});

$('.jq-wp-3').waypoint(function(direction){
    $('.navigation__box-background').css('backgroundColor', '#888e91');
}, {
    offset: '20%'
});

$('.jq-wp-3').waypoint(function(direction){
    $('.work__box-1').css({'transform': 'translateX(0)', 'opacity': '1', 'transitionDelay': '0s'});
    $('.work__box-2').css({'transform': 'translateX(0)', 'opacity': '1', 'transitionDelay': '.2s'});
    $('.work__box-3').css({'transform': 'translateX(0)', 'opacity': '1', 'transitionDelay': '.4s'});
    $('.work__box-4').css({'transform': 'translateX(0)', 'opacity': '1', 'transitionDelay': '.6s'});
    $('.work__box-5').css({'transform': 'translateX(0)', 'opacity': '1', 'transitionDelay': '.8s'});
    $('.work__box-6').css({'transform': 'translateX(0)', 'opacity': '1', 'transitionDelay': '1s'});
  

}, {
    offset: '20%'
});

$('.jq-wp-4').waypoint(function(direction){
    $('.work__box-1').css({'transform': 'translateX(-30rem)', 'opacity': '0', 'transitionDelay': '1s'});
    $('.work__box-2').css({'transform': 'translateX(30rem)', 'opacity': '0', 'transitionDelay': '.8s'});
    $('.work__box-3').css({'transform': 'translateX(-30rem)', 'opacity': '0', 'transitionDelay': '.6s'});
    $('.work__box-4').css({'transform': 'translateX(30rem)', 'opacity': '0', 'transitionDelay': '.4s'});
    $('.work__box-5').css({'transform': 'translateX(-30rem)', 'opacity': '0', 'transitionDelay': '.2s'});
    $('.work__box-6').css({'transform': 'translateX(30rem)', 'opacity': '0', 'transitionDelay': '0s'});
    

}, {
    offset: '70%'
});
$('.jq-wp-3a').waypoint(function(direction){
    $('.navigation__box-background').css('backgroundColor', '#888e91');
}, {
    offset: '-38%'
});
$('.jq-wp-4').waypoint(function(direction){
    $('.navigation__box-background').css('backgroundColor', '#f7f7df');
}, {
    offset: '20%'
});


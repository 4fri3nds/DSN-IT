import '../scss/style.scss';
import 'bootstrap';

$(document).ready(function () {
  var input = $('.main-content-card.right-card').find('input');  
  input.click(function () {
    let star = $(this).parents('.card').find('.fa-star');
    star.toggleClass('active');
  });
});
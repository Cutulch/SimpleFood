$(function () {
  var mixer = mixitup('.assorti__content');

  $('.reviews__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/prev_arrow.svg" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next_arrow.svg" alt="right"></button>'
  });
});
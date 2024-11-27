
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,           
    slidesToShow: 3,           
    slidesToScroll: 1,       
    arrows: true,              
    arrows:false,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  });


    $('.lft-arrows').on('click', function() {
        $('.slider').slick('slickPrev');
    });

    $('.rght-arrows').on('click', function() {
        $('.slider').slick('slickNext');
    });
});


$(document).ready(function(){
    // Initialize Slick for the review slider
    $('.review-slide').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3, // Show one review at a time
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        autoplay: false,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    });

    // Custom navigation
    $('.left-arrow').on('click', function() {
        $('.review-slide').slick('slickPrev');
    });

    $('.right-arrow').on('click', function() {
        $('.review-slide').slick('slickNext');
    });
});

document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse
    } else {
      // Close other accordions
      document.querySelectorAll('.accordion-content').forEach((item) => {
        item.style.maxHeight = null;
      });
      content.style.maxHeight = content.scrollHeight + 'px'; // Expand
    }
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Show only the corresponding accordion items
    const tabId = button.getAttribute('data-tab');
    document.querySelectorAll('.accordion-item').forEach((item) => {
      if (item.getAttribute('data-tab') === tabId) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


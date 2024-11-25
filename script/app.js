
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

        document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Toggle active state for clicked header
    button.classList.toggle("active");

    // Toggle content visibility
    if (content.classList.contains("show")) {
      content.classList.remove("show");
      content.style.maxHeight = null;
    } else {
      content.classList.add("show");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
const tabButtons = document.querySelectorAll('.tab-btn');
const accordionItems = document.querySelectorAll('.accordion-item');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and accordion items
    tabButtons.forEach(btn => btn.classList.remove('active'));
    accordionItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Show the corresponding accordion items
    const tabId = button.getAttribute('data-tab');
    document.querySelectorAll(`.accordion-item`).forEach(item => {
      if (item.id === tabId) {
        item.classList.add('active');
      }
    });
  });
});
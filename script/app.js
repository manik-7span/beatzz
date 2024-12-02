
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,           
    slidesToShow: 3,           
    slidesToScroll: 1,       
    arrows: true,              
    arrows:false,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
          breakpoint: 480, 
          settings: {
              slidesToShow: 1, 
              centerMode: false, 
          },
      },
  ],
  });


    $('.lft-arrows').on('click', function() {
        $('.slider').slick('slickPrev');
    });

    $('.rght-arrows').on('click', function() {
        $('.slider').slick('slickNext');
    });
});


$(document).ready(function () {
  // Initialize Slick for the review slider
  $('.review-slide').slick({
      dots: true,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 3, 
      slidesToScroll: 1,
      arrows: false, 
      autoplay: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      responsive: [
          {
              breakpoint: 480, 
              settings: {
                  slidesToShow: 1, 
                  centerMode: false, 
              },
          },
      ],
  });
    // Custom navigation
    $('.left-arrow').on('click', function() {
        $('.review-slide').slick('slickPrev');
    });

    $('.right-arrow').on('click', function() {
        $('.review-slide').slick('slickNext');
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
function toggleMenu() {
  const navbarPoints = document.getElementById('navbar-points');
  navbarPoints.classList.toggle('show');
}
$(document).ready(function() {
  // When a tab button is clicked
  $('.tab-btn').click(function() {
      var tabId = $(this).data('tab');
      
      // Hide all accordion items and remove active class from all tab buttons
      $('.accordion-item').removeClass('active');
      $('.tab-btn').removeClass('active');
      
      // Show the selected accordion item and add active class to the clicked tab button
      $('#' + tabId).addClass('active');
      $(this).addClass('active');
  });

  // When an accordion header is clicked
  $('.accordion-header').click(function() {
      $(this).next('.accordion-content').slideToggle();
      $(this).toggleClass('active');
  });
});
$(document).ready(function() {
  // When an accordion header is clicked
  $('.accordion_full').click(function() {
      // Toggle the active class on the clicked header
      $(this).toggleClass('active');
      
      // Slide toggle the corresponding accordion content
      $(this).next('.accordion-content').slideToggle();
  });
});
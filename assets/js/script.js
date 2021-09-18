$(document).ready(function () {
  // Sliders
  $('.sister-cities__slider').slick({
    arrows: false,
    dots: true,
  });

  $('.blog-news__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const previousArrow = `
    <button class="slick-arrow slick-prev">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="28" viewBox="0 0 11 28">
        <title>angle-left</title>
        <path d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"></path>
      </svg>
    </button>
  `;

  const nextArrow = `
    <button class="slick-arrow slick-next">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="9" height="28" viewBox="0 0 9 28">
        <title>angle-right</title>
        <path d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"></path>
      </svg>
    </button>
  `;

  $('.other-albums__slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: previousArrow,
    nextArrow: nextArrow,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.apartment-slider-small').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.apartment-slider-big',
    prevArrow: previousArrow,
    nextArrow: nextArrow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.apartment-slider-big').slick({
    arrows: false,
    fade: true,
    draggable: true,
    asNavFor: '.apartment-slider-small',
  });

  $('.reservations').slick({
    arrows: false,
    dots: true,
  });

  // Control Navigation Menu
  $('.openNav').click(function () {
    $('.main-nav').toggleClass('active');

    if ($('.main-nav').hasClass('active')) {
      $('.openNav').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28"><title>close</title><path d="M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z"></path></svg>'
      );
    } else {
      $('.openNav').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><title>bars</title><path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path></svg>'
      );
    }
  });

  // Close Navigation if a link is clicked
  $('.main-nav ul li a').on('click', function () {
    $('.main-nav').removeClass('active');

    $('.openNav').html(
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><title>bars</title><path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path></svg>'
    );
  });
});

// Lightbox
const lightboxes = document.querySelectorAll('.lightbox');

[...lightboxes].forEach((lightbox) => {
  lightbox.addEventListener('click', (e) => {
    openModal(e);
  });
});

function openModal(e) {
  // Do nothing if user clicks on anything other than img tag.
  if (
    e.target.tagName.toLowerCase() != 'img' &&
    e.target.tagName.toLowerCase() != 'video'
  ) {
    return;
  }

  if (e.target.tagName.toLowerCase() === 'img') {
    document.body.appendChild(createImageModal(e.target.src, e.target.alt));
  }

  if (e.target.tagName.toLowerCase() === 'video') {
    document.body.appendChild(createVideoModal(e.target.innerHTML));
  }
}

function createImageModal(imgSrc, imgAlt) {
  // Create DOM elements
  const modalElement = document.createElement('div');
  modalElement.className = 'lightbox-modal';

  const figure = document.createElement('figure');
  const img = document.createElement('img');

  // Set img and figcaption attributes
  img.src = imgSrc;

  // Append elements to parent modalElement
  figure.appendChild(img);

  // Create & append figcaption if the image alt text is not empty
  if (imgAlt != '') {
    const figcaption = document.createElement('figcaption');
    img.alt = imgAlt;
    figcaption.innerText = imgAlt;
    figure.appendChild(figcaption);
  }

  modalElement.appendChild(figure);

  // Button element to close modal on click
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 8 8"
    >
      <path
        d="M16.783,9.64l-2.5,2.5-2.5-2.5-1.5,1.5,2.5,2.5-2.5,2.5,1.5,1.5,2.5-2.5,2.5,2.5,1.5-1.5-2.5-2.5,2.5-2.5Z"
        transform="translate(-10.283 -9.64)"
      />
    </svg>
  `;

  modalElement.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modalElement);
  });

  return modalElement;
}

function createVideoModal(videoSrc) {
  const videoSource = videoSrc;

  const modalElement = document.createElement('div');
  modalElement.className = 'lightbox-modal';

  const videoWrapper = document.createElement('div');
  videoWrapper.className = 'video-wrapper';

  const video = document.createElement('video');
  video.setAttribute('controls', true);

  video.innerHTML = videoSource;
  videoWrapper.appendChild(video);
  modalElement.appendChild(videoWrapper);

  // Button element to close modal on click
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 8 8"
      >
        <path
          d="M16.783,9.64l-2.5,2.5-2.5-2.5-1.5,1.5,2.5,2.5-2.5,2.5,1.5,1.5,2.5-2.5,2.5,2.5,1.5-1.5-2.5-2.5,2.5-2.5Z"
          transform="translate(-10.283 -9.64)"
        />
      </svg>
    `;

  modalElement.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modalElement);
  });

  return modalElement;
}

// Google Maps
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const kobuleti = { lat: 41.85237616773533, lng: 41.78411452300837 };
  // The map, centered at kobuleti
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: kobuleti,
  });
  // The marker, positioned at kobuleti
  const marker = new google.maps.Marker({
    position: kobuleti,
    map: map,
  });
}

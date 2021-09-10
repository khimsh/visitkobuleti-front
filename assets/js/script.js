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

function createModal(imgSrc, imgAlt) {
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

function openModal(e) {
  // Do nothing if user clicks on anything other than img tag.
  if (e.target.tagName.toLowerCase() !== 'img') {
    return;
  }

  // Append modal to body
  document.body.appendChild(createModal(e.target.src, e.target.alt));
}

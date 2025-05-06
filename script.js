document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
      type       : 'loop',
      perPage    : 4,
      gap        : '20px',
      autoplay   : true,
      arrows     : false,
      pagination : false,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 800,
      breakpoints: {
  1024: {
    perPage: 3,
  },
  768: {
    perPage: 2,
  },
  480: {
    perPage: 1,
  }
}
    }).mount();
  });
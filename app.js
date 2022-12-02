const app = {};

app.imageGallery = () => {
  //select all slides
  const slides = document.querySelectorAll(".slide");
  //select next slide button
  const btnNext = document.querySelector(".btnNext");
  //select previous slide button
  const btnPrev = document.querySelector(".btnPrev");

  //current slide counter
  let currentSlide = 0;

  //maximum number of slides
  let maxSlide = slides.length - 1;
  console.log(maxSlide);

  //increase current slide +1 when next button is clicked
  btnNext.addEventListener("click", () => {
    //loop through each slide and substract value of the current slide from each index to ensure the individual slide index drops by -1 each time the button is clicked and move slide by -100%
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });

    //check if current slide is the last and reset current slide
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  });

  btnPrev.addEventListener("click", () => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });

    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }
  });
};

app.init = () => {
  // app.imageGallery();
};

app.init();

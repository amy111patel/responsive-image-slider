const slider = document.querySelector('.slider');
		const prevBtn = document.querySelector('.slider-prev');
		const nextBtn = document.querySelector('.slider-next');
		const dots = document.querySelectorAll('.slider-dot');

		let slideIndex = 0;
		const slides = slider.querySelectorAll('img');
		const slideCount = slides.length;
		const slideWidth = slides[0].clientWidth;
		let timer = null;

		function showSlide(index) {
		  slider.style.transform = `translateX(-${index * slideWidth}px)`;
		  dots.forEach(dot => dot.classList.remove('active'));
		  dots[index].classList.add('active');
		  slideIndex = index;
		}

		function autoSlide() {
		  if (slideIndex === slideCount - 1) {
		    showSlide(0);
		  } else {
		    showSlide(slideIndex + 1);
		  }
		}

		prevBtn.addEventListener('click', () => {
		  if (slideIndex === 0) {
		    showSlide(slideCount - 1);
		  } else {
		    showSlide(slideIndex - 1);
		  }
		});

		nextBtn.addEventListener('click', () => {
		  if (slideIndex === slideCount - 1) {
		    showSlide(0);
		  } else {
		    showSlide(slideIndex + 1);
		  }
		});

		dots.forEach((dot, index) => {
		  dot.addEventListener('click', () => {
		    showSlide(index);
		  });
		});

		timer = setInterval(autoSlide, 4000);

		slider.addEventListener('mouseenter', () => {
		  clearInterval(timer);
		});

		slider.addEventListener('mouseleave', () => {
		  timer = setInterval(autoSlide, 4000);
		});
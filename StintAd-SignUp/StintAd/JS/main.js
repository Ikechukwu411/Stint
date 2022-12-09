const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let mybutton = document.getElementById("myBtn");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnright = document.querySelector(".slider__btn--right");
const counters = document.querySelectorAll('.counter');
const show = document.querySelector('#show');
const Terms =  document.querySelector('.Terms');
const overlay =  document.querySelector('.overlay');
const removeModal = document.querySelector('#removeModal');
const showPrivacy = document.querySelector('#showPrivacy');
const Privacy = document.querySelector('.Privacy');
const removePrivacy = document.querySelector('#removePrivacy');

//  ! For The Navigation Bar

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


//  ! For The Modal (Terms)
show.addEventListener('click', function(){
  Terms.classList.remove('hidden');
  overlay.classList.remove('hidden');
})

removeModal.addEventListener('click', function(){
  Terms.classList.add('hidden');
  overlay.classList.add('hidden');
})

//  ! For The Modal (Privacy)

showPrivacy.addEventListener('click',function(){
  Privacy.classList.remove('hidden');
  overlay.classList.remove('hidden');
})
removePrivacy.addEventListener('click', function(){
  Privacy.classList.add('hidden');
  overlay.classList.add('hidden');
})



const allsections = document.querySelectorAll(".section");

const revealsection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealsection, {
  root: null,
  threshold: 0.15,
});

allsections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
});

window.onscroll = function () {
  scrollfunction();
  if (window.pageYOffset > 0) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  } else {
    console.log("error");
  }
};
function scrollfunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let curSlide = 0;
const maxSlide = slides.length;
slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

btnright.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});

btnLeft.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


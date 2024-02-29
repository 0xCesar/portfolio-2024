import gsap from "gsap";

/** Hero Section Img */
var heroSection = document.querySelectorAll('#hero-section .container img');

var timeline = gsap.timeline({ repeat: -1 });
var currentImageIndex = 0;

gsap.set(heroSection, { opacity: 0 });
gsap.to(heroSection[0], { duration: 0.5, opacity: 1 });
timeline.to({}, { duration: 1.5, repeatDelay: Infinity, onComplete: showNextImage });

function showNextImage() {
    gsap.to(heroSection[currentImageIndex], { duration: 0.5, opacity: 0 });
    currentImageIndex == 2 ?  currentImageIndex = 0 : currentImageIndex++;
    gsap.to(heroSection[currentImageIndex], { duration: 0.5, opacity: 1 });
}

/** Bandeau DEROULANT  */
var scrollingList = document.querySelector('#about ul')
console.log(scrollingList.children[0])
const animationDuration = 10; 
const offSetScrollingList = (scrollingList.children.length-1) * 50;
let scrollContainer = 0;

for(let i = 0; i < 6; i++){
    scrollContainer = scrollContainer + scrollingList.children[i].getBoundingClientRect().width  + 50
}
const scrollDistance = - scrollContainer ;
gsap.to(scrollingList, {
    x: scrollDistance,
    duration: animationDuration,
    ease: 'linear',
   repeat: -1,
    modifiers: {
        x: (x) => {
            if (x <= scrollDistance ) {
                return 0;
            } else {
                return x;
            }
        }
    }
});

/** works */

let mesTextes = [
    "Crafting visually stunning and user-centric digital experiences. With expertise in graphic design principles, typography, and color theory, I specialize in creating websites that not only attract attention but also engage users on an emotional level.",
    "With a solid grasp of web development principles, including HTML, CSS, and JavaScript, I specialize in building websites that not only catch the eye but also seamlessly engage users. From sleek designs to smooth functionalities, I ensure that every aspect of the website contributes to an exceptional user experience.",
    "I specialize in designing website interactions that strike the perfect balance between ease of use and visual appeal. From smooth animations to intuitive user interfaces, I ensure that every interaction on the website feels natural and enhances the overall user experience.",
    "Effective teamwork is essential in web development projects. With strong communication and collaboration skills, I work closely with designers, developers, and stakeholders to achieve project goals. By actively participating, sharing ideas, and embracing feedback, I ensure that our team delivers high-quality web solutions that meet client needs and exceed expectations.",
    "With a deep understanding of UX principles and methodologies, I collaborate closely with designers, developers, and stakeholders to create websites that resonate with users. By prioritizing user research, usability testing, and iterative design, I ensure that every aspect of the website enhances usability and satisfaction."
]
let mesImg = [
    "assets/exploration.png",
    "assets/img-project.png",
    "assets/planetarium.png",
    "assets/img-project.png",
    "assets/planetarium.png",
]

let works = document.querySelectorAll('#work ul li a');
let content = document.querySelector('#content p');
let contentimg = document.querySelector('#content img');
console.log(works)
works.forEach( (el,id) => {
    el.addEventListener('click', () => {
        works.forEach( elem => { elem.classList.remove("selected")})
        el.classList.add("selected")
        content.textContent = mesTextes[id]
        contentimg.src = mesImg[id]
      //  console.log(id)
    })
})

function toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}




document.addEventListener("DOMContentLoaded", function () {
    const columns = document.querySelectorAll(".footer-column h4");
    columns.forEach(column => {
        column.addEventListener("click", function () {
            let parent = this.parentElement;
            parent.classList.toggle("open");
        });
    });
});





/* الاسلايدر */
var swiper = new Swiper(".mySwiper", {
    loop: false,
   
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});
/* انميشن للي تحت الاسليدر */
document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("logo-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });
    observer.observe(section);
});
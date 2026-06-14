//loader
window.addEventListener('load', () => {

    setTimeout(() => {

        const loader = document.querySelector('.loader');

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 3000);

});
// hero section
const slides = document.querySelectorAll('.hero-slide');
const thumbs = document.querySelectorAll('.thumb');
let currentSlide=0;
function showSlide(index){
    slides.forEach (slide=>{
        slide.classList.remove('active');
    });
    thumbs.forEach(thumb=>{
        thumb.classList.remove('active-thumb');
    });
    slides[index].classList.add('active');
    thumbs[index].classList.add('active-thumb');
    currentSlide = index; 
}
thumbs.forEach((thumb,index)=>{
    thumb.addEventListener('click', ()=>{
        showSlide(index);
    });
});
setInterval(() => {
    currentSlide++; 
    if(currentSlide >= slides.length){
        currentSlide=0;
    }
    showSlide(currentSlide);
},5000);
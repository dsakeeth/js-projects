const scrollContainer = document.querySelector('.horizantal-gallery');
const backBtn = document.querySelector('#backBtn');
const nextBtn = document.querySelector('#nextBtn');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
});

backBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 600;
});

nextBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 600; 
});

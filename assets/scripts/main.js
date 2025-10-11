document.querySelector(".hire-me-btn").addEventListener('click', () => {
    window.location.href = 'https://wa.me/+2349166608124';
});

document.querySelector(".download-cv-btn").addEventListener('click', () => {
    document.querySelector('#anker').click();
});

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`I'm so sorry, ${document.querySelector("#fullname").value}. This functionality is not working yet!`);
});

document.querySelector(".menu-btn").addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('top-minus-334');
    document.querySelector('.menu').classList.add('top-normal');
});

document.querySelector(".menu-closer").addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('top-normal');
    document.querySelector('.menu').classList.add('top-minus-334');
});
window.onload = function () {
};

function onPower() {
    document.querySelector('.background-container ').classList.add('theme-animation');
    const video1 = document.querySelector('.video1');
    video1.play();
    setTimeout(function () {
        document.querySelector('.background-container ').classList.remove('empty-theme');
        document.querySelector('.background-container ').classList.add('dark-theme');
    }, 13400);
    setTimeout(function () {
        const video2 = document.querySelector('.video2');
        video1.style.display = 'none'
        video2.style.display = 'block'
        video2.play();
    }, 13500);
}
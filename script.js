window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrolled = window.scrollY;

    if (scrolled > 0) {
        header.style.backgroundColor = '#FE5A1D'; // Change the background color as desired
    } else {
        header.style.backgroundColor = 'black'; // Reset the background color

    }
});
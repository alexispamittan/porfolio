document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile_menu');
    const navbarMenu = document.querySelector('.navbar__menu');

    mobileMenuButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        this.classList.toggle('is-active');
    });

    const portfolioButton = document.querySelector('.navbar__btn a');
    portfolioButton.addEventListener('click', function (event) {
        console.log('Portfolio button clicked!');
        // Add more logic if needed
    });
});

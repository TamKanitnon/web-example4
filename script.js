var menutab = document.querySelector(".menu-tab");
var menuhide = document.querySelector(".menu-hide");
menutab.addEventListener("click", function () {
    menuhide.classList.toggle('show');
    menutab.classList.toggle('active');
});

var menutab = document.querySelector(".menu-tab");
var menuhide = document.querySelector(".menu-hide");
menutab === null || menutab === void 0 ? void 0 : menutab.addEventListener("click", function () {
    menuhide.classList.toggle('show');
    menutab.classList.toggle('active');
});

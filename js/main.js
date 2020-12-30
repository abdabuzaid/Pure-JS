/*global window*/

window.onload = function () {
    "use strict";

    //LocalStorage Change Color
    let mainColor = localStorage.getItem('change-color');


    // Check if localStorage is Empty or no To Change Color
    if (mainColor !== null) {

        document.documentElement.style.setProperty("--main-color", mainColor);

        // Check Class Active
        document.querySelectorAll(".box-color ul li").forEach(ele => {

            ele.classList.remove('active');

            if (ele.dataset.color === mainColor) {

                ele.classList.add("active");
            }
        });
    }


    //LocalStorage Change Color
    let mainTheme = localStorage.getItem('change-theme');


    // Check if localStorage is Empty or no To Change Theme
    if (mainTheme !== null) {

        document.querySelectorAll(".fixed-menu .box-theme ul li").forEach(list => {

            list.classList.remove("active");

            if (mainTheme === list.dataset.theme) {

                list.classList.add("active");
            }

        });
    }




    //Landing Page Random Image
    let landingPage = document.querySelector(".landing-page"),
        imgList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
    setInterval(_ => {

        let imgRandom = Math.floor(Math.random() * imgList.length);

        landingPage.style.backgroundImage = `url(../Paul_Frost/img/${imgList[imgRandom]})`;

    }, 5000);

    // fixed-menue

    let fixedMenue = document.querySelector('.fixed-menu');

    document.querySelector('.fixed-menu i').addEventListener("click", (e) => {

        e.target.classList.toggle("fa-spin");
        fixedMenue.classList.toggle("open");

    });

    //Change Color

    let colorList = document.querySelectorAll('.box-color ul li');
    colorList.forEach(val => {

        val.addEventListener("click", (e) => {

            document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
            localStorage.setItem("change-color", e.target.dataset.color);

        });

    });

    //Remove Class Active On NavBar And Change Color

    let linkList = document.querySelectorAll(".navbar ul li a");
    let themeList = document.querySelectorAll(".fixed-menu .box-theme ul li");

    function RemoveClass(list) {

        list.forEach(ele => {

            ele.addEventListener("click", (e) => {

                e.target.parentElement.parentElement.querySelectorAll(".active").forEach(link => {

                    link.classList.remove("active");

                });

                e.target.classList.add("active");

            });

        });
    }

    RemoveClass(linkList);
    RemoveClass(colorList);
    RemoveClass(themeList);

    //Reset Button
    document.querySelector(".fixed-menu button").addEventListener('click', _ => {
        localStorage.removeItem("change-color");
        window.location.reload();
    });

    //PopUp In Image Portfolio
    let myImg = document.querySelectorAll('.portfolio .img-content img'),
        myPopup = document.querySelector(".popup");

    let ChildPopup = document.createElement('div');
    ChildPopup.className = "child-popup";
    myPopup.appendChild(ChildPopup);

    let childImg = document.createElement('img');
    childImg.src = "";
    ChildPopup.appendChild(childImg);

    myImg.forEach(img => {

        img.addEventListener("click", e => {

            childImg.src = e.target.getAttribute('src');

            myPopup.style.display = "block";
        });
    });

    document.querySelector(".popup span").addEventListener("click", _ => {

        myPopup.style.display = "none";

    });

    // Smooth Scroll Plugin
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    // Scroll To Top

    window.onscroll = function () {

        if (this.pageYOffset >= 600) {

            document.querySelector(".to-top").style.display = "block";

        } else {
            document.querySelector(".to-top").style.display = "none";
        }

    };


    let linkHead = document.querySelector("link[href*='light.css']");

    // Change Theme Page
    themeList.forEach(list => {

        list.addEventListener("click", e => {

            linkHead.setAttribute("href", `../Paul_Frost/css/${e.target.dataset.theme}`);
            localStorage.setItem("change-theme", e.target.dataset.theme);

        });


    });
};


$(function () {
    $("html, body").niceScroll({
        cursorcolor: "#424242"
    });
});



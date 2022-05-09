var slideIndex = 1;
showSlides(slideIndex); // for the first time that the website is loaded. (a)

function plusSlides(n) { // called when the slider is clicked 
    showSlides(slideIndex += n); //when plus is clicked, n=1, slideindex=1
}

function showSlides(n1) { //gets 2 as argument
    var i;
    var slides = document.getElementsByClassName("mySlides"); //slides is now an array that has all the three slides 
    if (n1 > slides.length) { //extreme conditions- when it goes to the end by clicking on the plus over and over 
        slideIndex = 1 //takes the first ever, default condition (a)
        n1 = 1
    }
    if (n1 < 1) { //extreme condition number2 when it goes to the beginning by clicking the back button over and over
        slideIndex = slides.length
        n1 = slides.length
    }
    for (i = 0; i < slides.length; i++) { //this loop is just hiding ALL the slides for once
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block"; //since slides is now an array that stores all the slides, for the index, we subtract one and show one slide that is needed


    if (n1 - 1 == 0) { //since we need to change the corresponding pages below it too, this is what n1 is doing rn
        document.getElementById("hostingFrame").src = "mooninfo.html";
        document.getElementById("hostingFrame1").src = "mooninfo2.html";
    }
    if (n1 == 2) {
        document.getElementById("hostingFrame").src = "marsinfo2.html";
        document.getElementById("hostingFrame1").src = "marsinfo.html";
    }
    if (n1 == 3) {
        document.getElementById("hostingFrame").src = "europa1.html";
        document.getElementById("hostingFrame1").src = "europa2.html";
    }
}
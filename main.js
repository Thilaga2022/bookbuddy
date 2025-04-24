var btn = document.getElementById("btn")

var radio = document.getElementsByName("ageGroup")
console.log(radio)

btn.addEventListener("click", function () {
    var container = document.getElementById("book-recommendation")
    container.style.display = "block"
    // For Kids

    if (radio[0].checked == true) {

        // Book 1 

        var title1 = document.getElementById("book1")
        var img1 = document.getElementById("img1")
        var link1 = document.getElementById("link1")
        title1.innerHTML = "2-Minute Stories"
        img1.src = "./images/fairytale.jpg" // path relative to the HTML file
        img1.alt = "Book Cover";
        img1.style.width = "150px";
        link1.href = "http://bit.ly/4cLyFM7"

        // Book 2 

        var title2 = document.getElementById("book2")
        var img2 = document.getElementById("img2")
        var link2 = document.getElementById("link2")
        title2.innerHTML = "Dear Zoo"
        img2.src = "./images/dear zoo.jpg" // path relative to the HTML file
        img2.alt = "Book Cover";
        img2.style.width = "150px";
        link2.href = "https://bit.ly/3RwFCGZ"

        // Book 3 

        var title3 = document.getElementById("book3")
        var img3 = document.getElementById("img3")
        var link3 = document.getElementById("link3")
        title3.innerHTML = "Pop-Up Peekaboo! Under The Sea"
        img3.src = "./images/under the sea.jpg" // path relative to the HTML file
        img3.alt = "Book Cover";
        img3.style.width = "150px";
        link3.href = "https://bit.ly/4jHsSJv"
    }

    // For Teens

    if (radio[1].checked == true) {

        // Book 1 

        var title1 = document.getElementById("book1")
        var img1 = document.getElementById("img1")
        var link1 = document.getElementById("link1")
        title1.innerHTML = "The 7 Habits of Highly Effective Teens"
        img1.src = "./images/teens habits.jpg" // path relative to the HTML file
        img1.alt = "Book Cover";
        img1.style.width = "150px";
        link1.href = "https://bit.ly/42OLfWk"

        // Book 2 

        var title2 = document.getElementById("book2")
        var img2 = document.getElementById("img2")
        var link2 = document.getElementById("link2")
        title2.innerHTML = "The Fault in Our Stars"
        img2.src = "./images/stars fault.jpg" // path relative to the HTML file
        img2.alt = "Book Cover";
        img2.style.width = "150px";
        link2.href = "https://ni.run/ddpKvS-"

        // Book 3 

        var title3 = document.getElementById("book3")
        var img3 = document.getElementById("img3")
        var link3 = document.getElementById("link3")
        title3.innerHTML = "Tuesdays with Morrie"
        img3.src = "./images/tuesday.jpg" // path relative to the HTML file
        img3.alt = "Book Cover";
        img3.style.width = "150px";
        link3.href = "https://ni.run/Z4Szzq9"
    }

    // For Adults


    if (radio[2].checked == true) {

        // Book 1 

        var title1 = document.getElementById("book1")
        var img1 = document.getElementById("img1")
        var link1 = document.getElementById("link1")
        title1.innerHTML = "The Midnight Library: A GMA Book Club Pick: A Novel"
        img1.src = "./images/Midnight library.jpg" // path relative to the HTML file
        img1.alt = "Book Cover";
        img1.style.width = "150px";
        link1.href = "https://ni.run/TlFbLcr"

        // Book 2 

        var title2 = document.getElementById("book2")
        var img2 = document.getElementById("img2")
        var link2 = document.getElementById("link2")
        title2.innerHTML = "The Girl with the Dragon Tattoo"
        img2.src = "./images/Tattoo.jpg" // path relative to the HTML file
        img2.alt = "Book Cover";
        img2.style.width = "150px";
        link2.href = "https://ni.run/6IyoG0V"

        // Book 3 

        var title3 = document.getElementById("book3")
        var img3 = document.getElementById("img3")
        var link3 = document.getElementById("link3")
        title3.innerHTML = "Don't Believe Everything You Think"
        img3.src = "./images/don't believe.jpg" // path relative to the HTML file
        img3.alt = "Book Cover";
        img3.style.width = "150px";
        link3.href = "https://ni.run/AyJKwnN"
    }




})
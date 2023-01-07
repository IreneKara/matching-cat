import React, { useState } from "react";
import cat1 from "./cat1.jpg"
import cat2 from "./cat2.jpg"
import cat3 from "./cat3.jpg"


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


var catArr = [
    {
        link: cat1,
        name: "first cat"
    },
    {
        link: cat2,
        name: "second cat"
    },
    {
        link: cat3,
        name: "third cat"
    }
]

catArr = Array(2).fill(catArr).flat()

shuffleArray(catArr)



function App(){

    function createCats(props, i) {
        return (
            <img src={props.link} alt={props.name} key={i} id={i + 1} onClick={handleClick} className="cat dark" />
        )
    }

    var [title, changeTitle] = useState("cats")
    var counter = 0
    function handleClick(event) {
        const pics = event.target.id
        console.log(event.target.alt)
        console.log(event.target.id)
        document.getElementById(pics).classList.add("bright");
        counter++
        if (counter === 2) {
            const firstCat = document.getElementsByClassName("bright")[0]
            const secondCat = document.getElementsByClassName("bright")[1]
            if (firstCat.alt !== secondCat.alt) {
                setTimeout(function () {
                    firstCat.classList.remove("bright");
                    secondCat.classList.remove("bright");
                }, 800);
            }
            else {
                firstCat.classList.remove("bright");
                secondCat.classList.remove("bright");
                firstCat.classList.add("foundcat");
                secondCat.classList.add("foundcat");
            }
            counter = 0
        }
        if (document.getElementsByClassName("foundcat").length == 6) {
            setTimeout(function () {
                changeTitle("congratulations!");
            }, 500);
        }
    }

    return(
        <div>
            <header className="header">
                <h1>{title}</h1>
            </header>
            <div className="gallery" id="catGallery">
                {catArr.map(createCats)}
            </div>
        </div>
    )
}

export default App;


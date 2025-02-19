const container = document.querySelector(".container");
const button = document.querySelector("button");
const input = document.querySelector("input");
const settings = document.querySelector(".settings");

let n = 16;
createGrid(n);
hover();

button.addEventListener("click", () => {
    n = input.value;
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    createGrid(n);
    hover();
})

var cgrid = document.querySelectorAll(".grid");

function createGrid(n) {
    for (let i = 1; i <= n*n ; i++) {
    const square = document.createElement("div")
    square.setAttribute("class","grid")
    square.setAttribute("id","grid_"+i)
    square.setAttribute("style", `height : ${1080/n}px; width : ${1080/n}px`)
    container.appendChild(square);
    } 
    return cgrid = document.querySelectorAll(".grid");

}
function hover() {
    cgrid.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black"
        })
    })
}

// var randomColor = Math.floor(Math.random()*16777215).toString(16);


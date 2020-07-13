
function togglePageColor(e) {
    const click = document.querySelector("body")
    if (click.style.backgroundColor === "white") {
        click.style.backgroundColor = "lightcoral";}
    else {
        click.style.backgroundColor = "white";
    }
}


let count = 1;

function createBox(e) {
    let newBox = document.createElement("div");
    newBox.classList.add("square")
        document.getElementById("home").append(newBox);
        newBox.innerText = count;  
        count++;
        newBox.setAttribute("title", "I’m a box!");     
}

document.getElementById("home").addEventListener("click", (e) => {
    e.target.remove();
});

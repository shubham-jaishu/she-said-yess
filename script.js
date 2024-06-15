const target = document.getElementById("target")
let yes = document.getElementById("yes")

yes.addEventListener("click", () => {
    alert("Shubham likes you too 🙈")
})

function moveTarget(){
    const maxWidth = 400
    const maxHeight = 600

    const randomX = Math.floor(Math.random() * maxWidth)
    const randomY = Math.floor(Math.random() * maxHeight)

    target.style.left = randomX + 500 + 'px'
    target.style.top = randomY + 10 + 'px'
}

target.addEventListener("mouseenter", () => {
    moveTarget();
})
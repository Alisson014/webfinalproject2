const items = document.querySelectorAll(".ods");
const controls = document.querySelectorAll(".CarrousselODS button");
var index = 0;
const maxOds = items.length;

console.log(maxOds, items);

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        right = e.target.classList.contains("right");

        if (right){
            index++;
        } else{
            index--;
        }

        if (index > maxOds -1){
            index = 0;
        }
        if (index < 0){
            index = maxOds -1;
        }

        items[index].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    })
})
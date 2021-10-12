//Creating a Color Palette.
palette = ["#EE82EE", "#FF00FF", "#FF00FF", "#BA55D3", "#9400D3", "#8B008B", "#9370DB", "#7B68EE", "#4B0082", "#E6E6FA"]

//Defing the number of Small Boxes.
small_boxes = 518

//Creating a loop for selecting all the small boxes for creating and event.
for(let i = 0; i < small_boxes; i++) {

    //Creating a div.
    const color_boxes = document.createElement('div')

    //Giving a class square which is created in CSS file.
    color_boxes.classList.add('square')

    //Appending this into parent container.
    $("#container").append(color_boxes)

    //Adding an event to chose the color when moving the mouse over the small boxes.
    color_boxes.addEventListener('mouseover', () => setColor(color_boxes))

    //Removing an event to chose the color when moving the mouse over the small boxes.
    color_boxes.addEventListener('mouseout', () => removeColor(color_boxes))

}

//Generating the randomcolor.
function getRandomColor() {
    return palette[Math.floor(Math.random() * palette.length)]
}

// Function for seting the color.
function setColor(event) {
   color_random = getRandomColor()
   event.style.background = color_random
   event.style.boxShadow = `0 0 10px ${color_random}`
}

// Function for removing the color.
function removeColor(event) {
   event.style.background = '#2e2d2e'
   event.style.boxShadow = '0px 0px 12px rgb(238, 200, 240)'
}

//remove hello world h1 tag
document.querySelector('h1').remove()

//create first h1 tag Lab7 Assignment and change color to blue
let h1 = document.createElement('h1')
h1.style.color = "blue"
h1.innerText = "Lab7 Assignment"
document.body.appendChild(h1)

//create horizontal line
const hr = document.createElement('hr')
document.body.appendChild(hr)

//create h2 tag Task and change color to red
let h2 = document.createElement('h2')
h2.innerText = "Task"
document.body.appendChild(h2)

//create first paragraph, and make "only" bold
let p = document.createElement('p')
p.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p)

//create list and 6 items with classes either odd or even
let Itemlist = document.createElement('ul')

let item1 = document.createElement('li')
item1.innerHTML = "find elements in the DOM (<b>5 points</b>);"
item1.classList.add("odd")
Itemlist.appendChild(item1)

let item2 = document.createElement('li')
item2.innerHTML = "create/add/remove elements (<b>5 points</b>);"
item2.classList.add("even")
Itemlist.appendChild(item2)

let item3 = document.createElement('li')
item3.innerHTML = "change content of the elements (<b>5 points</b>);"
item3.classList.add("odd")
Itemlist.appendChild(item3)

let item4 = document.createElement('li')
item4.innerHTML = "change styles of the elements (<b>5 points</b>);"
item4.classList.add("even")
Itemlist.appendChild(item4)

let item5 = document.createElement('li')
item5.innerHTML = "change attributes of the elements (<b>5 points</b>);"
item5.classList.add("odd")
Itemlist.appendChild(item5)

let item6 = document.createElement('li')
item6.innerHTML = "change classes of the elements (<b>5 points</b>)."
item6.classList.add("even")
Itemlist.appendChild(item6)

document.body.appendChild(Itemlist)

//create second horizontal line
const hr2 = document.createElement('hr')
document.body.appendChild(hr2)

//create second h2 'Submission' and change color to red
let h2_2 = document.createElement('h2')
h2_2.innerText = "Submission"
document.body.appendChild(h2_2)

//create second paragraph
let p2 = document.createElement('p')
p2.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p2)

//create second list and items with classes even or odd
const Itemlist2 = document.createElement('ul')

let item1_1 = document.createElement('li')
item1_1.innerHTML = "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>)."
item1_1.classList.add("odd")
Itemlist2.appendChild(item1_1)

let item2_1 = document.createElement('li')
item2_1.innerHTML = "Clone this repository to your local machine and work inside it."
item2_1.classList.add("even")
Itemlist2.appendChild(item2_1)

let item3_1 = document.createElement('li')
item3_1.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lth1&gt tag with \"Hello, World!\" message (<b>1 point</b>)."
item3_1.classList.add("odd")
Itemlist2.appendChild(item3_1)

let item4_1 = document.createElement('li')
item4_1.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)"
item4_1.classList.add("even")
Itemlist2.appendChild(item4_1)

let item5_1 = document.createElement('li')
item5_1.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
item5_1.classList.add("odd")
Itemlist2.appendChild(item5_1)

let item6_1 = document.createElement('li')
item6_1.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
item6_1.classList.add("even")
Itemlist2.appendChild(item6_1)

let item7_1 = document.createElement('li')
item7_1.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
item7_1.classList.add("odd")
Itemlist2.appendChild(item7_1)

document.body.appendChild(Itemlist2)

//create third horizontal line
const hr3 = document.createElement('hr')
document.body.appendChild(hr3)

//change color of li items with even and odd classes
let evenItems = document.querySelectorAll('.even');
for (let i = evenItems.length - 1; i >= 0; i--) {
    evenItems[i].setAttribute("style", "color: purple")
}

let oddItems = document.querySelectorAll('.odd');
for (let i = evenItems.length; i >= 0; i--) {
    oddItems[i].setAttribute("style", "color: green")
}

//change color of h2 tags to red
let h2Items = document.querySelectorAll('h2')
for (let i = 0; i < h2Items.length; i++) {
    h2Items[i].setAttribute("style", "color: red")
}
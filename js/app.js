'use strict'
// alert('hello')
let mainArray
let booksPrice = 0
function BooksShop(name, price) {
    this.name = name
    this.price = price
    this.pages
    mainArray.push(this)
}

BooksShop.prototype.pages = function () {
    this.pages = parseInt(Math.random() * (500)) + 1
}
const sBtn = document.getElementById('adding')
sBtn.addEventListener('submit', adding)

function adding(event) {
    event.preventDefault()
    let name = event.target.name.value
    if (name) {
        let price = event.target.price.value
        let newBook = new BooksShop(name, price)
        newBook.pages();
        // console.log(newBook);
        rendering(newBook)
    }
    else alert("please enter your book name")

}

const table = document.getElementById('bookTable')
const booksTotal = document.getElementById('total')
function rendering(x) {
    let Itemrow = document.createElement('tr')
    table.appendChild(Itemrow)

    let itemName = document.createElement('td')
    Itemrow.appendChild(itemName)
    itemName.textContent = x.name

    let itempages = document.createElement('td')
    Itemrow.appendChild(itempages)
    itempages.textContent = x.pages

    let itemPrice = document.createElement('td')
    Itemrow.appendChild(itemPrice)
    itemPrice.textContent = x.price

    renderTotal(x.price);
    savingData();
    // console.log(booksPrice);
}

function renderTotal(x) {
    booksPrice += Number(x);
    booksTotal.textContent = `Total : ${booksPrice}`
}

function savingData(){
    let savingArray = JSON.stringify(mainArray)
    localStorage.setItem('Books', savingArray )
}


function checkData(){
    mainArray = localStorage.getItem("Books")
    if (mainArray){
    mainArray = JSON.parse(mainArray)
    for (let i =0; i<mainArray.length; i++){
        rendering(mainArray[i])
    }
}
else {mainArray= []}
}
checkData();
const myLibrary = []
const bookList = document.querySelector('#bookList')
const addForm = document.forms["addFormInput"]


const titleRegEx = /^\.{1,}$/
const authorRegEx = /^[0-9]{8}$/
const pagesRegEx = /^\w+\s+\w+$/

// Object Constructor Function
class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = "unread"
        this.remove = "remove"
    }
    info() { return [this.title, this.author, this.pages, this.read] }
}


// Create new book object instance from the object constructor function and push it to myLibrary
function addBookToMyLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}

// Remove all children elements from param node
function removeAllChildNodes(parentNode) {
    while (parentNode.firstChild) { parentNode.removeChild(parentNode.firstChild) }
}

// Append input library type of array containing objects to DOM Library
function appendToDomLibrary(lib) {
    // Loop through the array of book objects in param library
    for (let i = 0; i < lib.length; i++) {
        const li = document.createElement('li')
        // Loop through book object, assign element type, text, attributes and append to DOM
        for (const [key, val] of Object.entries(lib[i])) {
            let element = document.createElement('span')
            if (key == "read" || key == "remove") { element = document.createElement('button') }
            element.textContent = `${val}`;
            element.setAttribute("class", `${key}`);
            li.appendChild(element)
        }
        bookList.appendChild(li)
    }
}

// Add Remove book button functionality to the ul #bookList tag, accessible through event bubbling
bookList.addEventListener("click", function (e) {
    if (e.target.className == 'remove') {
        const titleOfBook = e.target.parentNode.firstChild.textContent
        const indexOfBook = myLibrary.findIndex(bookObj => bookObj.title === titleOfBook)
        bookList.removeChild(e.target.parentNode)
        myLibrary.splice(indexOfBook, 1)
    }
})

// Add read/unread button to the ul #bookList tag, accessible through event bubbling from target btn
bookList.addEventListener("click", function (e) {
    if (e.target.className == 'read') {
        // const readStatus = e.target.parentNode.children[3].textContent
        if (e.target.parentNode.children[3].textContent == "unread") {
            e.target.parentNode.children[3].textContent = "read"
            e.target.parentNode.children[3].style.backgroundColor = "#bef264"
        } else {
            e.target.parentNode.children[3].textContent = "unread"
            e.target.parentNode.children[3].style.backgroundColor = "#fca5a5"
        }
    }
})


// Form submit implementation, append input to myLibrary and DOM Library
addForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const title = addForm.querySelector('input[class="inputTitle"]').value
    const author = addForm.querySelector('input[class="inputAuthor"]').value
    const pages = addForm.querySelector('input[class="inputPages"]').value
    if (title && author && pages) {
        if (!(myLibrary.some(book => book.title === title))) {
            addBookToMyLibrary(`${title}`, `${author}`, `${pages}`)
            newBookArr = myLibrary.slice(-1)
            appendToDomLibrary(newBookArr)
        } else { alert("This title already exists in your library") }
    } else { alert("Please fill in all the required fields") }
})


addBookToMyLibrary("A Tale of Two Cities", "Charles Dickens", "448")
addBookToMyLibrary("Brave New World", "Aldous Huxley", "311")
addBookToMyLibrary("Nineteen Eighty-Four", "George Orwell", "328")
appendToDomLibrary(myLibrary)
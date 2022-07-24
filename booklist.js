const myLibrary = []
const bookList = document.querySelector('#bookList')




// Object Constructor Function
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = "Unread"
    this.remove = "Remove"
}

// It is better to create a function in the prototype of an object. That way the function
// is not recreated in all instances of the object, which matters if you have many instances
Book.prototype.info = function () {
    return [this.title, this.author, this.pages, this.read]
}

// Create new book object instance from the object constructor function and push it to myLibrary
function addBookToMyLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}

// Update DOM Library, with an input library type of array containing objects
function updateDomLibrary(lib) {
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

addBookToMyLibrary("Brave New World", "Aldous Huxley", "311")
addBookToMyLibrary("Nineteen Eighty-Four", "George Orwell", "328")
addBookToMyLibrary("A Tale of Two Cities", "Charles Dickens", "448")


updateDomLibrary(myLibrary)



const removeBtns = document.querySelectorAll(".remove")

removeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const btnParentElement = e.target.parentElement;
        btnParentElement.parentNode.removeChild(btnParentElement)
    })
})

const myLibrary = []

// Object Constructor Function
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
}

// It is better to create a function in the prototype of an object. That way the function
// is not recreated in all instances of the object, which matters if you have many instances
Book.prototype.info = function () {
    console.log(this.title, this.author, this.pages, this.read)
    // return [this.title, this.author, this.pages, this.read]
}


function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}


addBookToLibrary("Brave New World", "Aldous Huxley", "311")
addBookToLibrary("Nineteen Eighty-Four", "George Orwell", "328")
addBookToLibrary("A Tale of Two Cities", "Charles Dickens", "448")
addBookToLibrary("test", "Authorsen", "1000")




// console.log(Object.entries(myLibrary));
// console.log(Object.entries(Book.prototype));
// myLibrary[0].info()
// console.log(Book.prototype.info)
// console.log(myLibrary[0].info)
// // console.log(myLibrary[0].prototype.info.isPrototypeOf(Book))
// console.log(myLibrary[0].constructor)
// console.log(Object.keys(myLibrary[0]))
// console.log(Object.values(myLibrary[0]))
// console.log(Object.getPrototypeOf(myLibrary[0]))
// for (const [key, value] of Object.entries(myLibrary[0])) {
//     console.log(`${key}: ${value}`);
// }
// console.log("")
// Object.entries(myLibrary[0]).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`)
// });
// console.log(myLibrary[0])

myLibrary.forEach((element, index, array) => {
    console.log(element); // 100, 200, 300
    console.log(index); // 0, 1, 2
    // console.log(array); // same myArray object 3 times
    console.log(""); // same myArray object 3 times
});
// console.log(Object.getPrototypeOf(myLibrary[0]))
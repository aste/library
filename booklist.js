let myLibrary = []

function Book(title, author, pages, read) {
    // Book Object Constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // It is better to create a function in the prototype of an object. That way the function
    // is not recreated in all instances of the object, which matters if you have many instances
    this.bookInfo = function () {
        return (title, author, pages, read)
    }
}

function addBookToLibrary() {

}
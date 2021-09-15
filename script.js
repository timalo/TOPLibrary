let myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.sayInfo = function() {
        return(`${this.title} by ${this.author}, ${this.pages} pages. readStatus: ${this.isRead}`);
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function NewBookPrompt() {

}


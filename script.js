let myLibrary = [{
    title: "testBook",
    author: "testAuthor",
    pages: 666,
    isRead: true,
    bookId: 1
},
{
    title: "test2Book",
    author: "second Author",
    pages: 50,
    isRead: false,
    bookId: 2
}];

function Book(title, author, pages, isRead, bookId){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.bookId = bookId;
    this.sayInfo = function() {
        return(`${this.title} by ${this.author}, ${this.pages} pages. readStatus: ${this.isRead}`);
    }
}

function addBookToLibrary(book) {
    
}

function NewBookPrompt() {

}

function updateBookList() {
    document.getElementById('bookArea').innerHTML ="";
    myLibrary.forEach(element => {
        var newBookDiv = document.createElement('div');
        newBookDiv.className = 'book';
        newBookDiv.textContent = `Title: ${element.title}\nAuthor: ${element.author}\nPages: ${element.pages}`; //add the rest later if this works
        document.querySelector('#bookArea').appendChild(newBookDiv);
    })
}

//----------------------


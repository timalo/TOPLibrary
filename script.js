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
        newBookDiv.textContent = `Title: ${element.title}\nAuthor: ${element.author}\nPages: ${element.pages}\nRead status: ${element.isRead}`; 
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = 'Delete';
        newBookDiv.appendChild(deleteBtn);
        document.querySelector('#bookArea').appendChild(newBookDiv);
    })
}

//----------------------

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("newBookBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

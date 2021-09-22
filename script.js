let myLibrary = [];

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

function handleForm() {
  //This function reads the form and builds a Book object from the data
  //Also adds the book into the myLibrary array in the end.
  let newTitle = TitleTextbox.value;
  let newAuthor = AuthorTextbox.value;
  let newPageNumber = pageNumber.value;
  let newReadStatus = false;
  if (readStatusYes){
    newReadStatus = true;
  }
  let newBookId = idCounter;
  idCounter++;

  let newBook = new Book(newTitle, newAuthor, newPageNumber, newReadStatus, newBookId);
  console.log(`attempting to add book: ${newBook}`);
  myLibrary.push(newBook);
  modal.style.display = "none"; //close the prompt window
  updateBookList();

  TitleTextbox.value = "";
  AuthorTextbox.value = "";
  pageNumber.value = "";
  readStatusNo = false;
  readStatusYes = false;
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

let idCounter = 1;

let submitBookBtn = document.getElementById("submitBtn");
let TitleTextbox = document.getElementById("title");
let AuthorTextbox = document.getElementById("author");
let pageNumber = document.getElementById("pages");
let readStatusYes = document.getElementById("readYes");
let readStatusNo = document.getElementById("readNo");

//submitBookBtn.addEventListener("click", handleForm);

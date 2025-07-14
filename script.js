const myLibrary = []
const addBookButton = document.getElementById('add-book')
const formTitle = document.querySelector('#title')
const formAuthor = document.querySelector('#author')
const formPages = document.querySelector('#pages')
const formRead = document.querySelector('#read')



addBookButton.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary()
    displayBooks()
    clearForm()
})

function Book (title, author, pages, read, bookId) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookId = bookId
    this.info = function () {return `${this.title} by ${this.author}, ${this.pages} pages, Read the Book: ${read}`}
}

function clearForm () {
    formTitle.value = ''
    formAuthor.value = ''
    formPages.value = ''
    formRead.checked = false
}

// Auto-populate library for testing 
function populateLibrary() {
    myLibrary.push(
        new Book("The Hobbit", "J.R.R. Tolkien", 310, true, crypto.randomUUID())
    )
}

populateLibrary()
// Testing Section ^^^

function addBookToLibrary () {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    const bookId = crypto.randomUUID()
    const book = new Book(title, author, pages, read, bookId)

    myLibrary.push(book)
}

function displayBooks () {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
}


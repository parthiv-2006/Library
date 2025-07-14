const myLibrary = []
const addBookButton = document.getElementById('add-book')
const formTitle = document.querySelector('#title')
const formAuthor = document.querySelector('#author')
const formPages = document.querySelector('#pages')
const formRead = document.querySelector('#read')
const cardContainer = document.querySelector('.card-container')




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
        let currBook = myLibrary[i]
        const card = document.createElement('div')
        card.classList.add('card')
        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const read = document.createElement('p')
        const bookId = document.createElement('p')
        title.textContent = `Title: ${currBook.title}`
        author.textContent = `Author: ${currBook.author}`
        pages.textContent = `Pages: ${currBook.pages}`
        read.textContent = `Read: ${currBook.read}`
        bookId.textContent = `Book Id: ${currBook.bookId}`
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-button')
        deleteButton.textContent = 'Delete'
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)
        card.appendChild(bookId)
        card.appendChild(deleteButton)
        cardContainer.appendChild(card)

        deleteButton.addEventListener('click', ()=> {
            cardContainer.removeChild(card)
            myLibrary.splice(i, 1)
        })

    }
}

displayBooks()
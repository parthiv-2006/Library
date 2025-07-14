const myLibrary = []
const addBookButton = document.getElementById('add-book')
const formTitle = document.querySelector('#title')
const formAuthor = document.querySelector('#author')
const formPages = document.querySelector('#pages')
const formRead = document.querySelector('#read')
const cardContainer = document.querySelector('.card-container')
const newBookButton = document.querySelector("#new-book")
const bookForm = document.querySelector("#new-book-form")


newBookButton.addEventListener('click', () => {
    bookForm.style.display = 'block'
});


addBookButton.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary()
    displayBooks()
    clearForm()
    bookForm.style.display = 'none' 
})

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
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
        new Book("The Hobbit", "J.R.R. Tolkien", 310, "Read", crypto.randomUUID())
    )
}

populateLibrary()
// Testing Section ^^^

function addBookToLibrary () {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    if (title === '' || author === '' || pages === '') {
        alert('Please fill out all fields')
        return
    }

    if (read === true) {
        read = 'Read'
    }
    else {
        read = 'Not Read'
    }
    
    const book = new Book(title, author, pages, read)

    myLibrary.push(book)
}

function displayBooks () {
    cardContainer.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        let currBook = myLibrary[i]
        const card = document.createElement('div')
        card.classList.add('card')
        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const read = document.createElement('p')
        const toggleRead = document.createElement('button')
        toggleRead.classList.add('toggle-read')
        toggleRead.classList.add('card-button')
        toggleRead.textContent = 'Change Read Status'
        title.textContent = `Title: ${currBook.title}`
        author.textContent = `Author: ${currBook.author}`
        pages.textContent = `Pages: ${currBook.pages}`
        read.textContent = `Status: ${currBook.read}`
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-button')
        deleteButton.classList.add('card-button')
        deleteButton.textContent = 'Delete'
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)
        card.appendChild(toggleRead)
        card.appendChild(deleteButton)
        cardContainer.appendChild(card)

        toggleRead.addEventListener('click', ()=> {
            if (currBook.read === 'Read') {
                currBook.read = 'Not Read'
                read.textContent = `Status: ${currBook.read}`
            }
            else {
                currBook.read = 'Read'
                read.textContent = `Status: ${currBook.read}`
            }
        })

        deleteButton.addEventListener('click', ()=> {
            cardContainer.removeChild(card)
            myLibrary.splice(i, 1)
        })

    }
}

displayBooks()
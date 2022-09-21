const books = document.getElementById('books');
const add = document.getElementById('btn');
let storedbooks = [];
let count = 0;
function printbook() {
    const bookdata = JSON.parse(window.localStorage.getItem('books'));
    storedbooks = bookdata;
    books.replaceChildren();
       storedbooks.forEach(book => {
       const newdiv = document.createElement('div');
       newdiv.innerHTML = `
       <div class="book">
       <p id="title">
        ${book.title}
        </p>
       <p id="author">
       ${book.author}
        </p>
       <button type="button" class="remove" id="${book.id}">Remove</button>
       </div>
       `;
   books.append(newdiv);
   count= parseInt(book.id);
});

}

if(localStorage.getItem('books')){
printbook();
}

const fdata = {
    id: count.toString(),
    title: '',
    author: ''
  };
const stringfiedbooks= [];


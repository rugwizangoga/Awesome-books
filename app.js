
class Books {

  printbook() {
    const books = document.getElementById('books');
    const bookdata = JSON.parse(window.localStorage.getItem('books'));
    this.storedbooks = bookdata;
    books.replaceChildren();
    let num =0;
    this.storedbooks.forEach((book) => {
      const newdiv = document.createElement('div');
      num+=1;
      newdiv.innerHTML = `
      <p>
          ${book.title} by ${book.author}
      </p>
      <button type="button" class="remove" id="${book.id}">Remove</button>
         `;
      newdiv.className= 'book';
      if (num%2===0){
        newdiv.classList.add('two');
      }
      books.append(newdiv);
      this.count = parseInt(book.id, 10);
    });
    const remove = document.querySelectorAll('.remove');
    remove.forEach((rem) => {
      rem.addEventListener('click', (rem) => {
        const { id } = rem.target;
        const btns = document.getElementById(id);
        btns.parentElement.remove();
        this.storedbooks = this.storedbooks.filter((b) => b.id !== id);
        window.localStorage.setItem('books', JSON.stringify(this.storedbooks));
      });
    });
  }
  
}

const mystore =new Books();

if (localStorage.getItem('books')) {
  mystore.printbook();
}

const add = document.getElementById('btn');

add.addEventListener('click', () => {
  const booktitle = document.forms[0].elements[0].value;
  const bookauthor = document.forms[0].elements[1].value;
  mystore.Addbook(booktitle, bookauthor);
  mystore.printbook();
});

const books = document.getElementById("books");
const add = document.getElementById("btn");
let storedbooks = [];
let count = 0;
function printbook() {
  const bookdata = JSON.parse(window.localStorage.getItem("books"));
  storedbooks = bookdata;
  books.replaceChildren();
  storedbooks.forEach((book) => {
    const newdiv = document.createElement("div");
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
    count = parseInt(book.id);
  });
  const remove = document.querySelectorAll(".remove");
  remove.forEach((rem) => {
    rem.addEventListener("click", (rem) => {
      const { id } = rem.target;
      ids = id;
      const btns = document.getElementById(ids);
      btns.parentElement.remove();
      storedbooks = storedbooks.filter((book) => book.id !== ids);
      window.localStorage.setItem("books", JSON.stringify(storedbooks));
    });
  });
}

if (localStorage.getItem("books")) {
  printbook();
}

const fdata = {
  id: count.toString(),
  title: "",
  author: "",
};

add.addEventListener("click", () => {
  count += 1;
  fdata.id = count.toString();
  fdata.title = document.forms[0].elements[0].value;
  fdata.author = document.forms[0].elements[1].value;
  storedbooks.push(fdata);
  window.localStorage.setItem("books", JSON.stringify(storedbooks));
  printbook();
});

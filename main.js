const errorDiv = document.getElementById("error");
const loadBooks = searchText => {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))
        if (searchText === "") {
          errorDiv.innerText = "Search field cannot be empty.";
          return;
        }
        else{
          errorDiv.innerText = '' ;
          return;
        }
}
const searchBook = () => {
    const searchText = document.getElementById('search-field').value;
    // ------- show spinner 
    loadBooks(searchText);
    document.getElementById('search-field').value = '';
}

const displayBooks = books => {
    const container = document.getElementById('books');
    container.textContent = '';
    books?.forEach(book => {
        const div = document.createElement('div');
        div.className = 'col-sm-6';
        div.innerHTML = `
        <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">By ${book.author_name[0]}</p>
                    <p>Published by ${book.publisher[0]}</p>
                    <p>Published Date: ${book.publish_date[0]}</p>
                </div>
            </div>
        `;
        container.appendChild(div);
    })
}
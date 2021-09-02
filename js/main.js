const searchBook = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data))
        document.getElementById('search-field').value = '';  
}

const displayBooks = books => {
    // error handel and show data
    if(books.numFound===0){
        alert('Result Not Found')
    }
    else{
        const container = document.getElementById('books');
        container.textContent = '';
        books.docs?.forEach(book => {
        const div = document.createElement('div');
        div.className = 'col-sm-6';
        div.innerHTML = `
        <div class="card d-flex flex-row">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Writter  ${book.author_name}</p>
                    <p>Published by ${book.publisher}</p>
                    <p>Published Date: ${book.publish_date}</p>
                </div>
                <div><img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"</div>
            </div>
        `;
        container.appendChild(div);
    })


     }
    
}
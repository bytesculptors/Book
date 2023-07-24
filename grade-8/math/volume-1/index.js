const readButton = document.getElementsByClassName('read-book')[0];

readButton.onclick = function() {
    const book = document.getElementById('container');
    const page = document.createElement('div');
    page.classList.add('pages');

    let picture = null;

    for (var i = 1; i <= 126; i++) {
        picture = document.createElement('img');
        picture.src = `https://cdnelearning.nxbgd.vn/uploads/books/11396_20230714153224_shs-toan-8-tap-1-kntt-ruot-in-dai-tra-23.5.2023-min-${i}.jpg`;
        page.appendChild(picture);
    }
    book.appendChild(page);
};



// page.appendChild(picture);
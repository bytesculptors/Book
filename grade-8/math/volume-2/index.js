const readButton = document.getElementsByClassName('read-book')[0];

readButton.onclick = function() {
    const book = document.getElementById('container');
    const page = document.createElement('div');
    page.classList.add('pages');

    let picture = null;

    for (var i = 1; i <= 142; i++) {
        picture = document.createElement('img');
        picture.src = `https://cdnelearning.nxbgd.vn/uploads/books/11397_20230714153315_shs-toan-8-tap-2-kntt-ruot-in-dai-tra-7.3.2023-min-${i}.jpg`;
        page.appendChild(picture);
    }
    book.appendChild(page);
};



// page.appendChild(picture);
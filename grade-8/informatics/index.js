const readButton = document.getElementsByClassName('read-book')[0];

readButton.onclick = function() {
    const book = document.getElementById('container');
    const page = document.createElement('div');
    page.classList.add('pages');

    let picture = null;

    for (var i = 1; i <= 98; i++) {
        picture = document.createElement('img');
        picture.src = `https://cdnelearning.nxbgd.vn/uploads/books/11399_20230714155106_shs_tin-hoc-8_idt25.05.2023-min-${i}.jpg`;
        page.appendChild(picture);
    }
    book.appendChild(page);
};



// page.appendChild(picture);
const readButton = document.getElementsByClassName('read-book')[0];

readButton.onclick = function() {
    const book = document.getElementById('container');
    const page = document.createElement('div');
    page.classList.add('pages');

    let picture = null;

    for (var i = 1; i <= 142; i++) {
        picture = document.createElement('img');
        picture.src = `https://cdnelearning.nxbgd.vn/uploads/books/11372_20230714170121_shs-khoa-hoc-tu-nhien-8_kntt-idt-5.4.2023-min-${i}.jpg`;
        page.appendChild(picture);
    }
    book.appendChild(page);
};



// page.appendChild(picture);
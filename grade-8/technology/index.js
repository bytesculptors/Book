const readButton = document.getElementsByClassName('read-book')[0];

readButton.onclick = function() {
    const book = document.getElementById('container');
    const page = document.createElement('div');
    page.classList.add('pages');

    let picture = null;

    for (var i = 1; i <= 110; i++) {
        picture = document.createElement('img');
        picture.src = `https://cdnelearning.nxbgd.vn/uploads/books/11367_20230714154210_shs-cong-nghe-8-kntt_idt06.06.2023-min-${i}.jpg`;
        page.appendChild(picture);
    }
    book.appendChild(page);
};



// page.appendChild(picture);
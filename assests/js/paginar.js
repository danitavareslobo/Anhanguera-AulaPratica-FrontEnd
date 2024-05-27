function paginar(page = 'pag1') {

    if(page === 'next') {
        next();
        return;
    }

    if(page === 'prev') {
        prev();
        return;
    }

    const pages = document.querySelectorAll('.page-item');
    const receitas = document.querySelectorAll('.receita-completa');
    receitas.forEach(receita => {
        receita.classList.add('d-none');
    });
    const pag = document.querySelector(`#${page}`);
    pag.classList.add('d-block');
    pag.classList.remove('d-none');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    var itemPaginadorAtivo = pages.item(getIntegerByText(page));
    itemPaginadorAtivo.classList.add('active');
}

function getActiveItem() {
    const pages = document.querySelectorAll('.page-item');
    let activeItem = '';
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            activeItem = page;
        }
    });
    return activeItem;
}

function next() {
    const pages = document.querySelectorAll('.page-item');
    const activeItem = getActiveItem();
    
    let nextItem = '';
    pages.forEach((page, index) => {
        if (page === activeItem) {
            nextItem = pages[index + 1];
        }
    });

    let number = parseInt(getIntegerByText(nextItem.innerHTML).toString()[0]);
    if (nextItem && number) {
        paginar(`pag${number}`);
    }
}

function prev() {
    const pages = document.querySelectorAll('.page-item');
    const activeItem = getActiveItem();
    let prevItem = '';
    pages.forEach((page, index) => {
        if (page === activeItem) {
            prevItem = pages[index - 1];
        }
    });

    let number = parseInt(getIntegerByText(prevItem.innerHTML).toString()[0]);
    if (prevItem && number) {
        paginar(`pag${number}`);
    }
}

function getIntegerByText(text) {
    return parseInt(text.replace(/\D/g, ''));
}
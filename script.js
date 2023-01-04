// scroll down ---------------------------------------------
// находим нужный элемент и ставим слушатель 
document.querySelector('#scroll-down').addEventListener('click', (e) => {
    // отключаем базовые события элемента
    e.preventDefault();

    // делаем скролл до нужного блока
    document.querySelector('.clients').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// nav scroll to blocks -------------------------------------
// находим нужные элементы и проходимся по ним с помощью forEach
document.querySelectorAll('.header__nav a').forEach(el => {

    // вещаем событие на каждый элемент
    el.addEventListener('click', (e) => {

        // отключаем базовые события элемента
        e.preventDefault();

        // берем id блоков
        // создаем переменную для удобства
        // Это нужно чтобы мы знали куда скроллить
        const link = el.getAttribute('href');

        // делаем скролл
        document.querySelector(link).scrollIntoView({
            behavior: "smooth"
        });
    });
});

    let pathAll = {};

    //переход на другую страницу с переменной в адресной строке
    let btn = document.querySelector('.btn_name');
    let arr = [1,2,3];

    if(btn) {
    btn.addEventListener('click', (e) => {
        let dataTape = e.target.dataset.tape;
        document.location.href = 'main.html?&'+dataTape;});
    }

    //чтение текстового файла из локальной папки
    let requestForFolder;

    if(navigator.appName.search('Microsoft')>-1) {
        requestForFolder = new ActiveXObject('MSXML2.XMLHTTP');
    }
    else {
        requestForFolder = new XMLHttpRequest();
    }


    let getdata = () => {
        requestForFolder.open('get', 'assets/img/nameFile.txt', true);
        requestForFolder.onreadystatechange = showdata;
        requestForFolder.send(null);
    };

    let showdata = () => {
        if(requestForFolder.readyState === 4) {
            allText = requestForFolder.responseText;
            separatorString(allText);
        }
    };

    //функция работы с полученной строкой и создание объекта с путями
    let separatorString = (string) => {

        // убираем перенос строк на все строки с путями и разбиваем на основные подразделы
        let arrayFromString = string.replace(/\r?\n/g, "").split('|||');

        // убираем нумерацию строк
        for (let i = 0; i < arrayFromString.length; i++) {
            let resultSplit = arrayFromString[i].split('//');
            if (resultSplit) {
                arrayFromString[i] = resultSplit[1];
            }
        }

        // создаем объект для всех ссылок на картинки и текст
        for (let i = 0; i < arrayFromString.length; i++) {
            let arrayPictAndText = arrayFromString[i].split('||');
            pathAll[i+1] = {};
            pathAll[i+1].img = {};
            pathAll[i+1].text = {};

            let arrayPict = arrayPictAndText[0].split('&&');
            let arrayText = arrayPictAndText[1].split('&&');

            pathAll[i+1].img.mainImg = {};
            pathAll[i+1].img.galleryImg = {};

            let mainPict = arrayPict[0].split(',');
            let galleryPict = arrayPict[1].split(',');

            pathAll[i+1].img.mainImg = mainPict;
            pathAll[i+1].img.galleryImg = galleryPict;
            pathAll[i+1].text.mainText = arrayText[0];
            pathAll[i+1].text.historiText = arrayText[1];
        }
        console.log(pathAll);
    };

    //функция задержки обращения к глобальной переменной pathAll
    let timeDelay = () => {
        window.name = JSON.stringify(pathAll);
    };


    document.addEventListener('DOMContentLoaded', () => {

    getdata();
    const timer = setTimeout(() => {
        timeDelay();
        clearTimeout(timer);
    }, 1000);

    });


// let path = {
//     0:{
//         1: '1.jpg',
//         2: '2.jpg',
//     },
//     1:{
//         1: '3.jpg',
//         2: '4.jpg',
//     }
// };

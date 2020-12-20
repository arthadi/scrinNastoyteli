
    let w = window.name;
    pathAll = JSON.parse(w);

    const page = {};

    //получение значения из Get запроса
    let decodeUri = () => {
        let score = decodeURIComponent(location.search.substring(1)).split('&');
        score.splice(0, 1);
        return score[0];
    };

    //формирование объекта имен файлов из объекта всех имен файлов (pathAll)
    let nameFileThisPage = (pathAll) => {
        let decode = decodeUri();

        for (let index in pathAll) {
            if(decode === index && pathAll.hasOwnProperty(index)) {
                let objThisNameFile = {};
                objThisNameFile = pathAll[index];
                return objThisNameFile;
            }
        }
    };

    //функция создания элемента DOM

    // function buttonDomCity(arrayCityButton, divForButton) {
    //     let buttonDiv = document.createElement('div');//div кнопоки
    //     buttonDiv.className = 'cityPopulation';
    //
    //     let buttonName = document.createElement('a');
    //     buttonName.className = 'cityPopulationA';
    //     buttonName.setAttribute('data-name', arrayCityButton.name);
    //     buttonName.setAttribute('data-idcity', startCity - 1);
    //     buttonName.innerHTML = arrayCityButton.name;
    //     buttonDiv.appendChild(buttonName);
    //
    //     buttonDiv.addEventListener('click', operationsButton);
    //     divForButton.appendChild(buttonDiv);
    //
    //     arrayCityButton.htmlButton = buttonDiv;
    // }

    let imgBox = document.querySelector('.img');

    let a = nameFileThisPage(pathAll);
    imgBox.setAttribute('src', 'assets/img/'+ a.img.mainImg[0]);


    // let target = document.querySelector('.img');
    // let target1 = document.querySelector('.img_a');
    // let href = 'assets/img/'+decodeUri();
    // console.log(href);
    // let name = '2.jpg';
    // let href1 = 'assets/img/'+name;
    //
    // target.setAttribute('src', href +'.jpg');
    //
    // target.addEventListener('click', () => {
    //     target1.setAttribute('src', href1);
    // });
    // arr.push(6);



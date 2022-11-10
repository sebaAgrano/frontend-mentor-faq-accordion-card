const accordionList = document.getElementsByClassName('accordion');
const faqList = document.getElementsByClassName('faq');
const boxImage = document.querySelector('.img-desk-box');

let flag = {
    actual: 0,
    previous: 0
}

const toggleElements = position => {
    faqList[position].childNodes[1].classList.toggle('bold-tittle');
    faqList[position].childNodes[3].classList.toggle('show-info');
    accordionList[position].childNodes[3].classList.toggle('image-rotate');
    toggleBox(faqList);
}

const countClass = (list) => {
    let count = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i].childNodes[1].classList.contains('bold-tittle')) {
            count++;
        }
    }

    flag.previous = flag.actual;
    flag.actual = count;    
}

const toggleBox = list => {

    countClass(list);
    
    if (flag.actual === 0) {
        boxImage.classList.remove('box-traslate');
    }

    if (flag.actual === 1 && flag.previous === 0) {
        boxImage.classList.add('box-traslate');
    }
}


for (let i = 0; i < accordionList.length; i++) {
    accordionList[i].addEventListener('click', () => {
        toggleElements(i);
    });
}



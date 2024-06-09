console.log('hadeh');
ant-radio-wrapper-checked
ant-radio-checked

let pivot = 3;
const labels = document.getElementsByTagName('label');
for(let i = 0; i < labels.length; i++){
    if(i % pivot == 0 && i != 0){
        labels[i].classList.add('ant-radio-wrapper-checked');

        const spanElement = labels[i].children[0];
        spanElement.classList.add('ant-radio-checked');

        pivot += 4;
    }
}

// 3, 7, 11, 15

let pivot0 = 3, pivot2 = 3;
const labels2 = document.getElementsByTagName('label');
for(let i = 0; i < labels2.length; i++){
    if (i % pivot2 == 0 && i != 0) {
        // labels2[i].classList.add('ant-radio-wrapper-checked');
        // labels2[i].setAttribute('class', 'ant-radio-wrapper ant-radio-wrapper-checked ant-radio-wrapper-in-form-item css-1exp8hh');

        const span = labels2[i].children[0];
        // span.classList.add('ant-radio-checked');
        // span.children[0].setAttribute('checked', 'true');

        span.children[0].click();

        pivot0 += 4;
        pivot2 = pivot0 - generate0Or1();
    }
}

// ant-form-item-has-success
// Saran saya agar bapak lebih banyak memberikan praktik langsung pada saat mengajar.
// Lebih banyak praktik langsung
const outers = document.querySelectorAll('div.ant-form-item');
for (let i = 0; i < outers.length; i++) {
    outers[i].classList.add('ant-form-item-has-success');
}

function generate0Or1() {
    return (+new Date()) % 2;
}

let pivot3 = 4, pivot4 = 4;
const pilihan = document.querySelectorAll('.rseUEf');
for(let i = 0; i < pilihan.length; i++){
    if (i % pivot4 == 0 && i != 0) {
        pilihan[i].click();

        pivot3 += 5;
        pivot4 = pivot3 - generate0Or1();
    }
}

/**
 * 0 3 4
 * 5 8 9
 * 10 13 14
 */
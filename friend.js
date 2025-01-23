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

// milih pilihan ke-3 atau ke-4
function generate0Or1() {
    return (+new Date()) % 2;
}

let pivotI = 3, pivotII = 3;
const labelsI = document.getElementsByTagName('label');
for(let i = 0; i < labelsI.length; i++){
    if (i % pivotII == 0 && i != 0) {
        // labelsI[i].classList.add('ant-radio-wrapper-checked');
        // labelsI[i].setAttribute('class', 'ant-radio-wrapper ant-radio-wrapper-checked ant-radio-wrapper-in-form-item css-1exp8hh');

        const span = labelsI[i].children[0];
        // span.classList.add('ant-radio-checked');
        // span.children[0].setAttribute('checked', 'true');

        span.children[0].click();

        pivotI += 4;
        pivotII = pivotI - generate0Or1();
    }
}

// milih pilihan ke-1 atau ke-2
function generate0Or1() {
    return (+new Date()) % 2;
}

let pivotIII = 0, pivotIV = 1;
const labelsII = document.getElementsByTagName('label');
for(let i = 0; i < labelsII.length; i++){
    if (i % pivotIV == 0) {
        const span = labelsII[i].children[0];
        span.children[0].click();

        pivotIII += 4;
        pivotIV = pivotIII + generate0Or1();
    }
}

// ant-form-item-has-success
// Saran saya agar bapak lebih banyak memberikan praktik langsung pada saat mengajar.
// Lebih banyak praktik langsung
const outers = document.querySelectorAll('div.ant-form-item');
for (let i = 0; i < outers.length; i++) {
    outers[i].classList.add('ant-form-item-has-success');
}

// untuk google form
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

// punya daud
const jawabanSingkat = document.querySelectorAll('.whsOnd');
const paragraf = document.querySelectorAll('.KHxj8b');
const pilihanGanda = document.querySelectorAll('.AB7Lab');

const eventInput = new Event('input', {
    bubbles: true,
    cancelable: true,
});

jawabanSingkat[0].value = 'daudtambunan2@gmail.com';
jawabanSingkat[0].dispatchEvent(eventInput);
jawabanSingkat[1].value = 'testDaud Hamonangan Tambunan2';
jawabanSingkat[1].dispatchEvent(eventInput);
jawabanSingkat[2].value = '22010122120018';
jawabanSingkat[2].dispatchEvent(eventInput);
jawabanSingkat[3].value = '081375737228';
jawabanSingkat[3].dispatchEvent(eventInput);
paragraf[0].value = 'Jalan Purwosari Gang Baru Blok XB, Medan, Sumatera Utara';
paragraf[0].dispatchEvent(eventInput);
paragraf[1].value = 'Jl. Gondang Barat I No.22, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277';
paragraf[1].dispatchEvent(eventInput);
jawabanSingkat[4].value = 'Marlon Tambunan';
jawabanSingkat[4].dispatchEvent(eventInput);
jawabanSingkat[5].value = 'TNI-AD';
jawabanSingkat[5].dispatchEvent(eventInput);
jawabanSingkat[6].value = '081263033441';
jawabanSingkat[6].dispatchEvent(eventInput);
jawabanSingkat[7].value = 'Hotmaida Sitorus S.Pd, M.Si';
jawabanSingkat[7].dispatchEvent(eventInput);
jawabanSingkat[8].value = 'Guru';
jawabanSingkat[8].dispatchEvent(eventInput);
jawabanSingkat[9].value = '081263253369';
jawabanSingkat[9].dispatchEvent(eventInput);
pilihanGanda[1].click();
pilihanGanda[13].click();
pilihanGanda[32].click();
pilihanGanda[66].click();
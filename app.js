const divsNotiNew = document.querySelectorAll('.newNoti');
const readNot = document.querySelector('.content-read');
const contNotNumber = document.querySelector('.content-read');
const readAll = document.querySelector('.all_read');
const message = document.querySelector('.newMessage');

let contNum = 0;
let notRed = 0;
divsNotiNew.forEach(AllNewNot => {
    AllNewNot.addEventListener('click', notRead);
});

function notRead(e) {
    const notRed = document.querySelectorAll('.buton-read');
    e.currentTarget.removeEventListener('click', notRead);
    e.currentTarget.style.backgroundColor = '#fff';
    let number = Number(e.currentTarget.dataset.noti);
    notRed.forEach(deletBton => {
        let numberBton = Number(deletBton.dataset.bton);
        if(number === numberBton){
            deletBton.style.display = 'none';
            if(number && numberBton == '4'){
                message.textContent = 'Hello, thanks for setting up the Chesse Club. I´ve been a member for a few weeks now and i´m already having lots of fun and improving my game.'
            }
        }
    })
    let newNumber = ++contNum;
    let opRest = 4 - newNumber;
    contNotNumber.textContent = opRest;
}

readAll.addEventListener('click',markAll)
function markAll() {
    const notRed = document.querySelectorAll('.buton-read');
    divsNotiNew.forEach(markColor =>{
        markColor.style.backgroundColor = '#fff';
    });
    notRed.forEach(btonMark =>{
        btonMark.style.display = 'none';
    })
    contNotNumber.textContent = '0'
}
// All Page Declaracation & Radio Btn
const homePage = document.querySelector('#boxHome');
const nyPage = document.querySelector('.boxNY')
const jerPage = document.querySelector('.boxJ')
const mosPage = document.querySelector('.boxMos')
const tokPage = document.querySelector('.boxT')
const marPage = document.querySelector('.boxMar')
const romePage = document.querySelector('.boxR')
const kamPage = document.querySelector('.boxK')
const phoPage = document.querySelector('.boxP')

const homeBtn = document.querySelector('#btnHome');
const nyBtn = document.querySelector('#btnNY')
const jerBtn = document.querySelector('#btnJ')
const mosBtn = document.querySelector('#btnMos')
const tokBtn = document.querySelector('#btnT')
const marBtn = document.querySelector('#btnMar')
const romeBtn = document.querySelector('#btnR')
const kamBtn = document.querySelector('#btnK')
const phoBtn = document.querySelector('#btnP')

// Page Event Listeners
homeBtn.addEventListener('click', () => {
    homePage.style.display = 'block';
    nyBtn.checked = false;
    nyPage.style.display = 'none';
    jerBtn.checked = false;
    jerPage.style.display = 'none';
    mosBtn.checked = false;
    mosPage.style.display = 'none'
    tokBtn.checked = false;
    tokPage.style.display = 'none';
    marBtn.checked = false;
    marPage.style.display = 'none';
    romeBtn.checked = false;
    romePage.style.display = 'none';
    kamBtn.checked = false;
    kamPage.style.display = 'none';
    phoBtn.checked = false;
    phoPage.style.display = 'none';
})

nyBtn.addEventListener('click', () => {
    homeBtn.checked = false
    homePage.style.display = 'none';
    nyPage.style.display = 'block';
    jerBtn.checked = false;
    jerPage.style.display = 'none';
    mosBtn.checked = false;
    mosPage.style.display = 'none'
    tokBtn.checked = false;
    tokPage.style.display = 'none';
    marBtn.checked = false;
    marPage.style.display = 'none';
    romeBtn.checked = false;
    romePage.style.display = 'none';
    kamBtn.checked = false;
    kamPage.style.display = 'none';
    phoBtn.checked = false;
    phoPage.style.display = 'none';
})

jerBtn.addEventListener('click', () => {
    homeBtn.checked = false
    homePage.style.display = 'none';
    nyBtn.checked = false
    nyPage.style.display = 'none';
    jerPage.style.display = 'block';
    mosBtn.checked = false;
    mosPage.style.display = 'none'
    tokBtn.checked = false;
    tokPage.style.display = 'none';
    marBtn.checked = false;
    marPage.style.display = 'none';
    romeBtn.checked = false;
    romePage.style.display = 'none';
    kamBtn.checked = false;
    kamPage.style.display = 'none';
    phoBtn.checked = false;
    phoPage.style.display = 'none';
})

mosBtn.addEventListener('click', () => {
    homeBtn.checked = false
    homePage.style.display = 'none';
    nyBtn.checked = false
    nyPage.style.display = 'none';
    jerPage.style.display = 'none';
    jerBtn.checked = false;
    mosPage.style.display = 'block'
    tokBtn.checked = false;
    tokPage.style.display = 'none';
    marBtn.checked = false;
    marPage.style.display = 'none';
    romeBtn.checked = false;
    romePage.style.display = 'none';
    kamBtn.checked = false;
    kamPage.style.display = 'none';
    phoBtn.checked = false;
    phoPage.style.display = 'none';
})

tokBtn.addEventListener('click', () => {
    homeBtn.checked = false
    homePage.style.display = 'none';
    nyBtn.checked = false
    nyPage.style.display = 'none';
    jerPage.style.display = 'none';
    jerBtn.checked = false;
    mosPage.style.display = 'none'
    mosBtn.checked = false;
    tokPage.style.display = 'block';
    marBtn.checked = false;
    marPage.style.display = 'none';
    romeBtn.checked = false;
    romePage.style.display = 'none';
    kamBtn.checked = false;
    kamPage.style.display = 'none';
    phoBtn.checked = false;
    phoPage.style.display = 'none';
})

marBtn.addEventListener('click', () => {
    homeBtn.checked = false
    homePage.style.display = 'none';
    nyBtn.checked = false
    nyPage.style.display = 'none';
    jerPage.style.display = 'none';
    jerBtn.checked = false;
    mosPage.style.display = 'none'
    mosBtn.checked = false;
    tokPage.style.display = 'none';
    tokBtn.checked = false;
    marPage.style.display = 'block';
    romeBtn.checked = false;
    romePage.style.display = 'none';
    kamBtn.checked = false;
    kamPage.style.display = 'none';
    phoBtn.checked = false;
    phoPage.style.display = 'none';
})

romeBtn.addEventListener('click', () => {
    homeBtn.checked = false
    homePage.style.display = 'none';
    nyBtn.checked = false
    nyPage.style.display = 'none';
    jerPage.style.display = 'none';
    jerBtn.checked = false;
    mosPage.style.display = 'none'
    mosBtn.checked = false;
    tokPage.style.display = 'none';
    tokBtn.checked = false;
    marPage.style.display = 'none';
    marBtn.checked = false;
    romePage.style.display = 'block';
    kamBtn.checked = false;
    kamPage.style.display = 'none';
    phoBtn.checked = false;
    phoPage.style.display = 'none';
})

kamBtn.addEventListener('click', () => {
    homeBtn.checked = false
    homePage.style.display = 'none';
    nyBtn.checked = false
    nyPage.style.display = 'none';
    jerPage.style.display = 'none';
    jerBtn.checked = false;
    mosPage.style.display = 'none'
    mosBtn.checked = false;
    tokPage.style.display = 'none';
    tokBtn.checked = false;
    marPage.style.display = 'none';
    marBtn.checked = false;
    romePage.style.display = 'none';
    romeBtn.checked = false;
    kamPage.style.display = 'block';
    phoBtn.checked = false;
    phoPage.style.display = 'none';
})

phoBtn.addEventListener('click', () => {
    homeBtn.checked = false
    homePage.style.display = 'none';
    nyBtn.checked = false
    nyPage.style.display = 'none';
    jerPage.style.display = 'none';
    jerBtn.checked = false;
    mosPage.style.display = 'none'
    mosBtn.checked = false;
    tokPage.style.display = 'none';
    tokBtn.checked = false;
    marPage.style.display = 'none';
    marBtn.checked = false;
    romePage.style.display = 'none';
    romeBtn.checked = false;
    kamPage.style.display = 'none';
    kamBtn.checked = false;
    phoPage.style.display = 'block';
})
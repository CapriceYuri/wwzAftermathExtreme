// Import Data
import { ny1_data, ny2_data, ny3_data, ny4_data } from "./data/data_ny.js";
import { jer1_data, jer2_data, jer3_data } from "./data/data_jer.js";
import { mos1_data, mos2_data, mos3_data, mos4_data } from "./data/data_mos.js";
import { tok1_data, tok2_data, tok3_data } from "./data/data_tok.js";
import { mar1_data, mar2_data, mar3_data } from "./data/data_mar.js";
import { rom1_data, rom2_data, rom3_data } from "./data/data_rome.js";
import { kam1_data, kam2_data, kam3_data } from "./data/data_kam.js";
import { pho1_data, pho2_data, pho3_data } from "./data/data_pho.js";

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

const ny = document.querySelectorAll('.ny');
const jer = document.querySelectorAll('.jer');
const mos = document.querySelectorAll('.mos');
const tok = document.querySelectorAll('.tokyo');
const mar = document.querySelectorAll('.mar');
const rom = document.querySelectorAll('.rom');
const kam = document.querySelectorAll('.kam');
const pho = document.querySelectorAll('.pho');

const topPlayer = document.querySelectorAll('.topPlayer')
const topTime = document.querySelectorAll('.topTime')

const leaderboard = [ny1_data, ny2_data, ny3_data, ny4_data, jer1_data, jer2_data, jer3_data, mos1_data, mos2_data, mos3_data, mos4_data, tok1_data, tok2_data, tok3_data, mar1_data, mar2_data, mar3_data, rom1_data, rom2_data, rom3_data, kam1_data, kam2_data, kam3_data, pho1_data, pho2_data, pho3_data]


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

// Adding Table Data
function addRecord(obj, location) {
    const tempRow = document.createElement("tr");
    tempRow.classList.add("text-center", "align-middle",)

    const map = document.createElement("td");
    let group = undefined;
    let whitespace = undefined;
    map.textContent = "";
    tempRow.appendChild(map);
    if (obj.medal !== undefined) {
        if (obj.medal === "First") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/firstPlace.png");
            map.appendChild(medalGold)
        }
        if (obj.medal === "Second") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/secondPlace.png");
            map.appendChild(medalGold)
        }
        if (obj.medal === "Third") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/thirdPlace.png");
            map.appendChild(medalGold)
        }
    }
    if (obj.team === "solo") {
        group = document.createElement("i");
        whitespace = document.createElement("span")
        whitespace.textContent = " "
        map.appendChild(whitespace)
        group.classList.add('fa-solid', 'fa-person-rifle', 'text-danger');
        map.appendChild(group);
    } else {
        group = document.createElement("i");
        whitespace = document.createElement("span")
        whitespace.textContent = " "
        map.appendChild(whitespace)
        group.classList.add('fa-solid', 'fa-people-group', 'text-success');
        map.appendChild(group);
    }

    const player = document.createElement("td");
    player.textContent = obj.player;
    tempRow.appendChild(player);

    const sr = document.createElement("td");
    let display = `${Math.floor(obj.time / 60)}m ${obj.time % 60}s`
    sr.textContent = display;
    tempRow.appendChild(sr);

    const src = document.createElement("td");
    const link = document.createElement("a");
    link.textContent = "Full"
    link.href = obj.src;
    link.target = "_blank";
    src.appendChild(link)
    tempRow.appendChild(src)

    location.appendChild(tempRow);
}

// SORTING THE DATA
function sortDataOrder(a, b) {
    return a.time - b.time;
}
function sortingNum(a, b) {
    return a - b;
}

// Check Standind
function checkStanding(obj) {

    let tempArr = [];

    for (let i = 0; i < obj.length; i++) {
        tempArr.push(obj[i].time);
    }
    tempArr.sort(sortingNum)

    const finalizedfirst = tempArr[0];
    const finalizedsecond = tempArr[1];
    const finalizedthird = tempArr[2];

    for (let j = 0; j < obj.length; j++) {
        if (obj[j].time === finalizedfirst) {
            obj[j].medal = 'First';
        }
        if (obj[j].time === finalizedsecond) {
            obj[j].medal = 'Second';
        }
        if (obj[j].time === finalizedthird) {
            obj[j].medal = 'Third';
        }
    }
}

for (let q = 0; q < leaderboard.length; q++) {
    checkStanding(leaderboard[q])
}

// APPEND TO CORRESPONDING TABLE
function appendData(data, chapters) {
    let sorting = data.sort(sortDataOrder);
    for (let x = 0; x < data.length; x++) {
        addRecord(sorting[x], chapters)
    }
}
// EXECUTIONS
appendData(ny1_data, ny[0])
appendData(ny2_data, ny[1])
appendData(ny3_data, ny[2])
appendData(ny4_data, ny[3])

appendData(jer1_data, jer[0])
appendData(jer2_data, jer[1])
appendData(jer3_data, jer[2])

appendData(mos1_data, mos[0])
appendData(mos2_data, mos[1])
appendData(mos3_data, mos[2])
appendData(mos4_data, mos[3])

appendData(tok1_data, tok[0])
appendData(tok2_data, tok[1])
appendData(tok3_data, tok[2])

appendData(mar1_data, mar[0])
appendData(mar2_data, mar[1])
appendData(mar3_data, mar[2])

appendData(rom1_data, rom[0])
appendData(rom2_data, rom[1])
appendData(rom3_data, rom[2])

appendData(kam1_data, kam[0])
appendData(kam2_data, kam[1])
appendData(kam3_data, kam[2])

appendData(pho1_data, pho[0])
appendData(pho2_data, pho[1])
appendData(pho3_data, pho[2])

// LEADERBOARD ENTRY

function appendLeaderBoard(data) {
    for (let x = 0; x < data.length; x++) {
        topPlayer[x].textContent = leaderboard[x][0].player;

        let display = `${Math.floor(leaderboard[x][0].time / 60)}m ${leaderboard[x][0].time % 60}s`

        topTime[x].textContent = display;
    }
}
appendLeaderBoard(leaderboard);

// ADMIN COLORS
const adminColor = document.querySelector('.admin-color');
const adminHead = document.querySelector('.admin-head');
const adminBorder = document.querySelector('.admin-border');
const adminName = document.querySelector('.admin-name');


function changeColor() {
    let colorR = Math.ceil(Math.random() * 255)
    let colorG = Math.ceil(Math.random() * 255)
    let colorB = Math.ceil(Math.random() * 255)
    let color = `rgb(${colorR},${colorG},${colorB})`
    adminColor.style.color = color;
    adminBorder.style.borderColor = color;
    adminHead.style.color = color;
    adminName.style.color = color;
}

setInterval(changeColor, 500)
// Testing Play Music

const musicBtn = document.querySelector(".play-music");
const musicPlayer = document.querySelector(".music-player");
let state = true;

musicBtn.addEventListener('click', () => {
    if (state) {
        musicBtn.innerHTML = `<i class="bi bi-pause-circle-fill"></i>`
        musicPlayer.play();
        state = false;
    } else {
        musicBtn.innerHTML = `<i class="bi bi-play-circle-fill play"></i>`
        musicPlayer.pause();
        state = true;
    }
})

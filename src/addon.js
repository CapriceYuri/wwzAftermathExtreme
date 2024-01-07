import { ny1_data, ny2_data, ny3_data, ny4_data } from "./data/data_ny.js";
import { jer1_data, jer2_data, jer3_data } from "./data/data_jer.js";
import { mos1_data, mos2_data, mos3_data, mos4_data } from "./data/data_mos.js";
import { tok1_data, tok2_data, tok3_data } from "./data/data_tok.js";
import { mar1_data, mar2_data, mar3_data } from "./data/data_mar.js";
import { rom1_data, rom2_data, rom3_data } from "./data/data_rome.js";
import { kam1_data, kam2_data, kam3_data } from "./data/data_kam.js";
import { pho1_data, pho2_data, pho3_data } from "./data/data_pho.js";

const leaderboard = [ny1_data, ny2_data, ny3_data, ny4_data, jer1_data, jer2_data, jer3_data, mos1_data, mos2_data, mos3_data, mos4_data, tok1_data, tok2_data, tok3_data, mar1_data, mar2_data, mar3_data, rom1_data, rom2_data, rom3_data, kam1_data, kam2_data, kam3_data, pho1_data, pho2_data, pho3_data]

const timeAgo = document.querySelectorAll(".timeAgo");

// VARIABLE CONNECTION
const compo = document.querySelectorAll('.compo')
const compoClass = document.querySelectorAll('.compoClass')

function addTeamComp(obj, chTeam, chComp) {
    if (obj.team === 'solo') {
        const solo = document.createElement('img');
        solo.setAttribute('src', `images/player-${obj.player}.png`);
        solo.classList.add('rounded-circle', 'pulse');
        solo.setAttribute('width', '50px');
        solo.setAttribute('height', '50px');

        chTeam.appendChild(solo);
        return
    } else {
        for (let i = 0; i < obj.member.length; i++) {

            const mem = document.createElement('img');
            mem.setAttribute('src', `images/player-${obj.member[i]}.png`);
            mem.classList.add('rounded-circle', 'pulse');
            mem.setAttribute('width', '50px');
            mem.setAttribute('height', '50px');

            chTeam.appendChild(mem);
        }
    }
}

for (let i = 0; i < leaderboard.length; i++) {
    addTeamComp(leaderboard[i][0], compo[i], compoClass[i])
}


const todayDate = new Date();
const getMonth = (todayDate.getMonth()) + 1;
const getDay = todayDate.getDate();
const getYear = todayDate.getFullYear();
const formattedToday = new Date(`${getMonth}/${getDay}/${getYear}`)


for (let x = 0; x < timeAgo.length; x++) {
    const temp = new Date(`${leaderboard[x][0].date}`)
    const tempNum = (Math.floor((formattedToday.getTime() - temp.getTime()) / (86400000))).toString()

    if (+tempNum > 60) {
        timeAgo[x].classList.add("text-danger", "h5");
    } else if (+tempNum > 30) {
        timeAgo[x].classList.add("text-warning", "h6");
    }
    timeAgo[x].textContent = `${tempNum} D/天`
}



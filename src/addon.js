import { ny1_data, ny2_data, ny3_data, ny4_data } from "./data/data_ny.js";
import { jer1_data, jer2_data, jer3_data } from "./data/data_jer.js";
import { mos1_data, mos2_data, mos3_data, mos4_data } from "./data/data_mos.js";
import { tok1_data, tok2_data, tok3_data } from "./data/data_tok.js";
import { mar1_data, mar2_data, mar3_data } from "./data/data_mar.js";
import { rom1_data, rom2_data, rom3_data } from "./data/data_rome.js";
import { kam1_data, kam2_data, kam3_data } from "./data/data_kam.js";
import { pho1_data, pho2_data, pho3_data } from "./data/data_pho.js";

const leaderboard = [ny1_data, ny2_data, ny3_data, ny4_data, jer1_data, jer2_data, jer3_data, mos1_data, mos2_data, mos3_data, mos4_data, tok1_data, tok2_data, tok3_data, mar1_data, mar2_data, mar3_data, rom1_data, rom2_data, rom3_data, kam1_data, kam2_data, kam3_data, pho1_data, pho2_data, pho3_data]
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
        chComp.textContent = `${obj.comp[0]}`
        return
    } else {
        for (let i = 0; i < obj.member.length; i++) {

            const mem = document.createElement('img');
            mem.setAttribute('src', `images/player-${obj.member[i]}.png`);
            mem.classList.add('rounded-circle', 'pulse');
            mem.setAttribute('width', '50px');
            mem.setAttribute('height', '50px');

            chTeam.appendChild(mem);
            chComp.textContent += obj.comp[i];
        }
    }
}

for (let i = 0; i < leaderboard.length; i++) {
    addTeamComp(leaderboard[i][0], compo[i], compoClass[i])
}




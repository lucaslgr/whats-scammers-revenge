var lyricsMusic = 'Não sei mais pra onde ir' +
    + '| Já que a noite foi...'
    + '| Acorda, Pedrinho'
    + '| Que hoje tem campeonato'
    + '| Vem dançar comigo'
    + '| Vai ver que eu te esculacho'
    + '| Sei que não dá pra ver'
    + '| Mas cê vai ver que hoje não tem chocolate'
    + '| Nem de segunda a sexta-feira'
    + '| Não adianta treinar'
    + '| Cê pode vir, mas vem agora'
    + '| Não enrola, rebola'
    + '| Na hora de ir embora, cê chora'
    + '| Não sei mais pra onde ir'
    + '| Já que a noite foi longa'
    + '| Não sei mais pra onde ir'
    + '| Já que a noite foi longa'
    + '| Longa, longa'
    + '| Acorda, Pedrinho'
    + '| Que hoje tem campeonato'
    + '| Vem dançar comigo'
    + '| Vai ver que eu te esculacho'
    + '| Acorda, Pedrinho'
    + '| Que hoje tem campeonato'
    + '| Vem dançar comigo'
    + '| Vai ver que eu te esculacho'
    + '| Não sei mais pra onde ir'
    + '| Já que a noite foi longa'
    + '| Não sei mais pra onde ir'
    + '| Já que a noite foi longa'
    + '| Não sei mais pra onde ir'
    + '| Já que a noite foi longa'
    + '| Longa, longa, longa'
    + '| Longa, longa, longa'
    + '| Longa, longa'
    + '| Longa, longa, longa'
    + '| Não sei mais pra onde ir'
    + '| Já que a noite foi longa'
    + '| Não sei mais pra onde ir'
    + '| Já que a noite foi longa';

var lyricsPieces = lyricsMusic.split('|');
var lyricsPieacesCounter = 0;
var randomTime = Math.random() * 2 + 0.10;

function writeInChat(text) {
    var input = document.querySelector('#main [contenteditable~=true]');
    setTimeout(() => {       
       input.innerHTML = text;
       input.dispatchEvent(new Event('input', {bubbles: true}));
       var button = document.querySelector('button>span[data-icon="send"]').parentElement;
       button.click();
    }, 500);
 }

function beginTheRevenge() {
    if(lyricsPieacesCounter == lyricsPieces.length) {
        lyricsPieacesCounter = 0;
    }
    writeInChat(lyricsPieces[lyricsPieacesCounter]);
    setTimeout(beginTheRevenge, randomTime);

    lyricsPieacesCounter ++;
    randomTime = Math.random() * 2000;
}

beginTheRevenge();

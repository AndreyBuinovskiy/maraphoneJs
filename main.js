const player1 = {
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["sword", "nunchucks", "chain"],
    attack: function(){
        console.log(player1.name + 'Fight...');
    },
}

const player2 = {
    name: "Sonya",
    hp: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["sword", "nunchucks"],
    attack: function(){
        console.log(player1.name + 'Fight...');
    },
}

function createPlayer(classPlayer, objPlayer){
    const $player1 = document.createElement('div');
    $player1.classList.add(classPlayer);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $live = document.createElement('div');
    $live.innerText = objPlayer.hp;
    $live.classList.add('live');
    $live.style.width = '100%';

    const $name = document.createElement('div');
    $name.innerText = objPlayer.name;
    $name.classList.add('name');

    const $img = document.createElement('img');
    $img.src = objPlayer.img;
    const $arenas = document.querySelector('.arenas');

    $progressBar.appendChild($live);
    $progressBar.appendChild($name);
    $character.appendChild($img);
    $player1.appendChild($progressBar);
    $player1.appendChild($character);

    $arenas.appendChild($player1);
}

createPlayer('player1', player1,);
createPlayer('player2', player2, );
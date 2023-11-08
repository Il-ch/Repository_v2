const listView = {
    render: function (players) {
        const list = document.querySelector('.list');
        list.innerHTML = '';
        players.forEach(function (player) {
            const li = document.createElement('li');
            li.textContent = `${player.surname} ${player.name}`;
            list.appendChild(li);
        });
    },
};

export {listView};
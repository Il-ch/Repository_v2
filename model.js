export const model = {
    players: [
        {surname: 'Давиденко', name: 'Олександр'},
        {surname: 'Ілющенко', name: 'Денис'},
        {surname: 'Корнєєв', name: 'Олексій'},
        {surname: 'Бугаєць', name: 'Антон'},
        {surname: 'Шаповалов', name: 'Микола'},
        {surname: 'Фоменко', name: 'Денис'},
        {surname: 'Радзіховський', name: 'Віктор'},
    ],
    getPlayers: function () {
        return this.players;
    },
    addPlayer: function (task) {
        this.tasks.push(task);
    },
};
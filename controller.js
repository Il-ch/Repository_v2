import {model} from "./Model.js";
import {listView} from "./View.js";

export const controller = {
    init: function () {
        const players = model.getPlayers();
        listView.render(players);
    },
};
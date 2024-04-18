import { writable } from "svelte/store";

const newStore = {
    val: 0,
    r: "",
    type: 0,
    s: 0,
    filter: [],
    info: -1,
    autore: -1,
    chat: "",
}

function createStore() {
    const { subscribe, set, update } = writable(newStore);

    return {
        subscribe,
        set,
        update,
    };
}

export const result = writable("");

export const store = createStore();
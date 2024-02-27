import { writable } from "svelte/store";

const newStore = {
    val: 0
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
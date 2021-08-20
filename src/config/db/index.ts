import Dexie, {Table} from "dexie";
import {Audio} from "./types";

class AudioDB extends Dexie {
    audios!: Table<Audio, string>

    constructor() {
        super('AudioDB');
        this.version(1).stores({
            audios: '++id, src',
        })
    }
}

export const db = new AudioDB();

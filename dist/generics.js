"use strict";
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItem("Ali");
usernames.addItem("Danial");
usernames.addItem("Zubair");
const listNumbers = new StorageContainer();
listNumbers.addItem(20);
listNumbers.addItem(19);
listNumbers.addItem(300);
console.log(listNumbers.getItem(2));

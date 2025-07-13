class StorageContainer<T> {

    private contents: T[];

    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }
}

// map to a different type
const usernames = new StorageContainer<string>();
usernames.addItem("Ali");
usernames.addItem("Danial");
usernames.addItem("Zubair");
// console.log(usernames.getItem(0));


const listNumbers = new StorageContainer<number>();
listNumbers.addItem(20);
listNumbers.addItem(19);
listNumbers.addItem(300);
console.log(listNumbers.getItem(2));
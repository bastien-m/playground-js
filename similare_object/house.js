module.exports = class House {

    

    constructor() {
        this.name = 'my house';
        this.spec = {
            room: 4
        }
    }


    addRoom() {
        this.spec.room++
    }

}


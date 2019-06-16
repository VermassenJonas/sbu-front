export class Trait {
    constructor(
        private _id: number,
        private _name: string,
        private _description: string
    ) { }

    static fromJSON(json: any): Trait {
        const trait = new Trait(json.id, json.name, json.description);
        return trait;
    }

    toJSON(): any {
        return {
            id: this.id, 
            name: this.name, 
            description: this.description
        };
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
}
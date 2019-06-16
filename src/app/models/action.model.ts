export class Action{
    constructor(
        private _id : number,
        private _name : string,
        private _type : string,
        private _description : string
    ){}

    static fromJSON(json: any): Action {
        const stat = new Action(
             json.id,
             json.name,
             json.type,
             json.description
            );
        return stat;
    }

    toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            description: this.description,
        };
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get type(){
        return this._type;
    }
    get description(){
        return this._description;
    }
}
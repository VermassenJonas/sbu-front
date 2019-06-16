import { Monster } from "./monster.model";

export class User {
    public id: number;
    public name: string;
    public email: string;
    public joinDate: Date;
    public collection: Monster[];

    static fromJSON(json : any) : User{
        let user = new User();
        user.id = json.id;
        user.name = json.name;
        user.email = json.email;
        user.joinDate = json.joinDate;
        user.collection = json.collection.map( monster => Monster.fromJSON(monster));
        return user;
    }
    toJSON() : any{
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            joinDate: this.joinDate,
            collection: this.collection.map(monster => monster.toJSON())
        };
    }
}
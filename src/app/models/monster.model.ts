import { Statline } from "./statline.model";
import { Action } from "./action.model";
import { Trait } from "./trait.model";
import { User } from "./user.model";

export class Monster {
    public id: number;
    public name: string;
    public size: string;
    public monsterType: string;
    public languages: string[];
    public tags: string[];
    public alignment: string;
    public armourClass: number;
    public armourType: string;
    public hitPoints: number;
    public hpFormula: string;
    public speed: any;
    public stats: Statline;
    public resistances: string[];
    public immunities: string[];
    public conditionImmunities: string[];
    public vulnerabilities: string[];
    public skills: any;
    public challengeRating: string;
    public traits: Trait[];
    public actions: Action[];
    public fluff: string;
    public author: User;
    public created: Date;
    public lastUpdated: Date;

    static fromJSON(json : any) : Monster{
        console.log(json);
        console.log(json.stats);
        let monster = new Monster();
        monster.id = json.id;
        monster.name = json.name;
        monster.size = json.size;
        monster.monsterType = json.monsterType;
        monster.languages = json.languages;
        monster.tags = json.tags;
        monster.alignment = json.alignment;
        monster.armourClass = json.armourClass;
        monster.armourType = json.armourType;
        monster.hitPoints = json.hitPoints;
        monster.hpFormula = json.hpFormula;
        monster.speed = json.speed;
        monster.stats = Statline.fromJSON(json.stats);
        monster.resistances = json.resistances;
        monster.immunities = json.immunities;
        monster.conditionImmunities = json.conditionImmunities;
        monster.vulnerabilities = json.vulnerabilities;
        monster.skills = json.skills;
        monster.challengeRating = json.challengeRating;
        monster.traits = json.traits.map(trait => Trait.fromJSON(trait));
        monster.actions = json.actions.map(action => Action.fromJSON(action));
        monster.fluff = json.fluff;
        monster.author = User.fromJSON(json.author);
        monster.created = json.created;
        monster.lastUpdated = json.lastUpdated;
        return monster;
    }
    toJSON() : any{
        return {
            id: this.id,
            name: this.name,
            size: this.size,
            monsterType: this.monsterType,
            languages: this.languages,
            tags: this.tags,
            alignment: this.alignment,
            armourClass: this.armourClass,
            armourType: this.armourType,
            hitPoints: this.hitPoints,
            hpFormula: this.hpFormula,
            speed: this.speed,
            stats: this.stats.toJSON(),
            resistances: this.resistances,
            immunities: this.immunities,
            conditionImmunities: this.conditionImmunities,
            vulnerabilities: this.vulnerabilities,
            skills: this.skills,
            challengeRating: this.challengeRating,
            traits: this.traits.map(trait => trait.toJSON()),
            actions: this.actions.map(action => action.toJSON()),
            fluff: this.fluff,
            author: this.author.toJSON(),
            created: this.created,
            lastUpdated: this.lastUpdated,
        };
    }

}
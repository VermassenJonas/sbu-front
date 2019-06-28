import { Statline } from "./statline.model";
import { Action } from "./action.model";
import { Trait } from "./trait.model";
import { User } from "./user.model";
import { Skill } from './skill.model';
import { Speed } from './speed.model';

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
    public hitpoints: number;
    public hpFormula: string;
    public speed: Speed[];
    public stats: Statline;
    public resistances: string[];
    public immunities: string[];
    public conditionImmunities: string[];
    public vulnerabilities: string[];
    public skills: Skill[];
    public challengeRating: string;
    public traits: Trait[];
    public actions: Action[];
    public fluff: string;
    public author: User;
    public created: Date;
    public lastUpdated: Date;

    static fromJSON(json: any): Monster {
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
        monster.hitpoints = json.hitpoints;
        monster.hpFormula = json.hpFormula;
        monster.speed = Speed.fromJSONArray(json.speeds);
        monster.stats = Statline.fromJSON(json.stats);
        monster.resistances = json.resistances;
        monster.immunities = json.immunities;
        monster.conditionImmunities = json.conditionImmunities;
        monster.vulnerabilities = json.vulnerabilities;
        monster.skills = Skill.fromJSONArray(json.skills);
        monster.challengeRating = json.challengeRating;
        monster.traits = json.traits.map(trait => Trait.fromJSON(trait));
        monster.actions = json.actions.map(action => Action.fromJSON(action));
        monster.fluff = json.fluff;
        monster.author = User.fromJSON(json.author);
        monster.created = json.created;
        monster.lastUpdated = json.lastUpdated;

        return monster;
    }
    toJSON(email: string): any {
        console.log(this);
        

        let result = {
            id: this.id? this.id:0,
            name: this.name? this.name:"",
            size: this.size? this.size:"",
            monsterType: this.monsterType? this.monsterType:"",
            languages: this.languages? this.languages:[],
            tags: this.tags? this.tags:[],
            alignment: this.alignment? this.alignment:"",
            armourClass: this.armourClass? this.armourClass:0,
            armourType: this.armourType? this.armourType:"",
            hitPoints: this.hitpoints? this.hitpoints:0,
            hpFormula: this.hpFormula? this.hpFormula:"",
            speeds: this.speed? Speed.toJSONArray(this.speed):[],
            stats: this.stats? this.stats.toJSON():"",
            resistances: this.resistances? this.resistances:[],
            immunities: this.immunities? this.immunities:[],
            conditionImmunities: this.conditionImmunities? this.conditionImmunities:[],
            vulnerabilities: this.vulnerabilities? this.vulnerabilities:[],
            skills: this.skills? Skill.toJSONArray(this.skills): [],
            challengeRating: this.challengeRating? this.challengeRating:"",
            traits: this.traits? this.traits.map(trait => trait.toJSON()):[],
            actions: this.actions? this.actions.map(action => action.toJSON()):[],
            fluff: this.fluff? this.fluff:"",
            author: this.author? this.author.toJSON():"",
            authorEmail: email? email:"",
        };
        if(this.created) {
            result["created"] = this.created
        }
        if(this.lastUpdated) {
            result["lastUpdated"] = this.lastUpdated
        }
        
        

        return result;
    }
    constructor() {
        this.speed = [];
        this.skills = [];
        this.stats = new Statline();
        this.author = new User();
        this.traits = [];
        this.actions = [];
    }

}
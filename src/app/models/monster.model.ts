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
        monster.speed = [];
        monster.stats = Statline.fromJSON(json.stats);
        monster.resistances = json.resistances;
        monster.immunities = json.immunities;
        monster.conditionImmunities = json.conditionImmunities;
        monster.vulnerabilities = json.vulnerabilities;
        monster.skills = [];
        monster.challengeRating = json.challengeRating;
        monster.traits = json.traits.map(trait => Trait.fromJSON(trait));
        monster.actions = json.actions.map(action => Action.fromJSON(action));
        monster.fluff = json.fluff;
        monster.author = User.fromJSON(json.author);
        monster.created = json.created;
        monster.lastUpdated = json.lastUpdated;

        Object.keys(json.speed).forEach(function (key, index) {
            monster.speed.push(new Speed(key, json.speed[key]))
        });

        Object.keys(json.skills).forEach(function (key, index) {
            monster.skills.push(new Skill(key, json.skills[key]))
        });

        return monster;
    }
    toJSON(email: string): any {
        console.log(this);
        let jSpeeds = [];
        if (this.speed) {
            for (let i = 0; i < this.speed.length; i++) {
                jSpeeds[this.speed[i].speedName] = this.speed[i].speedValue;
            }
        }
        let jSkills = [];
        if (this.skills) {
            for (let i = 0; i < this.skills.length; i++) {
                jSkills[this.skills[i].skillName] = this.skills[i].skillMod;
            }
        }

        return {
            id: this.id? this.id:null,
            name: this.name? this.name:null,
            size: this.size? this.size:null,
            monsterType: this.monsterType? this.monsterType:null,
            languages: this.languages? this.languages:null,
            tags: this.tags? this.tags:null,
            alignment: this.alignment? this.alignment:null,
            armourClass: this.armourClass? this.armourClass:null,
            armourType: this.armourType? this.armourType:null,
            hitpoints: this.hitpoints? this.hitpoints:null,
            hpFormula: this.hpFormula? this.hpFormula:null,
            speed: this.speed? jSpeeds:null,
            stats: this.stats? this.stats.toJSON():null,
            resistances: this.resistances? this.resistances:null,
            immunities: this.immunities? this.immunities:null,
            conditionImmunities: this.conditionImmunities? this.conditionImmunities:null,
            vulnerabilities: this.vulnerabilities? this.vulnerabilities:null,
            skills: this.skills? jSkills:null,
            challengeRating: this.challengeRating? this.challengeRating:null,
            traits: this.traits? this.traits.map(trait => trait.toJSON()):null,
            actions: this.actions? this.actions.map(action => action.toJSON()):null,
            fluff: this.fluff? this.fluff:null,
            author: this.author? this.author.toJSON():null,
            authorEmail: email? email:null,
            created: this.created? this.created:null,
            lastUpdated: this.lastUpdated? this.lastUpdated:null,
        };
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
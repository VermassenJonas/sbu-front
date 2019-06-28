import { Statline } from "./statline.model";
import { Action } from "./action.model";
import { Trait } from "./trait.model";
import { User } from "./user.model";
import { Skill } from './skill.model';
import { Speed } from './speed.model';

export class Monster {
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    private _size : string;
    public get size() : string {
        return this._size;
    }
    public set size(v : string) {
        this._size = v;
    }
    
    
    private _monsterType : string;
    public get monsterType() : string {
        return this._monsterType;
    }
    public set monsterType(v : string) {
        this._monsterType = v;
    }
    
    
    private _languages : string[];
    public get languages() : string[] {
        return this._languages;
    }
    public set languages(v : string[]) {
        this._languages = v;
    }
    
    
    private _tags : string[];
    public get tags() : string[] {
        return this._tags;
    }
    public set tags(v : string[]) {
        this._tags = v;
    }
    
    
    private _alignment : string;
    public get alignment() : string {
        return this._alignment;
    }
    public set alignment(v : string) {
        this._alignment = v;
    }
    
    
    private _armourClass : number;
    public get armourClass() : number {
        return this._armourClass;
    }
    public set armourClass(v : number) {
        this._armourClass = v;
    }
    
    private _armourType : string;
    public get armourType() : string {
        return this._armourType;
    }
    public set armourType(v : string) {
        this._armourType = v;
    }
    
    private _hitpoints : number;
    public get hitpoints() : number {
        return this._hitpoints;
    }
    public set hitpoints(v : number) {
        this._hitpoints = v;
    }
    
    private _hpFormula : string;
    public get hpFormula() : string {
        return this._hpFormula;
    }
    public set hpFormula(v : string) {
        this._hpFormula = v;
    }
    
    private _speed : Speed[];
    public get speed() : Speed[] {
        return this._speed;
    }
    public set speed(v : Speed[]) {
        this._speed = v;
    }
    
    private _stats : Statline;
    public get stats() : Statline {
        return this._stats;
    }
    public set stats(v : Statline) {
        this._stats = v;
    }
    
    private _resistances : string[];
    public get resistances() : string[] {
        return this._resistances;
    }
    public set resistances(v : string[]) {
        this._resistances = v;
    }
    
    private _immunities : string[];
    public get immunities() : string[] {
        return this._immunities;
    }
    public set immunities(v : string[]) {
        this._immunities = v;
    }
    
    private _conditionImmunities : string[];
    public get conditionImmunities() : string[] {
        return this._conditionImmunities;
    }
    public set conditionImmunities(v : string[]) {
        this._conditionImmunities = v;
    }
    
    private _vulnerabilities : string[];
    public get vulnerabilities() : string[] {
        return this._vulnerabilities;
    }
    public set vulnerabilities(v : string[]) {
        this._vulnerabilities = v;
    }
    
    private _skills : Skill[];
    public get skills() : Skill[] {
        return this._skills;
    }
    public set skills(v : Skill[]) {
        this._skills = v;
    }
    
    private _challengeRating : string;
    public get challengeRating() : string {
        return this._challengeRating;
    }
    public set challengeRating(v : string) {
        this._challengeRating = v;
    }
    
    private _traits : Trait[];
    public get traits() : Trait[] {
        return this._traits;
    }
    public set traits(v : Trait[]) {
        this._traits = v;
    }
    
    private _actions : Action[];
    public get actions() : Action[] {
        return this._actions;
    }
    public set actions(v : Action[]) {
        this._actions = v;
    }
    
    private _fluff : string;
    public get fluff() : string {
        return this._fluff;
    }
    public set fluff(v : string) {
        this._fluff = v;
    }
    
    private _author : User;
    public get author() : User {
        return this._author;
    }
    public set author(v : User) {
        this._author = v;
    }
    
    private _created : Date;
    public get created() : Date {
        return this._created;
    }
    public set created(v : Date) {
        this._created = v;
    }
    
    private _lastUpdated : Date;
    public get lastUpdated() : Date {
        return this._lastUpdated;
    }
    public set lastUpdated(v : Date) {
        this._lastUpdated = v;
    }
    

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
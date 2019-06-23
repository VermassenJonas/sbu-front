export class Statline {

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }

    
    private _str : number;
    public get str() : number {
        return this._str;
    }
    public set str(v : number) {
        this._str = v;
    }
    
    private _dex : number;
    public get dex() : number {
        return this._dex;
    }
    public set dex(v : number) {
        this._dex = v;
    }
    
    private _con : number;
    public get con() : number {
        return this._con;
    }
    public set con(v : number) {
        this._con = v;
    }
    
    private _int : number;
    public get int() : number {
        return this._int;
    }
    public set int(v : number) {
        this._int = v;
    }
    
    private _wis : number;
    public get wis() : number {
        return this._wis;
    }
    public set wis(v : number) {
        this._wis = v;
    }
    
    private _cha : number;
    public get cha() : number {
        return this._cha;
    }
    public set cha(v : number) {
        this._cha = v;
    }
    
    
    
    
    
    
    



    constructor() { }

    static fromJSON(json: any): Statline {
        console.log(json);
        const stat = new Statline();
        stat.id = json.id;
        stat.str = json.str;
        stat.dex = json.dex;
        stat.con = json.con;
        stat.wis = json.wis;
        stat.int = json.int;
        stat.cha = json.cha;
        return stat;
    }

    toJSON(): any {
        return {
            id: this.id,
            str: this.str,
            dex: this.dex,
            con: this.con,
            wis: this.wis,
            int: this.int,
            cha: this.cha,
        };
    }
    



}
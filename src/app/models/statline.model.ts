export class Statline {
    constructor(

        private _id: number,
        private _str: number,
        private _dex: number,
        private _con: number,
        private _wis: number,
        private _int: number,
        private _cha: number
    ) { }

    static fromJSON(json: any): Statline {
        const stat = new Statline(json.id, json.str, json.dex, json.con, json.wis, json.int, json.cha);
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
    get id() {
        return this._id;
    }
    get str() {
        return this._str;
    }
    get dex() {
        return this._dex;
    }
    get con() {
        return this._con;
    }
    get wis() {
        return this._wis;
    }
    get int() {
        return this._int;
    }
    get cha() {
        return this._cha;
    }



}

export class Skill {


    private _skillName: string;
    public get skillName(): string {
        return this._skillName;
    }
    public set skillName(v: string) {
        this._skillName = v;
    }

    private _skillMod: number;
    public get skillMod(): number {
        return this._skillMod;
    }
    public set skillMod(v: number) {
        this._skillMod = v;
    }


    constructor(skillName: string,skillMod: number) {
        this._skillMod = skillMod,
        this._skillName = skillName
     }

     static fromJSONArray(jsonArray: any[]): Skill[] {
        let result = [];
        jsonArray.forEach(json => {
            result.push(Skill.fromJSON(json));
        });
        return result;
    }
    static toJSONArray(jsonArray: Skill[]): any[] {
        let result = [];
        jsonArray.forEach(skill => {
            result.push(skill.toJSON());
        });
        return result;
    }
    static fromJSON(json: any): Skill{
        return new Skill(json.skillName, json.skillMod);
    }

    toJSON(){
        return {
            skillName : this.skillName,
            skillMod : this.skillMod
        }
    }
}
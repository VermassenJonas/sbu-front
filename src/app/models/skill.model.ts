
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
}
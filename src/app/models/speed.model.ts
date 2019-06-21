

export class Speed {


    
    private _speedName : string;
    public get speedName() : string {
        return this._speedName;
    }
    public set speedName(v : string) {
        this._speedName = v;
    }
    
    private _speedValue : number;
    public get speedValue() : number {
        return this._speedValue;
    }
    public set speedValue(v : number) {
        this._speedValue = v;
    }
    

    constructor(speedName: string, speedValue: number) {
        this._speedName = speedName;
        this._speedValue = speedValue;
    }
}
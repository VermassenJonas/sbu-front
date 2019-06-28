

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
    
    static fromJSONArray(jsonArray: any[]): Speed[] {
        let result = [];
        jsonArray.forEach(json => {
            result.push(Speed.fromJSON(json));
        });
        return result;
    }
    static toJSONArray(jsonArray: Speed[]): any[] {
        let result = [];
        jsonArray.forEach(speed => {
            result.push(speed.toJSON());
        });
        return result;
    }
    static fromJSON(json: any): Speed{
        return new Speed(json.speedName, json.speedValue);
    }

    toJSON(){
        return {
            speedName : this.speedName,
            speedValue : this.speedValue
        }
    }
    
}
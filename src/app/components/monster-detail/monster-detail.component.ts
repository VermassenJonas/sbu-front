import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { Monster } from 'src/app/models/monster.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent implements OnInit {


  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }

  private _monster: Monster;
  public get monster(): Monster {
    return this._monster;
  }
  public set monster(v: Monster) {
    this._monster = v;
  }


  private _subscribed: boolean;
  public get subscribed(): boolean {
    return this._subscribed;
  }
  public set subscribed(v: boolean) {
    this._subscribed = v;
  }

  private _canSubscribe: boolean;
  public get canSubscribe(): boolean {
    return this._canSubscribe;
  }
  public set canSubscribe(v: boolean) {
    this._canSubscribe = v;
  }




  constructor(private route: ActivatedRoute,
    private monsterDataService: MonsterDataService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.id = parseInt(id);
    this.monsterDataService.getMonster(this.id).subscribe(result => {
      this.monster = Monster.fromJSON(result);
      if (this.authService.email != this.monster.author.email) {
        this.canSubscribe = true;
        if (!!this.authService.email) {
          this.monsterDataService.collection$.subscribe(result => {
            this.subscribed = result.filter(monster => monster.id == this.monster.id).length >0;
          })
        }

      }
    });

  }


  subscribe() {
    if (!!this.authService.email) {
      this.monsterDataService.subscribeToMonster(this.monster).subscribe(result => {
        this.subscribed = true;
      });
    } else {
      window.location.assign("/login");
    }

  }
  unsubscribe() {
    this.monsterDataService.unsubscribeFromMonster(this.monster).subscribe(result => {
      this.subscribed = false;
    });
  }
}

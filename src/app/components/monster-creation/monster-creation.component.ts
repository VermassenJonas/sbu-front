import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from 'src/app/models/monster.model';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { transitiveScopesFor } from '@angular/core/src/render3/jit/module';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-monster-creation',
  templateUrl: './monster-creation.component.html',
  styleUrls: ['./monster-creation.component.css']
})
export class MonsterCreationComponent implements OnInit {



  private _monsterForm: FormGroup;
  public get monsterForm(): FormGroup {
    return this._monsterForm;
  }
  public set monsterForm(v: FormGroup) {
    this._monsterForm = v;
  }



  
  private _monster$ : Observable<Monster>;
  public get monster$() : Observable<Monster> {
    return this._monster$;
  }
  public set monster$(v : Observable<Monster>) {
    this._monster$ = v;
  }
  




  private id: number;



  constructor(
    private route: ActivatedRoute,
    private monsterDataService: MonsterDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));

    this.monster$ = this.monsterDataService.getMonster(this.id);
    this.monster$.pipe(
      tap(monster => this.monsterForm.patchValue(monster))
    );
  }

  buildForm() {


    this.monsterForm = this.fb.group({
      name: ["", Validators.required],
      size: [""],
      monsterType: [""],
      languages: this.fb.array([]),
      tags: this.fb.array([]),
      alignment: [""],
      armourClass: ["", Validators.required],
      armourType: [""],
      hitPoints: ["", Validators.required],
      hpFormula: [""],
      speed: this.fb.array([]),
      stats: ["", Validators.required],
      resistances: this.fb.array([]),
      immunities: this.fb.array([]),
      conditionImmunities: this.fb.array([]),
      vulnerabilities: this.fb.array([]),
      skills: this.fb.array([]),
      challengeRating: ["", Validators.required],
      traits: this.fb.array([]),
      actions: this.fb.array([]),
      fluff: [""],
    });

    //for (let i = 0; i < this.monster.skills.length; i++) {
    //  const element = this.monster.skills[i];
    //  this.addSkill(element.skillName, element.skillMod);
    //}
    //for (let i = 0; i < this.monster.actions.length; i++) {
    //  const element = this.monster.actions[i];
    //  this.addAction(element.name, element.type, element.description);
    //}
    //for (let i = 0; i < this.monster.traits.length; i++) {
    //  const element = this.monster.traits[i];
    //  this.addTrait(element.name, element.description);
    //}
    //for (let i = 0; i < this.monster.languages.length; i++) {
    //  const element = this.monster.languages[i];
    //  this.addLanguage(element);
    //}




  }




  addSpeed(speedName: string, speedValue: number) {
    let speed = this.monsterForm.get('speed') as FormArray;
    speed.push(this.fb.group({
      "speedName": [speedName],
      "speedValue": [speedValue]
    }));
  }

  addSkill(skillName: string, skillMod: number) {
    let skills = this.monsterForm.get("skills") as FormArray;
    skills.push(this.fb.group({
      "skillName": [skillName],
      "skillMod": [skillMod]
    }));
  }

  addAction(actionName: string, actionType: string, description: string) {
    let actions = this.monsterForm.get("actions") as FormArray;
    actions.push(this.fb.group({
      "name": [actionName],
      "type": [actionType],
      "description": [description]
    }));
  }
  addTrait(name: string, description: string) {
    let traits = this.monsterForm.get("traits") as FormArray;
    traits.push(this.fb.group({
      "name": [name],
      "description": [description]
    }));
  }

  addLanguage(language: string) {
    let languages = this.monsterForm.get("languages") as FormArray;
    languages.push(this.fb.control(language));
  }
  addTag(tag: string) {
    let languages = this.monsterForm.get("tags") as FormArray;
    languages.push(this.fb.control(tag));
  }
  addResistance(resistance: string) {
    let resistances = this.monsterForm.get("resistances") as FormArray;
    resistances.push(this.fb.control(resistance));
  }
  addImmunity(immunity: string) {
    let immunities = this.monsterForm.get("immunities") as FormArray;
    immunities.push(this.fb.control(immunity));
  }
  addConditionImmunity(conditionImmunity: string) {
    let conditionImmunities = this.monsterForm.get("conditionImmunities") as FormArray;
    conditionImmunities.push(this.fb.control(conditionImmunity));
  }
  addVulnerability(vulnerability: string) {
    let vulnerabilities = this.monsterForm.get("vulnerabilities") as FormArray;
    vulnerabilities.push(this.fb.control(vulnerability));
  }



}

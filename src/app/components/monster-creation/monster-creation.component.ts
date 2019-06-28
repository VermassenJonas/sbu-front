import { Component, OnInit } from '@angular/core';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { Monster } from 'src/app/models/monster.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Statline } from 'src/app/models/statline.model';
import { Action } from 'src/app/models/action.model';
import { Trait } from 'src/app/models/trait.model';

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



  private _monster: Monster;
  public get monster(): Monster {
    return this._monster;
  }
  public set monster(v: Monster) {
    this._monster = v;
  }




  private id: number;



  constructor(
    private monsterDataService: MonsterDataService,
    private fb: FormBuilder,
    private authService : AuthenticationService) { }

  ngOnInit() {

    if(!this.authService.email){
      window.location.assign("/login");
    }

    this.buildForm();



  }

  buildForm() {
    this.monsterForm = this.fb.group({
      name: [""],
      size: [""],
      monsterType: [""],
      languages: this.fb.array([]),
      tags: this.fb.array([]),
      alignment: [""],
      armourClass: [""],
      armourType: [""],
      hitPoints: ["", Validators.required],
      hpFormula: [""],
      speeds: this.fb.array([]),
      stats: this.fb.group({
        str: [""],
        dex: [""],
        con: [""],
        wis: [""],
        int: [""],
        cha: [""]
      }),
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
    
  }




  addSpeed(speedName: string, speedValue: number) {
    let speeds = this.monsterForm.get('speeds') as FormArray;
    speeds.push(this.fb.group({
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
    languages.push(this.fb.group({
      "language": [language]
    }));
  }
  addTag(tag: string) {
    let tags = this.monsterForm.get("tags") as FormArray;
    tags.push(this.fb.group({
      "tag": [tag]
    }));
  }
  addResistance(resistance: string) {
    let resistances = this.monsterForm.get("resistances") as FormArray;
    resistances.push(this.fb.group({
      "resistance": [resistance]
    }));
  }
  addImmunity(immunity: string) {
    let immunities = this.monsterForm.get("immunities") as FormArray;
    immunities.push(this.fb.group({
      "immunity": [immunity]
    }));
  }
  addConditionImmunity(conditionImmunity: string) {
    let conditionImmunities = this.monsterForm.get("conditionImmunities") as FormArray;
    conditionImmunities.push(this.fb.group({
      "conditionImmunity": [conditionImmunity]
    }));
  }
  addVulnerability(vulnerability: string) {
    let vulnerabilities = this.monsterForm.get("vulnerabilities") as FormArray;
    vulnerabilities.push(this.fb.group({
      "vulnerability": [vulnerability]
    }));
  }

  removeElement(arrayName: string, index: number) {
    let array = this.monsterForm.get(arrayName) as FormArray;
    array.controls.splice(index, 1);
  }

  submitForm() {
    this.monsterDataService.addNewMonster(this.formToMonster(this.monsterForm)).subscribe(
      result => window.location.assign("/my-collection")
    );
  }

  formToMonster(monsterForm : FormGroup) : Monster{
    let monster = new Monster();
    monster.name = monsterForm.value.name;
    monster.size = monsterForm.value.size;
    monster.monsterType = monsterForm.value.monsterType;
    monster.languages = monsterForm.value.languages;
    monster.tags = monsterForm.value.tags;
    monster.alignment = monsterForm.value.alignment;
    monster.armourClass = monsterForm.value.armourClass;
    monster.armourType = monsterForm.value.armourType;
    monster.hitpoints = monsterForm.value.hitPoints;
    monster.hpFormula = monsterForm.value.hpFormula;
    monster.speed = monsterForm.value.speeds;
    monster.stats = Statline.fromJSON(monsterForm.value.stats)
    monster.resistances = monsterForm.value.resistances;
    monster.immunities = monsterForm.value.immunities;
    monster.conditionImmunities = monsterForm.value.conditionImmunities;
    monster.vulnerabilities = monsterForm.value.vulnerabilities;
    monster.skills = monsterForm.value.skills;
    monster.challengeRating = monsterForm.value.challengeRating;
    monster.traits = Trait.fromFormArray(monsterForm.value.traits);
    monster.actions = Action.fromFormArray(monsterForm.value.actions);
    monster.fluff = monsterForm.value.fluff;
    return monster;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from 'src/app/models/monster.model';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { transitiveScopesFor } from '@angular/core/src/render3/jit/module';

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
    private route: ActivatedRoute,
    private monsterDataService: MonsterDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    

    this.monsterDataService.getMonster(this.id).subscribe(result => {
      this.monster = result[0];
      this.buildForm();
    });
  }

  buildForm() {
    this.monsterForm = this.fb.group({
      name: [this.monster.name],
      size: [this.monster.size],
      monsterType: [this.monster.monsterType],
      languages: this.fb.array([]),
      tags: this.fb.array([]),
      alignment: [this.monster.alignment],
      armourClass: [this.monster.armourClass, Validators.required],
      armourType: [this.monster.armourType],
      hitPoints: [this.monster.hitPoints, Validators.required],
      hpFormula: [this.monster.hpFormula],
      speeds: this.fb.array([]),
      stats: this.fb.group({
        str: [this.monster.stats.str],
        dex: [this.monster.stats.dex],
        con: [this.monster.stats.con],
        wis: [this.monster.stats.wis],
        int: [this.monster.stats.int],
        cha: [this.monster.stats.cha]
      }),
      resistances: this.fb.array([]),
      immunities: this.fb.array([]),
      conditionImmunities: this.fb.array([]),
      vulnerabilities: this.fb.array([]),
      skills: this.fb.array([]),
      challengeRating: [this.monster.challengeRating, Validators.required],
      traits: this.fb.array([]),
      actions: this.fb.array([]),
      fluff: [this.monster.fluff],
    });

    for (let i = 0; i < this.monster.speed.length; i++) {
      const element = this.monster.speed[i];
      this.addSpeed(element.speedName, element.speedValue);
    }
    for (let i = 0; i < this.monster.skills.length; i++) {
      const element = this.monster.skills[i];
      this.addSkill(element.skillName, element.skillMod);
    }
    for (let i = 0; i < this.monster.actions.length; i++) {
      const element = this.monster.actions[i];
      this.addAction(element.name, element.type, element.description);
    }
    for (let i = 0; i < this.monster.traits.length; i++) {
      const element = this.monster.traits[i];
      this.addTrait(element.name, element.description);
    }
    for (let i = 0; i < this.monster.languages.length; i++) {
      const element = this.monster.languages[i];
      this.addLanguage(element);
    }
    for (let i = 0; i < this.monster.tags.length; i++) {
      const element = this.monster.tags[i];
      this.addTag(element);
    }
    for (let i = 0; i < this.monster.resistances.length; i++) {
      const element = this.monster.resistances[i];
      this.addResistance(element);
    }
    for (let i = 0; i < this.monster.immunities.length; i++) {
      const element = this.monster.immunities[i];
      this.addImmunity(element);
    }
    for (let i = 0; i < this.monster.conditionImmunities.length; i++) {
      const element = this.monster.conditionImmunities[i];
      this.addConditionImmunity(element);
    }
    
    for (let i = 0; i < this.monster.vulnerabilities.length; i++) {
      const element = this.monster.vulnerabilities[i];
      this.addVulnerability(element);
    }
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

  removeElement(arrayName: string, index : number){
    let array = this.monsterForm.get(arrayName) as FormArray;
    array.controls.splice(index,1);
  }

  submitForm(){
    let monster = new Monster();
    monster.id = this.id;
    monster.name = this.monsterForm.value.name;
    this.monsterDataService.updateMonster(monster);
  }

}

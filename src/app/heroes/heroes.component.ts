import { Component, OnInit } from '@angular/core';
import {Hero} from "../../models/Hero";
import { heroes } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = heroes
  selectedHero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

}

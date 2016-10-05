import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	// moduleId: module.id,
	selector: 'my-heroes',
	styleUrls:['./app/heroes.component.css'],
	templateUrl: './app/heroes.component.html'
})

export class HeroesComponent implements OnInit { 

	ngOnInit(): void {
		this.getHeroes();
  	}

	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) {
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}
}
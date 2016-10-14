import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import './shared/rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component'

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule, 
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		RouterModule.forRoot([
				{
				path: 'dashboard',
				component: DashboardComponent
				},
				{
				path: 'heroes',
				component: HeroesComponent
				},
				{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full'
				},
				{
				path: 'detail/:id',
				component: HeroDetailComponent
				}
			]) 
		],
	declarations: [ 
		AppComponent, 
		HeroDetailComponent, 
		HeroesComponent,
		DashboardComponent,
		HeroSearchComponent
		],
	providers: [ HeroService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
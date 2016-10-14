"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('./shared/rxjs-extensions');
// Imports for loading & configuring the in-memory web api
var in_memory_web_api_module_1 = require('angular-in-memory-web-api/in-memory-web-api.module');
var in_memory_data_service_1 = require('./services/in-memory-data.service');
var app_component_1 = require('./app.component');
var hero_detail_component_1 = require('./components/hero-detail/hero-detail.component');
var heroes_component_1 = require('./components/heroes/heroes.component');
var hero_service_1 = require('./services/hero.service');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var hero_search_component_1 = require('./components/hero-search/hero-search.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                in_memory_web_api_module_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                router_1.RouterModule.forRoot([
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: 'heroes',
                        component: heroes_component_1.HeroesComponent
                    },
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'detail/:id',
                        component: hero_detail_component_1.HeroDetailComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                dashboard_component_1.DashboardComponent,
                hero_search_component_1.HeroSearchComponent
            ],
            providers: [hero_service_1.HeroService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
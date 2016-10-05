"use strict";
var core_1 = require('@angular/core');
var mock_heroes_1 = require('./mock-heroes');
core_1.Injectable();
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map
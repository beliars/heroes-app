"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Mr. Nice' },
            { id: 2, name: 'Narco' },
            { id: 3, name: 'Bombasto' },
            { id: 4, name: 'Celeritas' },
            { id: 5, name: 'Tornado' },
            { id: 6, name: 'Batman' },
            { id: 7, name: 'Superman' },
            { id: 8, name: 'Ironman' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
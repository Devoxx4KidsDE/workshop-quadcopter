define(function () {
    return function (mission) {

        console.log('demo_geometry.js (4 Eck und 3 Eck)');

        mission.takeoff()
            .go({x:0, y:1})
            .go({x:1, y:1})
            .go({x:1, y:0})
            .go({x:0, y:0})
            .hover(2000)
            .go({x:1, y:1})
            .go({x:0, y:2})
            .go({x:0, y:0})
            .land();
        
    };
});
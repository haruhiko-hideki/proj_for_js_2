define([], function () {
    function getRandomMass() {
        var a = [],
            n = 20;
        for(var i = 0; i < n; i++){
            a.push(Math.floor(Math.random() * 100));
        }
        console.log("Новий масив: " + a);
        return a;
    }
      return getRandomMass;
});

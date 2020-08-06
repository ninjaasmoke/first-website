(function (window) {
    var nithinGreeter = {};
    nithinGreeter.name = "Nithin";
    var greeting = " Hello";
    nithinGreeter.sayHello = function () {
        console.log(nithinGreeter.name + greeting);
    }

    window.nithinGreeter = nithinGreeter;
})(window);
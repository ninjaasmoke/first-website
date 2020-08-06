(function (window) {
    var saiGreeter = {};
    saiGreeter.name = 'Sai';
    var greeting = " HI"; // Like private var
    saiGreeter.sayHi = function () {
        console.log(saiGreeter.name + greeting);
    }

    window.saiGreeter = saiGreeter;
})(window);
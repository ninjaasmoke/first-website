(
    function (window) {
        var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
        for (var name in names) {
            if (names[name].charAt(0).toLowerCase() === 'j') {
                byeSpeaker.speak(names[name]);
            } else {
                helloSpeaker.speak(names[name]);
            }
        }
    }
)(window);

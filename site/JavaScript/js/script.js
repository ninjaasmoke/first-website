document
    .addEventListener(
        "DOMContentLoaded", function (event) {

            // console.log(event);


            function sayHello(event) {
                console.log(event);
                console.log(this);
                this.textContent = "Said It!";
                var name = document.getElementById("name").value;
                var message = "<h2>Hello " + name + "!</h2>";

                // document
                //     .getElementById("content")
                //     .textContent = message;

                document
                    .getElementById("content")
                    .innerHTML = message;


                if (name === "student") {
                    var title =
                        document
                            .querySelector("h1")
                            .textContent;
                    title += " For lovin' it!";
                    document.querySelector("h1").textContent = title;
                }

            }
            // Unobstrusive event binding
            document
                .querySelector("button")
                .addEventListener("click", sayHello);

            document
                .querySelector("body")
                .addEventListener("mousemove",
                    function (event) {
                        if (event.shiftKey) {
                            console.log("X: " + event.clientX);
                            console.log("Y: " + event.clientY);
                        }
                    }
                );

            // document
            //     .querySelector("button")
            //     .onclick = sayHello;
        });
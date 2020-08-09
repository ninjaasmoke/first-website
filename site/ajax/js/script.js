// Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {

        // Unobstrusive event binding
        document.querySelector("button") // since there is only one button
            .addEventListener("click", function () {

                $ajaxUtils
                    .sendGetRequest("./data/names.txt",
                        function (request) {
                            var name = request.responseText; // 'responseText' is only the text-part from response
                            console.log(name);
                            document.querySelector("#content")
                                .innerHTML = "<h2>Hello " + name + "!";
                        }
                    );
            });
    }
);
// Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {

        // Unobstrusive event binding
        document.querySelector("button") // since there is only one button
            .addEventListener("click", function () {

                $ajaxUtils
                    .sendGetRequest("./data/names.txt",
                        function (request) {
                            var message = request.firstName + " " + request.lastName; // 'responseText' is only the text-part from response
                            if (request.likedIdli) {
                                message += " likes Idli";
                            } else {
                                message += " doesn\'t like Idli";
                            }
                            message += " and uses ";
                            message += request.numberOfDisplays;
                            message += " displays for coding."
                            console.log(name);
                            document.querySelector("#content")
                                .innerHTML = "<h2>" + message + "</h>";
                        }, true
                    );
            });
    }
);
(
    function (global) {


        var ajaxUtils = {}; // fake namespace

        // returns a HTTP response object
        function getRequestObj() {
            if (window.XMLHttpRequest) {
                return (new XMLHttpRequest()); // Latest response object type
            } else if (window.ActiveXObject) {
                return (new ActiveXObject("Microsoft.XMLHTTP")); // Almost not used anywhere
            } else {
                global.alert("Ajax is not supported");
                return (null);
            }
        }

        // Don't make request and responseHandler Global, or it make enter RACE condition when a new REQUEST is made

        ajaxUtils.sendGetRequest = function (requestUrl, responseHandler, isJsonResponse) {
            // requestUrl is the Url where our server is, 
            // responseHandler is a func that handles the data when a response is received from the server
            var request = getRequestObj();
            // request = XMLHttpRequest

            request.onreadystatechange = function () {
                handleResponse(request, responseHandler, isJsonResponse);
            }
            // XMLHttpRequest.onreadystatechange = ...


            // MOST IMPORTANT STEPS BELOW

            request.open("GET", requestUrl, true); // true = async. 
            // i.e. browser continues to operate without stopping for a response
            // XMLHttpRequest.open("GET", requestUrl, true);


            request.send(null); // null for GET, body for POST
            // XMLHttpRequest.send(null);
        };


        function handleResponse(request, responseHandler, isJsonResponse) {
            if (
                (request.readyState == 4) // XMLHttpRequest.readyState == 4
                &&
                (request.status == 200) // XMLHttpRequest.status == 200
            ) {
                if (isJsonResponse == undefined) {
                    isJsonResponse = true;
                }

                if (isJsonResponse) {
                    responseHandler(JSON.parse(request.responseText));
                }
                else {
                    responseHandler(request.responseText);
                }
            }
        }

        global.$ajaxUtils = ajaxUtils;

    }
)(window);
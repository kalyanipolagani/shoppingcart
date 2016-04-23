/* CMPE 281: Team Project */

var http = require("http");
var port = "8090";

var server = http.createServer(function(request, response) {
      var err = '0';

      if (request.url === "/catalog") {
          switch (request.method) {
            case "GET"    :
                            console.log("[INFO] : received mongo GET request");
          		    break;
	    case "POST"   :
                            console.log("[INFO] : received mongo POST request");
          		    break;

	    case "PUT"    :
                            console.log("[INFO] : received mongo PUT request");
          		    break;

	    case "DELETE" :
                            console.log("[INFO] : received mongo DELETE request");
          		    break;
          
            default       :
                            console.log("[ERROR] : received unknown method type");
                            err = '405';
          		    break;
	  }

      } else if (request.url === "/shopcart") {
          switch (request.method) {
            case "GET"    :
                            console.log("[INFO] : received riak GET request");
          		    break;
          
	    case "POST"   :
                            console.log("[INFO] : received riak POST request");
          		    break;

	    case "PUT"    :
                            console.log("[INFO] : received riak PUT request");
          		    break;

	    case "DELETE" :
                            console.log("[INFO] : received riak DELETE request");
          		    break;

            default       :
                            console.log("[ERROR] : received unknown method type");
			    err = '405';
          		    break;
	  }
      } else {
         console.log("[ERROR]: Unknown Url");
         err = '400';
      }

 switch (err) {
   case "0"   : response.writeHead(200, {"Content-Type": "application/json"});
                var respStr = "{'key' : 'value'}";
                response.write(respStr);
                response.end();
                break;

   case "400" : response.writeHead(400, {"Content-Type": "application/json"});
                var respStr = "{'error' : 'url is incorrect'}";
                response.write(respStr);
                response.end();
                break;

   case "405" : response.writeHead(405, {"Content-Type": "application/json"});
                var respStr = "{'error' : 'REST method type not allowed'}";
                response.write(respStr);
                response.end();
                break;

   default    : response.writeHead(503, {"Content-Type": "application/json"});
                var respStr = "{'error' : 'Server is unavailable'}";
                response.write(respStr);
                response.end();
                break;
 }

});

server.listen(port);
console.log("My Server Started in port "+port);

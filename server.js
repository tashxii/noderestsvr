try {
    var http = require("http");
    var server = http.createServer(function (req, res) {
        if (req.method === "GET") {
            if (req.url === "/hello") {
                res.statusCode = 200;
                res.end('{"message": "Hello"}');
            } else if (req.url === "/error") {
                res.statusCode = 500;
                res.end('{"error_code": 334, "message": "Internal Server Error"');
            } else {
                res.statusCode = 404;
                res.end("");
            }
        } else {
            res.statusCode = 404;
            res.end("Not found.");
        }
    });
    server.listen(process.env.PORT || 80);
} catch (err) {
    console.log("An error occurred. Details:" + err.message);
}

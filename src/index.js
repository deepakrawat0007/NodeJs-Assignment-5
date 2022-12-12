var http = require("http");

const httpServer = http.createServer(handleServer);
const port = 8081

function handleServer(req, res) {
  if(req.url == '/welcome'){
    res.writeHead(200, {"Content-type" : "text/plain"})
    res.write("Welcome To Dominos!")
    res.end()
  }else if(req.url == '/contact') { 
    res.writeHead(200,{"Content-type" : "application/json"}) 
    res.write((JSON.stringify({  
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com' 
       }
       )))
    res.end()
}else{
    res.writeHead(404,{"Content-type": "text/html"})
    res.write("<h1>Error 404 Page Not Found</h1>")
    res.end();
}
}

httpServer.listen(port , ()=> console.log(`server is up on ${port}`))

module.exports = httpServer;
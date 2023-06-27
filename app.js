const http=require("http");
const fs=require("fs");
const url=require("url");
const { deflate } = require("zlib");
const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico"){
        return res.end();
    }
const log=`${Date.now()}:${req.url} New req Received\n`;
const myUrl=url.parse(req.url,true);
console.log(myUrl);
fs.appendFile("log.text",log,(err,data)=>{
    switch(myUrl.pathname){
        case"/":res.end("home page");
        break;
        case "/about":
            const userName=myUrl.query.myname;
            
        res.end(`Hello,${userName}`);
        break;
        case "/search":
            const search=myUrl.query.search_query;
            res.end("Here are your result for "+search);
            break;
        default:
        res.end("Not found");

    }
    // res.end("hello from server");

});

});
myServer.listen(8000,()=>{
    console.log("server started");
})
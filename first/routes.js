const displayContent = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url == "/profile") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>it  response which is working</h1>');
        return res.end();
    }  
    else if (url == "/") {
        res.setHeader("Content-Type", 'text/html');
        res.write('it is second statement');
    }

    else if (url == "/settings" && method == "POST") {
        res.setHeader("Content-Type", 'text/html');
        res.write('settings');
    }
    else if (url == "/settings") {
        res.setHeader("Content-Type", 'text/html');
        res.write('<h1>settings</h1><form action="/settings" method="POST"><input type="text"><button type="submit">SUBMIT ME</button></form>');
    }


      
        res.setHeader("Content-Type", 'text/html');
        res.write('Page Not Found');
        res.end(); 
}



module.exports = displayContent;

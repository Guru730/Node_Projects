const displayContent = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url == '/profile') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>It response which is working</h1>');
        return res.end();

    }

       res.setHeader('Content-Type', 'text/html');
       res.write('<h3>Page not found</h3>');
       res.end();
}


module.exports = displayContent;
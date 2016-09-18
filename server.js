var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
    title: 'ArticleOne Vijay',
    Heading:'Article-One',
    date:'September-18, 2016',
    content:`
          <p>
          This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article
            </p>
            <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article
                
            </p>
            <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article
                
            </p>`
        
        
};

function Createtemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var Htmltemplate =`
<html>
    <head>
        <title>$(Title) </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="Container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
        <h2>$(heading)
        </h2>
        <div>
            $(Date) 
        </div>
        <div>
            $(Content)
            </div>
            
        </div>
        
    </body>
</html>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res) {
    res.send(Createtemplate(Article-one));
    
});

app.get('/article-two', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});

app.get('/article-three', function(req,res) {
    res.send('Article three is requested and will be served');
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

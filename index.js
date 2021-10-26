const sharp = require("sharp");
const replace = require('replace-in-file');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(8080);
//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.get('/', function(req, res){
    res.render('index');
    console.log("Running!");
   
 });




// for parsing application/json


// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.post('/', function(req, res){
  const file = "J.jpg";
    console.log(req.body.name);
    res.send("Do not reload this page ! Just click on the button below!<br><a href=\"/\"><button>SHkeabt</button>");
    const options = {

      //Single fil
      files: 'cer.svg',
  
      //Replacement to make (string or regex) 
      from: /Shivam Kagra/g,
      to: req.body.name,
    };
  
    //
    replace(options)
    .then(changedFiles => {
      console.log('Modified files:', changedFiles.join(', '));
      sharp("cer.svg")
      .jpeg({
        quality: 100
    
      })
      .toFile(req.body.name+".jpg")
      .then(function(info) {
      
        console.log(info);
        const options2 = {

          //Single file
          files: 'cer.svg',
      
          //Replacement to make (string or regex) 
          from: req.body.name,
          to: 'Shivam Kagra',
        };
       replace(options2)
        .then(changedFiles => {
          console.log('Modified files:', changedFiles.join(', '));
        })
        .catch(error => {
          console.error('Error occurred:', error);
        });
        
      })
      .catch(function(err) {
        console.log(err);
        const options2 = {

          //Single file
          files: 'cer.svg',
      
          //Replacement to make (string or regex) 
          from: req.body.name,
          to: 'Shivam Kagra',
        };
       replace(options2)
        .then(changedFiles => {
          console.log('Modified files:', changedFiles.join(', '));
        })
        .catch(error => {
          console.error('Error occurred:', error);
        });
      });
    })
    .catch(error => {
      console.error('Error occurred:', error);
      const options2 = {

        //Single file
        files: 'cer.svg',
    
        //Replacement to make (string or regex) 
        from: req.body.name,
        to: 'Shivam Kagra',
      };
     replace(options2)
      .then(changedFiles => {
        console.log('Modified files:', changedFiles.join(', '));
      })
      .catch(error => {
        console.error('Error occurred:', error);
      });
    });
    //
  
    res.download(file); 
 });


/*
const options = {

    //Single file
    files: 'foo.svg',

    //Replacement to make (string or regex) 
    from: /Replacement/g,
    to: 'Shivam Kagra',
  };

  replace(options)
  .then(changedFiles => {
    console.log('Modified files:', changedFiles.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
*/

/*
sharp("foo.svg")


  .jpeg({
    quality: 100

  })
  .toFile("new.jpg")
  .then(function(info) {
    console.log(info)
  })
  .catch(function(err) {
    console.log(err)
  })
*/
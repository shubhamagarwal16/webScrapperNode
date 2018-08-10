const readline = require('readline');
const cheerio = require('cheerio');
const request = require('request');
const specificArea = require('./specificArea');
const fullWebsite = require('./fullWebsite');

const urlInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scapUrlFn(){
    urlInput.question('Please type the url (without quotes) and press enter:- \n', (answer) => {
        // TODO: Log the answer in a database
        console.log({answer});
        if(answer){
            request(answer, (error, response, html) => {
                if(!error && response.statusCode == 200){
                    const $ = cheerio.load(html);
                    const scapUrl = answer;

                    scrapChoice();
                    function scrapChoice(){
                        urlInput.question('Enter your choice \n 1. Full website \n 2. Specific Area \n', (answer) => {
                            console.log({answer}, typeof answer);
                            switch(parseInt(answer)){
                                case 1:
                                    fullWebsite.fullWebsite(urlInput, $);
                                    break;
                                case 2: 
                                    specificArea.specificArea();
                                    break;
                                default: 
                                console.log('Wrong Choice- ');
                                scrapChoice();
                            }
                        })
                    }
        
                }
                else{
                    console.log('Something went wrong, try again');
                    scapUrlFn();                   
                }
            })
        }
        else {
            console.log('Url can\'t be empty');
            scapUrlFn();
            // urlInput.close();
        }
      }); 
}
scapUrlFn();
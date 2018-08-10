const readline = require('readline');

module.exports = {
    fullWebsite: (urlInput, $) => {
        console.log('working');
        const fullSite = $('html');
        
        urlInput.question('Enter your choice \n 1. Site Html \n 2. Site Text \n', (answer) => {
            console.log({answer}, typeof answer);
            switch(parseInt(answer)){
                case 1:
                    console.log(fullSite.html());                                    
                    break;
                case 2: 
                    console.log(fullSite.text());
                    break;
                default: 
                    console.log('Wrong Choice- ');
                    this.fullWebsite();
            }
        })
    },
    saveView: () => {
        
    }
}
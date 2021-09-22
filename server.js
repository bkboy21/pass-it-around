const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("99 Bottles of beer on the wall" + `<br></br>` + `<a href="/98">take one down, pass it around</a>`);
});




app.get('/:bCount', (req, res) => {
     if (req.params.bCount > 0) {
        res.send(`Bottles of beer on the wall: ${req.params.bCount -1} + <br> + <a href="${req.params.bCount -1}">take one down, pass it around</a>`);
        
      } else (req.params.bCount === 0);{ 
        res.send(`<a href=/99>Start Over !</a>`);
        
      } 
    });



// //  if count is 0 
// remove take one down 

















app.listen(port, () => {
    console.log('listening on port', port);
});
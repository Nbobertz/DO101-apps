const express = require('express');     // External dependency

const path = require('path');           // Internal Node module (no 'node:' prefix)

const EventEmitter = require('events'); // Internal Node module (no 'node:' prefix)



const app = express();

const PORT = 3000;



// Serve static files (CSS)

app.use(express.static(path.join(__dirname, 'public')));



// Route for the homepage

app.get('/', (req, res) => {

      res.send(`
      
          <!DOCTYPE html>
          
              <html>
              
                    <head>
                    
                            <title>Hello Button</title>
                            
                                    <link rel="stylesheet" href="/style.css" />
                                    
                                          </head>
                                          
                                                <body>
                                                
                                                        <div class="container">
                                                        
                                                                  <button class="hello-button">Hello</button>
                                                                  
                                                                          </div>
                                                                          
                                                                                </body>
                                                                                
                                                                                    </html>
                                                                                    
                                                                                      `);
                                                                                      
});



// Simple event emitter example

const emitter = new EventEmitter();

emitter.on('greet', () => console.log('Hello Event!'));



// Trigger the event

emitter.emit('greet');



app.listen(PORT, () => {

      console.log('Server running at http://localhost:' + PORT);  // Simple concatenation, works in v10

});
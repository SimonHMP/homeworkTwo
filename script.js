// fetch example - works in the browser but not in node
// (fetch is not a part of node.js by default)


//let divv = document.createElement('div').value

function getPerson() {


    
fetch('https://swapi.co/api/people/1') // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => {  // display data in the browser
        
    let divv = document.getElementById('divver')
          divv.innerHTML =
         "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
         console.log(myJson.details)
    })
 //let button =  document.createElement('button')
  // document.body.appendChild(divv)
 //document.divv.appendChild(button) 
  }
  


getPerson()



function getVader() {



    fetch('https://swapi.co/api/people/4') // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => {  // display data in the browser
        
          document.body.innerHTML =
         "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
         console.log(myJson.details)
    })
   
  
  }
  


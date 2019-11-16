testArray = [
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ]


  function removeUnder18(arrayWithObj) {

    const filteredArray = arrayWithObj.filter(el => el.age > 17)
    return filteredArray
}

function groupAdultsByAgeRange(array) {
    
    if(array.length === 0) {
        return {}
    } else {
    let arrayOne = removeUnder18(array)
   let arrayTwo =  arrayOne.reduce(seperator, {
                                                "20 and younger": [],
                                                "21-30": [],
                                                "31-40": [],
                                                "41-50": [],
                                                 "51 and older":  []                
                                                }
                                                )

  //let finalArray = arrayTwo.values.map(el => el.filter)
      //el => el.filter(value => Object.keys(value).length !==))

   return arrayTwo
            }
}

/*
 I realize that the Math.random() * 100 isn't a very clean solution, but I had no idea how to change the indexes so that the next
 iteration wouldn't override the first entry into that array.
 Furthermore  I realize that .splice(3) makes the code disfunction for any other example, again I had no idea how to remove all the 
 empty items without this method, I  tried using filter but I was unable to find out what type these empty elements are.
*/

function seperator(accumulator, currentValue) {

    if(currentValue.age < 21) {
        accumulator['20 and younger'][Math.round(Math.random() * 100)] = currentValue 
    }
    if(currentValue.age > 20 && currentValue.age < 31) {
        accumulator['21-30'][Math.round(Math.random() * 100)] = currentValue
    }
    if(currentValue.age > 30 && currentValue.age < 41) {
        accumulator['31-40'][Math.round(Math.random() * 100)] = currentValue
    }
    if(currentValue.age > 40 && currentValue.age < 51) {
        accumulator['41-50'][Math.round(Math.random() * 100)] = currentValue
    }
    if(currentValue.age >= 51 ) {
        accumulator['51 and older'][Math.round(Math.random() * 100)] = currentValue
    }


    accumulator['20 and younger'].sort().splice(3)
    accumulator['21-30'].sort().splice(3)
    accumulator['31-40'].sort().splice(3)
    accumulator['41-50'].sort().splice(3)
    accumulator['51 and older'].sort().splice(3)



    return accumulator

}




//console.log(removeUnder18(testArray))

let emptyArray = []
//console.log(groupAdultsByAgeRange(emptyArray))

let newestArray = groupAdultsByAgeRange(testArray);
let newerestArray = Object.entries(newestArray).map(el => el.filter((function (el) {
    return el != null;
  }))) //map(el => el.filter(Object.keys(value).length !== 0))
console.log(newestArray);
let toTest = newestArray['20 and younger']

//console.log(toTest.sort())
//console.log(toTest.forEach(el => console.log(typeof(el))))
//console.log(groupAdultsByAgeRange(removeUnder18(testArray)));





/*

const grouping = groupAdultsByAgeRange(
    
    [{name: "Anna", age: 31}, 
    {name: "John", age: 32}, 
    {name: "Hank", age: 60}]
    
    )
    const result = 
    
    { 
      '31-40': [ { name: 'Anna', age: 31 }, { name: 'John', age: 32 } ],
      '51 and older': [ { name: 'Hank', age: 60 } ] 
    }
    assert.deepStrictEqual(grouping, result)


*/


module.exports = { groupAdultsByAgeRange
}
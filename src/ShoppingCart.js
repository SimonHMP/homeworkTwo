 class ShoppingCart {
    constructor(itemName, quantity, pricePerUnit) {
        this.newArray = []
        this.itemName = itemName,
        this.quantity = quantity,
        this.pricePerUnit = pricePerUnit
    }
    getItems() {
        return this.newArray
    }

    addItem(itemName, quantity, pricePerUnit) {
        let item = {name: '', quantity: '', pricePerUnit: ''}
       item.name = itemName
       item.quantity = quantity
       item.pricePerUnit = pricePerUnit
       return this.newArray.push(item)
        

      

    }

    clear() {
        this.newArray = []
    }

    total() {

        if(this.newArray.length === 0) {
            return 0
        } 
      let onlyNumArray =  this.newArray.map(el => el.quantity * el.pricePerUnit)
      console.log(onlyNumArray)
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let totalCost = onlyNumArray.reduce(reducer)
    
      return totalCost
    }
}


    

const cart = new ShoppingCart

cart.addItem('egg', 5, 9.99)
cart.addItem('egg', 5, 9.99)

cart.addItem('egg', 5, 9.99)

cart.addItem('egg', 5, 9.99)
//cart.clear()

//console.log(cart.getItems())
console.log(cart.total())
//console.log(cart.clear())
//console.log(cart.getItems())


module.exports = ShoppingCart




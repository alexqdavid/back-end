let houses = require('./db.json')
let id = 4

module.exports = {
      getHouses: (req,res) => {
res.status(200).json(houses)
},    deleteHouses: (req,res) => {
let home = houses.findIndex(elem => elem.id === +req.params.id)
houses.splice(home, 1)
res.status(200).json(houses)
},    createHouses: (req,res) => {
let {id, address, price, imageURL} = req.body
let newHouse = {
    id: id,
    address,
    price,
    imageURL
}
houses.push(newHouse)
    res.status(200).json(houses)
    id++
},    updateHouses: (req,res) => {
    let {id} = request.params
    let {type} = req.body
    let home = houses.findIndex(elem => elem.id === +id)
    if (houses[index].price <= 10000 && type === 'minus') {
        houses[index].price = 0
        res.status(200).send(houses)
    } else if (type === 'plus') {
        houses[index].price += 10000
        res.status(200).send(houses)
    } else if (type === 'minus') {
        houses[index].price -= 10000
        res.status(200).send(houses)
    } else {
        res.sendStatus(400)
    }
  }
}
   
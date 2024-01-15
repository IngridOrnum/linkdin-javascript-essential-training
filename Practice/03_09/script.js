/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
    name: {
        adult: "Everyday Backpack",
        children: "Super Backpack"
    },
    volume: {
        adult: 50,
        children: 20
    },
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    newName: function (adultBackpack, childrenBackpack) {
        this.name.adult = adultBackpack;
        this.name.children = childrenBackpack;
    },
    newVolume: function (volumeAdult, volumeChildren) {
        this.volume.adult = volumeAdult;
        this.volume.children = volumeChildren;
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

console.log(backpack.name.adult);

backpack.newName("Upgraded Everyday Backpack", "Ultra Super Backpack");

console.log(backpack.name.adult);


console.log(backpack.volume.adult);

backpack.newVolume(60, 30);

console.log(backpack.volume.adult);

console.log(backpack.volume.children);



const liquorCabinet = {
  gin: {
    regularGin: "Harahorn",
    pinkGin: "Beefeater"
  },
  espressoMartiniIngredients: {
    coctailLiquir: "Kahlua",
    booze: "Vodka",
    sweetener: "syrup",
    deco: "Three coffee beans"
  },
  favouriteDrink: "Gin Tonic",
  cabinetStockEmpty: false,
  cabinetStock: function (cabinetStockStatus){
    this.cabinetStockEmpty = cabinetStockStatus;
  },
  newGin: function (newRegularGin, newPinkGin){
    this.gin.regularGin = newRegularGin,
    this.gin.pinkGin = newPinkGin
  },
  newFavouriteDrink: function (favouriteDrinkUpdated){
    this.favouriteDrink = favouriteDrinkUpdated;
  }
};

// Boolean
console.log(liquorCabinet.cabinetStockEmpty);
liquorCabinet.cabinetStock(true);
console.log(liquorCabinet.cabinetStockEmpty);

console.log(liquorCabinet.gin.pinkGin);
liquorCabinet.newGin("Oslo Gin", "Harahorn Pink");
console.log(liquorCabinet.gin.pinkGin);

console.log(liquorCabinet.favouriteDrink);
liquorCabinet.newFavouriteDrink("Espresso Martini");
console.log(liquorCabinet.favouriteDrink);


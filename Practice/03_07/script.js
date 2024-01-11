/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const livingroom = {
    color: "green",
    painting: "painting of Lake Como",
    floor: "wood floor",
    tvSize: "55",
    furnitureColors: {
        sofa: "rusty red",
        coffeeTable: "wood",
        lamp: "green"
}
}

console.log(livingroom.floor);

console.log(livingroom.furnitureColors.sofa);


const klatreBag = {
    farge: "grå",
    mat: "energibar",
    drikke: "vann",
    lommebok: {
       visa: "hovedkort",
       klatreverket: "inngang kv",
       osloKlatresenter: "inngang Skullerud"
    }
}

console.log(klatreBag);
console.log(klatreBag.lommebok.klatreverket);
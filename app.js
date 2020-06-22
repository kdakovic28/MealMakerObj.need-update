const menu = {
_courses: {
  get _courses() {
return {
  appetizers: this.appetizers,
  mains: this.mains,
  desserts: this.desserts,
}
},
  appetizers:[] ,
  mains:[],
  desserts:[],
  },
get appetizers() {

},
get mains() {

},
get desserts() {

},
set appetizers(appetizersIn) {

},
set mains(mainsIn) {

},
set desserts(dessertsIn) {

},
 addDishToCourse (courseName,dishName,dishPrice) {
const dish = { 
 name: {} ,
 price: {},
};
this._courses[courseName].push(dish); 
 }
getRandomDishFromCourse: function () {
  const dishes = this._courses[courseName];
  const randomIndex =
  Math.floor(Math.random()* dishes.length)
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);

};
};

const menu = {
  ...
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = ...
    const desserts = ...
    const totalPrice = appetizer.price + ...

    return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
  }
};
let meal = menu.generateRandomMeal();
console.log(meal);
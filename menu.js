///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    name: "Hawaiian",
    price: 20,
    category: "Meat",
    popularity: 2,
    rating: 4.5,
    tags: ["ham", "meat", "pineapple"]
}

console.log(pizza)





console.log("===================")

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)



console.log("===================")

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[1])





console.log("===================")

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

let { price } = pizza

console.log("Price is ", price)



console.log("===================")

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

let { category } = pizza

console.log("The categories is: ", category)


console.log("===================")

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
    {
        name: "Hawaiian",
        price: 20,
        category: "Meat",
        popularity: 2,
        rating: 4.5,
        tags: ["pork", "meat", "pineapple"]
    },
    {
        name: "BBQ",
        price: 18,
        category: "Meat",
        popularity: 5,
        rating: 4.9,
        tags: ["pork", "meat", "pepperoni"]
    },
    {
        name: "Chicken Ranch",
        price: 21,
        category: "Chicken",
        popularity: 5,
        rating: 4.3,
        tags: ["chicken", "ranch", "white sauce"]
    },
    {
        name: "Veggie",
        price: 15,
        category: "Vegan",
        popularity: 1,
        rating: 4,
        tags: ["peppers", "onions", "non-dairy"]
    },
    {
        name: "Fuego",
        price: 25,
        category: "Hot",
        popularity: 3,
        rating: 2.5,
        tags: ["ghost pepper", "habenero", "jalepeno"]
    }
]





//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE                                                                                                                  

const filteredFood = foodArr.filter(foodArr => foodArr.tags.includes("pork"))

console.log(filteredFood)




console.log("===================")

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`                              function
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,                              property
    popularity, or price)

    The number will be the number that you want                         number
    to compare against 

    The type should be 'above' or 'below' to                            type
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold                  variable
    a filtered array

    Use the filter method to filter the foodArr                     .filter

        In the callback, check if the `type` is `above`,            callback
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
const filterByProperty = (property, number, type) => {
    filterArr = []
    property = filterArr.push(foodArr.popularity)
    console.log(property)

}

// let callback = () => 

filterByProperty = 

// console.log("===================")

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
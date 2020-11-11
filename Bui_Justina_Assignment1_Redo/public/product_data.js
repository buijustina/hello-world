/* Reference to Lab 13 Exercise 4 Part C. Using a ./public to create a product_data.js file */

products = [
    {
        "name": "Banh Mi",
        "price": 8.00,
        "image": "Banhmi.jpg"
    },
    {
        "name": "Beef Stew",
        "price": 17.00,
        "image": "Beefstew.jpg"
    },
    {
        "name": "Crab Noodle Soup",
        "price": 15.00,
        "image": "Crabsoup.jpg"
    },
    {
        "name": "Pho",
        "price": 13.00,
        "image": "Pho.jpg"
    },
    {
        "name": "Spring Rolls",
        "price": 16.00,
        "image": "Springrolls.jpg"
    },
    {
        "name": "Summer Rolls",
        "price": 8.00,
        "image": "Sumrolls.jpg"
    }
];

if (typeof module != 'undefined') {
    module.exports.products = products;
}
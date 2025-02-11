//task #1 

let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Phone", price: 800, category: "Electrnics"},
    {name: "Desk Chair", price: 150, category: "Furniture"},
    {name: "Notebook", price: 5, category: "Stationery"},
    {name: "Headphones", price: 100, category: "Electronics"},


];

function getProductsByCategory(products, category){
    return products.filter(product => product.category)
    }

    console.log(getProductsByCategory(products, "Electronics"));



//task #2

function applyDiscount(product,discountRate){

    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }
    ))
}

console.log(applyDiscount(products, .1));


//... (Spread operator) example

//Allows passing array elements as separate arguments to functions that expect individual values.

function sum3 (x, y, z){
    return x + y + z
}

let numbers = [1, 2, 3] 

console.log(sum3(...numbers));


//task #3 

let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales) {
    return sales.reduce((total, sale) => total + sale, 0)
};

console.log(calculateTotalRevenue(sales));


//task #4

let employee = {

    name: "John Doe",
    salary: 50000,
    position: "Manager"
};

console.log(employee)   //first time to see no change

function updateSalary(employee, percentageIncrease){
    //employee.salary = employee.salary + (employee.salary * percentageIncrease);   //long but correct version

    employee.salary += employee.salary * percentageIncrease
}; 

updateSalary(employee, .1);

console.log(employee);

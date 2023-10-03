

const numbers = [1,2,3,4,5,6,10]
const doubleNumbers = numbers.map((number) => number * 2)

console.log(doubleNumbers)


// Same with for Each

const doubleNumbers2 = []
numbers.forEach((number) => {
    doubleNumbers2.push(number * 2)
})
console.log(doubleNumbers2)





const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];





// Create an Array of company name
const companynames = companies.map((company) => company.name)
console.log(companynames)








// Creat an array with just company and categories
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,        
    }
})
console.log(companyInfo)








// Create an array of objects with the name and the length of each company in yrs
const companyYears = companies.map((company) => {
    return {
        name: company.name,
        lenght: company.end - company.start + " years"
    }
})
console.log(companyYears)




// Chain map methods
const squareDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt *2)


// long version of above
const squareDouble2 = numbers
.map(function (number) {
    return Math.sqrt(number);
})
.map(function (sqrt) {
    return sqrt *2
})


console.log(squareDouble)

console.log(squareDouble2)




// Chaining different methods
const evenDouble = numbers
.filter((number) => number % 2 === 0)
.map((number) => number *2)
console.log(evenDouble)
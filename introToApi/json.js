// const obj = {
//     name: "Rakib",
//     age: 23
// }
// const jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

const shop = {
    owner: "Rakib",
    address: {
        street: "Middle Badda",
        city: "Dhaka"
    },
    products: ['laptop', 'watch', 'Mobile'],
    revenue: 50000,
    isOpen: true,
    isNew: false
}
const json = JSON.stringify(shop);
// console.log(json);

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
// console.log(stuInfo.name);

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));
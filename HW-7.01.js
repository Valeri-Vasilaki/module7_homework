function displayOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
const exampleObj = { name: "John", age: 30, job: "Engineer" };
displayOwnProperties(exampleObj);
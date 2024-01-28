function hasProperty(obj, propertyName) {
  return obj.hasOwnProperty(propertyName);
}
const exampleObj = { name: "John", age: 30, job: "Engineer" };
const propertyNameToCheck = "age";
console.log(hasProperty(exampleObj, propertyNameToCheck));
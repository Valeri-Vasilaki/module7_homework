function createEmptyObjectWithoutPrototype() {
  return Object.create(null);
}
const emptyObject = createEmptyObjectWithoutPrototype();
console.log(emptyObject.toString);
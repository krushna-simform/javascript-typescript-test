const obj = {
  name: "harry",
  age: 17,
  address: {
    houseNo: 3,
    street: "Privity Drive",
    owner: {
      name: "wornon",
    },
  },
};

Object.prototype.deepFreez = (obj) => {
  if (typeof obj !== "object") {
    throw new Error(`${obj} is not the object`);
  }

  Object.freeze(obj);
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      deepFreez(obj[key]);
    }
  }
};

Object.deepFreez(obj);

obj.address.owner.name = "hello";

console.log(obj);

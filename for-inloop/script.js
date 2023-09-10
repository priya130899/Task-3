const jsonObject = {
    "name": "John Doe",
    "age": 30,
    "address": "123 Main Street,San Francisco,CA,94105."
  };
  
  const properties = Object.keys(jsonObject);
  
  for (const property of properties) {
    console.log(`The property ${property} has the value ${jsonObject[property]}`);
  }
  
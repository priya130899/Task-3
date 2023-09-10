const jsonObject  = {
    "name": "John Doe",
    "age": 30,
    "address": "123 Main Street, Anytown, CA 12345"
  };

  Object.keys(jsonObject).forEach(key => {
    let value = jsonObject[key];
    console.log(`Key: ${key}, Value: ${value}`);
  });
const json = {
    "name": "John Doe",
    "age": 30,
    "city": "New York City"
  };
  
  for (const key in json) {
    console.log(`Key: ${key}, Value: ${json[key]}`);
  }
  
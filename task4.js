const people = [
  {name: 'Иван', age: 23},
  {name: 'Мария', age: 18},
  {name: 'Алексей', age: 32},
  {name: 'Ольга', age: 24},
  {name: 'Сергей', age: 17},
  {name: 'Анна', age: 21}
  ];
  
  const result = people.filter(person => person.age > 18)
  .map(person => `${person.name} (${person.age} лет)`);
  
  console.log(result);
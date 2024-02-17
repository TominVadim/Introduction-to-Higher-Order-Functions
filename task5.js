const sales = [
  {product: 'Телефон', price: 50000, quantity: 1},
  {product: 'Чехол', price: 1500, quantity: 2},
  {product: 'Зарядное устройство', price: 2500, quantity: 1}
  ];
  
  const total = sales.reduce((total, sale) => {
  return total + (sale.price * sale.quantity);
  }, 0);
  
  console.log(`Общая стоимость продаж: ${total}`);
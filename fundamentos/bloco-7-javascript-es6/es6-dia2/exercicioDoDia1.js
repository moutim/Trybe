const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
// 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". 
  const customerInfo = (order) => {
      const deliveryPerson = order.order.delivery.deliveryPerson;
      const customerName = order.name;
      const customerPhone = order.phoneNumber; 
      const adress = Object.values(order.address);
      return console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, Rua: ${adress[0]}, Nº: ${adress[1]}, AP: ${adress[2]}`);
  }
  customerInfo(order);

// 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.order.price = 50;
    const customerName = order.name;
    const pizzas = Object.keys(order.order.pizza);
    const drinks = Object.values(order.order.drinks.coke);
    const price = order.order.price;
    return console.log(`Olá ${customerName}, o total do seu pedido de ${pizzas.join()} e ${drinks[0]} é R$ ${price}`);
  }
  orderModifier(order);
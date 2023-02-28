export class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

export class ProductList {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  filterProducts(queryString) {
    // Разбиваем строку на массив фильтров
    const filters = queryString.split('&');
    
    // Итерируемся по всем товарам и фильтруем их по каждому фильтру
    const filteredProducts = this.products.filter(product => {
      for (let filter of filters) {
        // Разбиваем каждый фильтр на свойства
        const [property, operator, value] = filter.split('-');

        // Если это фильтр по имени
        if (property === 'name') {
          if (operator === 'contains' && !product.name.includes(value)) {
            return false;
          }
          if (operator === 'starts' && !product.name.startsWith(value)) {
            return false;
          }
          if (operator === 'ends' && !product.name.endsWith(value)) {
            return false;
          }
        }

        // Если это фильтр по цене
        if (property === 'price') {
          if (operator === '=' && product.price !== Number(value)) {
            return false;
          }
          if (operator === '<' && product.price >= Number(value)) {
            return false;
          }
          if (operator === '>' && product.price <= Number(value)) {
            return false;
          }
          if (operator === '<=' && product.price > Number(value)) {
            return false;
          }
          if (operator === '>=' && product.price < Number(value)) {
            return false;
          }
        }

        // Если это фильтр по количеству
        if (property === 'quantity') {
          if (operator === '=' && product.quantity !== Number(value)) {
            return false;
          }
          if (operator === '<' && product.quantity >= Number(value)) {
            return false;
          }
          if (operator === '>' && product.quantity <= Number(value)) {
            return false;
          }
          if (operator === '<=' && product.quantity > Number(value)) {
            return false;
          }
          if (operator === '>=' && product.quantity < Number(value)) {
            return false;
          }
        }

        // Если это фильтр по описанию
        if (property === 'description') {
          if (operator === 'contains' && !product.description.includes(value)) {
            return false;
          }
          if (operator === 'starts' && !product.description.startsWith(value)) {
            return false;
          }
          if (operator === 'ends' && !product.description.endsWith(value)) {
            return false;
          }
        }
      }

      // Если товар прошел все фильтры, возвращаем его
      return true;
    });

    return filteredProducts;
  }
}

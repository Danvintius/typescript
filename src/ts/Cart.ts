class Cart {
	public items = [{id: 10, price: 100}];

	totalCost(): number {
	  let sum: number = 0;

	  for (let i = 0; i < this.items.length; i++) {
  		sum = sum + this.items[i].price;
	  }

	  return sum;
	}

	costWithDiscount(discount: number): number {
		return this.totalCost() / 100 * (100 - discount);
	}

	removeItem(itemToRemove: number): void {
		this.items = this.items.filter((item) => item.id !== itemToRemove);
	}
}

export default Cart;
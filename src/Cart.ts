class Cart {
	private items = [];

	totalCost(): number {
	  let sum: number = 0;

	  for (let i = 0; i < items.length; i++) {
  		sum = sum + items[i].price;
	  }

	  return sum;
	}

	costWithDiscount(discount: number): number {
		return this.totalCost() / 100 * (100 - discount);
	}

	removeItem(itemToRemove: number): void {
		items.filter((item) => item.id !== itemToRemove);
	}
}
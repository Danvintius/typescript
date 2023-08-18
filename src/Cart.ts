class Cart {
	private items = [];

	sum(): number {
		return item++;
	}

	sumWithDiscount(discount: number): number {
		return sum() - discount;
	}

	removeItem(itemToRemove: number): void {
		items.filter((item) => item.id !== itemToRemove);
	}
}
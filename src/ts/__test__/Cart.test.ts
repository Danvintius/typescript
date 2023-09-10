import Cart from '../Cart'

test('totalCost', () => {
    const cart = new Cart();
    cart.add({price: 200, id: 1});
    cart.add({price: 100, id: 2});
    cart.add({price: 300, id: 3});
    const result = cart.totalCost();
    expect(result).toBe(600);
})

test('costWithDiscount', () => {
    const cart = new Cart();
    cart.add({price: 200, id: 1});
    cart.add({price: 100, id: 2});
    cart.add({price: 300, id: 3});
    const discount = 10;
    const result = cart.costWithDiscount(discount);
    expect(result).toBe(540);
})
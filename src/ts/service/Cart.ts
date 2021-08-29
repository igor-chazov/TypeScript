import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getAmount(): number {
    return this._items.reduce((accum, current) => accum + current.price, 0);
  }

  getAmountDiscounted(discount: number): number {
    const result = this._items.reduce((accum, current) => accum + current.price, 0);
    return result - (result * (discount / 100));
  }

  removeCart(id: number): void {

    for (let i = 0; i < this._items.length; i += 1) {
      if (this._items[i].id === id) {
        this._items.splice(i, 1);
      }
    }

  }
}

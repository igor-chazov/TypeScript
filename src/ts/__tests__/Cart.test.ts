import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('Новая карта должна быть пустой', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Должна добавлять новый объект', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart).toEqual({
    _items: [{
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225,
    }]
  });
});

test('Должна считать суммарную стоимость', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.getAmount()).toBe(2900);
});

test('Должна считать суммарную стоимость (с учётом скидки)', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.getAmountDiscounted(5)).toBe(2755);
});

test('Должна удалять объект по id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.removeCart(1008);

  expect(cart).toEqual({
    _items: [{
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225,
    }]
  });
});

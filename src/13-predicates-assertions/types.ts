
export type Book = {
  type: 'book';
  title: string;
  description: string;
};

export type Magazine = {
  type: 'magazine';
  title: string;
};

export type Pen = {
  type: 'pen';
  color: string;
};

export type ItemsOnSale = Book | Magazine | Pen;

export const isBook = (item: ItemsOnSale): item is Book => {
  return item.type === 'book'
}

export const isMagazine = (item: ItemsOnSale): item is Magazine => {
  return item.type === 'magazine'
}

export const isPen = (item: ItemsOnSale): item is Pen => {
  return item.type === 'pen'
}

export function assertsBook(item: ItemsOnSale): asserts item is Book {
  if (!isBook) {
    throw new Error('Item is not a book')
  }
}

export function assertsMagazine(item: ItemsOnSale): asserts item is Magazine{
  if (!isMagazine) {
    throw new Error('Item is not a magazine')
  }
}
export function assertsPen(item: ItemsOnSale): asserts item is Pen {
  if (!isPen) {
    throw new Error('Item is not a pen')
  }
}

export function assertsNever(x: never): never {
  throw new Error('Item is not a pen' + JSON.stringify(x, null, 2))
}

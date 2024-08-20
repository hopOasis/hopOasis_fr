export type CartItemBase = {
  itemId: number;
  itemTitle: string;
  pricePerItem: number;
  quantity: number;
  totalCost: number;
};

export type CartApiResponse = {
  items: CartItemBase[];
  priceForAll: number;
};

type CartItemBaseWithoutId = Omit<CartItemBase, 'itemId'>;

type CartItemProxi = CartItemBaseWithoutId & {
  itemId: string;
};

export type CartProxiResponse = {
  items: CartItemProxi[];
  priceForAll: number;
};

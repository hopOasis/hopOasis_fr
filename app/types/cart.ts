export type CartItemBase = {
  itemId: number;
  itemTitle: string;
  pricePerItem: number;
  quantity: number;
  totalCost: number;
  itemType: string;
};

export type CartApiResponse = {
  items: CartItemBase[];
  priceForAll: number;
};

export type CartItemBaseWithoutId = Omit<CartItemBase, 'itemId'>;

export type CartItemProxi = CartItemBaseWithoutId & {
  itemId: string;
};

export type CartProxiResponse = {
  items: CartItemProxi[];
  priceForAll: number;
};

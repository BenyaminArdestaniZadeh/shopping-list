import { useState } from "react";
import Form from "./form/Form";
import Items from "./items/Items";
import Totals from "./total/Totals";

export type Item = {
  name: string;
  price: number;
  initialPrice: number;
  count: number;
};

export default function ShoppingList() {
  // a list of items with price, counter and delete button
  const [listItems, setListItems] = useState<Item[]>([]);
  // to get the price from the user in input
  const [priceValue, setPriceValue] = useState<string>("");

  // total items and total price are executed after re-rendering
  const totalItems = listItems.reduce((prev, curr) => prev + curr.count, 0);
  const totalPrice = listItems.reduce((prev, curr) => prev + curr.price, 0);

  // identification of the desired item by the index of that item ,
  const getUniqueItem = (count: number, index: number) => {
    const cloneListItems = [...listItems];
    const itemToUpdate = cloneListItems.find((_, i) => i === index);
    // calculation of the total price of each item according to its initial price
    if (itemToUpdate !== undefined) {
      itemToUpdate.price = itemToUpdate.initialPrice * count;
      itemToUpdate.count = count;
      setListItems(cloneListItems);
    }
  };

  return (
    <>
      <div className="shoppingList-container">
        <h1>Shopping List</h1>
        <Form
          listItems={listItems}
          setListItems={setListItems}
          priceValue={priceValue}
          setPriceValue={setPriceValue}
        />
        <Items
          listItems={listItems}
          setListItems={setListItems}
          getUniqueItem={getUniqueItem}
        />
        <Totals totalItems={totalItems} totalPrice={totalPrice} />
      </div>
    </>
  );
}

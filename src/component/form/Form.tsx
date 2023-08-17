import { useState } from "react";
import "../../App.css";
import { Item } from "../Shopping-list";

type FormType = {
  listItems: Item[];
  setListItems: React.Dispatch<React.SetStateAction<Item[]>>;
  priceValue: string;
  setPriceValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Form({
  listItems,
  setListItems,
  priceValue,
  setPriceValue,
}: FormType) {
  // to get the item from the user in input
  const [itemValue, setItemValue] = useState<string>("");

  // to display items in the input
  const updateItemValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemValue(event.target.value);
  };
  // to display the price in the input and create a format that only displays numbers
  const updatePriceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPriceValue(e.target.value);
    }
  };
  // as the submit button operation , a new list will be displayed when it is clicked
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemValue.trim() !== "" && priceValue !== "") {
      const itemToList: Item = {
        name: itemValue,
        price: Number(priceValue),
        initialPrice: Number(priceValue),
        count: 1,
      };
      setListItems([...listItems, itemToList]);
    }
    setItemValue("");
    setPriceValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="items">
          <input
            type="text"
            name="items"
            id="items"
            placeholder="Please add your items"
            value={itemValue}
            onChange={updateItemValue}
          />
        </label>
        <label htmlFor="">
          <input
            type="number"
            step={1}
            name="price"
            id="price"
            value={priceValue}
            onChange={updatePriceValue}
            placeholder="Please enter the price of the item"
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

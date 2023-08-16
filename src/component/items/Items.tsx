import { Item } from "../Shopping-list";
import Counter from "./Counter";
import DeleteButton from "./DeleteButton";

type Props = {
  listItems: Item[];
  setListItems: React.Dispatch<React.SetStateAction<Item[]>>;
  getUniqueItem: (count: number, index: number) => void;
};

export default function Items({
  listItems,
  setListItems,
  getUniqueItem,
}: Props) {
  return (
    <>
      <div className="list-container">
        <ul>
          {listItems.map((item, index) => (
            <li key={index} className="list">
              <div className="item-wrapper">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <Counter getUniqueItem={(count) => getUniqueItem(count, index)} />
              <DeleteButton
                listItems={listItems}
                setListItems={setListItems}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

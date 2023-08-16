import { Item } from "../Shopping-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type DeleteButtonType = {
  listItems: Item[];
  setListItems: React.Dispatch<React.SetStateAction<Item[]>>;
  index: number;
};

export default function DeleteButton({
  listItems,
  setListItems,
  index,
}: DeleteButtonType) {
  const handleDeletButton = () => {
    //inm dobare bkhon
    const filteredList = listItems.filter((_, i) => i !== index);
    setListItems(filteredList);
  };
  return (
    <>
      <button
        type="submit"
        className="delete-button-style"
        onClick={handleDeletButton}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
}

type TotalType = {
  totalItems: number;
  totalPrice: number;
};

export default function Totals({ totalItems, totalPrice }: TotalType) {
  return (
    <>
      <div className="total-container">
        <h5>Total Items : {totalItems}</h5>
        <h5>Total Price : {totalPrice}</h5>
      </div>
    </>
  );
}

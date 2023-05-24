import { useSelector } from "react-redux";

const Cart = () => {
  const getcart: [] = useSelector((state: any) => state.getCart);

  return (
    <>
      <div>
        {/* {getcart.map((item: any, index: number) => {
          return <div></div>;
        })} */}
      </div>
    </>
  );
};

export default Cart;

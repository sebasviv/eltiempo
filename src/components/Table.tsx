import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SellersActionCreator } from "../Redux/ActionCreators/SellersActionCreator";
import { SellerSelector } from "../Redux/slices";


const Table = () => {
  const dispatch = useDispatch();

  const { sellerList } = useSelector(SellerSelector)

  React.useEffect(() => {
    dispatch(SellersActionCreator());
  }, []);

  React.useEffect(() => {
    console.log("data: ", sellerList)
  }, [sellerList])
  

  return <div>Table</div>;
};

export default Table;

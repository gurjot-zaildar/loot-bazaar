import axios from "../../api/axoisconfig";
import { loadproduct } from "../reducers/productSlice";


export const asyncloadproduct = () => async(dispatch,getState)=>{
    try {
        const{data}=await axios.get("/products");
        dispatch(loadproduct(data));

    } catch (error) {
       console.log(error);
    }
};

export const asynccreateproduct = (product) => async(dispatch,getState)=>{
    try {
      await axios.post("/products",product);
        dispatch(asyncloadproduct());
    } catch (error) {
       console.log(error);
    }
};

export const asyncupdateproduct = (product) => async(dispatch,getState)=>{
  try{
    await axios.patch(`/products/${product.id}`, product);
    dispatch(asyncloadproduct());
  }catch(error){
    console.log(error);
  }
};

export const asyncdeleteproduct = (id) => async(dispatch,getState)=>{
  try{
    await axios.delete(`/products/${id}`);
    dispatch(asyncloadproduct());
  }catch(error){
    console.log(error);
  }
};
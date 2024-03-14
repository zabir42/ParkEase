import { useContext } from "react";
import { ParkingContext } from "../context";

const useParking = () => {
  return useContext(ParkingContext);
};

export default useParking;

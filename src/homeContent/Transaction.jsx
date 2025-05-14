import { useState } from "react";
import Cashier from "./transaction/Cashier";
import Data from "./transaction/Data";

export default function Transaction({tanggalHariIni}){
  const [dataNota, setDataNota] = useState([]);
  return (
    <div className="w-full flex justify-center items-start gap-5">
      <Cashier dataNota={dataNota} setDataNota={setDataNota} />
      <Data dataNota={dataNota} tanggalHariIni={tanggalHariIni} />
    </div>
  )
}
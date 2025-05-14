import { useEffect, useState } from "react";
import Input from "./cashier/Input";
import Invoice from "./cashier/Invoice";

export default function Cashier({dataNota, setDataNota}){
    const dateTime = new Date()
    const tahun = dateTime.getFullYear()
    const bulan = dateTime.getMonth() < 10 ? "0" + dateTime.getMonth() : dateTime.getMonth()
    const tanggal = dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate()
    const [uraian, setUraian] = useState("")
    const [jumlah, setJumlah] = useState(0)
    const [satuan, setSatuan] = useState("")
    const [harga, setHarga] = useState(0)
    const [totalNota, setTotalNota] = useState(0)
    const [dataKasir, setDataKasir] = useState([])
    let noNota = dataNota.length + 1
    if(noNota < 10){
        noNota = "00"+noNota
    }else if(noNota < 100){
        noNota = "0"+noNota
    }else{
        noNota
    }
    const nomorTransaksi = tahun + bulan + tanggal + noNota;
    
    function changeUraian(e){
        setUraian(e.target.value)
    }
    function changeJumlah(e){
        setJumlah(parseInt(e.target.value))
    }
    function changeSatuan(e){
        setSatuan(e.target.value)
    }
    function changeHarga(e){
        setHarga(parseInt(e.target.value))
    }

    const dataInput = {
        uraian: uraian,
        jumlah: jumlah,
        satuan: satuan,
        harga: harga,
        changeUraian: changeUraian,
        changeJumlah: changeJumlah,
        changeSatuan: changeSatuan,
        changeHarga: changeHarga,
    }

    function saveKasir(e){
        setUraian("")
        setJumlah(0)
        setSatuan("")
        setHarga(0)
        e.preventDefault()
        const dataSave = {
            uraian: uraian,
            jumlah: jumlah,
            satuan: satuan,
            harga: harga,
        }
        setDataKasir([...dataKasir, dataSave])
    }

    function deleteKasir(num){
        const dataKasirBaru = dataKasir.filter((ks,index) => index != num)
        setDataKasir(dataKasirBaru)
    }

    function saveNota(e){
        e.preventDefault()
        const data = {
          nomor: nomorTransaksi,
          total: totalNota,
          data: dataKasir
        };
        setDataNota([...dataNota, data])
        setDataKasir([])
        setTotalNota(0)
    }

    useEffect(() => {
        dataKasir
    }, [dataKasir]);

    // console.log(tahun, bulan, tanggal)

  return (
    <div className="min-w-5/12">
        <Input dataInput={dataInput} saveKasir={saveKasir} />
        <Invoice dataKasir={dataKasir} nomorTransaksi={nomorTransaksi} setTotalNota={setTotalNota} saveNota={saveNota} deleteKasir={deleteKasir} />
    </div>
  );
}



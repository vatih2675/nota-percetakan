import { angka } from "../../../helpers/function"

export default function Input({dataInput, saveKasir}){
  return (
    <div className="border border-gray-200 shadow-md rounded-xl p-4 mb-5 cursor-default">
        <h1 className="font-bold text-lg text-sky-700 mb-3">Kasir</h1>
        <form action="#" method="post" onSubmit={(e) => saveKasir(e)} className="flex flex-col justify-center items-center gap-3 w-full">
          <input type="text" name="uraian" id="uraian" className="py-2 px-3 rounded-lg border border-gray-200 w-full focus:ring-0 focus:outline-none focus:shadow-md" placeholder="Uraian" value={dataInput.uraian} onChange={(e) => dataInput.changeUraian(e)} />
          <div className="w-full flex justify-center items-center gap-3">
              <input type="number" name="jumlah" id="jumlah" min="1" className="py-2 px-3 rounded-lg border border-gray-200 w-4/12 focus:ring-0 focus:outline-none focus:shadow-md" value={dataInput.jumlah} onChange={(e) => dataInput.changeJumlah(e)} />
              <input type="text" name="satuan" id="satuan" className="py-2 px-3 rounded-lg border border-gray-200 w-full focus:ring-0 focus:outline-none focus:shadow-md" placeholder="Satuan" value={dataInput.satuan} onChange={(e) => dataInput.changeSatuan(e)} />
              <input type="number" name="harga" id="harga" className="py-2 px-3 rounded-lg border border-gray-200 w-full focus:ring-0 focus:outline-none focus:shadow-md" min="100" value={dataInput.harga} onChange={(e) => dataInput.changeHarga(e)} />
          </div>
          <div className="w-full flex justify-between items-center">
              <span className="text-sky-700 text-sm">Subtotal : Rp {angka(dataInput.jumlah * dataInput.harga)}</span>
              <button type="submit" className="rounded-lg py-2 px-3 text-white bg-sky-700 hover:bg-sky-600 hover:shadow-md cursor-pointer transition-all duration-300">Simpan</button>
          </div>
        </form>
    </div>
  )
}
import { angka } from "../../../helpers/function"

export default function Invoice({dataKasir, nomorTransaksi, setTotalNota, saveNota, deleteKasir}){
    let total = 0
    dataKasir.map(({jumlah, harga}) => {
        total += jumlah * harga
    })
    setTotalNota(total)
  return (
    <div className="border border-gray-200 shadow-md rounded-xl p-4 cursor-default mb-10">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-lg text-sky-700">Nota</h1>
        <div className="flex justify-center items-center gap-2">
            <span className="text-xs text-sky-700">
            Nomor : <span className="font-bold">{nomorTransaksi}</span>
            </span>
            {total > 0 ? (
                <i className="bi-floppy text-gray-400 hover:text-sky-700 cursor-pointer transition-all duration-300" onClick={saveNota}></i>
            ) : ""}
        </div>
      </div>
      <table className="w-full text-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-sky-600 text-white">
            <th className="p-1 border border-gray-200 text-center">NO</th>
            <th className="p-1 border border-gray-200 text-center">URAIAN</th>
            <th className="p-1 border border-gray-200 text-center">JUMLAH</th>
            <th className="p-1 border border-gray-200 text-center">HARGA</th>
            <th className="p-1 border border-gray-200 text-center">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {dataKasir.map((ksr, index) => (
            <tr key={index}>
              <td className="p-1 border border-gray-200 text-center">{index + 1}</td>
              <td className="p-1 border border-gray-200 text-center">{ksr.uraian}</td>
              <td className="p-1 border border-gray-200 text-center">
                {angka(ksr.jumlah)} {ksr.satuan}
              </td>
              <td className="p-1 border border-gray-200 text-end">{angka(ksr.harga)}</td>
              <td className="p-1 border border-gray-200 text-end">
                {angka(ksr.harga * ksr.jumlah)}
                <i className="bi-x text-gray-500 hover:text-red-500 ms-1 cursor-pointer transition-all duration-300" onClick={() => deleteKasir(index)}></i>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="text-sky-700 bg-sky-100">
            <th className="p-1 border border-gray-200 text-end" colSpan="5">TOTAL Rp. {angka(total)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}



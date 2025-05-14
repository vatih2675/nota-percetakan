import { useState } from "react";
import { angka } from "../../helpers/function";

export default function Data({dataNota, tanggalHariIni}){
  const [nota, setNota] = useState(null)

  function openNota(index){
    setNota(index)
  }

  function closeNota(){
    setNota(null)
  }

  let totalTransaksi = 0;
  dataNota.map(({ total }) => {
    totalTransaksi += total;
  });
  return (
    <div className="border border-gray-200 shadow-md rounded-xl p-4 w-full cursor-default">
      <h1 className="font-bold text-lg text-sky-700 mb-3">Data Transaksi</h1>
      <table className="w-full text-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-sky-600 text-white">
            <th className="p-1 border border-gray-200 text-center w-[10%]">
              NO
            </th>
            <th className="p-1 border border-gray-200 text-center">
              NO. TRANSAKSI
            </th>
            <th className="p-1 border border-gray-200 text-center">
              JUMLAH (Rp)
            </th>
          </tr>
        </thead>
        <tbody>
          {dataNota.map((nt, index) => (
            <>
              <tr
                key={index}
                className="hover:bg-sky-50 cursor-pointer transition-all duration-300"
                onClick={() => openNota(index)}
              >
                <td className="p-1 border border-gray-200 text-center">
                  {index + 1}
                </td>
                <td className="p-1 border border-gray-200 text-center">
                  {nt.nomor}
                </td>
                <td className="p-1 border border-gray-200 text-end">
                  {angka(nt.total)}
                </td>
              </tr>
              <div
                className={`fixed w-full h-full z-20 top-0 left-0 right-0 bottom-0 bg-white justify-center items-center overflow-hidden  ${
                  nota == index ? "flex" : "hidden"
                }`}
                onClick={closeNota}
              >
                <div className="relative w-full sm:w-[107.5mm] h-full sm:h-[148.5mm] flex flex-col justify-between border border-gray-200 mx-auto p-10 sm:p-5 bg-white shadow-md">
                  <div className="flex justify-between items-start">
                    <img
                      src="images/logo-percetakan.png"
                      alt="Logo"
                      className="w-26"
                    />
                    <div className="w-7/12 flex flex-col justify-center items-end">
                      <h1 className="bg-sky-500 py-2 w-full text-center rounded-l-full text-white font-bold text-xl mb-2">
                        NOTA PEMBELIAN
                      </h1>
                      <div className="ps-4 w-full">
                        <table className="w-full text-xs text-sky-700">
                          <tbody>
                            <tr>
                              <td className="w-[20%] text-gray-600">Nomor</td>
                              <td className="text-center w-[5%] text-gray-600">:</td>
                              <th className="text-start">
                                {nt.nomor}
                              </th>
                            </tr>
                            <tr>
                              <td className="text-gray-600">Tanggal</td>
                              <td className="text-center text-gray-600">:</td>
                              <th className="text-start">
                                {tanggalHariIni}
                              </th>
                            </tr>
                            <tr>
                              <td className="text-gray-600">Kepada</td>
                              <td className="text-center text-gray-600">:</td>
                              <th className="text-start border-b border-gray-300"></th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <img src="images/logo.png" alt="Logo UBMG" className="absolute w-70 sm:w-50 top-28 sm:top-20 left-0 translate-1/2 bg-transparent z-0" />
                  <table className="relative w-full sm:text-xs bg-white/95 z-1">
                    <thead>
                      <tr className="bg-sky-500 text-white">
                        <th className="p-2 sm:p-1 border border-gray-300 text-center w-[8%]">
                          NO
                        </th>
                        <th className="p-2 sm:p-1 border border-gray-300 text-center">
                          URAIAN
                        </th>
                        <th className="p-2 sm:p-1 border border-gray-300 text-center">
                          JUMLAH
                        </th>
                        <th className="p-2 sm:p-1 border border-gray-300 text-center">
                          HARGA
                        </th>
                        <th className="p-2 sm:p-1 border border-gray-300 text-center">
                          TOTAL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {nt.data.map((dt, index) => (
                        <tr key={index} className="text-gray-600">
                          <td className="p-2 sm:p-1 border border-gray-300 text-center">
                            {index + 1}
                          </td>
                          <td className="p-2 sm:p-1 border border-gray-300 text-center">
                            {dt.uraian}
                          </td>
                          <td className="p-2 sm:p-1 border border-gray-300 text-center">
                            {angka(dt.jumlah)} {dt.satuan}
                          </td>
                          <td className="p-2 sm:p-1 border border-gray-300 text-end">
                            {angka(dt.harga)}
                          </td>
                          <td className="p-2 sm:p-1 border border-gray-300 text-end">
                            {angka(dt.harga * dt.jumlah)}
                          </td>
                        </tr>
                      ))}
                      {(() => {
                        const trKosong = [];
                        for (let i = index; i < 9; i++) {
                          trKosong.push(
                            <tr key={i}>
                              <th className="p-2 sm:p-1 border border-gray-300 text-white">
                                .
                              </th>
                              <th className="p-2 sm:p-1 border border-gray-300 text-white">
                                .
                              </th>
                              <th className="p-2 sm:p-1 border border-gray-300 text-white">
                                .
                              </th>
                              <th className="p-2 sm:p-1 border border-gray-300 text-white">
                                .
                              </th>
                              <th className="p-2 sm:p-1 border border-gray-300 text-white">
                                .
                              </th>
                            </tr>
                          );
                        }
                        return trKosong;
                      })()}
                    </tbody>
                    <tfoot>
                      <tr className="text-sky-700">
                        <th className="p-2 sm:p-1" colSpan="4"></th>
                        <th className="p-2 sm:p-1 border border-gray-300 text-end">
                          {angka(nt.total)}
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="flex justify-center items-center">
                    <div className="w-8/12 sm:w-7/12 pe-10 sm:pe-0 text-xs text-sky-700">
                      <p className="mb-2">Terima kasih atas kunjungan Anda.</p>
                      <p>
                        Barang yang sudah dibeli tidak dapat
                        dikembalikan/ditukar, kecuali ada perjanjian.
                      </p>
                    </div>
                    <div className="w-4/12 sm:w-5/12 text-sm text-center text-sky-700">
                      <p className="mb-8">Operator</p>
                      <p className="font-bold underline">RUSLAN SAMUEL</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </tbody>
        <tfoot>
          <tr className="text-sky-700 bg-sky-100">
            <th className="p-1 border border-gray-200 text-end" colSpan="3">TOTAL Rp. {angka(totalTransaksi)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}



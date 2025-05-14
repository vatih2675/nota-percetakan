import { useState } from "react"
import { angka } from "../helpers/function"

export default function Counter(){
    const [awal, setAwal] = useState(0)
    const [editAwal, setEditAwal] = useState(false)
    const [akhir, setAkhir] = useState(0)
    const [editAkhir, setEditAkhir] = useState(false)

    function changeAwal(e){
        setAwal(e.target.value)
    }

    function changeEditAwal(){
        setEditAwal(!editAwal)
    }
    
    function changeAkhir(e){
        setAkhir(e.target.value)
    }

    function changeEditAkhir(){
        setEditAkhir(!editAkhir)
    }
    return (
        <div className="border border-gray-200 shadow-md rounded-xl p-4 min-w-fit">
            <div className="flex justify-between items-center mb-3">
                <h1 className="font-bold text-lg text-sky-700">Counter Fotocopy</h1>
                <span className="text-xs text-gray-500 font-bold">{angka(parseInt(akhir != "" ? akhir : "0") <= parseInt(awal != "" ? awal : "0") ? "0" : parseInt(akhir != "" ? akhir : "0") - parseInt(awal != "" ? awal : "0"))}</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="border border-gray-200 rounded-lg p-2 flex flex-col justify-center items-start">
                    <div className="w-full flex justify-between items-center">
                        <label htmlFor="awal" className="block w-full text-gray-600 text-xs">Awal</label>
                        {editAwal ? (
                            <i className="bi-check2-all text-xs text-gray-400 hover:text-green-500 transition-all duration-300 cursor-pointer" onClick={changeEditAwal}></i>
                        ) : (
                            <i className="bi-pencil text-xs text-gray-400 hover:text-sky-700 transition-all duration-300 cursor-pointer" onClick={changeEditAwal}></i>
                        )}
                    </div>
                    {editAwal ? (
                        <input type="number" name="awal" id="awal" className="w-full focus:ring-0 focus:outline-none text-sky-700 font-bold" value={awal} autoFocus onChange={(e) => changeAwal(e)} />
                    ) : (
                        <input type="number" name="awal" id="awal" className="w-full focus:ring-0 focus:outline-none text-gray-400 font-bold" value={awal} disabled onChange={(e) => changeAwal(e)} />
                    )}
                </div>
                <div className="border border-gray-200 rounded-lg p-2 flex flex-col justify-center items-start">
                    <div className="w-full flex justify-between items-center">
                        <label htmlFor="akhir" className="block w-full text-gray-600 text-xs">Akhir</label>
                        {editAkhir ? (
                            <i className="bi-check2-all text-xs text-gray-400 hover:text-green-500 transition-all duration-300 cursor-pointer" onClick={changeEditAkhir}></i>
                        ) : (
                            <i className="bi-pencil text-xs text-gray-400 hover:text-sky-700 transition-all duration-300 cursor-pointer" onClick={changeEditAkhir}></i>
                        )}
                    </div>
                    {editAkhir ? (
                        <input type="number" name="akhir" id="akhir" className="w-full focus:ring-0 focus:outline-none text-sky-700 font-bold" value={akhir} autoFocus onChange={(e) => changeAkhir(e)} />
                    ) : (
                        <input type="number" name="akhir" id="akhir" className="w-full focus:ring-0 focus:outline-none text-gray-400 font-bold" value={akhir} disabled onChange={(e) => changeAkhir(e)} />
                    )}
                </div>
            </div>
        </div>
    )
}



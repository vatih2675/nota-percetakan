import { useEffect, useState } from "react";
import Counter from "./homeContent/Counter";
import Transaction from "./homeContent/Transaction";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [tanggalHariIni, setTanggalHariIni] = useState("");
  const [jamBerjalan, setJamBerjalan] = useState("");

  useEffect(() => {
    setInterval(() => {
      let waktu = new Date();
      let hr = waktu.getDay();
      const namaHari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
      ];
      let hari = namaHari[hr];
      let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
      let bln = waktu.getMonth();
      const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      let bulan = namaBulan[bln];
      let thn = waktu.getFullYear();
      let jam =
        waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
      let menit =
        waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
      let detik =
        waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
      setTanggalHariIni(`${hari}, ${tgl} ${bulan} ${thn}`);
      setJamBerjalan(`${jam}:${menit}:${detik} WITA`);
      // setTahun(waktu.getFullYear());
    }, 1);
  }, []);

  return (
    <>
      <Header />
      <main className="w-full h-full overflow-auto px-10 py-5">
        <section className="w-full">
          <h1 className="text-center text-xl font-bold text-sky-700 mb-3">
            Penjualan : {tanggalHariIni}
          </h1>
          <div className="flex justify-center items-start gap-5">
            <Counter />
            <Transaction tanggalHariIni={tanggalHariIni} />
          </div>
        </section>
      </main>
      <Footer tanggalHariIni={tanggalHariIni} jamBerjalan={jamBerjalan} />
    </>
  );
}

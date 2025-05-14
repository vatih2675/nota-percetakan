export default function Footer({tanggalHariIni, jamBerjalan}){
  const linkVatih = "https://ruslansamuel.vercel.app";
  const linkUbmg = "https://ubmg.ac.id/";
  return (
    <footer className="w-full bg-white flex justify-between items-center px-10 border-t border-gray-200 fixed bottom-0 py-2 cursor-default text-gray-700 z-10">
      <div className="flex justify-center items-center gap-1 text-xs">
        <i className="bi-c-circle"></i>
        <p>Percetakan | Business Center | <span className="cursor-pointer hover:text-sky-600 transition-all duration-300" onClick={() => window.open(linkUbmg)}>Universitas Bina Mandiri Gorontalo</span></p>
      </div>
      <div className="flex justify-center items-center gap-1 text-xs">
        <span>Powered by.</span>
        <span className="font-bold cursor-pointer hover:text-sky-600 transition-all duration-300" onClick={() => window.open(linkVatih)}>Vatih Media</span>
      </div>
      <div className="flex justify-center items-center gap-3 font-mono text-xs">
        <span><i className="bi-calendar3 me-1"></i>{tanggalHariIni}</span>
        <span><i className="bi-clock me-1"></i>{jamBerjalan}</span>
      </div>
    </footer>
  );
}



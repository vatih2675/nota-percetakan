export default function Header(){
  return (
    <header className="w-full bg-white flex justify-between items-center px-10 shadow-md sticky top-0">
      <div className="flex justify-center items-center gap-1 z-10">
        <img
          src="/images/logo-percetakan.png"
          alt="Percetakan"
          className="h-16 py-1"
        />
        <div className="flex flex-col justify-center items-start py-1">
          <h2 className="font-bold text-sky-600 text-xl">PERCETAKAN</h2>
          <h3 className="font-bold text-sky-600">Business Center</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1">
        <div className="flex flex-col justify-center items-end py-1">
          <h1 className="font-bold text-sky-600 text-5xl">UBMG</h1>
          <h6 className="font-bold text-sky-600 text-[0.54rem]">
            Universitas Bina Mandiri Gorontalo
          </h6>
        </div>
        <img src="/images/logo.png" alt="Percetakan" className="h-16 py-1" />
      </div>
    </header>
  );
}
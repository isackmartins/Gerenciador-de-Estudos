function Navbar() {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-white">
          📚 StudyFlow
        </h1>

        <span className="text-slate-400">
          Organizador de Estudos
        </span>
      </div>
    </header>
  );
}

export default Navbar;
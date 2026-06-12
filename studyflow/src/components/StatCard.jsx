function StatCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <h2 className="text-slate-400">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}

export default StatCard;
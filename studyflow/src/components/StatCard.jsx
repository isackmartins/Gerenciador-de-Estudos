const icons = { layers: "▱", check: "✓", clock: "◷", bolt: "ϟ" };
function StatCard({ title, value, detail, icon, tone }) { return <article className={`stat-card ${tone}`}><div className="stat-icon">{icons[icon]}</div><div><p>{title}</p><strong>{value}</strong><small>{detail}</small></div><span className="stat-trend">↗</span></article>; }
export default StatCard;

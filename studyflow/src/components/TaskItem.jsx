function TaskItem({
  task,
  onToggle,
  onDelete,
}) {
  return (
    <div className="bg-slate-700 p-4 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span
          className={
            task.completed
              ? "line-through text-slate-400"
              : ""
          }
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 px-3 py-1 rounded"
      >
        Excluir
      </button>
    </div>
  );
}

export default TaskItem;
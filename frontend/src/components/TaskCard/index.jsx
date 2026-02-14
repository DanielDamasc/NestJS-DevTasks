import { Calendar } from "lucide-react";

const TaskCard = ({ task }) => {

    // Estilos do status.
    const priorityStyles = {
        LOW: { color: 'text-emerald-600', bg: 'bg-emerald-100', label: 'Baixa' },
        MEDIUM: { color: 'text-amber-600', bg: 'bg-amber-100', label: 'Média' },
        HIGH: { color: 'text-rose-600', bg: 'bg-rose-100', label: 'Alta' },
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
        >
            <div className="flex justify-start items-start mb-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1
                    ${priorityStyles[task.priority].bg} ${priorityStyles[task.priority].color}`}>
                        {priorityStyles[task.priority].label}
                </span>
            </div>

            <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-snug">
                {task.title}
            </h4>
            {task.description && (
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                    {task.description}
                </p>
            )}

            {task.dueDate && (
                <div className="flex items-center gap-1 text-xs text-gray-500 font-normal mt-3 pt-3 border-t border-gray-50">
                    <Calendar size={12} />
                    {new Date(task.dueDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                </div>
            )}
        </div>
    );
}

export default TaskCard;
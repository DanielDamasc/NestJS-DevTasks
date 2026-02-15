import { Flag } from "lucide-react";

const PrioritySelector = ({ value, onChange }) => {
    const priorities = [
        { 
        id: 'LOW', 
        label: 'Baixa', 
        color: 'bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200',
        iconColor: 'text-emerald-600'
        },
        { 
        id: 'MEDIUM', 
        label: 'Média', 
        color: 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200',
        iconColor: 'text-amber-600'
        },
        { 
        id: 'HIGH', 
        label: 'Alta', 
        color: 'bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200',
        iconColor: 'text-rose-600'
        }
    ];
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Prioridade
            </label>

            <div className="flex gap-2">
                {priorities.map((priority) => {
                    const isSelected = value === priority.id;

                    return (
                        <button
                            key={priority.id}
                            type="button"
                            onClick={() => onChange(priority.id)}
                            className={`
                                flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-all
                                text-sm font-medium
                                ${isSelected 
                                ? `${priority.color} ring-1 ring-offset-1 ring-transparent` // Estilo Selecionado
                                : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50' // Estilo Não Selecionado
                                }
                            `}
                        >
                            <Flag 
                                size={16}
                                className={isSelected ? 'fill.current' : priority.iconColor}    
                            />
                            {priority.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default PrioritySelector;
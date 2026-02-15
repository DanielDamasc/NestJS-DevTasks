import { Calendar } from "lucide-react";

const Date = ({ value, onChange }) => {
    return (
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Data de Realização
          </label>
          
          <div className="relative">
            {/* Ícone posicionado dentro do input */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={18} className="text-gray-400" />
            </div>
            
            <input
              type="date"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="
                block w-full pl-10 pr-3 py-2 
                border border-gray-300 rounded-lg 
                text-gray-900 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                sm:text-sm
                transition-shadow
              "
            />
          </div>
        </div>
    );
}

export default Date;
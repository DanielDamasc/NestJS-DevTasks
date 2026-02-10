const Input = ({label, error}) => {
    return (
        <div className="flex flex-col gap-2 mb-4 w-full">
            {/* Renderização Condicional */}
            {label && (
                <label className="text-sm font-medium text-white text-start">
                    {label}
                </label>
            )}
            <input
                className={`
                    w-full px-4 py-3 rounded-lg border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition duration-200
                    ${error ? 'border-red-500 focus:ring-red-500' : ''}
                `}
            />
            {error && (
                <span className="text-xs text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
}

export default Input;
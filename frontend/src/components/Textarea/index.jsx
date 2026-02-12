const Textarea = ({label, error, ...rest}) => {
    return (
        <div className="flex flex-col gap-2 mb-4 w-full">
            {label && (
                <label className="text-sm font-medium text-gray-800 text-start">
                    {label}
                </label>
            )}
            <textarea
                className={`
                    w-full border border-gray-300 rounded-md p-2 
                    focus:ring-2 focus:ring-indigo-500 outline-none 
                    transition-all text-gray-900
                    ${error ? 'border-red-500 focus:ring-red-500' : ''}
                `}
                {...rest}
            />
            {error && (
                <span className="text-xs text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
}

export default Textarea;
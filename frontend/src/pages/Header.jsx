import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    // Recupera o usuário salvo no local storage.
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        navigate('/login');
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/home">
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">
                                Delistoper
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block text-right">
                            <p className="text-sm text-gray-500">Logged as</p>
                            <p className="text-sm font-semibold text-gray-900">
                                {user?.name || 'Usuário'}
                            </p>
                        </div>

                        <div className="h-8 w-px bg-gray-200 mx-2 hidden md:block"></div>

                        <button
                            onClick={handleLogout}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                            title="Sair do sistema"
                        >
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
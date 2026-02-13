import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { CircleArrowLeft } from "lucide-react"

const Project = () => {
    const { id } = useParams(); // Pega o ID da URL.
    const location = useLocation(); // Pega o objeto passado no Link.

    // Pega os dados do projeto passados no state. 
    // Isso funciona até o momento que o usuário der f5 ou caso ele venha direto para este link.
    // Caso ele dê f5, os dados devem ser buscados no backend.
    const project = location.state?.projectData;

    return (
        <div className="min-h-screen">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="mb-6">
                    <Link 
                        to="/home" 
                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                        <CircleArrowLeft size={16} className="mr-1" />
                        Voltar para Home
                    </Link>
                </div>
                
            </main>
        </div>
    );
}

export default Project;
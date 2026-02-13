import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { CircleArrowLeft } from "lucide-react"
import { useEffect, useState } from "react";
import api from "../services/api";

const Project = () => {
    const { id } = useParams(); // Pega o ID da URL.
    const location = useLocation(); // Pega o objeto passado no Link.

    // Pega os dados do projeto passados no state. 
    // Isso funciona até o momento que o usuário der f5 ou caso ele venha direto para este link.
    // Caso ele dê f5, os dados devem ser buscados no backend.
    const [project, setProject] = useState(location.state?.projectData || null)
    const [isLoading, setIsLoading] = useState(!location.state?.projectData);

    useEffect(() => {
        // Se já tem os dados que vieram da página anterior, não faz nada
        if (project) {
            return ;
        }
        
        const getProject = async () => {
            try {
                const response = await api.get(`/project/${id}`, {});
                setProject(response.data);

            } catch (err) {
                console.log(err);

            } finally {
                setIsLoading(false);

            }
        }

        getProject();
    }, [id]);

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

                {isLoading && (
                    <div className="text-center py-10 text-gray-500">Loading...</div>
                )}

                {!isLoading && project && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            
                            {/* Ícone Grande com a Inicial */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold shadow-md">
                                    {project.name.charAt(0).toUpperCase()}
                                </div>
                            </div>

                            {/* Textos */}
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                        {project.name}
                                    </h1>
                                    
                                    {/* Badge opcional de ID */}
                                    <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                                        #{project.id}
                                    </span>
                                </div>
                                
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {project.description || (
                                        <span className="text-gray-400 italic">Nenhuma descrição fornecida.</span>
                                    )}
                                </p>
                            </div>

                        </div>
                    </div>
                )}

                {!isLoading && !project && (
                    <div className="text-center py-10 bg-white rounded-xl border border-gray-200">
                        <p className="text-gray-500">Project not found.</p>
                    </div>
                )}
                
            </main>
        </div>
    );
}

export default Project;
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const initial = project.name.charAt(0).toUpperCase();

    return (
      // Coloca o ID na URL.
      // Envia o objeto todo para a próxima tela através do state.
      <Link 
        to={`/project/${project.id}`}
        state={{ projectData: project }}
      >
        <div className={`
          h-full bg-white rounded-xl border border-gray-200 p-6 
          transition-all duration-300 ease-in-out
          hover:shadow-md hover:border-indigo-300 hover:-translate-y-1
          flex flex-col
        `}>
          
          {/* Cabeçalho do Card: Ícone + Opções */}
          <div className="flex justify-between items-start mb-4">
            
            {/* Ícone Gerado (Quadrado Indigo) */}
            <div className="
              w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 
              flex items-center justify-center text-xl font-bold
            ">
              {initial}
            </div>
          </div>

          {/* Título */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {project.name}
          </h3>

          {/* Descrição (Tratamento para texto vazio ou longo) */}
          <div className="text-gray-500 text-sm leading-relaxed flex-grow">
            {project.description ? (
              <p className="line-clamp-3"> {/* Corta após 3 linhas */}
                {project.description}
              </p>
            ) : (
              <p className="italic text-gray-400">Sem descrição.</p>
            )}
          </div>

        </div>
      </Link>
  );
}

export default ProjectCard;
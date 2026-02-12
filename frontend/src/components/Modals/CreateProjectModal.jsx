import { use, useState } from "react";
import Input from "../Input/index.jsx";
import Textarea from "../Textarea/index.jsx";
import Button from "../Button/index.jsx";

const CreateProjectModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Caso não esteja aberto, não renderiza nada.
    if (!isOpen) {
        return null;
    }

    return (
        // Overlay
        <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center z-50 p-4">

            {/* Caixa do modal */}
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative animate-fade-in-down">
                <h1 className="text-xl font-bold mb-4 text-gray-800">Novo Projeto</h1>

                <form>
                    <Input
                        label="Nome do Projeto"
                        type="text"
                        placeholder="Ex: App Delivery"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <Textarea
                        label="Descrição (Opcional)"
                        type="text"
                        rows="4"
                        placeholder="Detalhes sobre o projeto..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <div className="flex justify-end gap-3 items-center">
                        <button type="button" onClick={onClose} 
                            className="w-full py-3 px-4 rounded-lg font-bold
                            text-white bg-gray-600 hover:bg-gray-700
                            flex justify-center items-center"
                        >
                            Cancelar
                        </button>
                        
                        <div className="w-32">
                            <Button type="submit" isLoading={isLoading}>
                                Criar
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default CreateProjectModal;
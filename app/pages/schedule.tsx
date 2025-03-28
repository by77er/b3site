import { useState } from 'react';

const SCHEDULE_IMAGE_PATH = '/img/B3_SCHEDULE_04_2025.png';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const ImageModal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 backdrop-blur-sm bg-black/70 z-50 flex items-center justify-center"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="relative w-full h-full overflow-auto">
                <button 
                    className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img 
                    src={imageSrc} 
                    alt="Schedule" 
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

export default function Schedule() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-4xl flex flex-col items-center gap-4 p-4">
                <div className="relative">
                    <img 
                        src={SCHEDULE_IMAGE_PATH}
                        alt="Schedule" 
                        className="w-full rounded-lg shadow-md cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    />
                </div>
                <a 
                    href={SCHEDULE_IMAGE_PATH}
                    download 
                    className="font-bold px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-lg text-2xl shadow-md hover:cursor-pointer"
                >
                    Download Schedule
                </a>
                <ImageModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    imageSrc={SCHEDULE_IMAGE_PATH}
                />
            </div>
        </div>
    );
}
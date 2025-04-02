import React from 'react';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
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
                    alt="Full size image" 
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

export default ImageModal;
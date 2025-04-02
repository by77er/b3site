import { useState } from 'react';
import ImageModal from '../components/ImageModal';

const PARKING_IMAGE_PATH = '/img/B3_PARKING_04_2025.png';

export default function Directions() {
    const [isParkingModalOpen, setIsParkingModalOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-4xl flex flex-col items-center gap-4 p-4">
                    <div className="relative">
                        <img 
                            src={PARKING_IMAGE_PATH}
                            alt="Parking Map" 
                            className="w-full rounded-2xl shadow-md cursor-pointer"
                            onClick={() => setIsParkingModalOpen(true)}
                        />
                    </div>
                    <div className="mt-4">
                        <a 
                            href={PARKING_IMAGE_PATH}
                            download 
                            className="font-bold px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-lg text-2xl shadow-md hover:cursor-pointer"
                        >
                            Download Parking Map
                        </a>
                    </div>
                </div>
            </div>

            <ImageModal 
                isOpen={isParkingModalOpen}
                onClose={() => setIsParkingModalOpen(false)}
                imageSrc={PARKING_IMAGE_PATH}
            />
        </>
    );
}
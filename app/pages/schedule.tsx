import { useState } from 'react';
import ImageModal from '../components/ImageModal';

const SCHEDULE_IMAGE_PATH = '/img/B3_SCHEDULE_04_2025.png';

export default function Schedule() {
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-4xl flex flex-col items-center gap-4 p-4">
                    <div className="relative">
                        <img
                            src={SCHEDULE_IMAGE_PATH}
                            alt="Schedule"
                            className="w-full rounded-2xl shadow-md cursor-pointer"
                            onClick={() => setIsScheduleModalOpen(true)}
                        />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <a
                            href={SCHEDULE_IMAGE_PATH}
                            download
                            className="font-bold px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-lg text-2xl shadow-md hover:cursor-pointer"
                        >
                            Download Schedule
                        </a>
                    </div>
                </div>
            </div>

            <ImageModal
                isOpen={isScheduleModalOpen}
                onClose={() => setIsScheduleModalOpen(false)}
                imageSrc={SCHEDULE_IMAGE_PATH}
            />
        </>
    );
}
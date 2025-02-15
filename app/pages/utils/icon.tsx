export interface IconProps {
    name: string;
    links: { name: string; url: string }[];
}

export default function Icon({ name, links }: IconProps) {
    return (
        <div>
            <div className="mt-2 w-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-200 mx-auto p-4 flex flex-col items-center">
                <svg
                    className="w-20 h-20 rounded-full bg-gray-200 p-2"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse
                        cx="32"
                        cy="55"
                        rx="20"
                        ry="20"
                        fill="gray" />
                    <circle
                        cx="32"
                        cy="32"
                        r="25"
                        stroke="gray"
                        strokeWidth="4"
                        fill="lightgray" />
                    
                </svg>
                <div className="p-2 text-center">
                    <h4 className="font-bold text-black dark:text-white">{name}</h4>
                    <ul className="mt-1">
                        {links.map((link) => (
                            <li key={link.url}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
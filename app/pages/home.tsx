import Icon from "./utils/icon";

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-8">
                <section className="flex-1 p-4 flex flex-col items-center md:items-start">
                    <div className="mx-auto text-center">
                        <img
                            src="/img/BAY_BARK_BASH.png"
                            alt="Bay Bark Bash Logo"
                            className="mx-auto mb-8"
                        />
                        <h1 className="text-4xl font-bold mb-4 text-pretty">
                            Come party with furries at <br /><em>Bay Bark Bash</em>!
                        </h1>
                        <a
                            href="https://baybarkbash.concat.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold py-4 px-8 rounded-lg text-2xl shadow-md hover:cursor-pointer">
                                Get Tickets
                            </button>
                        </a>
                    </div>
                </section>
                <section className="flex-1 p-4">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                                What is it?
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Get ready for a chill, private nighttime mini-convention featuring vendors,
                                live DJ performances, and more. Enjoy a venue with immaculate vibes,
                                indoor and outdoor spaces, and a botanical tea bar with plenty of nearby restaurants.
                                <br />
                                <br />
                                <em>Capacity is limited to 250 attendees. This event is SFW and for people aged 18 or older.</em>
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                                When's it happening?
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                April 5th, 2025, from 7PM to 12AM
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                                Where's it being held?
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                <a
                                    href="https://www.rootstocrown.space/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-500 transition-colors"
                                >
                                    Roots to Crown
                                </a> in downtown St. Petersburg, FL
                                <br />
                                <a
                                    href="https://maps.app.goo.gl/8vo7C9C9huqTuRFD9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-500 transition-colors"
                                >
                                    1741 1st Ave N, St. Petersburg, FL 33713
                                </a>
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                                Where can I get updates?
                            </h3>
                            <div className="flex flex-row gap-4 flex-wrap">
                                <a
                                    href="https://t.me/+kDp_-2NZOVY0OThh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                                >
                                    Telegram
                                </a>
                                <a
                                    href="https://x.com/baybarkbash"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="https://bsky.app/profile/baybarkbash.bsky.social"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded transition-colors"
                                >
                                    Bluesky
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="p-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 text-center">
                                DJ Applications are closed.
                            </h3>
                            <div className="block text-center mt-4 bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-default">
                                Thanks for applying!
                            </div>
                            {/* <div className="flex flex-wrap gap-4 justify-center">
                                {djs.map(({name, links}, i) => (
                                    <Icon key={i} name={name} links={links} />
                                ))}

                            </div> */}
                        </div>

                        <div className="flex-1 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 text-center">
                                Vendor applications are closed.
                            </h3>
                            <div
                                className="block text-center mt-4 bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-default"
                            >
                                Thanks for applying!
                            </div>
                            {/* <div className="flex flex-wrap gap-4 justify-center">
                                {vendors.map(({name, links}, i) => (
                                    <Icon key={i} name={name} links={links} />
                                ))}
                            </div> */}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="bg-white dark:bg-gray-700 m-4 p-4 rounded-lg shadow-md text-center">
                        <p className="text-gray-800 dark:text-gray-200 font-medium">
                            Interested in more events in the Tampa Bay area? Check out{" "}
                            <a
                                href="https://tampafurry.club"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 dark:text-blue-400 hover:underline font-bold"
                            >
                                Tampa Furry Club
                            </a>
                            !
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

// const djs = [
//     {
//         name: "DJ 1",
//         links: [
//             {
//                 name: "Soundcloud",
//                 url: "https://soundcloud.com"
//             }
//         ]
//     },
//     {
//         name: "DJ 2",
//         links: [
//             {
//                 name: "Bandcamp",
//                 url: "https://bandcamp.com"
//             }
//         ]
//     },
//     {
//         name: "DJ 3",
//         links: [
//             {
//                 name: "Mixcloud",
//                 url: "https://www.mixcloud.com/"
//             }
//         ]
//     }
// ]

// const vendors = [
//     {
//         name: "Vendor 1",
//         links: [
//             {
//                 name: "Twitter",
//                 url: "https://x.com"
//             }
//         ]
//     },
//     {
//         name: "Vendor 2",
//         links: [
//             {
//                 name: "Bluesky",
//                 url: "https://bsky.app"
//             }
//         ]
//     },
//     {
//         name: "Vendor 3",
//         links: [
//             {
//                 name: "Instagram",
//                 url: "https://instagram.com"
//             }
//         ]
//     }
// ]
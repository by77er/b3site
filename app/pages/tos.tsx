export default function Tos() {
    return (
        <div className="flex flex-col gap-8 scroll-smooth">
            <div className="rounded-2xl shadow-xl p-8 space-y-4 bg-white dark:bg-gray-800">
                <h2 className="mb-2 text-2xl font-bold text-blue-500">Table of Contents</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li className="hover:underline">
                        <a href="#terms_of_service">Terms of Service</a>
                    </li>
                    <li className="hover:underline">
                        <a href="#privacy_policy">Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div className="rounded-2xl shadow-xl p-8 space-y-4 bg-white dark:bg-gray-800">
                <h1
                    id="terms_of_service"
                    className="text-2xl text-blue-500 font-bold scroll-mt-20"
                >
                    Bay Bark Bash Terms of Service
                </h1>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Terms of Agreement:</h2>
                <p>
                    By purchasing a ticket for the event "Bay Bark Bash", you agree to the following terms and conditions.
                    These conditions are legally binding and failure to abide by them could result in revocation of access to this
                    event and any further events hosted by Tampa Furry Club LLC, henceforth referred to as "the Hosts".
                </p>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Assumption of Risk and Liability:</h2>
                <p>
                    Bay Bark Bash is a live event that will likely include varying levels of physical activity, flashing lights,
                    loud music, and sounds, which may pose a risk to certain individuals. By purchasing a ticket for Bay Bark Bash,
                    you acknowledge and accept these risks, and agree to waive any claims against, and hold harmless, the Hosts
                    for any injuries or losses, except in cases of gross negligence or intentional misconduct by the Host. The Host
                    assumes no responsibility for any lost, damaged, or stolen property.
                </p>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Code of Conduct:</h2>
                <p>
                    All ticket holders for events hosted by Tampa Furry Club LLC are expected to behave with a reasonable level of appropriateness.
                    Disorderly conduct, threatening or aggressive behavior, hazing, stalking, harassment, and similar actions
                    will not be tolerated. Ticket holders will additionally be expected to abide by the rules and regulations of the venue and the
                    specific event as specified at the time of ticket purchase.
                </p>
                <p>
                    The Hosts have the authority to remove any person from the premises and revoke their ticket for failure to adhere
                    to these conditions.
                </p>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Media Release:</h2>
                <p>
                    By purchasing a ticket, you grant permission for the Hosts to use photographs and/or videos taken of you for promotional
                    purposes. If you would prefer to not allow yourself or your likeness to be used in this way, please email{" "}
                    <a href="mailto:tampafurryclub@gmail.com" className="underline">tampafurryclub@gmail.com</a> with the subject "Request to Rescind Media Release" before the date of the event.
                </p>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Merchandise and Refunds:</h2>
                <p>
                    Merchandise will be sold by the Host. Any merchandise purchased can be refunded within seven (7) days from the date of the event,
                    provided the items have not been worn, washed, damaged, or altered in any way. Tickets purchased before the event, or "Presale Tickets,"
                    are refundable until seven (7) days before the event. This applies to both standard tickets and "Sponsor Level" tickets.
                    Tickets purchased at the event, or "At The Door" tickets, are not refundable. If a "Sponsor Level" ticket is refunded, any associated rewards will be forfeited.
                </p>
                <p>
                    To request a refund, please email{" "}
                    <a href="mailto:tampafurryclub@gmail.com" className="underline">tampafurryclub@gmail.com</a> with the subject line "Bay Bark Bash Refund Request"
                    within the refund period.
                </p>
                <p>Last updated: February 15, 2024</p>
            </div>
            <div className="rounded-2xl shadow-xl p-8 space-y-4 bg-white dark:bg-gray-800">
                <h1
                    id="privacy_policy"
                    className="text-2xl text-blue-500 font-bold scroll-mt-20"
                >
                    Bay Bark Bash Privacy Policy
                </h1>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Data Collection and Use</h2>
                <p>
                    Tampa Furry Club LLC does not directly collect or store personal data. Our third-party service providers collect and process the following information on our behalf:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Names and addresses (collected by ConCat)</li>
                    <li>Payment information (processed by Stripe)</li>
                    <li>Payment information (processed by Square)</li>
                </ul>
                <p>
                    This data is used for event admission, order fulfillment, payment processing, fraud prevention, and related customer support.
                </p>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Third-Party Services</h2>
                <p>We use:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <strong>ConCat</strong> for collecting and storing names and addresses
                    </li>
                    <li>
                        <strong>Stripe</strong> for secure payment processing
                    </li>
                    <li>
                        <strong>Square</strong> for secure payment processing
                    </li>
                </ul>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Third-Party Data Usage</h2>
                <p>
                    Our third-party providers may use your personal data to:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Process payments and prevent fraud</li>
                    <li>Manage event admission</li>
                    <li>Fulfill merchandise orders</li>
                    <li>Provide customer support</li>
                    <li>Comply with legal obligations</li>
                </ul>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Data Security</h2>
                <p>
                    ConCat, Stripe, and Square implement their own industry-standard security measures to protect your information.
                    For specific security practices, please refer to their respective privacy policies.
                </p>
                <h2 className="mt-8 mb-2 text-xl font-semibold">User Age Requirement</h2>
                <p>
                    Our event and related sales are intended for individuals 18 years of age and older.
                </p>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Updates to This Policy</h2>
                <p>
                    We may update this policy periodically to reflect changes in our practices or third-party services. Changes will be posted on this page.
                </p>
                <h2 className="mt-8 mb-2 text-xl font-semibold">Contact Information</h2>
                <p>
                    For privacy inquiries or to exercise your data rights, please contact us at:{" "}
                    <a href="mailto:tampafurryclub@gmail.com" className="underline">tampafurryclub@gmail.com</a>
                </p>
                <p>This privacy policy is effective as of February 14, 2025.</p>
                <p>
                    By purchasing tickets or merchandise for our event, you acknowledge this privacy policy and the data handling practices of our third-party service providers.
                </p>
            </div>
        </div>
    );
}

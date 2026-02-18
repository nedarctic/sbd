'use client';

import { oswald } from '@/components/ui/fonts';
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function RefundPolicy() {

    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    });

    return (
        <div className={`${oswald.className} py-20 min-h-screen bg-gray-900 text-gray-200`}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <header className="border-b-2 border-[#E8B85F] pb-8 mb-12">
                    <h1 className="text-5xl font-bold tracking-tighter text-[#E8B85F] mb-2">
                        REFUND POLICY
                    </h1>
                    <p className="text-xl text-gray-400">
                        Last updated December 17, 2025
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Table of Contents Sidebar */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                            <h2 className="text-2xl font-bold text-[#E8B85F] mb-4">
                                TABLE OF CONTENTS
                            </h2>

                            <h3 className="font-bold text-gray-100 mt-4 mb-2">Refund Policy</h3>
                            <nav className="space-y-1">
                                {[
                                    '1. General Refund Principles',
                                    '2. Eligibility for Refunds',
                                    '3. Non-Refundable Situations',
                                    '4. Partial Refunds',
                                    '5. Publication Processing Services',
                                    '6. Refund Request Procedure',
                                    '7. Refund Processing Timeline',
                                    '8. Policy Updates'
                                ].map((item, index) => (
                                    <a
                                        key={item}
                                        href={`#refund-section-${index + 1}`}
                                        className="block text-sm hover:text-[#E8B85F] transition-all text-gray-300 hover:pl-2"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    <main className="lg:w-3/4 space-y-12">
                        {/* Refund Policy Header */}
                        <section className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                            <header className="border-b-2 border-[#E8B85F] pb-4 mb-6">
                                <h1 className="text-4xl font-bold tracking-tighter text-[#E8B85F]">
                                    REFUND POLICY
                                </h1>
                                <p className="text-lg text-gray-400 mt-2">
                                    Last updated December 17, 2025
                                </p>
                            </header>

                            <p className="text-lg leading-relaxed mb-6">
                                ScholarBrood is committed to providing high-quality, ethical, and professional academic and research support services to students, scholars, and researchers worldwide. We value transparency and fairness in all client engagements. This Refund Policy explains the circumstances under which refunds may be requested, reviewed, and granted. By placing an order with ScholarBrood or using any of our services, you acknowledge that you have read, understood, and agreed to the terms outlined in this Refund Policy.
                            </p>
                        </section>

                        {/* Refund Policy Sections */}
                        <div className="space-y-12">
                            {/* Refund Section 1 */}
                            <section id="refund-section-1" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                                    1. General Refund Principles
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        Refunds at ScholarBrood are not automatic and are considered on a case-by-case basis. Due to the customized and intellectual nature of academic writing, research support, and publication processing services, once work has commenced, resources, time, and expertise are immediately invested. As such, refunds are only issued under specific conditions outlined in this policy.
                                    </p>
                                    <p>
                                        ScholarBrood prioritizes resolving client concerns through revisions, clarifications, and reasonable adjustments before considering any refund. A refund will only be evaluated after the client has allowed adequate opportunity for the issue to be corrected in line with the original project instructions.
                                    </p>
                                </div>
                            </section>

                            {/* Refund Section 2 */}
                            <section id="refund-section-2" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                                    2. Eligibility for Refunds
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        A refund may be considered under the following circumstances:
                                    </p>

                                    <div className="space-y-4 ml-4">
                                        <div className="flex items-start">
                                            <span className="text-[#E8B85F] font-bold mr-2">1.</span>
                                            <span>
                                                If a project is not delivered at all and no substantial work has been provided to the client within the agreed timeframe, the client may be eligible for a full or partial refund, depending on the stage of completion.
                                            </span>
                                        </div>

                                        <div className="flex items-start">
                                            <span className="text-[#E8B85F] font-bold mr-2">2.</span>
                                            <span>
                                                If the delivered work significantly deviates from the original instructions provided by the client at the time of order—such as incorrect topic, wrong academic level, or failure to follow essential formatting or structural requirements—a refund may be considered. In such cases, ScholarBrood will first attempt to resolve the issue through revisions at no additional cost to the client.
                                            </span>
                                        </div>
                                    </div>

                                    <p>
                                        Refunds are only considered if the client has clearly communicated the issue, allowed reasonable time for revisions, and the concerns remain unresolved after revision attempts.
                                    </p>
                                </div>
                            </section>

                            {/* Refund Section 3 */}
                            <section id="refund-section-3" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                                    3. Non-Refundable Situations
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        Refunds will not be issued when the work has been delivered in accordance with the instructions, deadline, and academic level agreed upon at the time of order. Dissatisfaction based on personal preference, grading expectations, or subjective opinions does not constitute grounds for a refund.
                                    </p>
                                    <p>
                                        Refunds are also not granted in situations where issues arise due to incomplete, unclear, inaccurate, or late instructions provided by the client. Changes in project requirements after work has begun, including topic changes, scope expansion, or deadline adjustments, are not eligible for refunds.
                                    </p>
                                    <p>
                                        ScholarBrood is not responsible for academic outcomes such as grades, instructor feedback, institutional disciplinary actions, or publication acceptance or rejection. Therefore, unfavorable academic or publication outcomes do not qualify for refunds.
                                    </p>
                                </div>
                            </section>

                            {/* Refund Section 4 */}
                            <section id="refund-section-4" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                                    4. Partial Refunds
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        Partial refunds may be granted in cases where a portion of the project has been completed or delivered at the time a valid refund request is submitted. The determination of a partial refund amount is based on the percentage of work completed, the complexity of the task, and the resources already invested.
                                    </p>
                                    <p>
                                        ScholarBrood reserves the right to assess and calculate partial refunds fairly and reasonably. Any completed sections, drafts, research, or analysis provided to the client will be factored into the refund decision.
                                    </p>
                                </div>
                            </section>

                            {/* Refund Section 5 */}
                            <section id="refund-section-5" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                                    5. Publication Processing Services
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        All publication processing services are strictly non-refundable once any part of the process has commenced. This includes, but is not limited to, journal identification, manuscript formatting, plagiarism checks, submission handling, communication with journals or publishers, reviewer comment management, and revision coordination.
                                    </p>
                                    <p>
                                        Due to the professional expertise, time investment, and third-party interactions involved in publication support, these services cannot be reversed or refunded once initiated, regardless of publication outcome.
                                    </p>
                                </div>
                            </section>

                            {/* Refund Section 6 */}
                            <section id="refund-section-6" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                                    6. Refund Request Procedure
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        All refund requests must be submitted in writing within seven (7) days of project delivery. Requests submitted after this period may not be considered. To initiate a refund request, clients must contact ScholarBrood via email at <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scholarbrood.com"
                                            target="_blank" className="text-[#E8B85F] hover:underline">info@scholarbrood.com</Link>, clearly stating the reason for the request and referencing the original order details.
                                    </p>
                                    <p>
                                        ScholarBrood will review each request individually and may request additional information or clarification during the assessment process. Clients are expected to cooperate fully to facilitate a fair evaluation.
                                    </p>
                                </div>
                            </section>

                            {/* Refund Section 7 */}
                            <section id="refund-section-7" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                                    7. Refund Processing Timeline
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        If a refund request is approved, refunds will be processed within seven (7) to fourteen (14) business days using the original payment method, unless otherwise stated. Processing times may vary depending on the payment provider or financial institution. ScholarBrood does not charge additional fees for approved refunds, but is not responsible for delays caused by third-party payment processors.
                                    </p>
                                </div>
                            </section>

                            {/* Refund Section 8 */}
                            <section id="refund-section-8" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                                    8. Policy Updates
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        ScholarBrood reserves the right to update or modify this Refund Policy at any time. Any changes will be posted on the website with an updated "Last Updated" date. Continued use of our services after such changes constitutes acceptance of the revised policy. For questions or clarifications regarding this Refund Policy, please contact <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scholarbrood.com"
                                            target="_blank" className="text-[#E8B85F] hover:underline">info@scholarbrood.com</Link>.
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Footer */}
                        <footer className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                            <p className="text-lg font-bold text-[#E8B85F] mb-2">ScholarBrood</p>
                            <p>Expert Academic Writing, Editing, Research, and Publication Support for Students and Researchers</p>
                            <p className="mt-4 text-sm">© {year} ScholarBrood. All rights reserved.</p>
                        </footer>
                    </main>
                </div>
            </div>
        </div >
    );
}
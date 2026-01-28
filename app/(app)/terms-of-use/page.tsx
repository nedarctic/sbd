'use client';

import { oswald } from '@/components/ui/fonts';
import { useState, useEffect } from 'react';

export default function TermsOfService() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className={`${oswald.className} py-20 min-h-screen bg-gray-900 text-gray-200`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="border-b-2 border-[#E8B85F] pb-8 mb-12">
          <h1 className="text-5xl font-bold tracking-tighter text-[#E8B85F] mb-2">
            TERMS OF USE
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

              <h3 className="font-bold text-gray-100 mt-4 mb-2">Terms of Use</h3>
              <nav className="space-y-1 mb-4">
                {[
                  '1. Scope of Services',
                  '2. Academic Integrity and Ethical Use',
                  '3. Client Responsibilities',
                  '4. Orders, Pricing, and Payments',
                  '5. Revisions and Amendments',
                  '6. Delivery and Turnaround Time',
                  '7. Intellectual Property and Ownership Rights',
                  '8. Confidentiality and Data Protection',
                  '9. Limitation of Liability',
                  '10. Service Refusal and Termination',
                  '11. Modifications to Terms',
                  '12. Governing Law',
                  '13. Contact Information'
                ].map((item, index) => (
                  <a
                    key={item}
                    href={`#section-${index + 1}`}
                    className="block text-sm hover:text-[#E8B85F] text-gray-300 hover:pl-2 transition-all"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 space-y-12">
            {/* Introduction */}
            <section className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Welcome to ScholarBrood. These Terms of Use ("Terms") constitute a legally binding agreement between you (the "Client," "User," or "You") and ScholarBrood regarding your access to and use of the website <a href="https://scholarbrood.com" className="text-[#E8B85F] hover:underline">https://scholarbrood.com</a> and all services offered by ScholarBrood, including but not limited to academic writing, research writing and support, editing, proofreading, data analysis, and publication processing services. By accessing our website, placing an order, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of our website and services immediately.
              </p>
            </section>

            {/* Terms of Use Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section id="section-1" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  1. Scope of Services
                </h2>
                <div className="space-y-4">
                  <p>
                    ScholarBrood provides academic support services designed to assist students, scholars, researchers, and professionals in developing academic and research-related materials. Our services include academic writing, research writing and support, editing and proofreading, data analysis support, and publication processing assistance. All services are provided strictly for reference, guidance, and educational support purposes only. ScholarBrood does not guarantee academic outcomes, grades, publication acceptance, or institutional approval.
                  </p>
                  <p>
                    The materials delivered by ScholarBrood are intended to serve as learning aids, model papers, or research guidance. They are not intended to be submitted as a client's original work where such submission would violate academic integrity policies, honor codes, or institutional regulations. Clients bear full responsibility for understanding and complying with the academic integrity rules of their respective institutions.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  2. Academic Integrity and Ethical Use
                </h2>
                <div className="space-y-4">
                  <p>
                    ScholarBrood maintains a strict commitment to academic integrity and ethical academic support. We do not condone plagiarism, contract cheating, falsification of data, or any form of academic misconduct. By using our services, you agree that all delivered materials will be used ethically, responsibly, and in compliance with your institution's policies.
                  </p>
                  <p>
                    The Client acknowledges that ScholarBrood cannot be held responsible for how delivered content is ultimately used. Any misuse of materials, including direct submission as original work without proper attribution where required, is solely the responsibility of the Client. ScholarBrood reserves the right to refuse service or terminate ongoing projects if there is reasonable suspicion that the services will be used for unethical or dishonest purposes.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  3. Client Responsibilities
                </h2>
                <div className="space-y-4">
                  <p>
                    By placing an order with ScholarBrood, the Client agrees to provide complete, accurate, and timely information regarding project requirements. This includes, but is not limited to, subject matter, academic level, formatting style, word count, deadlines, institutional guidelines, and any specific instructions relevant to the work.
                  </p>
                  <p>
                    ScholarBrood shall not be responsible for delays, errors, or unsatisfactory results arising from incomplete, unclear, inaccurate, or late instructions provided by the Client. The Client also agrees to review all delivered materials promptly upon receipt and prior to submission to any third party or institution. Final responsibility for submission decisions and use of the delivered work rests entirely with the Client.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  4. Orders, Pricing, and Payments
                </h2>
                <div className="space-y-4">
                  <p>
                    All orders placed through ScholarBrood are subject to acceptance based on feasibility, timeline, and scope. Pricing for academic writing and research support services is calculated based on a standard of 250 words per page, unless otherwise specified in writing. Editing and proofreading services may be priced per word or per page, depending on the service selected. Publication processing services are charged as a flat fee and do not guarantee acceptance by journals or publishers.
                  </p>
                  <p>
                    Full payment or an agreed-upon partial payment arrangement must be completed before work commences. Failure to make timely payment may result in delays, suspension, or cancellation of services. Payments are processed securely through third-party payment providers. ScholarBrood does not store or retain sensitive payment information such as credit card numbers or banking details. All prices are quoted in the applicable currency as indicated at the time of order and are subject to change without prior notice for future orders.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  5. Revisions and Amendments
                </h2>
                <div className="space-y-4">
                  <p>
                    ScholarBrood offers free revisions provided that revision requests are consistent with the original instructions submitted at the time of order. Revision requests must be submitted within seven (7) days of delivery, unless otherwise stated in writing. Requests that introduce new instructions, expand the scope of work, alter the academic level, change the topic, or significantly modify the original requirements may be subject to additional charges. ScholarBrood reserves the right to determine whether a revision request falls within the original scope of work and to decline requests that are unreasonable, unclear, or outside the agreed terms.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  6. Delivery and Turnaround Time
                </h2>
                <div className="space-y-4">
                  <p>
                    ScholarBrood makes reasonable efforts to deliver all work within the agreed deadlines. However, turnaround times are dependent on the complexity of the project, clarity of instructions, and timely communication from the Client. Delays caused by late responses, additional instructions, or unforeseen circumstances may affect delivery timelines. While ScholarBrood strives for punctual delivery, we do not accept liability for losses or damages arising from delayed submissions, missed deadlines, or institutional penalties related to timing.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  7. Intellectual Property and Ownership Rights
                </h2>
                <div className="space-y-4">
                  <p>
                    Upon full payment for services rendered, the Client is granted ownership rights to the delivered work for personal academic and educational use. ScholarBrood relinquishes authorship claims to the final delivered materials, subject to the limitations outlined in these Terms. ScholarBrood retains the right to use anonymized excerpts or portions of completed work for internal quality assurance, staff training, marketing demonstrations, or service improvement purposes. No personally identifiable information or confidential client data will be disclosed in such use.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  8. Confidentiality and Data Protection
                </h2>
                <div className="space-y-4">
                  <p>
                    ScholarBrood is committed to protecting client confidentiality. All personal information, project details, and communications are treated as confidential and are not shared with third parties except where required to deliver services or comply with applicable laws. Clients agree that electronic communication carries inherent risks and that ScholarBrood is not liable for unauthorized access beyond reasonable security measures. By using our services, you consent to the collection and use of information in accordance with our Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  9. Limitation of Liability
                </h2>
                <div className="space-y-4">
                  <p>
                    ScholarBrood shall not be liable for academic penalties, grade outcomes, rejection of publications, institutional disciplinary actions, or any indirect, incidental, or consequential damages arising from the use or misuse of delivered materials. Under no circumstances shall ScholarBrood's total liability exceed the amount paid by the Client for the specific service giving rise to the claim. This limitation applies regardless of the form of action, whether in contract, tort, or otherwise.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  10. Service Refusal and Termination
                </h2>
                <div className="space-y-4">
                  <p>
                    ScholarBrood reserves the right to refuse service, suspend ongoing work, or terminate agreements without notice if the Client violates these Terms, engages in abusive or unethical behavior, or attempts to use services for unlawful or dishonest purposes. In such cases, refunds, if any, will be determined at ScholarBrood's sole discretion.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  11. Modifications to Terms
                </h2>
                <div className="space-y-4">
                  <p>
                    ScholarBrood reserves the right to update, modify, or replace these Terms of Use at any time. Updated versions will be posted on the website with a revised "Last Updated" date. Continued use of the website or services after changes are posted constitutes acceptance of the revised Terms.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  12. Governing Law
                </h2>
                <div className="space-y-4">
                  <p>
                    These Terms of Use shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the appropriate legal jurisdiction as determined by ScholarBrood.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  13. Contact Information
                </h2>
                <div className="space-y-4">
                  <p>
                    For questions, concerns, or clarifications regarding these Terms of Use, please contact us at <a href="mailto:info@scholarbrood.com" className="text-[#E8B85F] hover:underline">info@scholarbrood.com</a>. By using ScholarBrood's website and services, you acknowledge that you have read, understood, and agreed to these Terms of Use in full.
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p className="text-lg font-bold text-[#E8B85F] mb-2">ScholarBrood</p>
              <p>Expert Academic Writing, Editing, Research, and Publication Support for Students and Researchers</p>
              <p className="mt-4 text-sm">© {currentYear} ScholarBrood. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
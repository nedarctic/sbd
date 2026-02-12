'use client';

import { useState, useEffect } from 'react';
import { oswald } from '@/components/ui/fonts';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className={`${oswald.className} min-h-screen bg-gray-900 py-20 text-gray-200`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="flex flex-col items-start border-b-2 border-[#E8B85F] pb-8 mb-12">
          <h1 className="text-5xl font-bold tracking-tighter text-[#E8B85F] mb-2">
            PRIVACY POLICY
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
              <nav className="space-y-2">
                {[
                  '1. WHAT INFORMATION DO WE COLLECT?',
                  '2. HOW DO WE PROCESS YOUR INFORMATION?',
                  '3. WHAT LEGAL BASES DO WE RELY ON?',
                  '4. WHEN DO WE SHARE YOUR INFORMATION?',
                  '5. DO WE USE COOKIES?',
                  '6. HOW LONG DO WE KEEP YOUR INFORMATION?',
                  '7. HOW DO WE KEEP YOUR INFORMATION SAFE?',
                  '8. DO WE COLLECT INFORMATION FROM MINORS?',
                  '9. WHAT ARE YOUR PRIVACY RIGHTS?',
                  '10. DO-NOT-TRACK FEATURES',
                  '11. US RESIDENTS PRIVACY RIGHTS',
                  '12. OTHER REGIONS PRIVACY RIGHTS',
                  '13. UPDATES TO THIS POLICY',
                  '14. HOW TO CONTACT US',
                  '15. REVIEW, UPDATE, OR DELETE DATA'
                ].map((item, index) => (
                  <a
                    key={item}
                    href={`#section-${index + 1}`}
                    className="block text-sm hover:text-[#daa94e] transition-all text-gray-300 hover:pl-2"
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
                This Privacy Policy for ScholarBrood ("we," "us," or "our"),
                describes how and why we might access, collect, store, use,
                and/or share ("process") your personal information when you
                use our services ("Services"), including when you:
              </p>

              <ul className="space-y-3 mb-8 ml-4">
                <li className="flex items-start">
                  <span className="text-[#daa94e] mr-2">•</span>
                  Visit our website at https://scholarbrood.com or any website of ours that links to this Privacy Policy
                </li>
                <li className="flex items-start">
                  <span className="text-[#daa94e] mr-2">•</span>
                  Use Academic, research & publication services. An academic service platform that helps students and researchers develop high-quality essays, proposals, theses, journal manuscripts, data analysis, and publication support from experienced academic professionals
                </li>
                <li className="flex items-start">
                  <span className="text-[#daa94e] mr-2">•</span>
                  Engage with us in other related ways, including any marketing or events
                </li>
              </ul>

              <div className="bg-amber-900/30 border-l-4 border-[#E8B85F] p-4 mb-8">
                <p className="text-amber-200">
                  <strong>Questions or concerns?</strong> Reading this Privacy Policy will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <Link href="mailto:info@scholarbrood.com" className="text-[#E8B85F] hover:underline">info@scholarbrood.com</Link>.
                </p>
              </div>
            </section>

            {/* Key Points Summary */}
            <section className="bg-gray-800 p-8 rounded-lg border-2 border-[#E8B85F]">
              <h2 className="text-3xl font-bold text-[#E8B85F] mb-6">
                SUMMARY OF KEY POINTS
              </h2>
              <p className="text-gray-300 mb-6">
                This summary provides key points from our Privacy Policy, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                  <h3 className="font-bold text-[#daa94e] mb-2">What personal information do we process?</h3>
                  <p>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
                </div>

                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                  <h3 className="font-bold text-[#daa94e] mb-2">Do we process any sensitive personal information?</h3>
                  <p>Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>
                </div>

                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                  <h3 className="font-bold text-[#daa94e] mb-2">Do we collect any information from third parties?</h3>
                  <p>We do not collect any information from third parties.</p>
                </div>

                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                  <h3 className="font-bold text-[#daa94e] mb-2">How do we process your information?</h3>
                  <p>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
                </div>

                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                  <h3 className="font-bold text-[#daa94e] mb-2">In what situations and with which parties do we share personal information?</h3>
                  <p>We may share information in specific situations and with specific third parties.</p>
                </div>

                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                  <h3 className="font-bold text-[#daa94e] mb-2">How do we keep your information safe?</h3>
                  <p>We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>
                </div>

                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                  <h3 className="font-bold text-[#daa94e] mb-2">What are your rights?</h3>
                  <p>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
                </div>

                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                  <h3 className="font-bold text-[#daa94e] mb-2">How do you exercise your rights?</h3>
                  <p>The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                </div>
              </div>
            </section>

            {/* Main Policy Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section id="section-1" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  1. WHAT INFORMATION DO WE COLLECT?
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Personal information you disclose to us</h3>
                    <p className="mb-4">
                      We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                    </p>
                    <p className="mb-4">
                      The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 mb-4">
                      {[
                        'names',
                        'phone numbers',
                        'email addresses',
                        'job titles',
                        'usernames',
                        'debit/credit card numbers',
                        'billing addresses',
                        'contact preferences',
                        'passwords'
                      ].map((item, index) => (
                        <div key={item} className="flex items-center">
                          <span className="text-[#daa94e] mr-2">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="font-bold text-gray-300 mb-4">Sensitive Information: We do not process sensitive information.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Payment Data</h3>
                    <p className="mb-4">
                      We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by PayPal. You may find their privacy policy link(s) here: <a href="https://www.paypal.com/us/legalhub/paypal/privacy-full" className="text-[#daa94e] hover:underline break-all">https://www.paypal.com/us/legalhub/paypal/privacy-full</a>.
                    </p>
                    <p className="italic text-gray-300">
                      All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Information automatically collected</h3>
                    <p className="mb-4">
                      We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                    </p>
                    <p className="mb-4">
                      Like many businesses, we also collect information through cookies and similar technologies.
                    </p>
                    <p className="mb-4">The information we collect includes:</p>

                    <div className="space-y-4 ml-4">
                      <div>
                        <h4 className="font-bold text-gray-100">Log and Usage Data.</h4>
                        <p>
                          Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-100">Device Data.</h4>
                        <p>
                          We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-100">Location Data.</h4>
                        <p>
                          We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  2. HOW DO WE PROCESS YOUR INFORMATION?
                </h2>
                <p className="mb-6">
                  We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                </p>

                <div className="space-y-4 ml-4">
                  {[
                    "To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.",
                    "To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.",
                    "To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.",
                    "To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.",
                    "To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.",
                    "To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.",
                    "To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm."
                  ].map((item, index) => (
                    <div key={item} className="flex items-start">
                      <span className="text-[#daa94e] mr-2">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">
                      If you are located in the EU or UK, this section applies to you.
                    </h3>
                    <p className="mb-4">
                      The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                    </p>

                    <div className="space-y-4 ml-4">
                      <div>
                        <h4 className="font-bold text-gray-100">Consent.</h4>
                        <p>We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-100">Performance of a Contract.</h4>
                        <p>We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-100">Legal Obligations.</h4>
                        <p>We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-100">Vital Interests.</h4>
                        <p>We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">
                      If you are located in Canada, this section applies to you.
                    </h3>
                    <p className="mb-4">
                      We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
                    </p>
                    <p className="mb-4">
                      In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
                      {[
                        "If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way",
                        "For investigations and fraud detection and prevention",
                        "For business transactions provided certain conditions are met",
                        "If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim",
                        "For identifying injured, ill, or deceased persons and communicating with next of kin",
                        "If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse",
                        "If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province",
                        "If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records",
                        "If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced",
                        "If the collection is solely for journalistic, artistic, or literary purposes",
                        "If the information is publicly available and is specified by the regulations",
                        "We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments"
                      ].map((item, index) => (
                        <div key={item} className="flex items-start">
                          <span className="text-[#daa94e] mr-2">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </h2>
                <p className="mb-6">
                  We may need to share your personal information in the following situations:
                </p>

                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="font-bold text-gray-100">Business Transfers.</h3>
                    <p>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-100">When we use Google Maps Platform APIs.</h3>
                    <p>We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </h2>

                <div className="space-y-4">
                  <p>
                    We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                  </p>

                  <p>
                    We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                  </p>

                  <p>
                    To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
                  </p>

                  <p>
                    Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                  </p>

                  <div className="bg-gray-700 p-4 rounded border border-gray-600">
                    <h3 className="font-bold text-gray-100 mb-2">Google Analytics</h3>
                    <p className="mb-2">
                      We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Remarketing with Google Analytics, Google Display Network Impressions Reporting and Google Analytics Demographics and Interests Reporting. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#daa94e] hover:underline">https://tools.google.com/dlpage/gaoptout</a>. You can opt out of Google Analytics Advertising Features through Ads Settings and Ad Settings for mobile apps. Other opt out means include <a href="http://optout.networkadvertising.org/" className="text-[#daa94e] hover:underline">http://optout.networkadvertising.org/</a> and <a href="http://www.networkadvertising.org/mobile-choice" className="text-[#daa94e] hover:underline">http://www.networkadvertising.org/mobile-choice</a>. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  6. HOW LONG DO WE KEEP YOUR INFORMATION?
                </h2>
                <p className="mb-4">
                  We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than the period of time in which users have an account with us.
                </p>
                <p>
                  When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </h2>
                <p className="mb-4">
                  We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  8. DO WE COLLECT INFORMATION FROM MINORS?
                </h2>
                <p className="mb-4">
                  We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at <a href="mailto:justkimtai@gmail.com" className="text-[#daa94e] hover:underline">justkimtai@gmail.com</a>.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  9. WHAT ARE YOUR PRIVACY RIGHTS?
                </h2>

                <div className="space-y-6">
                  <p>
                    In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details. We will consider and act upon any request in accordance with applicable data protection laws.
                  </p>

                  <p>
                    If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority. If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Withdrawing your consent:</h3>
                    <p className="mb-4">
                      If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details or updating your preferences. However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Opting out of marketing and promotional communications:</h3>
                    <p className="mb-4">
                      You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                    </p>
                    <p className="italic text-gray-300">
                      No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Account Information</h3>
                    <p className="mb-4">
                      If you would at any time like to review or change the information in your account or terminate your account, you can:
                    </p>
                    <ul className="ml-4 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#daa94e] mr-2">•</span>
                        <span>Log in to your account settings and update your user account.</span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                    </p>
                  </div>

                  <p>
                    Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. If you have questions or comments about your privacy rights, you may email us at <Link href="mailto:info@scholarbrood.com" className="text-[#daa94e] hover:underline">info@scholarbrood.com</Link>.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  10. CONTROLS FOR DO-NOT-TRACK FEATURES
                </h2>
                <p className="mb-4">
                  Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
                </p>
                <p>
                  California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Categories of Personal Information We Collect</h3>
                    <p className="mb-4">
                      The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the table below:
                    </p>

                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-600">
                        <thead>
                          <tr className="bg-gray-700">
                            <th className="border border-gray-600 p-2 text-left">Category</th>
                            <th className="border border-gray-600 p-2 text-left">Examples</th>
                            <th className="border border-gray-600 p-2 text-left">Collected</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['A. Identifiers', 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name', 'NO'],
                            ['B. Personal information as defined in the California Customer Records statute', 'Name, contact information, education, employment, employment history, and financial information', 'NO'],
                            ['C. Protected classification characteristics under state or federal law', 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data', 'NO'],
                            ['D. Commercial information', 'Transaction information, purchase history, financial details, and payment information', 'NO'],
                            ['E. Biometric information', 'Fingerprints and voiceprints', 'NO'],
                            ['F. Internet or other similar network activity', 'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements', 'NO'],
                            ['G. Geolocation data', 'Device location', 'NO'],
                            ['H. Audio, electronic, sensory, or similar information', 'Images and audio, video or call recordings created in connection with our business activities', 'NO'],
                            ['I. Professional or employment-related information', 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us', 'NO'],
                            ['J. Education Information', 'Student records and directory information', 'YES'],
                            ['K. Inferences drawn from collected personal information', 'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual\'s preferences and characteristics', 'NO'],
                            ['L. Sensitive personal Information', '', 'NO']
                          ].map((row, index) => (
                            <tr key={row[0]} className="even:bg-gray-800/50">
                              <td className="border border-gray-600 p-2">{row[0]}</td>
                              <td className="border border-gray-600 p-2">{row[1]}</td>
                              <td className="border border-gray-600 p-2 font-bold text-[#daa94e]">{row[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Sources of Personal Information</h3>
                    <p>
                      Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">How We Use and Share Personal Information</h3>
                    <p>
                      Learn more about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Will your information be shared with anyone else?</h3>
                    <p className="mb-4">
                      We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
                    </p>
                    <p className="mb-4">
                      We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                    </p>
                    <p className="italic text-gray-300">
                      We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Your Rights</h3>
                    <p className="mb-4">
                      You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4 mb-4">
                      {[
                        "Right to know whether or not we are processing your personal data",
                        "Right to access your personal data",
                        "Right to correct inaccuracies in your personal data",
                        "Right to request the deletion of your personal data",
                        "Right to obtain a copy of the personal data you previously shared with us",
                        "Right to non-discrimination for exercising your rights",
                        "Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ('profiling')"
                      ].map((item, index) => (
                        <div key={item} className="flex items-start">
                          <span className="text-[#daa94e] mr-2">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="mb-4">
                      Depending upon the state where you live, you may also have the following rights:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                      {[
                        "Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)",
                        "Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)",
                        "Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)",
                        "Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)",
                        "Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)",
                        "Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)",
                        "Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)"
                      ].map((item, index) => (
                        <div key={item} className="flex items-start">
                          <span className="text-[#daa94e] mr-2">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">How to Exercise Your Rights</h3>
                    <p className="mb-4">
                      To exercise these rights, you can contact us by submitting a data subject access request, by emailing us at <Link href="mailto:info@scholarbrood.com" className="text-[#daa94e] hover:underline">info@scholarbrood.com</Link>, or by referring to the contact details at the bottom of this document. Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Request Verification</h3>
                    <p className="mb-4">
                      Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                    </p>
                    <p>
                      If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Appeals</h3>
                    <p>
                      Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <Link href="mailto:info@scholarbrood.com" className="text-[#daa94e] hover:underline">info@scholarbrood.com</Link>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Australia and New Zealand</h3>
                    <p className="mb-4">
                      We collect and process your personal information under the obligations of Use set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act). This Privacy Policy satisfies the policy requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.
                    </p>
                    <p className="mb-4">
                      If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:
                    </p>

                    <div className="space-y-2 ml-4 mb-4">
                      {[
                        "offer you the products or services that you want",
                        "respond to or help with your requests",
                        "manage your account with us",
                        "confirm your identity and protect your account"
                      ].map((item, index) => (
                        <div key={item} className="flex items-start">
                          <span className="text-[#daa94e] mr-2">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <p>
                      At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details. If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Republic of South Africa</h3>
                    <p className="mb-4">
                      At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details. If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:
                    </p>

                    <div className="bg-gray-700 p-4 rounded border border-gray-600">
                      <ol className="list-decimal ml-4 space-y-2">
                        <li>The Information Regulator (South Africa)</li>
                        <li>General enquiries: <a href="mailto:enquiries@inforegulator.org.za" className="text-[#daa94e] hover:underline">enquiries@inforegulator.org.za</a></li>
                        <li>Complaints (complete POPIA/PAIA form 5): <a href="mailto:PAIAComplaints@inforegulator.org.za" className="text-[#daa94e] hover:underline">PAIAComplaints@inforegulator.org.za</a> & <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-[#daa94e] hover:underline">POPIAComplaints@inforegulator.org.za</a></li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  13. DO WE MAKE UPDATES TO THIS POLICY?
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Policy. If we make material changes to this Privacy Policy, we may notify you either by prominently posting a policy of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                </h2>

                <div className="space-y-6">
                  <p>
                    If you have questions or comments about this policy, you may contact our Data Protection Officer (DPO) by email at <a href="mailto:justkimtai@gmail.com" className="text-[#daa94e] hover:underline">justkimtai@gmail.com</a>, by phone at +254797517270, or contact us by post at:
                  </p>

                  <div className="bg-gray-700 p-4 rounded border border-gray-600">
                    <p className="font-bold">ScholarBrood</p>
                    <p>Data Protection Officer</p>
                    <p>Machakos</p>
                    <p>Machakos, Machakos 90100</p>
                    <p>Kenya</p>
                  </div>

                  <p>
                    If you have any further questions or comments, you may also contact us by post at the following corporate address:
                  </p>

                  <div className="bg-gray-700 p-4 rounded border border-gray-600">
                    <p className="font-bold">ScholarBrood</p>
                    <p>Myrtle Beach</p>
                    <p>Myrtle Beach, SC 29572</p>
                    <p>United States</p>
                    <p>Phone: (+1) 843-699-6020</p>
                  </div>
                </div>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                </h2>
                <p>
                  Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
                </p>
              </section>

              {/* Footer */}
              <footer className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                <p className="text-lg font-bold text-[#E8B85F] mb-2">ScholarBrood</p>
                <p>Expert Academic Writing, Editing, Research, and Publication Support for Students and Researchers</p>
                <p className="mt-4 text-sm">© {currentYear} ScholarBrood. All rights reserved.</p>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
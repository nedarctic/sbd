'use client';

import { useState, useEffect } from 'react';
import { oswald } from '@/components/ui/fonts';
import Link from 'next/link'

export default function CookiePolicy() {
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
            COOKIE POLICY
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
                  '1. WHAT ARE COOKIES?',
                  '2. HOW WE USE COOKIES',
                  '3. TYPES OF COOKIES WE USE',
                  '4. HOW CAN YOU CONTROL COOKIES?',
                  '5. HOW OFTEN WILL WE UPDATE THIS COOKIE POLICY?',
                  '6. WHERE CAN YOU GET FURTHER INFORMATION?'
                ].map((item, index) => (
                  <a
                    key={item}
                    href={`#section-${index + 1}`}
                    className="block text-sm hover:text-[#E8B85F] transition-all text-gray-300 hover:pl-2"
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
                This Cookie Policy explains how ScholarBrood ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website at <a href="https://scholarbrood.com" className="text-[#E8B85F] hover:underline">https://scholarbrood.com</a> (the "Website") and use our academic and research support services (the "Services"). It explains what these technologies are, why we use them, and your rights to control our use of them.
              </p>

              <div className="bg-amber-900/30 border-l-4 border-[#E8B85F] p-4">
                <p className="text-amber-200">
                  <strong className="text-[#E8B85F]">Please note:</strong> In some cases, we may use cookies and similar tracking technologies that collect personal information, or information that becomes personal information if we combine it with other information. For more details about how we process your personal information, please review our <a href="/privacy-policy" className="text-[#E8B85F] font-bold hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </section>

            {/* Main Policy Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section id="section-1" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  1. WHAT ARE COOKIES?
                </h2>

                <div className="space-y-4">
                  <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                  </p>

                  <p>
                    Cookies set by the website owner (in this case, ScholarBrood) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
                  </p>

                  <div className="bg-gray-700 p-4 rounded border border-gray-600 mt-4">
                    <h3 className="font-bold text-gray-100 mb-2">Why do we use cookies?</h3>
                    <p>
                      We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website and Services to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Website and Services. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  2. HOW WE USE COOKIES
                </h2>

                <div className="space-y-6">
                  <div>
                    <p>
                      We use cookies for a variety of purposes, including:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-700 p-4 rounded border border-gray-600">
                        <h3 className="font-bold text-[#E8B85F] mb-2">Essential Website Operations</h3>
                        <p className="text-sm">To enable basic functions of the website such as page navigation and access to secure areas.</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded border border-gray-600">
                        <h3 className="font-bold text-[#E8B85F] mb-2">Authentication and Security</h3>
                        <p className="text-sm">To keep you logged in as you navigate our site and to protect your account from unauthorized access.</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded border border-gray-600">
                        <h3 className="font-bold text-[#E8B85F] mb-2">Performance and Analytics</h3>
                        <p className="text-sm">To understand how visitors interact with our website so we can improve our services.</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded border border-gray-600">
                        <h3 className="font-bold text-[#E8B85F] mb-2">Personalization</h3>
                        <p className="text-sm">To remember your preferences and settings for future visits.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Specific Examples of Cookie Usage</h3>
                    <div className="space-y-3 ml-4">
                      <div className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <span><strong>Session Management:</strong> Cookies help us manage your session when you're logged into your account, ensuring you stay authenticated as you navigate different pages.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <span><strong>Form Submissions:</strong> Cookies may remember information you've entered in forms to save you time on subsequent visits.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <span><strong>Language Preferences:</strong> We use cookies to remember your language and regional preferences.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <span><strong>Analytics:</strong> We use analytics cookies to understand which pages are most popular, how users navigate our site, and what features they use most frequently.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  3. TYPES OF COOKIES WE USE
                </h2>

                <div className="space-y-6">
                  <p>
                    The table below explains the types of cookies we use on our Website and why we use them:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-600">
                      <thead>
                        <tr className="bg-gray-700">
                          <th className="border border-gray-600 p-3 text-left text-gray-100">Category of Cookies</th>
                          <th className="border border-gray-600 p-3 text-left text-gray-100">Purpose</th>
                          <th className="border border-gray-600 p-3 text-left text-gray-100">Examples</th>
                          <th className="border border-gray-600 p-3 text-left text-gray-100">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Essential Cookies */}
                        <tr className="bg-gray-800/50">
                          <td className="border border-gray-600 p-3 font-bold text-gray-100">
                            Essential Cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                          </td>
                          <td className="border border-gray-600 p-3">
                            Authentication cookies, session cookies, security cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            Session or up to 24 hours
                          </td>
                        </tr>

                        {/* Performance and Analytics Cookies */}
                        <tr>
                          <td className="border border-gray-600 p-3 font-bold text-gray-100">
                            Performance and Analytics Cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                          </td>
                          <td className="border border-gray-600 p-3">
                            Google Analytics cookies, Hotjar cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            Up to 2 years
                          </td>
                        </tr>

                        {/* Functionality Cookies */}
                        <tr className="bg-gray-800/50">
                          <td className="border border-gray-600 p-3 font-bold text-gray-100">
                            Functionality Cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                          </td>
                          <td className="border border-gray-600 p-3">
                            Language preference cookies, region selection cookies, chat widget cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            Up to 1 year
                          </td>
                        </tr>

                        {/* Targeting/Advertising Cookies */}
                        <tr>
                          <td className="border border-gray-600 p-3 font-bold text-gray-100">
                            Targeting/Advertising Cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                          </td>
                          <td className="border border-gray-600 p-3">
                            Facebook Pixel, Google Ads cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            Up to 2 years
                          </td>
                        </tr>

                        {/* Social Media Cookies */}
                        <tr className="bg-gray-800/50">
                          <td className="border border-gray-600 p-3 font-bold text-gray-100">
                            Social Media Cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            These cookies are set by social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests.
                          </td>
                          <td className="border border-gray-600 p-3">
                            Facebook, Twitter, LinkedIn sharing cookies
                          </td>
                          <td className="border border-gray-600 p-3">
                            Up to 2 years
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-900/30 p-4 rounded border border-blue-800/50 mt-4">
                    <h3 className="font-bold text-blue-200 mb-2">About Third-Party Cookies</h3>
                    <p className="text-blue-100">
                      In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website, deliver advertisements on and through the Website, and so on. These third-party cookies are governed by the privacy policies of the third parties placing the cookies, not by ScholarBrood's policies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  4. HOW CAN YOU CONTROL COOKIES?
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Browser Controls</h3>
                    <p className="mb-4">
                      You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. The way in which you can refuse cookies through your web browser controls varies from browser to browser.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-700 p-4 rounded border border-gray-600">
                        <h4 className="font-bold text-[#E8B85F] mb-2">Google Chrome</h4>
                        <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded border border-gray-600">
                        <h4 className="font-bold text-[#E8B85F] mb-2">Mozilla Firefox</h4>
                        <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded border border-gray-600">
                        <h4 className="font-bold text-[#E8B85F] mb-2">Safari</h4>
                        <p className="text-sm">Preferences → Privacy → Cookies and website data</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded border border-gray-600">
                        <h4 className="font-bold text-[#E8B85F] mb-2">Microsoft Edge</h4>
                        <p className="text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Cookie Consent Banner</h3>
                    <p className="mb-4">
                      When you first visit our Website, you will be presented with a cookie consent banner that allows you to accept or reject non-essential cookies. You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our Website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Third-Party Opt-Outs</h3>
                    <p className="mb-4">
                      For third-party cookies used for advertising and analytics, you can opt out through the following resources:
                    </p>

                    <div className="space-y-3 ml-4">
                      <div className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <span>
                          <strong>Google Analytics:</strong> You can opt out of Google Analytics by installing Google's opt-out browser add-on: <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#E8B85F] hover:underline">https://tools.google.com/dlpage/gaoptout</a>
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <span>
                          <strong>Digital Advertising Alliance:</strong> For interest-based advertising, you can opt out through the Digital Advertising Alliance's opt-out portal: <a href="http://optout.aboutads.info/" className="text-[#E8B85F] hover:underline">http://optout.aboutads.info/</a>
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <span>
                          <strong>Network Advertising Initiative:</strong> You can also opt out through the Network Advertising Initiative's opt-out portal: <a href="http://optout.networkadvertising.org/" className="text-[#E8B85F] hover:underline">http://optout.networkadvertising.org/</a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-900/30 p-4 rounded border border-amber-800/50">
                    <h3 className="font-bold text-amber-200 mb-2">Important Note About Essential Cookies</h3>
                    <p className="text-amber-100">
                      Please note that if you choose to block or delete essential cookies, some parts of our Website may not function properly. Essential cookies are necessary for core functionalities such as security, network management, and accessibility. You may not be able to use certain features of the Website, including accessing secure areas or making purchases.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  5. HOW OFTEN WILL WE UPDATE THIS COOKIE POLICY?
                </h2>

                <div className="space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>

                  <p>
                    The date at the top of this Cookie Policy indicates when it was last updated. If we make material changes to this Cookie Policy, we will notify you by posting a prominent notice on our Website or by sending you a notification via email, where appropriate.
                  </p>

                  <div className="bg-gray-700 p-4 rounded border border-gray-600 mt-4">
                    <h3 className="font-bold text-gray-100 mb-2">Your Continued Use</h3>
                    <p>
                      Your continued use of our Website and Services after the effective date of any changes to this Cookie Policy constitutes your acceptance of the updated Cookie Policy. If you do not agree to the updated Cookie Policy, you must stop using our Website and Services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 scroll-mt-8">
                <h2 className="text-3xl font-bold text-[#E8B85F] mb-6 border-b pb-2 border-gray-700">
                  6. WHERE CAN YOU GET FURTHER INFORMATION?
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="mb-4">
                      If you have any questions about our use of cookies or other technologies, please contact us at:
                    </p>

                    <div className="bg-gray-700 p-6 rounded border border-gray-600">
                      <p className="font-bold text-lg text-[#E8B85F] mb-2">ScholarBrood</p>
                      <p className="mb-2">Email: <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scholarbrood.com"
                        target="_blank" className="text-[#E8B85F] hover:underline">info@scholarbrood.com</Link></p>
                      <p className="mb-2">Phone: (+1) 843-699-6020</p>
                      <p>Address: Myrtle Beach, SC 29572, United States</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Related Policies</h3>
                    <p className="mb-4">
                      For more information about how we collect, use, and protect your personal information, please review our:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="/privacy-policy" className="bg-gray-700 p-4 rounded border border-gray-600 hover:border-[#E8B85F] transition-colors group">
                        <h4 className="font-bold text-gray-100 group-hover:text-[#E8B85F] mb-2">Privacy Policy</h4>
                        <p className="text-sm text-gray-400">Learn about how we collect, use, and protect your personal information.</p>
                      </a>

                      <a href="/terms-of-service" className="bg-gray-700 p-4 rounded border border-gray-600 hover:border-[#E8B85F] transition-colors group">
                        <h4 className="font-bold text-gray-100 group-hover:text-[#E8B85F] mb-2">Terms of Service</h4>
                        <p className="text-sm text-gray-400">Review the terms and conditions governing your use of our services.</p>
                      </a>
                    </div>
                  </div>

                  <div className="bg-blue-900/30 p-4 rounded border border-blue-800/50">
                    <h3 className="font-bold text-blue-200 mb-2">Additional Resources</h3>
                    <p className="mb-2 text-blue-100">
                      For more information about cookies in general, including how to see what cookies have been set on your device and how to manage and delete them, visit:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <a href="https://www.allaboutcookies.org/" className="text-[#E8B85F] hover:underline">All About Cookies</a>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <a href="https://www.youronlinechoices.com/" className="text-[#E8B85F] hover:underline">Your Online Choices</a>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E8B85F] mr-2">•</span>
                        <a href="https://www.networkadvertising.org/" className="text-[#E8B85F] hover:underline">Network Advertising Initiative</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                <p className="text-lg font-bold text-[#E8B85F] mb-2">ScholarBrood</p>
                <p>Academic, research & publication services</p>
                <p className="mt-4 text-sm">© {currentYear} ScholarBrood. All rights reserved.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                  <a href="/privacy-policy" className="text-[#E8B85F] hover:underline">Privacy Policy</a>
                  <span className="text-gray-600">•</span>
                  <a href="/terms-of-service" className="text-[#E8B85F] hover:underline">Terms of Service</a>
                  <span className="text-gray-600">•</span>
                  <a href="/cookie-policy" className="text-[#E8B85F] font-bold hover:underline">Cookie Policy</a>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
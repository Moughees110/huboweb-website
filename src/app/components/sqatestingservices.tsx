"use client";

import { CheckCircle, Bug, ShieldCheck, TestTubes, ClipboardCheck, HelpCircle } from "lucide-react";

export default function SqaAndTestingServices() {
  return (
    <section className="w-full bg-gradient-to-r from-[#070121] to-gray-900 text-white py-20 px-6 md:px-16 space-y-24">
      {/* Introduction */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">Software Quality Assurance & Testing</h2>
        <p className="text-lg text-gray-300">
          Ensure your software meets the highest standards of quality, performance, and security with our comprehensive SQA & testing services.
        </p>
      </div>

      {/* Importance of SQA */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-yellow-400 flex items-center gap-2">
          <ShieldCheck /> Why SQA Matters
        </h3>
        <p className="text-gray-300">
          Software Quality Assurance is more than just bug fixing. It ensures that the software aligns with business goals, meets user expectations, and complies with industry standards. A robust QA process minimizes risks, enhances performance, and delivers user satisfaction.
        </p>
      </div>

      {/* Our Services */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-yellow-400 flex items-center gap-2">
          <ClipboardCheck /> Our Testing Services
        </h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Manual Testing (Functional, Regression, UI/UX)</li>
          <li>Automated Testing (Unit, Integration, E2E)</li>
          <li>Performance Testing (Load, Stress, Scalability)</li>
          <li>Security Testing (Vulnerability Scanning, Penetration Testing)</li>
          <li>Mobile App Testing (iOS, Android, Cross-platform)</li>
          <li>API Testing using Postman, Swagger, and other tools</li>
        </ul>
      </div>

      {/* Process Overview */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-yellow-400 flex items-center gap-2">
          <TestTubes /> Our QA Process
        </h3>
        <p className="text-gray-300">
          Our structured QA process includes requirement analysis, test planning, test case design, test execution, bug tracking, and reporting. We adopt Agile, Scrum, or DevOps methodologies depending on project needs to ensure seamless collaboration and rapid iterations.
        </p>
      </div>

      {/* Tools We Use */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-yellow-400 flex items-center gap-2">
          <Bug /> Tools & Technologies
        </h3>
        <p className="text-gray-300">
          We leverage industry-standard tools like Selenium, JUnit, Cypress, TestNG, Postman, Apache JMeter, and SonarQube to execute precise, reliable, and scalable testing strategies.
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-yellow-400 flex items-center gap-2">
          <HelpCircle /> Frequently Asked Questions
        </h3>
        <div className="space-y-4 text-gray-300">
          <div>
            <p className="font-semibold text-yellow-400">Do you offer both manual and automated testing?</p>
            <p>Yes, we provide both based on your project’s needs and timeline.</p>
          </div>
          <div>
            <p className="font-semibold text-yellow-400">Can I hire a dedicated QA team?</p>
            <p>Absolutely! We offer dedicated QA resources for long-term collaboration.</p>
          </div>
          <div>
            <p className="font-semibold text-yellow-400">What industries do you serve?</p>
            <p>We serve startups, enterprises, healthcare, fintech, eCommerce, and more.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h3 className="text-3xl font-bold text-yellow-400">Let’s Build Quality Software Together</h3>
        <p className="text-gray-300">
          Partner with us to ensure flawless user experiences, secure platforms, and efficient performance. Let’s ensure your software exceeds expectations.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-full transition duration-300">
          Request a QA Consultation
        </button>
      </div>
    </section>
  );
}
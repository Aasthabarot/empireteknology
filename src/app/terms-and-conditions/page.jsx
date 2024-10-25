import Header from '../component/Header'; // Import your Header component
import Footer from '../component/Footer'; // Import your Footer component

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="container mx-auto lg:px-16 lg:py-16 md:p-4 p-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 mt-[100px]">Terms and Conditions</h1>
        <p className="mb-4">Welcome to Empire Teknology!</p>
        <p className="mb-4">
          These terms and conditions outline the rules and regulations for the use of Empire Teknology's Website, located at <a href="https://www.empireteknology.com" className="text-blue-500 hover:underline">https://www.empireteknology.com</a>.
        </p>
        <p className="mb-4">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Empire Teknology if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Interpretation and Definitions</h2>
        <p className="mb-4">
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Cookies</h2>
        <p className="mb-4">
          We employ the use of cookies. By accessing Empire Teknology, you agreed to use cookies in agreement with the Empire Teknology's Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">License</h2>
        <p className="mb-4">
          Unless otherwise stated, Empire Teknology and/or its licensors own the intellectual property rights for all material on Empire Teknology. You may access this from Empire Teknology for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p className="mb-4"><strong>You must not:</strong></p>
        <ul className="list-disc ml-6 mb-4">
          <li>Republish material from Empire Teknology</li>
          <li>Sell, rent or sub-license material from Empire Teknology</li>
          <li>Reproduce, duplicate or copy material from Empire Teknology</li>
          <li>Redistribute content from Empire Teknology</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Hyperlinking to our Content</h2>
        <p className="mb-4">
          The following organizations may link to our Website without prior written approval: Government agencies, search engines, news organizations, and more.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Content Liability</h2>
        <p className="mb-4">
          We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Disclaimer</h2>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Terms and Conditions, please contact us by visiting this page on our website: <a href="https://www.empireteknology.com" className="text-blue-500 hover:underline">https://www.empireteknology.com</a>.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;

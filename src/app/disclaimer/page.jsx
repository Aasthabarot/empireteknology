import Header from '../component/Header'; // Import your Header component
import Footer from '../component/Footer'; // Import your Footer component

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="container mx-auto lg:px-16 lg:py-16 md:p-4 p-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 my-[100px]">Disclaimer for Empire Teknology</h1>
       

      
        <p className="mb-4">
          All the information on this website - <a href="https://www.empireteknology.com" className="text-blue-500 hover:underline">https://www.empireteknology.com</a> - is published in good faith and for general information purposes only. Empire Teknology does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (Empire Teknology) is strictly at your own risk. Empire Teknology will not be liable for any losses and/or damages in connection with the use of our website.
        </p>

        <p className="mb-4">
          From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link that may have gone 'bad'.
        </p>

        <p className="mb-4">
          Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Consent</h2>
        <p className="mb-4">
          By using our website, you hereby consent to our disclaimer and agree to its terms.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Update</h2>
        <p className="mb-4">
          Should we update, amend, or make any changes to this document, those changes will be prominently posted here.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;

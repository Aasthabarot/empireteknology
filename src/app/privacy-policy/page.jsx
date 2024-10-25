import Header from '../component/Header'; // Import your Header component
import Footer from '../component/Footer'; // Import your Footer component

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="container mx-auto lg:px-16 lg:py-16 md:p-4 p-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-6  mt-[100px]">Privacy Policy for Empire Teknology</h1>
        <p className="mb-4">
          At Empire Teknology, accessible from <a href="https://www.empireteknology.com" className="text-blue-500 hover:underline">https://www.empireteknology.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Empire Teknology and how we use it.
        </p>
        <p className="mb-4">
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Log Files</h2>
        <p className="mb-4">
          Empire Teknology follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Cookies and Web Beacons</h2>
        <p className="mb-4">
          Like any other website, Empire Teknology uses 'cookies'. These cookies are used to store information including visitors' preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Google DoubleClick DART Cookie</h2>
        <p className="mb-4">
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Our Advertising Partners</h2>
        <p className="mb-4">
          Some of the advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data.
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Google: <a href="https://policies.google.com/technologies/ads" className="text-blue-500 hover:underline">Privacy Policy</a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Third Party Privacy Policies</h2>
        <p className="mb-4">
          Empire Teknology's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Children's Information</h2>
        <p className="mb-4">
          We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Empire Teknology does not knowingly collect any Personal Identifiable Information from children under the age of 13.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Online Privacy Policy Only</h2>
        <p className="mb-4">
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Empire Teknology.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Consent</h2>
        <p className="mb-4">
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

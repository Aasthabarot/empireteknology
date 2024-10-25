import Header from '../component/Header'; // Import your Header component
import Footer from '../component/Footer'; // Import your Footer component

const ReturnRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="container mx-auto lg:px-16 lg:py-16 md:p-4 p-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 mt-[100px]">Return and Refund Policy</h1>
        <p className="mb-4">Last updated: August 05, 2022</p>

        <p className="mb-4">
          Thank you for shopping at Empire Teknology. If, for any reason, you are not completely satisfied with a purchase, we invite you to review our policy on refunds and returns. This Return and Refund Policy has been created with the help of the Return and Refund Policy Generator.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Interpretation and Definitions</h2>
        <h3 className="text-xl font-bold mt-4">Interpretation</h3>
        <p className="mb-4">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-xl font-bold mt-4">Definitions</h3>
        <p className="mb-4">
          For the purposes of this Return and Refund Policy:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Company:</strong> Refers to Empire Teknology, Mahesana.</li>
          <li><strong>Goods:</strong> Refer to the items offered for sale on the Service.</li>
          <li><strong>Orders:</strong> Mean a request by you to purchase Goods from us.</li>
          <li><strong>Service:</strong> Refers to the Website.</li>
          <li><strong>Website:</strong> Refers to Empire Teknology, accessible from <a href="https://www.empireteknology.com" className="text-blue-500 hover:underline">https://www.empireteknology.com/</a>.</li>
          <li><strong>You:</strong> Means the individual accessing or using the Service.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Your Order Cancellation Rights</h2>
        <p className="mb-4">
          You are entitled to cancel your Order within 30 days without giving any reason for doing so. The deadline for cancelling an Order is 30 days from the date on which you received the Goods.
        </p>
        <p className="mb-4">
          In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement. You can inform us of your decision by:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>By visiting this page on our website: <a href="https://www.empireteknology.com/" className="text-blue-500 hover:underline">https://www.empireteknology.com/</a></li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Conditions for Returns</h2>
        <p className="mb-4">
          In order for the Goods to be eligible for a return, please make sure that:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>The Goods were purchased in the last 30 days.</li>
          <li>The Goods are in the original packaging.</li>
          <li>The following Goods cannot be returned:</li>
          <ul className="list-disc ml-8 mb-4">
            <li>The supply of Goods made to your specifications or clearly personalized.</li>
            <li>The supply of Goods which are not suitable to be returned due to health protection or hygiene reasons.</li>
            <li>The supply of Goods which are, after delivery, inseparably mixed with other items.</li>
          </ul>
        </ul>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Returning Goods</h2>
        <p className="mb-4">
          You are responsible for the cost and risk of returning the Goods to us. You should send the Goods to the following address:
        </p>
        <address className="mb-4">
          22, Chirag Plaza,<br />
          Near Manav-Ashram Circle,<br />
          Visnagar Road,<br />
          Mahesana, Gujarat, Bharat - 384001.
        </address>
        <p className="mb-4">
          We cannot be held responsible for Goods damaged or lost in return shipment. We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Gifts</h2>
        <p className="mb-4">
          If the Goods were marked as a gift when purchased and then shipped directly to you, you'll receive a gift credit for the value of your return. If the Goods weren't marked as a gift, we will send the refund to the gift giver.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-6">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Returns and Refunds Policy, please contact us:
        </p>
        <p className="mb-4">
          By visiting this page on our website: <a href="https://www.empireteknology.com/" className="text-blue-500 hover:underline">https://www.empireteknology.com/</a>
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnRefundPolicy;

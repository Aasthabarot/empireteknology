import "../style.css";
import Header from '../component/Header';
import Footer from "../component/Footer";

const Contactus = () => {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex items-center justify-center py-8 mt-[80px]"> {/* Center the form */}
                <div className="form-container bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full"> {/* Container for the Form */}
                   
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd67rG20NFQAHH4LWZiYVdMv1Dlc8oo8bDDKG_hGTY-auAOZQ/viewform?embedded=true"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Contact Form"
                    >
                        Loading...
                    </iframe>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Contactus;

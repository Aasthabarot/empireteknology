import "../style.css"; // Assuming you have styles defined in this file
import Header from "../component/Header";
import Footer from "../component/Footer";
import Image from "next/image"; // For using images
import { FaUsers, FaStar, FaLightbulb } from "react-icons/fa"; // Importing icons for features

// Sample data for projects and clients
const projects = [
  {
    name: "M/S. AXELLISE AUTO ACCESSORIES PVT. LTD. - SAMETRA, MAHESANA, GUJARAT, BHARAT - 500X1 KVA",
    image: "/swiper/swiper-img1.jpg",
  },
  {
    name: "M/S. SHREE SHYAM BIO ENERGY - NADASA, MAHESANA, GUJARAT, BHARAT - 315X1 KVA",
    image: "/swiper/swiper-img2.jpg",
  },
  {
    name: "SUB-STATION GANTRY WORK",
    image: "/swiper/swiper-img3.jpg",
  },
  {
    name: "HT CABLE LAYING IN TRENCH",
    image: "/swiper/swiper-4.jpg",
  },
  {
    name: "CHAIN-LINK FENCING WORK",
    image: "/swiper/swiper-5.jpg",
  },
  {
    name: "UNDER-GROUND HT CABLE LAYING WORK",
    image: "/swiper/swiper-6.jpg",
  },
  {
    name: "CHIEF OFFICER NAGARPALIKA(STP) - DEESA - BANASKANTHA - GUJARAT - BHARAT - 800X2 KVA",
    image: "/swiper/swiper-7.jpg",
  },
  {
    name: "CHIEF OFFICER NAGARPALIKA(STP) - DEESA - BANASKANTHA - GUJARAT - BHARAT - 800X2 KVA",
    image: "/swiper/swiper-8.jpg",
  },
  {
    name: "M/S. BABU CHEMICALS - BHASARIYA - MAHESANA - GUJARAT - BHARAT - 250X1 KVA",
    image: "/swiper/swiper-9.jpg",
  },
];

const clients = [
  {
    name: "M/S. ACCURATE ENGINEERING - KUKARWADA, VIJAPUR, MAHESANA, GUJARAT, BHARAT",
  },
  {
    name: "M/S. CHHAM CHHAM WATER-PARK & RESORT - NAVARANGPURA, DASADA, SURENDRANAGAR, GUJARAT, BHARAT",
  },
  {
    name: "M/S. CHHAM CHHAM WATER-PARK & RESORT - NAVARANGPURA, DASADA, SURENDRANAGAR, GUJARAT, BHARAT",
  },
  { name: "M/S. UMA INDUS GAS PVT. LTD. - MAHESANA, GUJARAT, BHARAT" },
  {
    name: "M/S. GAYATRI ISPAT - KUKARWADA, VIJAPUR, MAHESANA, GUJARAT, BHARAT",
  },

  {
    name: "M/S. MOTHERSON AUTOMOTIVE TECHNOLOGIES ENGINEERING - NAVYANI, DASADA, SURENDRANAGAR, GUJARAT, BHARAT",
  },
  { name: "M/S. UVEER AUTOMOTIVE INDUSTRIES - MAHESANA, GUJARAT, BHARAT" },
  {
    name: "CHIEF OFFICER NAGARPALIKA(STP) - DEESA, BANASKANTHA, GUJARAT, BHARAT",
  },
  { name: "M/S. BABU CHEMICALS - BHASARIYA, MAHESANA, GUJARAT, BHARAT" },
  { name: "M/S. SHREE SHYAM BIO ENERGY - NADASA, MAHESANA, GUJARAT, BHARAT" },
  {
    name: "M/S. AXELLISE AUTO ACCESSORIES PVT. LTD. - SAMETRA, MAHESANA, GUJARAT, BHARAT.(500X1 KVA)",
  },
];

const About = () => {
  return (
    <main className="bg-white text-gray-800 ">
      <Header />

      <section className="bg-white container mx-auto lg:px-16 lg:py-16 md:px-6 md:py-8 px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center my-[100px]">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Empire Teknology is a leader in delivering advanced electrical
          solutions for homes, businesses, and industries alike. With a
          commitment to safety, efficiency, and innovation, we’re here to power
          up your world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Core Values */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <FaLightbulb className="text-blue-600 text-5xl mb-4" />
            <h2 className="text-xl font-bold text-blue-600">Innovation</h2>
            <p className="text-gray-600">
              At Empire Teknology, we embrace cutting-edge technology to provide
              energy-efficient and sustainable electrical solutions. From smart
              home automation to advanced power systems, we’re always a step
              ahead.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <FaUsers className="text-blue-600 text-5xl mb-4" />
            <h2 className="text-xl font-bold text-blue-600">Teamwork</h2>
            <p className="text-gray-600">
              We believe that great results come from collaboration. Our team of
              certified experts works closely with clients, contractors, and
              suppliers to ensure seamless service, every step of the way.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <FaStar className="text-blue-600 text-5xl mb-4" />
            <h2 className="text-xl font-bold text-blue-600">Excellence</h2>
            <p className="text-gray-600">
              Quality is at the heart of everything we do. We hold ourselves to
              the highest industry standards to deliver solutions that are
              reliable, safe, and long-lasting.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white container mx-auto lg:px-16 lg:py-16 md:px-6 md:py-6 px-4 py-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white container mx-auto lg:px-16 lg:py-16 md:px-6 md:py-6 px-4 py-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Our Clients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold">{client.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;

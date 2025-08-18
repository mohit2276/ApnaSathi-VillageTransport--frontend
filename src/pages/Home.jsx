
import React from "react";
import Card from "../components/Card";
import videoBg from "../assets/tractor.mp4";
import tractor from "../assets/tractor.jpg";
import harvester from "../assets/harvester.jpg";
import equipment from "../assets/transport.jpg";
import t1 from "../assets/t1.jpg";
import p2 from "../assets/p2.jpg";
import tr1 from "../assets/tr1.png";
import tele from "../assets/tele.jpg";
import { Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Hero Section: Video Background */}
      <div className="h-[600px] relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoBg}
          autoPlay
          muted
          loop
        />
        <div className="relative z-10 h-full flex items-center justify-center text-white font-bold text-3xl md:text-4xl bg-black bg-opacity-30">
          Welcome to Village Transport & Farming Equipment
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-10xl mx-auto grid md:grid-cols-3 gap-6 p-6">
        <Card image={tractor} title="Modern Tractor in Action" />
        <Card image={harvester} title="Efficient Harvester" />
        <Card image={equipment} title="Transport & Supply" />
      </div>

      {/* 🔹 Details Sections (Alternating Layout) */}
      <div className="max-w-6xl mx-auto px-6 space-y-16 mt-10">
        {/* Tractor Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-lg">
            <h2 className="text-2xl font-bold mb-4">Modern Tractor in Action</h2>
            <p>
              Our modern tractors are equipped with advanced technology,
              providing efficient farming and transport solutions. They save
              time, reduce manual effort, and ensure maximum productivity in
              fields. Farmers can rely on these machines for durability and
              performance.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={t1}
              alt="Modern Tractor"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>

        {/* Harvester Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
          <div className="md:w-1/2 text-lg">
            <h2 className="text-2xl font-bold mb-4">Efficient Harvester</h2>
            <p>
              Our harvesters are designed for speed and efficiency, ensuring
              quick and easy harvesting of crops. With modern features and low
              maintenance, they are the perfect solution for farmers looking to
              increase output and reduce costs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={p2}
              alt="Efficient Harvester"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>

        {/* Transport & Supply Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-lg">
            <h2 className="text-2xl font-bold mb-4">Transport & Supply</h2>
            <p>
              Apart from farming equipment, we also provide village transport
              and supply services. From delivering goods to renting vehicles, we
              ensure that transportation is smooth, reliable, and affordable for
              all local needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={tr1}
              alt="Transport and Supply"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Motive Section */}
      <div className="max-w-7xl mx-auto px-6 text-lg text-gray-800 leading-relaxed mt-6">
  <h2 className="text-3xl font-bold text-center mb-6">Our Motive</h2>
  <p className="mb-4">
    Our mission is to empower rural communities by providing easy access to 
    modern farming equipment and transport facilities. Many farmers struggle 
    with limited resources and high costs, which makes it difficult to adopt 
    advanced technology. We aim to bridge this gap by offering affordable 
    rental services for tractors, harvesters, and other essential machinery.
  </p>
  <p className="mb-4">
    Along with farming equipment, we also provide reliable village transport 
    and supply chain services. Whether it’s delivering goods, supporting 
    seasonal harvesting, or ensuring the smooth transport of produce, our 
    services are built to meet the daily needs of local communities. 
    This allows farmers and small businesses to save time, reduce costs, 
    and focus more on productivity.
  </p>
  <p className="mb-4">
    What makes us unique is our dedication to building trust with our 
    customers. We don’t just provide machines — we provide guidance, 
    assistance, and complete support to ensure that every farmer and 
    villager can maximize the benefits of our services. By making modern 
    tools accessible, we are contributing to the growth and development 
    of rural economies.
  </p>
  <p>
    Through our platform, we aim to create a sustainable ecosystem where 
    technology, farming, and transport come together to improve the quality 
    of life for people in villages. Together, we can bring progress to every 
    corner of our rural communities.
  </p>
</div>


      {/* Contact Form Section with Image */}
      <div className="max-w-8xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={tele}
            alt="Contact Illustration"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2">
        <div className="flex items-center justify-center mb-8">
              <span className="text-3xl mr-3">📞</span>
              <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                    </div>

          <form className="bg-white shadow-lg rounded-lg p-8 w-full space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Place"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full border border-gray-300 rounded p-2"
            />
            <textarea
              placeholder="Your Question or Query"
              rows="4"
              className="w-full border border-gray-300 rounded p-2"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Request
            </button>
          </form>
        </div>
      </div>

      {/* Existing Text Sections */}
      <div className="max-w-5xl mx-auto text-center p-6 text-lg mt-12">
        Our services include transport booking and farming machine rental...
      </div>
      <div className="bg-green-100 py-6 px-6 text-center font-semibold text-lg">
        Discover the latest promotions and special offers...
      </div>
    </div>
  );
};

export default Home;

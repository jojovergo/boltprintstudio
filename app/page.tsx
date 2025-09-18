"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaWhatsapp, FaBars, FaTimes, 
  FaTshirt, FaGift, FaBriefcase, FaBook, FaBirthdayCake, FaFileAlt, FaExpand, FaBullhorn 
} from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const images = [
    "/sample1.jpg",
    "/sample2.jpg",
    "/sample3.jpg",
    "/sample4.jpg",
    "/sample5.jpg",
    "/sample6.jpg",
  ];

  const displayedImages = showAll ? images : images.slice(0, 3);

  const services = [
    { name: "Custom Apparel Printing", icon: FaTshirt, desc: "T-shirts, hoodies, caps — personalized designs for everyone." },
    { name: "Merchandise Printing", icon: FaGift, desc: "Mugs, tote bags, keychains — perfect for gifts or promotions." },
    { name: "Business & Office Printing", icon: FaBriefcase, desc: "CVs, business cards, brochures, and professional documents." },
    { name: "Academic & School Printing", icon: FaBook, desc: "School projects, assignments, posters, and certificates." },
    { name: "Event Printing", icon: FaBirthdayCake, desc: "Invitations, banners, posters, and event signage." },
    { name: "Document Printing & Copying", icon: FaFileAlt, desc: "Black & white or color printing for reports, presentations, and more." },
    { name: "Large Format & Specialty Printing", icon: FaExpand, desc: "Posters, banners, canvas prints — custom finishes included." },
    { name: "Promotional Material Printing", icon: FaBullhorn, desc: "Stickers, flyers, calendars, and marketing materials." },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="MyPrints Logo" width={40} height={40} />
          <span className="text-xl font-bold text-blue-600">BoltPrint Studio</span>
        </div>

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#services" className="hover:text-blue-600 transition underline">Services</a>
          <a href="#work" className="hover:text-blue-600 transition underline">My Work</a>
          <a href="#contact" className="hover:text-blue-600 transition underline">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-6 z-40">
          <a href="#services" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>My Work</a>
          <a href="#contact" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href="https://wa.me/27663931586"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            <FaWhatsapp /> Chat
          </a>
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        className="h-[85vh] flex flex-col justify-center items-center text-center relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-20" // subtle light hero background
          />
        </div>
        <div className="relative z-10 flex flex-col items-center max-w-3xl px-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Print Your <span className="text-blue-600">Ideas</span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Custom printing for T-shirts, Mugs, Bags, Caps & More — bring your vision to life.
          </motion.p>
          <motion.a
            href="https://wa.me/27663931586"
            className="mt-6 sm:mt-8 flex items-center gap-2 bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-transform duration-300"
            target="_blank"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaWhatsapp size={20} /> Chat on WhatsApp
          </motion.a>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-16 px-6 md:px-12 bg-gray-50 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 underline">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md group hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Icon size={36} className="text-blue-600 mb-3 mx-auto group-hover:text-blue-800 transition-colors duration-300" />
                <h3 className="font-semibold text-xl mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/27663931586"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-transform duration-300"
            target="_blank"
          >
            <FaWhatsapp size={20} /> Get a Quote
          </a>
        </div>
      </motion.section>

      {/* My Work Section */}
      <section id="work" className="py-12 md:py-16 px-4 md:px-12 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 underline">
          My Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence>
            {displayedImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  src={img}
                  alt={`Sample work ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-xl shadow-md hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            {showAll ? "Less" : "More"}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 px-6 md:px-12 bg-gray-100 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8 underline">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Get in touch with us today — we’d love to help you with your printing needs.
        </p>
        <div className="space-y-2">
          <p>Email: <span className="font-semibold">Joleenvergotine@gmail.com</span></p>
          <p>Phone/WhatsApp: <span className="font-semibold">+27 66 393 1586</span></p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-200 text-gray-700 text-sm">
        © {new Date().getFullYear()} BoltPrint Studio — All rights reserved.
      </footer>
    </main>
  );
}





"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6"; // Make sure this import is present
import Header from "../component/Header"; // Adjust the import path based on your project structure
import Footer from "../component/Footer"; // Adjust the import path based on your project structure

// Sample blog data
const blogPosts = [
  {
    image: "/blog1.jpg", // Replace with your image path
    title: "New HT 11 Kv 250 Kva Under-Ground Cable Work At Babu Chemicals Bhasariya Mahesana",
    link: "https://empireteknology.blogspot.com/2021/12/new-ht-11-kv-250-kva-under-ground-cable.html", // Replace with your blog post link
  },
  {
    image: "/blog2.jpg", // Replace with your image path
    title: "New HT 11 Kv 1600 Kva Under-Ground Cable Work At STP Nagar Palika Deesa",
    link: "https://empireteknology.blogspot.com/2021/10/new-ht-11-kv-1600-kva-under-ground.html", // Replace with your blog post link
  },
  {
    image: "/blog3.jpg", // Replace with your image path
    title: "Erection of New 11kv HT Double-Pole Structure At All-Tech Industries Pvt. Ltd. - Mahesana",
    link: "https://empireteknology.blogspot.com/2020/12/erection-of-new-11kv-ht-double-pole.html", // Replace with your blog post link
  },
  {
    image: "/blog4.jpg", // Replace with your image path
    title: "11 Kv Over-Head Line-Shifting Work",
    link: "https://empireteknology.blogspot.com/2020/11/11-kv-over-head-line-shifting-work.html", // Replace with your blog post link
  },
  {
    image: "/blog5.jpg", // Replace with your image path
    title: "Aalayam Madhuvan 11 Kv UG Cable Network",
    link: "https://empireteknology.blogspot.com/2020/11/madhuvan-aalayam-ug-cable-network.html", // Replace with your blog post link
  },
];

function Blog() {
  return (
    <>
      <Header />
      
      <section className="bg-white container mx-auto lg:px-16 lg:py-16 md:px-6 md:py-8 px-4 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-6 mt-[80px]"> {/* Increased size here */}
            Our Blogs
          </h1>
          <p className="text-gray-900 text-[20px] text-center mb-8">
            Discover insights and updates in our latest blog posts. Stay tuned for expert advice, tips, and industry news that can help you navigate the digital landscape effectively. Each article is crafted to provide value and inform you about the latest trends in our industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-100 to-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {post.title}
                  </h3>
                  <Link href={post.link}>
                    <button className="flex items-center gap-2 py-2 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-200 rounded-md">
                      Read More <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;

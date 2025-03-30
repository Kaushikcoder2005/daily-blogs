import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <img 
          src="/api/placeholder/200/200" 
          alt="Profile" 
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
        />
        <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-lg text-gray-600">Writer & Content Creator</p>
      </div>

      {/* Bio Section */}
      <div className="prose prose-lg max-w-3xl mx-auto mb-12 text-gray-700">
        <p className="mb-4">
          Hello! I'm a passionate writer and content creator based in New York City. 
          With over 5 years of experience in digital content creation, I specialize in 
          technology, lifestyle, and creative writing that connects with readers.
        </p>
        <p className="mb-4">
          My journey began when I graduated from Columbia University with a degree in 
          English Literature. Since then, I've collaborated with various publications 
          and brands to create compelling stories that resonate with diverse audiences.
        </p>
        <p>
          When I'm not writing, you'll find me hiking in the mountains, experimenting 
          with new recipes, or getting lost in a good book. I believe that the best 
          stories come from lived experiences and genuine curiosity about the world.
        </p>
      </div>

      {/* Stats/Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <span className="text-3xl font-bold text-indigo-600 block mb-2">200+</span>
          <span className="text-gray-600">Articles Published</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <span className="text-3xl font-bold text-indigo-600 block mb-2">50K+</span>
          <span className="text-gray-600">Monthly Readers</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <span className="text-3xl font-bold text-indigo-600 block mb-2">4</span>
          <span className="text-gray-600">Years Blogging</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-12">
        <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
          <Twitter size={24} />
        </a>
        <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
          <Github size={24} />
        </a>
        <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
          <Mail size={24} />
        </a>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-6">
          Interested in collaborations or have questions about my work?
          Feel free to reach out via email or through my social media channels.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default About;
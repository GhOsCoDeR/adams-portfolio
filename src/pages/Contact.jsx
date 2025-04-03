import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    // EmailJS service configuration
    // You'll need to sign up at https://www.emailjs.com/ and replace these with your actual IDs
    const serviceId = 'service_0uuyx8h';  // Replace with your service ID from EmailJS dashboard
    const templateId = 'template_hpji666'; // Replace with your template ID from EmailJS dashboard
    const publicKey = 'K9vDhtyZSeVX0swGO'; // Replace with your public key from EmailJS dashboard

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );
      
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      <section className="section bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-primary font-medium mb-2 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              CONTACT ME
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get In Touch
              <motion.span 
                className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ delay: 0.8, duration: 0.5 }}
              ></motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Feel free to contact me for job opportunities or collaboration on projects
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                
                <div className="space-y-6">
                  <ContactInfoItem 
                    icon={<FaEnvelope />}
                    title="Email"
                    content="adams24mahama@gmail.com"
                    link="mailto:adams24mahama@gmail.com"
                  />
                  
                  <ContactInfoItem 
                    icon={<FaWhatsapp />}
                    title="WhatsApp"
                    content="+233 24 696 0570" /* Replace with your actual number */
                    link="https://wa.me/233246960570" /* Replace with your actual WhatsApp link */
                  />
                  
                  <ContactInfoItem 
                    icon={<FaGithub />}
                    title="GitHub"
                    content="github.com/GhOsCoDeR"
                    link="https://github.com/GhOsCoDeR"
                  />
                  
                  <ContactInfoItem 
                    icon={<FaLinkedin />}
                    title="LinkedIn"
                    content="Connect with me"
                    link="https://www.linkedin.com/in/adam-mahama/"
                  />
                  
                  <ContactInfoItem 
                    icon={<FaTwitter />}
                    title="Twitter"
                    content="Follow me"
                    link="https://twitter.com/your-twitter"
                  />
                  
                  <ContactInfoItem 
                    icon={<FaMapMarkerAlt />}
                    title="Location"
                    content="Kumasi, Ghana"
                    link={null}
                  />
                </div>

                <motion.div 
                  className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
                  <p className="text-sm text-gray-600">
                    I typically respond to all inquiries within 24 hours. For urgent matters, 
                    please reach out via WhatsApp.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
                      placeholder="Job opportunity, project collaboration, etc."
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:outline-none resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  {formStatus === 'success' && (
                    <motion.div 
                      className="mb-6 p-4 bg-green-100 text-green-700 rounded-md border border-green-200 flex items-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-green-200 rounded-full p-2 mr-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#047857"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Message Sent Successfully!</h4>
                        <p className="text-sm">I'll get back to you as soon as possible.</p>
                      </div>
                    </motion.div>
                  )}
                  
                  {formStatus === 'error' && (
                    <motion.div 
                      className="mb-6 p-4 bg-red-100 text-red-700 rounded-md border border-red-200 flex items-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-red-200 rounded-full p-2 mr-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#B91C1C"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Message Could Not Be Sent</h4>
                        <p className="text-sm">Please try again or contact me directly via email.</p>
                      </div>
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 rounded-lg text-white ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section py-16">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-[400px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127085.99388226149!2d-1.7055150565236152!3d6.695148723901608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb954510bbacbf%3A0xb76e70c7a1ee1af0!2sKumasi%2C%20Ghana!5e0!3m2!1sen!2sus!4v1688749835754!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="My Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Info Item Component
const ContactInfoItem = ({ icon, title, content, link }) => {
  return (
    <motion.div 
      className="flex items-start gap-4 group"
      whileHover={{ x: 5 }}
    >
      <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary hover:underline transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-700">{content}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Contact; 
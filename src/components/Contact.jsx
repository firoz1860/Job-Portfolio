import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const result = await emailjs.sendForm(
        'service_uufzalm',
        'template_z7psnof',
        form.current,
        'IxGoeqXhmuZbQcqxf'
      );
      
      console.log(result.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.log(error.text);
      setStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <Loader className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
            <span className="text-sm sm:text-base">Sending...</span>
          </>
        );
      case 'success':
        return (
          <>
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Message Sent!</span>
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Try Again</span>
          </>
        );
      default:
        return (
          <>
            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Send Message</span>
          </>
        );
    }
  };

  const getButtonClass = () => {
    switch (status) {
      case 'loading':
        return 'bg-gray-600 cursor-not-allowed';
      case 'success':
        return 'bg-green-600 hover:bg-green-700';
      case 'error':
        return 'bg-red-600 hover:bg-red-700';
      default:
        return 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700';
    }
  };

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-56 h-56 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-16 right-16 sm:top-32 sm:right-32 w-16 h-16 sm:w-24 sm:h-24 border border-purple-500 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-16 left-16 sm:bottom-32 sm:left-32 w-12 h-12 sm:w-16 sm:h-16 border border-cyan-500 transform rotate-12 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              &lt; Contact /&gt;
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Let's collaborate and bring your ideas to life. I'm always excited to work on new projects and challenges.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-500">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 group">
                    <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg sm:rounded-xl group-hover:bg-purple-500/30 transition-colors duration-300">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                      <p className="text-white font-medium text-sm sm:text-base break-all">firozahmed709p@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4 group">
                    <div className="p-2 sm:p-3 bg-cyan-500/20 rounded-lg sm:rounded-xl group-hover:bg-cyan-500/30 transition-colors duration-300">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                      <p className="text-white font-medium text-sm sm:text-base">+91 9315742128</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-500/30">
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Quick Response</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via phone or email directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500">
              <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 pl-10 sm:pl-12 bg-gray-700/50 border rounded-lg sm:rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 text-sm sm:text-base ${
                        focusedField === 'name' 
                          ? 'border-purple-500 focus:ring-purple-500/50 bg-gray-700/80' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                    <User className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                      focusedField === 'name' ? 'text-purple-400' : 'text-gray-400'
                    }`} />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 pl-10 sm:pl-12 bg-gray-700/50 border rounded-lg sm:rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 text-sm sm:text-base ${
                        focusedField === 'email' 
                          ? 'border-cyan-500 focus:ring-cyan-500/50 bg-gray-700/80' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your email address"
                    />
                    <Mail className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-cyan-400' : 'text-gray-400'
                    }`} />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 pl-10 sm:pl-12 bg-gray-700/50 border rounded-lg sm:rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none text-sm sm:text-base ${
                        focusedField === 'message' 
                          ? 'border-purple-500 focus:ring-purple-500/50 bg-gray-700/80' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                    <MessageSquare className={`absolute left-3 sm:left-4 top-3 sm:top-4 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                      focusedField === 'message' ? 'text-purple-400' : 'text-gray-400'
                    }`} />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-3 sm:px-6 sm:py-4 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center ${getButtonClass()}`}
                >
                  {getButtonContent()}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg sm:rounded-xl text-green-400 text-center text-sm sm:text-base">
                    Thanks for reaching out! I'll get back to you soon.
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg sm:rounded-xl text-red-400 text-center text-sm sm:text-base">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;


// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

// const Contact = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('idle'); // idle, loading, success, error
//   const [focusedField, setFocusedField] = useState(null);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setStatus('loading');

//     try {
//       const result = await emailjs.sendForm(
//         'service_uufzalm',
//         'template_z7psnof',
//         form.current,
//         'IxGoeqXhmuZbQcqxf'
//       );
      
//       console.log(result.text);
//       setStatus('success');
//       setFormData({ name: '', email: '', message: '' });
      
//       // Reset status after 5 seconds
//       setTimeout(() => setStatus('idle'), 5000);
//     } catch (error) {
//       console.log(error.text);
//       setStatus('error');
      
//       // Reset status after 5 seconds
//       setTimeout(() => setStatus('idle'), 5000);
//     }
//   };

//   const getButtonContent = () => {
//     switch (status) {
//       case 'loading':
//         return (
//           <>
//             <Loader className="w-5 h-5 mr-2 animate-spin" />
//             Sending...
//           </>
//         );
//       case 'success':
//         return (
//           <>
//             <CheckCircle className="w-5 h-5 mr-2" />
//             Message Sent!
//           </>
//         );
//       case 'error':
//         return (
//           <>
//             <AlertCircle className="w-5 h-5 mr-2" />
//             Try Again
//           </>
//         );
//       default:
//         return (
//           <>
//             <Send className="w-5 h-5 mr-2" />
//             Send Message
//           </>
//         );
//     }
//   };

//   const getButtonClass = () => {
//     switch (status) {
//       case 'loading':
//         return 'bg-gray-600 cursor-not-allowed';
//       case 'success':
//         return 'bg-green-600 hover:bg-green-700';
//       case 'error':
//         return 'bg-red-600 hover:bg-red-700';
//       default:
//         return 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700';
//     }
//   };

//   return (
//     <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
//       </div>

//       {/* Geometric Patterns */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-32 right-32 w-24 h-24 border border-purple-500 transform rotate-45 animate-spin-slow"></div>
//         <div className="absolute bottom-32 left-32 w-16 h-16 border border-cyan-500 transform rotate-12 animate-pulse"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-6xl md:text-7xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               &lt; Contact /&gt;
//             </span>
//           </h2>
//           <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
//             Let's collaborate and bring your ideas to life. I'm always excited to work on new projects and challenges.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             {/* Contact Info */}
//             <div className="space-y-8">
//               <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-500">
//                 <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4 group">
//                     <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors duration-300">
//                       <Mail className="w-6 h-6 text-purple-400" />
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-sm">Email</p>
//                       <p className="text-white font-medium">firozahmed709p@gmail.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-4 group">
//                     <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors duration-300">
//                       <User className="w-6 h-6 text-cyan-400" />
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-sm">Phone</p>
//                       <p className="text-white font-medium">+91 9315742128</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Response Info */}
//               <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-6 rounded-2xl border border-purple-500/30">
//                 <h4 className="text-lg font-bold text-white mb-3">Quick Response</h4>
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   I typically respond to messages within 24 hours. For urgent matters, 
//                   feel free to reach out via phone or email directly.
//                 </p>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500">
//               <form ref={form} onSubmit={sendEmail} className="space-y-6">
//                 {/* Name Field */}
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField('name')}
//                       onBlur={() => setFocusedField(null)}
//                       required
//                       className={`w-full px-4 py-3 pl-12 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
//                         focusedField === 'name' 
//                           ? 'border-purple-500 focus:ring-purple-500/50 bg-gray-700/80' 
//                           : 'border-gray-600 hover:border-gray-500'
//                       }`}
//                       placeholder="Enter your full name"
//                     />
//                     <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
//                       focusedField === 'name' ? 'text-purple-400' : 'text-gray-400'
//                     }`} />
//                   </div>
//                 </div>

//                 {/* Email Field */}
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField('email')}
//                       onBlur={() => setFocusedField(null)}
//                       required
//                       className={`w-full px-4 py-3 pl-12 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
//                         focusedField === 'email' 
//                           ? 'border-cyan-500 focus:ring-cyan-500/50 bg-gray-700/80' 
//                           : 'border-gray-600 hover:border-gray-500'
//                       }`}
//                       placeholder="Enter your email address"
//                     />
//                     <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
//                       focusedField === 'email' ? 'text-cyan-400' : 'text-gray-400'
//                     }`} />
//                   </div>
//                 </div>

//                 {/* Message Field */}
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Message
//                   </label>
//                   <div className="relative">
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       required
//                       rows="6"
//                       className={`w-full px-4 py-3 pl-12 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
//                         focusedField === 'message' 
//                           ? 'border-purple-500 focus:ring-purple-500/50 bg-gray-700/80' 
//                           : 'border-gray-600 hover:border-gray-500'
//                       }`}
//                       placeholder="Tell me about your project or just say hello!"
//                     />
//                     <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
//                       focusedField === 'message' ? 'text-purple-400' : 'text-gray-400'
//                     }`} />
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={status === 'loading'}
//                   className={`w-full px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center ${getButtonClass()}`}
//                 >
//                   {getButtonContent()}
//                 </button>

//                 {/* Status Messages */}
//                 {status === 'success' && (
//                   <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">
//                     Thanks for reaching out! I'll get back to you soon.
//                   </div>
//                 )}
                
//                 {status === 'error' && (
//                   <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center">
//                     Oops! Something went wrong. Please try again.
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .animate-spin-slow {
//           animation: spin 8s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Contact;




// // src/components/Contact.js
// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_uufzalm',
//       'template_z7psnof',
//       form.current,
//       'IxGoeqXhmuZbQcqxf'
//     )
//     .then((result) => {
//       console.log(result.text);
//       alert('Message sent successfully!');
//     }, (error) => {
//       console.log(error.text);
//       alert('Failed to send message.');
//     });

//     e.target.reset();
//   };

//   return (
//     <section id="contact" className="py-16">
//       <h2 className="text-3xl font-bold text-purple-500">&lt; Contact /&gt;</h2>
//       <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4 max-w-xl">
//         <input name="name" className="w-full p-2 bg-gray-800 text-white rounded" type="text" placeholder="Name" required />
//         <input name="email" className="w-full p-2 bg-gray-800 text-white rounded" type="email" placeholder="Email" required />
//         <textarea name="message" className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Message" rows="4" required />
//         <button type="submit" className="bg-purple-600 hover:bg-purple-700 p-2 rounded text-white">Send</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

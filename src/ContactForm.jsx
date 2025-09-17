// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// const form = React.useRef();
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     itemType: '',
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!formData.name || !formData.phone || !formData.itemType) {
//       setMessage('Please fill all fields.');
//       return;
//     }
//     const templateParams = {
//       from_name: formData.name,
//       phone: formData.phone,
//       item_type: formData.itemType,
//     };
//     emailjs.send(
//       'service_k4bgdoq',
//       'template_1rxzq8m',
//       templateParams,
//       'SiYNK32BUcvCsfqXz'
//     )
//       .then(response => {
//         setMessage('Inquiry sent successfully!');
//         setFormData({ name: '', phone: '', itemType: '' });
//       })
//       .catch(err => {
//         console.error('EmailJS error:', err);
//         setMessage('Failed to send message. Please try again later.');
//       });
//   };
// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_k4bgdoq",   // replace with your EmailJS service ID
//         "template_nns9k8v",  // replace with your EmailJS template ID
//         form.current,
//         "SiYNK32BUcvCsfqXz"    // replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log("Message Sent:", result.text);
//           alert("Form submitted successfully!");
//         },
//         (error) => {
//           console.log("Error:", error.text);
//           alert("Something went wrong, try again!");
//         }
//       );
//   };

//   return (
//     <>
//     <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-white">
//       <h2 className="text-xl font-bold mb-4 text-center">Contact Form</h2>
//       <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
//         {/* Name */}
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Your Name"
//           required
//           className="border rounded-lg p-2"
//         />

//         {/* Phone */}
//         <input
//           type="tel"
//           name="user_phone"
//           placeholder="Your Phone Number"
//           required
//           className="border rounded-lg p-2"
//         />

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//      <div className="bg-gradient-to-br from-yellow-100 to-gray-200 min-h-screen">
//           <header className="bg-gradient-to-r from-yellow-400 to-amber-500 py-6 shadow-lg">
//             <div className="container mx-auto text-center">
//               <h1 className="text-4xl font-bold text-white">Jewelry Exchange</h1>
//               <p className="text-gray-800 mt-2">Buy Gold, Silver, Diamonds in Gold Exchange</p>
//             </div>
//           </header>
    
//           <main className="container mx-auto py-10 px-4">
//             <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Submit Your Inquiry</h2>
//               <form ref={form} onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2">Item Type</label>
//                   <select
//                     name="itemType"
//                     value={formData.itemType}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     required
//                   >
//                     <option value="">Select Type</option>
//                     <option value="Gold">Gold</option>
//                     <option value="Silver">Silver</option>
//                     <option value="Diamond">Diamond</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//                 {/* Pass all fields as hidden inputs for EmailJS */}
//                 <input type="hidden" name="from_name" value={formData.name} />
//                 <input type="hidden" name="phone" value={formData.phone} />
//                 <input type="hidden" name="item_type" value={formData.itemType} />
//                 <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-200">
//                   Send Inquiry
//                 </button>
//               </form>
//               {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
//             </div>
//           </main>
//           <ContactForm />
//           <footer className="bg-gray-800 text-white text-center py-4 mt-10">
//             <p>&copy; 2024 Jewelry Exchange. All rights reserved.</p>
//           </footer>
//         </div>
// </>
//   );
// };

// export default ContactForm;

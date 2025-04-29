import React, { useState } from "react";

const VisaInquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    residence: "",
    visaType: "",
    destination: "",
    travelDate: "",
    purpose: "",
    comments: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your backend integration
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white w-full max-w-4xl mx-auto p-8 rounded-xl shadow-lg mt-12 mb-20">
      <h2 className="text-3xl font-bold mb-6 text-[#051440] text-center">
        Visa Inquiry Form
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
        />

        <input
          type="text"
          name="nationality"
          placeholder="Your Nationality"
          value={formData.nationality}
          onChange={handleChange}
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
        />

        <input
          type="text"
          name="residence"
          placeholder="Current Country of Residence"
          value={formData.residence}
          onChange={handleChange}
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
        />

        <select
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
          required
        >
          <option value="">Select Visa Type</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Tourist Visa">Tourist Visa</option>
          <option value="Business Visa">Business Visa</option>
          <option value="Work Permit">Work Permit</option>
          <option value="Family Visa">Family Visa</option>
          <option value="Medical Visa">Medical Visa</option>
          <option value="Official Visa">Official Visa</option>
        </select>

        <input
          type="text"
          name="destination"
          placeholder="Destination Country"
          value={formData.destination}
          onChange={handleChange}
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
        />

        <input
          type="date"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
        />

        <textarea
          name="purpose"
          placeholder="Purpose of Travel"
          value={formData.purpose}
          onChange={handleChange}
          rows="4"
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32] md:col-span-2"
        />

        <textarea
          name="comments"
          placeholder="Additional Comments or Questions"
          value={formData.comments}
          onChange={handleChange}
          rows="3"
          className="w-full border border-red-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#be0b32] md:col-span-2"
        />

        <label className="md:col-span-2 flex items-center space-x-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <span className="text-sm text-gray-700">
            I agree to be contacted regarding my visa inquiry.
          </span>
        </label>

        <button
          type="submit"
          className="md:col-span-2 bg-[#be0b32] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#8a0e24] transition duration-300"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};



export default VisaInquiryForm;

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, Sparkles, Check, AlertCircle, Send } from 'lucide-react';

export default function BookingSection({ selectedService, onServiceChange }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: selectedService || 'Hair Colour',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);

  // Sync if selectedService from parent updates
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const serviceOptions = [
    "Hair Colour",
    "Hair Wash",
    "Hair Spa",
    "Hair Straightening",
    "Hair Smoothening",
    "Hair Extension",
    "Beard Colouring",
    "Beard Styling"
  ];

  const timeSlots = [
    "10:00 AM - 11:30 AM",
    "11:30 AM - 01:00 PM",
    "01:00 PM - 02:30 PM",
    "02:30 PM - 04:00 PM",
    "04:00 PM - 05:30 PM",
    "05:30 PM - 07:00 PM",
    "07:00 PM - 08:30 PM"
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    // Indian phone number validation (10 digits, optional +91 or leading 0)
    const phoneClean = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (phoneClean.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Preferred appointment date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the pre-filled WhatsApp message
    const lines = [
      `*New Appointment Request - SALON 59*`,
      `----------------------------------------`,
      `• *Client Name:* ${formData.fullName.trim()}`,
      `• *Phone:* ${formData.phoneNumber.trim()}`,
      `• *Service Requested:* ${formData.service}`,
      `• *Preferred Date:* ${formData.date}`,
      `• *Preferred Time:* ${formData.time}`,
      formData.message.trim() ? `• *Special Notes:* ${formData.message.trim()}` : null,
      `----------------------------------------`,
      `_I am submitting this appointment request from the Salon 59 official website. Please confirm availability and consultation details._`
    ].filter(Boolean);

    const whatsappMessage = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/918796317438?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Display clear, honest notice (No fake confirmation)
    setStatusMessage({
      type: 'success',
      text: "WhatsApp has been opened with your appointment details. Please tap 'Send' in WhatsApp. Note: Your appointment will be confirmed once our salon manager reviews schedule availability and responds to you."
    });
  };

  return (
    <section id="booking" className="py-24 bg-soft-blush/40 relative">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-nude-pink/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-champagne-gold/25 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-warm-ivory border border-rose-gold/30 text-rose-gold shadow-sm">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              Personalized Scheduling
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-deep-charcoal">
            REQUEST AN APPOINTMENT
          </h2>

          <p className="text-base sm:text-lg text-deep-charcoal/75 font-light tracking-wide">
            Reserve your moment of luxury. Let our master artists prepare for your visit.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
        </div>

        {/* Booking Card Form */}
        <div className="bg-warm-ivory rounded-3xl p-6 sm:p-12 border border-rose-gold/30 shadow-luxury">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-deep-charcoal">
                  Full Name <span className="text-rose-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-rose-gold">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-deep-charcoal placeholder-deep-charcoal/40 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-rose-gold/25'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-500 font-medium flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-deep-charcoal">
                  Phone Number <span className="text-rose-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-rose-gold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: null });
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-deep-charcoal placeholder-deep-charcoal/40 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 transition-all ${
                      errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-rose-gold/25'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-red-500 font-medium flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              {/* Select Service Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-deep-charcoal">
                  Select Service <span className="text-rose-gold">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (onServiceChange) onServiceChange(e.target.value);
                      if (errors.service) setErrors({ ...errors, service: null });
                    }}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-rose-gold/25 text-sm text-deep-charcoal focus:outline-none focus:ring-2 focus:ring-rose-gold/30 transition-all cursor-pointer appearance-none"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-rose-gold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                {errors.service && (
                  <p className="text-xs text-red-500 font-medium">{errors.service}</p>
                )}
              </div>

              {/* Preferred Appointment Date */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-deep-charcoal">
                  Preferred Appointment Date <span className="text-rose-gold">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: null });
                    }}
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-deep-charcoal focus:outline-none focus:ring-2 focus:ring-rose-gold/30 transition-all ${
                      errors.date ? 'border-red-400 bg-red-50/20' : 'border-rose-gold/25'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="text-xs text-red-500 font-medium flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.date}</span>
                  </p>
                )}
              </div>

              {/* Preferred Appointment Time */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-deep-charcoal">
                  Preferred Appointment Time <span className="text-rose-gold">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, time: slot });
                        if (errors.time) setErrors({ ...errors, time: null });
                      }}
                      className={`py-2 px-2 rounded-xl text-[11px] font-medium border text-center transition-all ${
                        formData.time === slot
                          ? 'bg-rose-gold text-white border-rose-gold shadow-sm'
                          : 'bg-white text-deep-charcoal/80 border-rose-gold/20 hover:border-rose-gold/50'
                      }`}
                    >
                      {slot.split(' - ')[0]}
                    </button>
                  ))}
                </div>
                {errors.time && (
                  <p className="text-xs text-red-500 font-medium flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.time}</span>
                  </p>
                )}
              </div>

              {/* Additional Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-deep-charcoal">
                  Additional Message (Optional)
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-rose-gold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your hair type, desired shade, or any specific styling requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-rose-gold/25 text-sm text-deep-charcoal placeholder-deep-charcoal/40 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 transition-all resize-none"
                  />
                </div>
              </div>

            </div>

            {/* Submission Status Notice */}
            {statusMessage && (
              <div className="p-4 rounded-2xl bg-nude-pink/30 border border-rose-gold/40 text-deep-charcoal space-y-2">
                <div className="flex items-center space-x-2 text-rose-gold font-semibold text-xs uppercase tracking-wider">
                  <Check className="w-4 h-4" />
                  <span>Request Dispatched to WhatsApp</span>
                </div>
                <p className="text-xs sm:text-sm font-light leading-relaxed">
                  {statusMessage.text}
                </p>
              </div>
            )}

            {/* Important Transparent Booking Disclaimer */}
            <div className="p-4 rounded-xl bg-soft-blush/60 border border-rose-gold/20 flex items-start space-x-3">
              <AlertCircle className="w-4 h-4 text-rose-gold shrink-0 mt-0.5" />
              <p className="text-xs text-deep-charcoal/80 font-light leading-relaxed">
                <strong>Important:</strong> Submitting this request initiates a direct WhatsApp connection with our salon team at <strong>8796317438</strong>. Appointments are only confirmed after the salon responds and confirms your scheduled slot.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-semibold text-white bg-gradient-to-r from-rose-gold via-rose-gold-light to-rose-gold hover:from-rose-gold-dark hover:to-rose-gold transition-all duration-300 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST AN APPOINTMENT</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}

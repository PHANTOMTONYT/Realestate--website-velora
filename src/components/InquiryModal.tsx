import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle, Calendar, Sparkles } from "lucide-react";
import { InquiryForm } from "../types";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProperty?: string;
}

export default function InquiryModal({ isOpen, onClose, defaultProperty = "General Interest" }: InquiryModalProps) {
  const [formData, setFormData] = useState<InquiryForm>({
    name: "",
    email: "",
    phone: "",
    propertyInterest: defaultProperty,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyInterest: defaultProperty,
      message: ""
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
          />

          {/* Slider Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="bg-[#FAF9F6] text-[#1A1A1A] h-full w-full max-w-lg shadow-2xl relative z-10 flex flex-col justify-between border-l border-[#1A1A1A]/10 rounded-none"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-[#1A1A1A]/10 flex justify-between items-center bg-[#EAE8E2]">
              <div>
                <h3 className="text-xl font-serif italic font-bold text-[#1A1A1A] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]" />
                  Bespoke Consultations
                </h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                  Connect with our private real estate concierge.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/70 hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A]/10 cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {!isSuccess ? (
                <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/80 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-none border border-[#1A1A1A]/20 bg-[#FAF9F6] focus:outline-none focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="eleanor@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border border-[#1A1A1A]/20 bg-[#FAF9F6] focus:outline-none focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 0192"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border border-[#1A1A1A]/20 bg-[#FAF9F6] focus:outline-none focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/80 mb-1.5">
                      Collection Interest
                    </label>
                    <select
                      value={formData.propertyInterest}
                      onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] rounded-none border border-[#1A1A1A]/20 focus:outline-none focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] text-sm text-[#1A1A1A] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="General Interest">General Portfolio Interest</option>
                      <option value="Metropolitan Icons">Metropolitan Icons Collection</option>
                      <option value="Seaside Sanctuaries">Seaside Sanctuaries Collection</option>
                      <option value="Mountain Escapes">Mountain Escapes Collection</option>
                      <option value="Historic Charm">Historic Charm Collection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/80 mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details of your ideal property features, timeline, and location specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-none border border-[#1A1A1A]/20 bg-[#FAF9F6] focus:outline-none focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 transition-colors resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-[#1A1A1A]/60 leading-normal italic">
                    * By submitting, you agree to allow a Velora Private Broker to contact you using the provided credentials. We respect your confidentiality.
                  </p>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 pt-12">
                  <div className="w-16 h-16 rounded-none bg-[#EAE8E2] text-[#C2410C] border border-[#1A1A1A]/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold italic text-[#1A1A1A]">
                      Inquiry Received
                    </h4>
                    <p className="text-sm text-[#1A1A1A]/80 mt-2 max-w-sm mx-auto">
                      Eleanor, your request for the <strong>{formData.propertyInterest}</strong> portfolio has been dispatched. A Broker has been designated for your file.
                    </p>
                  </div>

                  {/* Scheduled block */}
                  <div className="w-full bg-[#EAE8E2]/50 p-5 rounded-none border border-[#1A1A1A]/10 text-left space-y-2 max-w-sm">
                    <h5 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C2410C]" />
                      Response Handover Guarantee
                    </h5>
                    <p className="text-[11px] text-[#1A1A1A]/80 leading-relaxed">
                      Our private broker team guarantees a personalized phone assessment within **2 hours** (local London/NY hours).
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 border-t border-[#1A1A1A]/10 bg-[#EAE8E2]">
              {!isSuccess ? (
                <button
                  type="submit"
                  form="inquiry-form"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-[#1A1A1A] hover:bg-[#C2410C] text-white py-4 rounded-none font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Securing Broker Connection...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Private Inquiry
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="w-full cursor-pointer bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white py-4 rounded-none font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  Acknowledge and Close
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import React, { useState } from 'react';
import { 
  X, Check, Stethoscope, FileText, ShieldCheck, 
  Send, Building, CheckCircle2 
} from 'lucide-react';

interface ClinicianReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClinicianReferralModal: React.FC<ClinicianReferralModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [providerName, setProviderName] = useState('');
  const [practiceName, setPracticeName] = useState('');
  const [specialty, setSpecialty] = useState('General Dentist');
  const [providerEmail, setProviderEmail] = useState('');
  const [providerPhone, setProviderPhone] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [clinicalReason, setClinicalReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-teal-700 block">
                Provider-to-Provider Collaboration
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
                Referring Clinician Portal
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Dedicated referral channel for Dentists, Oral Surgeons, Prosthodontists, ENT specialists, and Physical Therapists.
              </p>
            </div>

            {/* Referring Provider Information */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block border-b border-slate-100 pb-1">
                Referring Provider Details:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Doctor / Clinician Name *
                  </label>
                  <input
                    type="text"
                    value={providerName}
                    onChange={(e) => setProviderName(e.target.value)}
                    placeholder="Dr. John Smith, DDS / MD"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Specialty *
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden bg-white"
                  >
                    <option value="General Dentist">General Dentistry</option>
                    <option value="Prosthodontist">Prosthodontics</option>
                    <option value="Oral & Maxillofacial Surgeon">Oral &amp; Maxillofacial Surgery</option>
                    <option value="Physical Therapist">Physical Therapy</option>
                    <option value="Otolaryngologist / ENT">Otolaryngology (ENT)</option>
                    <option value="Other Specialist">Other Medical Specialist</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Practice Name / Institution *
                  </label>
                  <input
                    type="text"
                    value={practiceName}
                    onChange={(e) => setPracticeName(e.target.value)}
                    placeholder="Dental / Surgical Practice Name"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Clinician Email *
                  </label>
                  <input
                    type="email"
                    value={providerEmail}
                    onChange={(e) => setProviderEmail(e.target.value)}
                    placeholder="doctor@practice.com"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Patient Information */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block border-b border-slate-100 pb-1">
                Patient Being Referred:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Patient Name"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Patient Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="(832) 000-0000"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Reason for Referral &amp; Primary Clinical Question *
                </label>
                <textarea
                  rows={3}
                  value={clinicalReason}
                  onChange={(e) => setClinicalReason(e.target.value)}
                  placeholder="e.g., Acute non-reducing disc closed lock, severe TMJ arthritic crepitus refractory to night guard, evaluation for autologous PRF vs arthrocentesis..."
                  required
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Collaboration Principle */}
            <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1">
              <strong className="block font-bold">Co-Management Commitment:</strong>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                RENAXIS returns formal clinical consultation notes, imaging reports, and copies of any treatment documentation directly to your practice. We collaborate on appliance co-management and do not alter dental occlusion without explicit restorative coordination.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Clinical Referral</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-slate-900">
              Referral Received
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, {providerName || 'Doctor'}. Our clinical intake coordinator will contact {patientName} and reach out to your office with an update once the patient is scheduled.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 max-w-md mx-auto space-y-1">
              <strong className="text-slate-900 block">Records Transmission:</strong>
              <p>
                To transmit DICOM volumes (CBCT / MRI) or dental records securely, please email our clinical liaison team at <strong className="text-teal-800">referrals@renaxis.com</strong> or fax to <strong>(832) 555-0866</strong>.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Close Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

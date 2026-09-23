import React from 'react';
import { 
  FileText, ShieldCheck, CheckCircle2, ArrowRight, 
  Stethoscope, Send, Phone, Download, Building
} from 'lucide-react';

interface ReferringCliniciansSectionProps {
  onOpenClinicianModal: () => void;
}

export const ReferringCliniciansSection: React.FC<ReferringCliniciansSectionProps> = ({
  onOpenClinicianModal,
}) => {
  return (
    <section id="clinicians-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
            <span>Colleague Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Information for Referring Clinicians
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We partner with General Dentists, Prosthodontists, Oral &amp; Maxillofacial Surgeons, Physical Therapists, and ENT Physicians across Texas and nationwide to co-manage complex TMJ patients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Clinical Commitments */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold font-serif text-slate-900">
              Our Clinical Partnership Principles:
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Prompt Written Communication &amp; DICOM Access</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  You receive our full diagnostic consultation note, dynamic MRI/CBCT findings, and proposed clinical timeline within 48 hours of your patient’s appointment.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Respect for Dental Occlusion &amp; Non-Destructive Care</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  We adhere to NIDCR guidelines and never perform irreversible bite balancing, equilibration, or restorative tooth shaving without explicit co-treatment planning.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Return of Patients for Primary Restorative &amp; Appliance Care</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Following joint stabilization, joint lavage, or autologous PRF, patients are returned directly to your dental or therapy practice for continued maintenance and restorative dentistry.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenClinicianModal}
                className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Secure Patient Referral</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Intake Contact Card */}
          <div className="lg:col-span-5 bg-teal-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
                  Doctor-to-Doctor Line
                </span>
                <span className="px-2 py-0.5 rounded-full bg-teal-800 text-teal-200 text-[10px] uppercase font-bold">
                  Priority Triage
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white">
                Direct Professional Coordination
              </h3>
              <p className="text-xs text-teal-100/80 leading-relaxed">
                Have a patient with acute non-reducing closed lock or a complex surgical revision question? Speak directly with our clinical liaison.
              </p>

              <div className="p-4 rounded-xl bg-teal-900/80 border border-teal-800 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-teal-200">Clinician Direct Phone:</span>
                </div>
                <p className="text-lg font-bold text-white pl-6">
                  346-278-5330
                </p>
                <p className="text-[11px] text-teal-300 pl-6">
                  Direct Clinician Extension 104 &bull; Mon–Fri, 8am–5pm CST
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-900/80 border border-teal-800 space-y-1 text-xs">
                <span className="text-teal-200 font-bold block">Secure Records &amp; DICOM Fax:</span>
                <p className="text-white">Email: <span className="text-teal-300 font-mono">referrals@renaxis.com</span></p>
                <p className="text-white">Direct Medical Fax: <span className="font-mono">(832) 555-0866</span></p>
              </div>
            </div>

            <button
              onClick={onOpenClinicianModal}
              className="w-full py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Launch Referral Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

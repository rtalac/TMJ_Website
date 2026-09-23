import React from 'react';
import { 
  ShieldCheck, MapPin, Phone, Mail, Clock, 
  ArrowRight, ExternalLink, Stethoscope, FileText 
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onRequestEvaluation: () => void;
  onOpenClinicianModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onRequestEvaluation,
  onOpenClinicianModal,
}) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      
      {/* Top Banner with Quote */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-teal-400 font-bold uppercase tracking-widest text-[10px]">
              RENAXIS Clinical Program
            </span>
            <p className="text-white font-serif text-lg font-bold">
              &ldquo;Your jaw deserves a diagnosis before a treatment decision.&rdquo;
            </p>
          </div>
          <button
            onClick={onRequestEvaluation}
            className="px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Request TMJ Evaluation
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center text-white font-bold font-serif text-xl">
                R
              </div>
              <div>
                <span className="text-lg font-bold text-white font-serif tracking-tight block">
                  RENAXIS
                </span>
                <span className="text-[11px] text-teal-400 font-semibold uppercase tracking-wider">
                  TMJ Regenerative Care Program
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              A specialized clinical program within RENAXIS Regenerative Orthopedics &amp; Spine. Providing comprehensive TMJ diagnostics, individualized nonsurgical and autologous PRF regenerative care, guided functional rehabilitation, and surgical referral when appropriate.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-teal-300 font-semibold text-xs">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Clinical Campus</span>
              </div>
              <p className="text-slate-400 text-xs">
                The Woodlands Medical Center <br />
                9303 Pinecroft Drive, Suite 320 <br />
                The Woodlands, TX 77380 (Greater Houston Area)
              </p>
              <p className="text-[11px] text-slate-500">
                25 minutes from George Bush Intercontinental Airport (IAH)
              </p>
            </div>
          </div>

          {/* Program Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Program Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => handleNav('overview')} className="hover:text-teal-300 transition-colors">
                  Program Overview (Homepage)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('conditions')} className="hover:text-teal-300 transition-colors">
                  Conditions &amp; Symptoms
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('diagnosis')} className="hover:text-teal-300 transition-colors">
                  Comprehensive Diagnosis &amp; Biological Capital
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('treatments')} className="hover:text-teal-300 transition-colors">
                  Treatment Options (PRF, Arthrocentesis, Rehab)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('patient-experience')} className="hover:text-teal-300 transition-colors">
                  Patient Experience &amp; Traveling to RENAXIS
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('evidence')} className="hover:text-teal-300 transition-colors">
                  Clinical Evidence &amp; Research
                </button>
              </li>
              <li>
                <button onClick={onOpenClinicianModal} className="hover:text-teal-300 transition-colors">
                  Referring Clinicians Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Three Patient Pathways */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Patient Pathways
            </h4>
            <div className="space-y-3 text-slate-400">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-white block">Pathway A: Local Patients</strong>
                <span>The Woodlands, Spring, Conroe &amp; Houston</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-white block">Pathway B: National Patients</strong>
                <span>Traveling from across the United States</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-white block">Pathway C: International</strong>
                <span>Global travel, medical triage &amp; records review</span>
              </div>
            </div>
          </div>

          {/* Direct Coordination */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Care Coordination
            </h4>
            <div className="space-y-3 text-slate-400">
              <div>
                <span className="text-slate-500 block text-[11px]">Direct Line:</span>
                <a href="tel:8325550865" className="text-white font-bold text-sm hover:text-teal-400">
                  (832) 555-0865
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Clinical Email:</span>
                <span className="text-teal-300">tmj@renaxishealth.com</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Hours of Operation:</span>
                <span>Mon – Fri: 8:00 AM – 5:00 PM CST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Safeguards & Legal Disclaimers */}
        <div className="mt-12 pt-8 border-t border-slate-800 space-y-4 text-slate-500 text-[11px] leading-relaxed">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-400">Regulatory Safeguard Notice:</strong> The information provided on this website is for educational and clinical screening purposes and does not constitute medical advice or a formal physician-patient relationship. In-person clinical history, physical examination, and appropriate diagnostic imaging are mandatory before establishing a diagnosis or initiating treatment. Autologous PRF is prepared chairside from the patient&rsquo;s own blood for homologous use. In accordance with FDA public consumer warnings, exosome products are presented solely for educational discussion and scientific review; there are no FDA-approved exosome products for TMJ treatment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} RENAXIS Regenerative Orthopedic Center &bull; TMJ Regenerative Care Program. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>The Woodlands, Texas</span>
              <span>&bull;</span>
              <span>Privacy Policy</span>
              <span>&bull;</span>
              <span>HIPAA Compliance</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

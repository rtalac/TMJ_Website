import React from 'react';
import { 
  Calendar, Phone, ArrowRight, ShieldCheck, 
  MapPin, CheckCircle2, Clock 
} from 'lucide-react';

interface FinalCTASectionProps {
  onRequestEvaluation: () => void;
  onOpenClinicianModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onRequestEvaluation,
  onOpenClinicianModal,
}) => {
  return (
    <section className="py-20 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-sky-500 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          <span>Section 10 &bull; Take the First Clinical Step</span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Start With a Comprehensive TMJ Evaluation.
          </h2>
          <p className="text-base sm:text-xl text-teal-100/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Understand your diagnosis, explore appropriate nonsurgical treatment options, and take the next step toward restoring comfortable jaw function.
          </p>
        </div>

        {/* Core Philosophy Banner */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 max-w-xl mx-auto text-sm text-slate-200">
          <p className="font-serif italic text-teal-200 text-base">
            &ldquo;Your jaw deserves a diagnosis before a treatment decision.&rdquo;
          </p>
          <span className="text-xs text-slate-400 mt-1 block">
            No predetermined injections. Dedicated evaluation by experienced regenerative clinicians.
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onRequestEvaluation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Request Your TMJ Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:8325550865"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>Speak with Intake: (832) 555-0865</span>
          </a>
        </div>

        {/* Geographic Support & Fast Triage */}
        <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>Local Woodlands / Houston Scheduling</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>US &amp; International Concierge Triage</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>Prior MRI &amp; CBCT Record Review</span>
          </div>
        </div>

        {/* Clinician Direct Referral */}
        <div className="pt-4">
          <button
            onClick={onOpenClinicianModal}
            className="text-xs text-slate-400 hover:text-teal-300 underline underline-offset-4 transition-colors"
          >
            Are you a Dentist, Oral Surgeon, or Physical Therapist? Submit a patient referral here &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

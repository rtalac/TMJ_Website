import React from 'react';
import { 
  FileSearch, Stethoscope, ClipboardCheck, Dumbbell, 
  LineChart, ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';

interface PatientJourneySectionProps {
  onRequestEvaluation: () => void;
}

export const PatientJourneySection: React.FC<PatientJourneySectionProps> = ({
  onRequestEvaluation,
}) => {
  const journeySteps = [
    {
      step: '01',
      title: 'Consultation & Record Review',
      sub: 'Preliminary Records Triage',
      icon: <FileSearch className="w-5 h-5 text-teal-600" />,
      desc: 'We review your clinical history, previous dental appliances, MRI/CBCT scans, and previous physical therapy notes prior to your appointment.',
      highlight: 'Avoids repeating redundant tests'
    },
    {
      step: '02',
      title: 'Comprehensive Diagnostic Evaluation',
      sub: 'In-Person Mechanical & Biological Exam',
      icon: <Stethoscope className="w-5 h-5 text-teal-600" />,
      desc: 'Detailed examination of cranial nerves, palpation of masticatory and cervical muscles, calibrated mm jaw tracking, and joint auscultation.',
      highlight: 'Establishes primary symptom driver'
    },
    {
      step: '03',
      title: 'Individualized Treatment Recommendation',
      sub: 'Multimodal Protocol Design',
      icon: <ClipboardCheck className="w-5 h-5 text-teal-600" />,
      desc: 'Our physicians explain your structural condition and discuss whether conservative therapy, arthrocentesis, autologous PRF, or surgical referral is appropriate.',
      highlight: 'Patient-centered informed consent'
    },
    {
      step: '04',
      title: 'Treatment & Guided Rehabilitation',
      sub: 'Intervention + Active Recovery',
      icon: <Dumbbell className="w-5 h-5 text-teal-600" />,
      desc: 'Procedures are performed under sterile image guidance, paired with custom jaw movement coordination, dietary progression, and splint management.',
      highlight: 'Restores neuromuscular control'
    },
    {
      step: '05',
      title: 'Longitudinal Follow-Up & Durability',
      sub: 'Structured Outcome Tracking',
      icon: <LineChart className="w-5 h-5 text-teal-600" />,
      desc: 'Scheduled check-ins at 2w, 6w, 12w, and 6-12 months to monitor chewing ability, pain reduction, and durability of joint function.',
      highlight: 'Verifies long-term stability'
    },
  ];

  return (
    <section id="patient-journey-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <span className="text-teal-700 font-bold">07</span>
            <span>Your Patient Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            From Your First Consultation to Functional Recovery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A clear, predictable, and supportive pathway designed so you always know what to expect at every phase of care.
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {journeySteps.map((step, idx) => (
            <div 
              key={step.step}
              className="relative bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-teal-400 hover:shadow-md transition-all group"
            >
              {/* Connector line for desktop */}
              {idx < journeySteps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-slate-200 z-10" />
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-900 font-serif font-bold text-xs flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                    {step.step}
                  </span>
                  <div className="p-1.5 rounded-md bg-white border border-slate-200">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-serif mb-1 leading-snug">
                  {step.title}
                </h3>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-teal-700 block mb-2">
                  {step.sub}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <span className="text-[11px] font-medium text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="text-slate-800">{step.highlight}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Bottom CTA Box */}
        <div className="p-8 rounded-2xl bg-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-teal-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Personalized Clinical Care Coordination</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Ready to begin your structured TMJ evaluation?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
              Our clinical coordinator will review your inquiry, help assemble existing imaging records, and schedule the appropriate initial consultation.
            </p>
          </div>

          <button
            onClick={onRequestEvaluation}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Start Step 01 Intake</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

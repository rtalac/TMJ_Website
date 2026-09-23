import React, { useState } from 'react';
import { 
  Dna, Scan, Ruler, HeartPulse, ShieldCheck, CheckCircle2, 
  HelpCircle, ArrowRight, Activity, Sparkles 
} from 'lucide-react';

interface BiologicalCapitalSectionProps {
  onRequestEvaluation: () => void;
}

export const BiologicalCapitalSection: React.FC<BiologicalCapitalSectionProps> = ({
  onRequestEvaluation,
}) => {
  const [activeDomain, setActiveDomain] = useState<'structural' | 'biological' | 'functional'>('structural');

  const domains = [
    {
      id: 'structural' as const,
      title: 'Structural Domain',
      subtitle: 'Anatomy, Joint Architecture & Osseous Health',
      icon: <Scan className="w-5 h-5 text-teal-600" />,
      color: 'border-teal-500 bg-teal-50/60',
      description: 'Quantification of the physical joint structures using targeted high-resolution diagnostic imaging.',
      measurements: [
        'High-Resolution MRI: Disc position (closed and open mouth), disc morphology, retrodiscal tissue integrity',
        'Cone Beam CT (CBCT): Mandibular condyle cortical bone outline, subchondral cyst formation, osteophytes, and glenoid fossa spacing',
        'Joint Effusion: Synovial fluid accumulation indicative of active inflammatory capsulitis',
        'Mechanical Obstruction: Adhesions, fibrous bands, or mechanical translation blocks'
      ],
      clinicalValue: 'Provides clear structural classification to determine whether joint preservation and autologous PRF or surgical reconstruction is anatomically viable.'
    },
    {
      id: 'biological' as const,
      title: 'Biological Domain',
      subtitle: 'Systemic Health, Inflammatory Tone & Healing Capacity',
      icon: <Dna className="w-5 h-5 text-sky-600" />,
      color: 'border-sky-500 bg-sky-50/60',
      description: 'Assessment of systemic, metabolic, and cellular factors that govern tissue response and regenerative receptivity.',
      measurements: [
        'Systemic Inflammatory Workup: Autoimmune conditions (rheumatoid, psoriatic, lupus), ESR / hs-CRP markers',
        'Metabolic Health & Glycemic Control: Uncontrolled diabetes or insulin resistance impairs fibrocartilage healing',
        'Nutritional Profile & Micronutrient Reserves: Vitamin D3, magnesium, and collagen precursors',
        'Medication Review: Corticosteroid use, anticoagulants, anti-resorptive therapies (bisphosphonates) impacting bone turnover'
      ],
      clinicalValue: 'Identifies biological inhibitors before delivering intra-articular PRF, ensuring optimal cell signaling and joint environment.'
    },
    {
      id: 'functional' as const,
      title: 'Functional Domain',
      subtitle: 'Biomechanical Performance & Patient-Specific Goals',
      icon: <Ruler className="w-5 h-5 text-indigo-600" />,
      color: 'border-indigo-500 bg-indigo-50/60',
      description: 'Objective quantification of daily jaw performance, chewing capacity, and disability impact.',
      measurements: [
        'Maximum Interincisal Opening (MIO): Calibrated mm measurement of active opening without pain vs assisted opening',
        'Visual Analog Pain Scale (VAS 0-10): Joint pain at rest, during chewing, and during maximum excursion',
        'Chewing Tolerance Index: Ability to chew soft, moderate, and firm foods without severe discomfort or joint collapse',
        'Cranio-Cervical Posture & Jaw Disability: Head-forward posture, cervical range of motion, and sleep bruxism frequency'
      ],
      clinicalValue: 'Establishes clear numerical baselines against which recovery is objectively measured at 2w, 6w, 12w, and 6-12 months.'
    },
  ];

  const current = domains.find(d => d.id === activeDomain) || domains[0];

  return (
    <section id="biological-capital" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Beyond the Joint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Understanding Your Capacity for Recovery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Your temporomandibular joint is part of a larger biological system. Two patients may show identical MRI findings yet experience vastly different pain levels, functional limitations, and biological responses to treatment.
          </p>
        </div>

        {/* 3 Domains Interactive Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {domains.map((domain) => {
            const isSelected = activeDomain === domain.id;
            return (
              <div
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-white border-teal-600 shadow-md ring-2 ring-teal-500/30'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-100">
                    {domain.icon}
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Domain {domain.id === 'structural' ? 'I' : domain.id === 'biological' ? 'II' : 'III'}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-serif">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {domain.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Domain Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 block">
                RENAXIS Baseline Domain Evaluation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                {current.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                {current.subtitle}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm">
              <strong className="text-slate-900">Clinical Objective:</strong> {current.clinicalValue}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Domain Definition:
              </h4>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Example Clinical Measurements */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Standardized Clinical Baseline Measurements:</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {current.measurements.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 space-y-1"
                  >
                    <span className="text-[10px] uppercase font-bold text-teal-700 tracking-wider block">
                      Measurement {idx + 1}
                    </span>
                    <p className="leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Transparency Note from Document */}
            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-teal-900">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Scientific Rigor &amp; Longitudinal Tracking</span>
              </div>
              <p className="leading-relaxed text-slate-700 pl-6">
                This three-domain architecture creates an empirical foundation for longitudinal outcome tracking. It allows RENAXIS clinicians to evaluate how biological and metabolic factors influence recovery over time, without relying on speculative or unproven scoring algorithms.
              </p>
            </div>

            {/* Next Steps CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 italic">
                Our physicians evaluate all three domains during your comprehensive consultation.
              </span>
              <button
                onClick={onRequestEvaluation}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Request Comprehensive Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

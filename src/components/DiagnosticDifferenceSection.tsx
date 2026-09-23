import React, { useState } from 'react';
import { DIAGNOSTIC_PATHWAYS, DiagnosticPathway } from '../data/clinicalData';
import { 
  GitBranch, Check, AlertTriangle, ArrowRight, Stethoscope, 
  Layers, Disc, Activity, HelpCircle, ShieldCheck
} from 'lucide-react';

interface DiagnosticDifferenceSectionProps {
  onRequestEvaluation: () => void;
}

export const DiagnosticDifferenceSection: React.FC<DiagnosticDifferenceSectionProps> = ({
  onRequestEvaluation,
}) => {
  const [activePathway, setActivePathway] = useState<DiagnosticPathway>(DIAGNOSTIC_PATHWAYS[0]);

  const pathwayIcons = {
    A: <Activity className="w-5 h-5 text-teal-600" />,
    B: <Layers className="w-5 h-5 text-sky-600" />,
    C: <Disc className="w-5 h-5 text-indigo-600" />,
    D: <AlertTriangle className="w-5 h-5 text-rose-600" />,
    E: <HelpCircle className="w-5 h-5 text-amber-600" />
  };

  return (
    <section id="diagnosis-difference" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <span className="text-teal-700 font-bold">03</span>
            <span>The Diagnostic Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            TMJ Disorders Are Not a Single Disease
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            They may involve the muscles, articular disc, joint surfaces, surrounding retrodiscal tissues, or a combination of these structures. Our clinical task is to determine which findings cause your symptoms and which are incidental.
          </p>
        </div>

        {/* 2-Step Decision Architecture Visual */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Step 1 */}
            <div className="md:col-span-5 bg-slate-900 text-white p-6 rounded-xl space-y-3 relative overflow-hidden">
              <span className="text-[11px] uppercase font-bold tracking-wider text-teal-400">
                Step 1 &bull; Comprehensive Intake
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Comprehensive Diagnostic Evaluation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Detailed clinical history, physical palpation, millimeter range-of-motion mapping, review of previous failed interventions, and high-resolution imaging (CBCT / Dynamic MRI) when indicated.
              </p>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-teal-300 font-medium">
                <Check className="w-3.5 h-3.5 text-teal-400" />
                <span>AAOMS Clinical Guideline Compliant</span>
              </div>
            </div>

            {/* Transition Arrow */}
            <div className="md:col-span-2 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shadow-xs">
                <GitBranch className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                Stratification
              </span>
            </div>

            {/* Step 2 */}
            <div className="md:col-span-5 bg-teal-950 text-white p-6 rounded-xl space-y-3">
              <span className="text-[11px] uppercase font-bold tracking-wider text-teal-300">
                Step 2 &bull; Precision Triage
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Identify the Dominant Pathology
              </h3>
              <p className="text-xs text-teal-100/90 leading-relaxed">
                We categorize presentation into 5 distinct diagnostic pathways (A through E). The treatment plan is calibrated directly to the primary structural or biological driver.
              </p>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-teal-200 font-medium">
                <Check className="w-3.5 h-3.5 text-teal-300" />
                <span>Avoids Premature Injections</span>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Pathways Interactive Tabs */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {DIAGNOSTIC_PATHWAYS.map((pathway) => {
              const isSelected = activePathway.id === pathway.id;
              return (
                <button
                  key={pathway.id}
                  onClick={() => setActivePathway(pathway)}
                  className={`px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md ring-2 ring-teal-500'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    isSelected ? 'bg-teal-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {pathway.pathwayLetter}
                  </span>
                  <span>Pathway {pathway.pathwayLetter}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pathway Detailed View */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 font-bold text-sm flex items-center justify-center">
                    {activePathway.pathwayLetter}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-bold text-teal-700">
                    Diagnostic Pathway {activePathway.pathwayLetter}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  {activePathway.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium mt-0.5">
                  {activePathway.subtitle}
                </p>
              </div>

              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                Clinical Stratification Model
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Description & Clinical Approach */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Diagnostic Characterization:
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {activePathway.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-teal-600" />
                    <span>RENAXIS Clinical Approach:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activePathway.clinicalApproach}
                  </p>
                </div>

                {/* Clinical Safeguard Alert */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-900 mb-1">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Clinical Safeguard &amp; Guidance</span>
                  </div>
                  <p className="text-xs text-slate-800 leading-relaxed pl-6">
                    {activePathway.caution}
                  </p>
                </div>
              </div>

              {/* Recommended Treatments List */}
              <div className="lg:col-span-5 bg-teal-50/70 rounded-xl border border-teal-200 p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-teal-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Targeted Treatment Strategies:</span>
                </h4>
                <div className="space-y-2.5">
                  {activePathway.recommendedTreatments.map((treatment, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-white border border-teal-100 text-xs text-slate-800 font-medium flex items-start gap-2 shadow-2xs"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{treatment}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-teal-200/60">
                  <button
                    onClick={onRequestEvaluation}
                    className="w-full py-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Evaluation for Pathway {activePathway.pathwayLetter}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Co-existence Clinical Principle */}
        <div className="mt-8 p-5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-3 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-900 font-semibold">Important Clinical Reality:</strong> These pathways are not mutually exclusive. A patient may present with anterior disc displacement, compensatory muscular guarding, and subtle degenerative joint changes at the same time. The primary role of our diagnostic workup is establishing the hierarchy of symptom drivers.
          </p>
        </div>

      </div>
    </section>
  );
};

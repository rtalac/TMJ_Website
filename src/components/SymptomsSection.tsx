import React, { useState } from 'react';
import { 
  SYMPTOMS_DATA, SymptomItem 
} from '../data/clinicalData';
import { 
  ChevronDown, ChevronUp, AlertCircle, CheckCircle2, 
  HelpCircle, ArrowRight, ShieldCheck, Stethoscope
} from 'lucide-react';

interface SymptomsSectionProps {
  onRequestEvaluation: () => void;
  onSelectSymptomForIntake?: (symptomTitle: string) => void;
}

export const SymptomsSection: React.FC<SymptomsSectionProps> = ({
  onRequestEvaluation,
  onSelectSymptomForIntake,
}) => {
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomItem>(SYMPTOMS_DATA[0]);
  const [expandedId, setExpandedId] = useState<string | null>(SYMPTOMS_DATA[0].id);

  return (
    <section id="symptoms-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <span className="text-teal-700 font-bold">02</span>
            <span>Symptoms Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Could Your Symptoms Be Related to TMJ Dysfunction?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Jaw disorders can affect everyday activities such as eating, speaking, yawning, and sleeping. Symptoms vary widely depending on whether the primary cause is muscular, articular, or mechanical.
          </p>
        </div>

        {/* Symptoms Interactive Grid / Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Symptoms List Column */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 px-1">
              Select a clinical symptom to explore:
            </p>
            {SYMPTOMS_DATA.map((symptom) => {
              const isSelected = selectedSymptom.id === symptom.id;
              return (
                <div
                  key={symptom.id}
                  onClick={() => {
                    setSelectedSymptom(symptom);
                    setExpandedId(symptom.id);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-teal-50/80 border-teal-500 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-teal-600 ring-4 ring-teal-100' : 'bg-slate-300'}`} />
                      <h4 className={`text-base font-semibold ${isSelected ? 'text-teal-950 font-serif' : 'text-slate-800'}`}>
                        {symptom.title}
                      </h4>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {symptom.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 pl-5.5">
                    {symptom.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Selected Symptom Detailed Medical Card */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs sticky top-28">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-700 block">
                  Clinical Overview &bull; {selectedSymptom.tag} Presentation
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mt-1">
                  {selectedSymptom.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-900 font-medium text-xs border border-teal-200">
                RENAXIS Diagnostic Protocol
              </span>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {selectedSymptom.fullDesc}
              </p>

              {/* Common Causes */}
              <div className="pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Frequent Underlying Contributing Factors:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSymptom.commonCauses.map((cause, idx) => (
                    <li key={idx} className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Significance & Differential */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Clinical Significance &amp; Differential</span>
                </div>
                <p className="text-slate-800 pl-5 leading-relaxed">
                  {selectedSymptom.clinicalSignificance}
                </p>
              </div>

              {/* Recommended Diagnostic Step */}
              <div className="p-4 rounded-xl bg-teal-900 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-teal-300 font-bold text-xs uppercase tracking-wider">
                  <Stethoscope className="w-4 h-4 text-teal-400" />
                  <span>Recommended Diagnostic Examination</span>
                </div>
                <p className="text-xs text-slate-200 pl-5 leading-relaxed">
                  {selectedSymptom.recommendedDiagnosticStep}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-500 italic">
                  Experiencing this symptom? Include it in your clinical evaluation request.
                </p>
                <button
                  onClick={onRequestEvaluation}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Request Evaluation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Regulatory & Reassurance Safeguard Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-linear-to-r from-slate-900 to-slate-800 text-white shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-serif text-white">
                  Not Every Symptom Requires an Invasive Procedure
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  These symptoms can have several causes. A patient with painless joint clicking, for example, may not need any medical or injection treatment at all. Accurate diagnosis prevents unnecessary interventions.
                </p>
              </div>
            </div>
            <button
              onClick={onRequestEvaluation}
              className="shrink-0 px-5 py-3 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Get Clear Answers
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

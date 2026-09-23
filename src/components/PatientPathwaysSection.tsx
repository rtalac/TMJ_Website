import React, { useState } from 'react';
import { PATIENT_PATHWAYS, PatientPathway } from '../data/clinicalData';
import { 
  MapPin, Plane, Globe, Calendar, CheckCircle2, 
  ArrowRight, ShieldCheck, Building, Clock, Phone
} from 'lucide-react';

interface PatientPathwaysSectionProps {
  onRequestEvaluation: (origin?: string) => void;
}

export const PatientPathwaysSection: React.FC<PatientPathwaysSectionProps> = ({
  onRequestEvaluation,
}) => {
  const [activePathwayId, setActivePathwayId] = useState<'local' | 'national' | 'international'>('local');

  const icons = {
    local: <MapPin className="w-5 h-5 text-teal-600" />,
    national: <Plane className="w-5 h-5 text-sky-600" />,
    international: <Globe className="w-5 h-5 text-indigo-600" />
  };

  const activePathway = PATIENT_PATHWAYS.find(p => p.id === activePathwayId) || PATIENT_PATHWAYS[0];

  return (
    <section id="patient-pathways-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <span className="text-teal-700 font-bold">08</span>
            <span>Traveling to RENAXIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Three Tailored Patient Pathways
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you reside here in The Woodlands, are flying in from another US state, or traveling internationally, our clinical coordination team guides your entire diagnostic and treatment schedule.
          </p>
        </div>

        {/* 3 Pathway Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PATIENT_PATHWAYS.map((pathway) => {
            const isSelected = activePathwayId === pathway.id;
            return (
              <div
                key={pathway.id}
                onClick={() => setActivePathwayId(pathway.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-white border-teal-600 shadow-md ring-2 ring-teal-500/20'
                    : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100">
                    {icons[pathway.id]}
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Pathway {pathway.id === 'local' ? 'A' : pathway.id === 'national' ? 'B' : 'C'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  {pathway.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {pathway.locationScope}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Pathway Detailed Workflow Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-widest font-bold text-teal-700">
                  Onboarding Pathway {activePathwayId === 'local' ? 'A' : activePathwayId === 'national' ? 'B' : 'C'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                {activePathway.title} &mdash; {activePathway.locationScope}
              </h3>
            </div>
            
            <button
              onClick={() => onRequestEvaluation(activePathway.id)}
              className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>{activePathway.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sequential Steps */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Sequential Care Steps for {activePathway.title}:
              </h4>
              <div className="space-y-3">
                {activePathway.steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel & Coordination Logistics Column */}
            <div className="lg:col-span-5 bg-teal-50/70 rounded-2xl border border-teal-200 p-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-teal-950 flex items-center gap-2 mb-2">
                  <Building className="w-4 h-4 text-teal-700" />
                  <span>Coordination &amp; Logistics:</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {activePathway.travelCoordination}
                </p>
              </div>

              {/* Texas Medical Campus Info */}
              <div className="p-4 rounded-xl bg-white border border-teal-100 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Clinic Location &amp; Proximity</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Located in <strong className="text-slate-900">The Woodlands, Texas</strong> (North Houston metro area). Just 25 minutes from George Bush Intercontinental Airport (IAH) via Hardy Toll Road or I-45.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span>IAH Airport: 25 mins</span>
                  <span>Woodlands Waterway: 5 mins</span>
                </div>
              </div>

              {/* Legal & Records Clarification */}
              <div className="p-3 rounded-lg bg-teal-100/60 border border-teal-200 text-[11px] text-teal-950 leading-relaxed">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-800 inline mr-1" />
                Remote records review provides clinical triage and travel feasibility only, not a final treatment guarantee.
              </div>

              <button
                onClick={() => onRequestEvaluation(activePathway.id)}
                className="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{activePathway.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

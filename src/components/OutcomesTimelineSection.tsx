import React from 'react';
import { OUTCOME_SCHEDULE } from '../data/clinicalData';
import { 
  HelpCircle, LineChart, ShieldCheck, CheckCircle2, 
  Calendar, Clock, Award, ArrowRight, HeartPulse
} from 'lucide-react';

interface OutcomesTimelineSectionProps {
  onRequestEvaluation: () => void;
}

export const OutcomesTimelineSection: React.FC<OutcomesTimelineSectionProps> = ({
  onRequestEvaluation,
}) => {
  const outcomeQuestions = [
    {
      q: 'Has the patient’s pain improved?',
      sub: 'Quantified via Visual Analog Scale (VAS 0-10) at rest and during chewing cycles.'
    },
    {
      q: 'Has the patient’s jaw function improved?',
      sub: 'Measured objectively via calibrated millimeter interincisal opening and chewing tolerance.'
    },
    {
      q: 'Has the improvement been maintained over time?',
      sub: 'Verified across 6-week, 12-week, and 6-12 month longitudinal registry intervals.'
    },
  ];

  return (
    <section id="outcomes-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <span className="text-teal-700 font-bold">09</span>
            <span>Clinical Outcomes &amp; Follow-Up</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            How We Evaluate Real Recovery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We distinguish actual patient progress from commercial marketing by grounding our outcomes system in three fundamental clinical questions.
          </p>
        </div>

        {/* The 3 Core Outcome Questions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {outcomeQuestions.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-teal-950 text-white flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-teal-800 text-teal-200 font-serif font-bold text-sm flex items-center justify-center mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold font-serif text-teal-100 leading-snug">
                  {item.q}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-3 border-t border-teal-800/80">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Longitudinal Measurement Timeline */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 block">
                Standardized Longitudinal Protocol
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                Outcome Measurement Schedule
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Calendar className="w-4 h-4 text-teal-600" />
              <span>Standard follow-up intervals for all clinical cohorts</span>
            </div>
          </div>

          <div className="space-y-4">
            {OUTCOME_SCHEDULE.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-teal-400 transition-colors"
              >
                <div className="flex items-center gap-4 sm:w-1/4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 font-bold text-xs flex items-center justify-center shrink-0 border border-teal-200">
                    #{idx + 1}
                  </div>
                  <div>
                    <span className="text-base font-bold font-serif text-slate-900 block">
                      {item.time}
                    </span>
                    <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider">
                      {item.focus}
                    </span>
                  </div>
                </div>

                <div className="sm:w-3/4 text-xs text-slate-600 leading-relaxed border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-6">
                  {item.details}
                </div>
              </div>
            ))}
          </div>

          {/* Research & Registry Rigor Note */}
          <div className="mt-8 p-5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Transparent Reporting Standard</span>
            </div>
            <p className="leading-relaxed">
              At RENAXIS, we distinguish individual patient case reports from peer-reviewed evidence. Aggregate clinical statistics displayed on our portal report cohort criteria, follow-up completeness rates, and validated outcome instruments to provide reliable, non-sensationalized medical information.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

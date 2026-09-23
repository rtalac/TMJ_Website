import React from 'react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, RefreshCw, 
  Layers, Stethoscope, HeartPulse, Sparkles
} from 'lucide-react';

interface ClinicalPhilosophySectionProps {
  onRequestEvaluation: () => void;
  onExploreTreatments: () => void;
}

export const ClinicalPhilosophySection: React.FC<ClinicalPhilosophySectionProps> = ({
  onRequestEvaluation,
  onExploreTreatments,
}) => {
  const stages = [
    {
      num: '1',
      title: 'Diagnosis & Treatment Planning',
      desc: 'Establish diagnosis, severity, functional baseline, biological modifiers, and treatment goals. Required for every patient.',
      badge: 'Mandatory Foundation',
      badgeColor: 'bg-teal-100 text-teal-800'
    },
    {
      num: '2',
      title: 'Conservative Management',
      desc: 'Patient education, activity & diet modification, specialized physical therapy, controlled jaw coordination, and reversible dental appliances.',
      badge: 'Sufficient for Many',
      badgeColor: 'bg-slate-100 text-slate-800'
    },
    {
      num: '3',
      title: 'Targeted Joint Interventions',
      desc: 'Consider image-guided arthrocentesis, joint lavage, or precise aspiration for selected patients with persistent mechanical obstruction or inflammatory effusion.',
      badge: 'Selective Indications',
      badgeColor: 'bg-sky-100 text-sky-800'
    },
    {
      num: '4',
      title: 'Regenerative Interventions',
      desc: 'Autologous PRF (Platelet-Rich Fibrin) within an individualized plan, subject to clinical assessment and informed consent. Exosome modalities kept strictly in investigational review.',
      badge: 'Biologic Support',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      num: '5',
      title: 'Rehabilitation & Longitudinal Follow-Up',
      desc: 'Monitor pain reduction, jaw opening, chewing tolerance, and long-term durability. Reassess when the clinical response differs from expectations.',
      badge: 'Sustained Outcomes',
      badgeColor: 'bg-indigo-100 text-indigo-800'
    },
  ];

  return (
    <section id="philosophy-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <span className="text-teal-700 font-bold">04</span>
            <span>Clinical Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            A Comprehensive Approach. Not a Single Procedure.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At RENAXIS, regenerative treatment is part of a broader clinical strategy. We evaluate the joint&rsquo;s structural condition, biological environment, and functional limitations before recommending any treatment plan.
          </p>
        </div>

        {/* The 4 Clinical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="w-8 h-8 rounded-lg bg-teal-700 text-white font-serif font-bold text-sm flex items-center justify-center">
              1
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Identify Underlying Pathology
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Discriminate muscular spasm from synovial inflammation, mechanical displacement, or osseous degradation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="w-8 h-8 rounded-lg bg-teal-700 text-white font-serif font-bold text-sm flex items-center justify-center">
              2
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Select Least Invasive Treatment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Favor conservative and biological support first; reserve surgical referrals for clear structural indications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="w-8 h-8 rounded-lg bg-teal-700 text-white font-serif font-bold text-sm flex items-center justify-center">
              3
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Support Functional Rehabilitation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Injections without neuromuscular re-education fail to correct harmful grinding patterns or load imbalances.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="w-8 h-8 rounded-lg bg-teal-700 text-white font-serif font-bold text-sm flex items-center justify-center">
              4
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Longitudinal Outcome Tracking
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Systematic follow-up at 2w, 6w, 12w, and 6-12m to verify durable relief and chewing restoration.
            </p>
          </div>
        </div>

        {/* Stepwise Treatment Stages Visual */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block">
                Treatment Progression Framework
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                The 5 Stepwise Treatment Stages
              </h3>
            </div>
            <p className="text-xs text-slate-300 max-w-md">
              <strong className="text-teal-300">Important Qualification:</strong> Not every patient must pass through every stage. Surgical referral is not just a last resort—patients with severe structural collapse receive OMFS consultation at stage 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {stages.map((stage) => (
              <div 
                key={stage.num}
                className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold flex items-center justify-center">
                      {stage.num}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${stage.badgeColor}`}>
                      {stage.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-serif mb-2">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Conforms to AAOMS stepwise consensus for temporomandibular joint interventions</span>
            </div>
            <button
              onClick={onExploreTreatments}
              className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore All Treatment Options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

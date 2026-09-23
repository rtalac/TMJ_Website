import React, { useState } from 'react';
import { TREATMENTS_DATA, TreatmentItem } from '../data/clinicalData';
import { 
  ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, 
  Info, Sparkles, X, Activity, Droplets, Stethoscope, ChevronRight
} from 'lucide-react';

interface TreatmentCatalogSectionProps {
  onRequestEvaluation: () => void;
}

export const TreatmentCatalogSection: React.FC<TreatmentCatalogSectionProps> = ({
  onRequestEvaluation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalTreatment, setActiveModalTreatment] = useState<TreatmentItem | null>(null);

  const categories = [
    { id: 'ALL', label: 'All Procedures' },
    { id: 'REGENERATIVE', label: 'Regenerative (PRF)' },
    { id: 'MINIMALLY INVASIVE', label: 'Targeted Interventions' },
    { id: 'CONSERVATIVE', label: 'Conservative & Rehab' },
    { id: 'INVESTIGATIONAL / RESEARCH', label: 'Research & Review' },
    { id: 'SURGICAL REFERRAL', label: 'Surgical Referral' },
  ];

  const filteredTreatments = selectedCategory === 'ALL'
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter(t => t.category === selectedCategory);

  return (
    <section id="treatments-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <span className="text-teal-700 font-bold">05</span>
            <span>Treatment Options</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Individualized Treatment for Your TMJ Condition
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The recommended treatment depends strictly on your diagnosis, clinical findings, previous interventions, and functional goals—not on a pre-selected commercial package.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-teal-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTreatments.map((treatment) => {
            const isExosome = treatment.id === 'exosomes';
            return (
              <div
                key={treatment.id}
                className={`rounded-2xl border flex flex-col justify-between p-6 transition-all hover:shadow-md ${
                  isExosome 
                    ? 'bg-amber-50/40 border-amber-300' 
                    : 'bg-slate-50/60 border-slate-200 hover:border-teal-400'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${treatment.badgeColor}`}>
                      {treatment.category}
                    </span>
                    {isExosome ? (
                      <span className="text-[10px] uppercase font-bold text-amber-800 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>Research Review</span>
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-bold text-teal-700 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Clinical Program</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif leading-snug">
                      {treatment.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {treatment.overview}
                    </p>
                  </div>

                  {/* Indications Snippet */}
                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Key Indications:
                    </span>
                    <ul className="space-y-1">
                      {treatment.indications.slice(0, 2).map((ind, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Regulatory Badge for Exosomes */}
                  {isExosome && (
                    <div className="p-3 rounded-lg bg-amber-100/70 border border-amber-300 text-[11px] text-amber-950">
                      <strong className="block font-bold">FDA Regulatory Safeguard:</strong>
                      RENAXIS does not offer unapproved exosome injections. Educational research review only.
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalTreatment(treatment)}
                    className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Protocol &amp; Evidence</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {treatment.isBookable ? (
                    <button
                      onClick={onRequestEvaluation}
                      className="px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Inquire
                    </button>
                  ) : (
                    <span className="text-[10px] text-slate-500 italic">
                      Non-bookable
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory & Safety Strip Required by Document */}
        <div className="p-6 rounded-2xl bg-slate-900 text-slate-200 space-y-3">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Clinical Integrity &amp; Regulatory Safeguards</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700">
              <strong className="text-white block mb-1">Autologous PRF:</strong>
              Uses the patient&rsquo;s own concentrated blood platelets and natural fibrin matrix, free of foreign biological substances or chemical cross-linkers.
            </div>
            <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700">
              <strong className="text-white block mb-1">Exosome Status:</strong>
              Conforms strictly to FDA consumer alerts; no commercially packaged exosome products are marketed or administered as established TMJ therapies.
            </div>
            <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700">
              <strong className="text-white block mb-1">Bite Alterations Caution:</strong>
              Complies with NIDCR guidance warning against irreversible bite adjustments, extensive crowns, or aggressive dental shaving solely for TMD.
            </div>
          </div>
        </div>

      </div>

      {/* Detailed Treatment Protocol Modal */}
      {activeModalTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalTreatment(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${activeModalTreatment.badgeColor}`}>
                {activeModalTreatment.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                {activeModalTreatment.title}
              </h3>
              <p className="text-xs text-teal-800 font-semibold uppercase tracking-wider mt-1">
                RENAXIS Clinical Protocol Reference
              </p>
            </div>

            {/* Overview & Rationale */}
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p className="font-medium text-slate-900">
                {activeModalTreatment.overview}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                  Biological &amp; Biomechanical Rationale:
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeModalTreatment.rationale}
                </p>
              </div>
            </div>

            {/* Indications */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Clinical Indications:
              </h4>
              <ul className="space-y-1.5">
                {activeModalTreatment.indications.map((ind, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedural Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Procedural Overview:
              </h4>
              <div className="space-y-2">
                {activeModalTreatment.proceduralDetails.map((step, idx) => (
                  <div key={idx} className="text-xs text-slate-700 p-3 rounded-lg bg-teal-50/50 border border-teal-100 flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-teal-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Recovery */}
            <div className="p-4 rounded-xl bg-slate-100 text-xs text-slate-800 space-y-1">
              <h4 className="font-bold uppercase tracking-wider text-slate-900">
                Expected Recovery &amp; Activity Modification:
              </h4>
              <p className="leading-relaxed text-slate-700">
                {activeModalTreatment.expectedRecovery}
              </p>
            </div>

            {/* Evidence & Limitations */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
              <h4 className="font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Clinical Evidence, Risks &amp; Real Limitations:</span>
              </h4>
              <p className="leading-relaxed text-slate-800 pl-5">
                {activeModalTreatment.evidenceAndLimits}
              </p>
            </div>

            {/* Regulatory Note */}
            {activeModalTreatment.regulatoryNote && (
              <div className="p-3 rounded-lg bg-slate-900 text-slate-300 text-[11px]">
                <strong className="text-teal-400 block uppercase tracking-wider mb-0.5">
                  Regulatory Notice:
                </strong>
                {activeModalTreatment.regulatoryNote}
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalTreatment(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Close Window
              </button>

              {activeModalTreatment.isBookable ? (
                <button
                  onClick={() => {
                    setActiveModalTreatment(null);
                    onRequestEvaluation();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Evaluation for this Modality</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="text-xs text-slate-500 italic">
                  Informational only &bull; Formal clinical review required
                </span>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

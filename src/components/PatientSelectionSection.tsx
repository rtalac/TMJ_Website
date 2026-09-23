import React from 'react';
import { 
  CheckCircle2, XCircle, AlertCircle, ArrowRight, 
  ShieldCheck, FileText, Stethoscope, Scale
} from 'lucide-react';

interface PatientSelectionSectionProps {
  onRequestEvaluation: () => void;
}

export const PatientSelectionSection: React.FC<PatientSelectionSectionProps> = ({
  onRequestEvaluation,
}) => {
  const goodCandidates = [
    'Patients with mild-to-moderate TMJ osteoarthritis seeking joint preservation before considering surgery',
    'Persistent capsular synovitis or joint effusion documented on dynamic MRI',
    'Disc displacement with reduction (painful or functional reciprocal clicking)',
    'Acute or subacute closed lock responsive to hydraulic mobilization and joint lavage',
    'Patients who experienced inadequate relief from night guards or dental appliances alone',
    'Individuals committed to active functional rehabilitation, home exercises, and chewing modification'
  ];

  const surgicalOrAlternative = [
    'Complete bony or fibrous ankylosis (true mechanical fusion of condyle to skull base)',
    'Severe end-stage condylar resorption with sudden open bite or significant facial asymmetry',
    'Suspected neoplastic disease, active bone osteonecrosis, or unchecked systemic sepsis',
    'Painless joint clicking that does not impair jaw function or cause discomfort (intervention usually unnecessary)',
    'Symptoms primarily arising from untreated dental infections or primary neuropathic disorders (trigeminal neuralgia)'
  ];

  return (
    <section id="candidacy-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <span className="text-teal-700 font-bold">06</span>
            <span>Patient Selection &amp; Candidacy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Is Nonsurgical Treatment Right for You?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Not every TMJ condition can be treated effectively through regenerative or nonsurgical interventions. Our goal is to identify the appropriate treatment pathway before recommending a procedure.
          </p>
        </div>

        {/* Candidacy Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Favorable Candidates Card */}
          <div className="bg-white rounded-2xl border-2 border-teal-600/30 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-teal-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              High Nonsurgical Candidacy
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Favorable Candidates
                </h3>
                <p className="text-xs text-slate-500">
                  Ideal profiles for RENAXIS diagnostic &amp; nonsurgical protocols
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Patients presenting with internal joint derangements where structural preservation and biological stimulation can influence outcome:
            </p>

            <ul className="space-y-3">
              {goodCandidates.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2.5 p-2.5 rounded-lg bg-teal-50/40 border border-teal-100">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Surgical or Alternative Referral Card */}
          <div className="bg-white rounded-2xl border-2 border-rose-300/60 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Specialist Referral Indicated
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center">
                <Scale className="w-6 h-6 text-rose-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Surgical or Specialist Referral
                </h3>
                <p className="text-xs text-slate-500">
                  Conditions requiring hospital-based OMFS or non-TMD workup
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Conditions where nonsurgical therapies are unlikely to achieve anatomical relief and may inappropriately delay necessary surgical care:
            </p>

            <ul className="space-y-3">
              {surgicalOrAlternative.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/40 border border-rose-100">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Remote Consultation Legal & Clinical Reality Box */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <span>Important Jurisdictional &amp; Clinical Safeguard:</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Remote records review cannot be represented as final confirmation of treatment eligibility. In-person clinical examination, millimeter jaw movement palpation, and confirmatory imaging may modify the preliminary assessment. All remote consultations comply strictly with Texas Medical Board licensing and applicable interstate/international jurisdictional regulations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-teal-800">
              Begin with an exploratory intake review tailored to your history.
            </span>
            <button
              onClick={onRequestEvaluation}
              className="px-6 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Verify Your Candidacy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  X, Check, ArrowRight, ArrowLeft, ShieldCheck, 
  MapPin, Clock, AlertCircle, FileCheck, CheckCircle2, 
  HelpCircle, Stethoscope, Sparkles
} from 'lucide-react';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOrigin?: string;
}

export const IntakeModal: React.FC<IntakeModalProps> = ({
  isOpen,
  onClose,
  preselectedOrigin,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Intake State
  const [origin, setOrigin] = useState<string>(
    preselectedOrigin === 'international' ? 'Outside the United States'
    : preselectedOrigin === 'national' ? 'Elsewhere in the United States'
    : 'Houston / The Woodlands area'
  );
  const [duration, setDuration] = useState<string>('3–12 months');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['Jaw pain']);
  const [priorTreatments, setPriorTreatments] = useState<string>('Medication, physical therapy, or dental appliance');
  
  // Contact details
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [hasImaging, setHasImaging] = useState<string>('Yes (MRI or CBCT available)');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      if (selectedSymptoms.length > 1) {
        setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
      }
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Preliminary automated clinical triage calculation based on answers
  const getPreliminaryTriage = () => {
    const hasLocking = selectedSymptoms.includes('Jaw locking') || selectedSymptoms.includes('Limited mouth opening');
    const hasPriorSurgery = priorTreatments === 'Previous TMJ surgery';
    const isLongDuration = duration === 'More than 1 year';

    if (hasPriorSurgery) {
      return {
        recommendedPathway: 'Collaborative Surgical / Revisional Evaluation',
        rationale: 'Prior surgical history requires detailed review of previous operative notes and current MRI to evaluate joint stability.',
        urgency: 'Standard Comprehensive Review'
      };
    }

    if (hasLocking) {
      return {
        recommendedPathway: 'Pathway C: Mechanical Derangement / Joint Decompression',
        rationale: 'Locking or severely restricted mouth opening indicates potential disc displacement with or without reduction, warranting prompt dynamic imaging and possible joint lavage.',
        urgency: 'Priority Evaluation Recommended'
      };
    }

    return {
      recommendedPathway: 'Pathway A / B: Comprehensive Conservative & Regenerative Assessment',
      rationale: 'Detailed baseline measurement across Structural, Biological, and Functional domains before any invasive intervention is considered.',
      urgency: 'Routine Clinical Evaluation'
    };
  };

  const triage = getPreliminaryTriage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-10">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-teal-700 block">
              RENAXIS TMJ Patient Conversion System
            </span>
            <h3 className="text-xl font-bold font-serif text-slate-900">
              Request a Comprehensive TMJ Evaluation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prototype Guidance Sub-banner */}
        <div className="bg-teal-50/80 px-6 py-2 border-b border-teal-100 text-xs text-teal-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
          <span>
            <strong>Clinical Screening Notice:</strong> Progressive intake to establish clinical triage without pre-selecting unvalidated procedures.
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex-1">
          
          {!isSubmitted ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3, 4, 5].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      currentStep === stepNum
                        ? 'bg-teal-700 text-white ring-4 ring-teal-100'
                        : currentStep > stepNum
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {currentStep > stepNum ? <Check className="w-4 h-4" /> : stepNum}
                    </div>
                    {stepNum < 5 && (
                      <div className={`w-6 sm:w-12 h-1 mx-1 rounded-full ${
                        currentStep > stepNum ? 'bg-emerald-600' : 'bg-slate-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Where will you be traveling from? */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-teal-700">Question 01 of 05</span>
                    <h4 className="text-xl font-bold font-serif text-slate-900">
                      Where will you be traveling from?
                    </h4>
                    <p className="text-xs text-slate-500">
                      We calibrate in-person and remote coordination based on your geographic location.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { val: 'Houston / The Woodlands area', label: 'Houston / The Woodlands area', desc: 'Local in-person consultation at our North Houston medical center.' },
                      { val: 'Elsewhere in the United States', label: 'Elsewhere in the United States', desc: 'National traveling patient — preliminary remote records review coordinated.' },
                      { val: 'Outside the United States', label: 'Outside the United States', desc: 'International patient coordination, travel planning, and medical records triage.' },
                    ].map((opt) => (
                      <div
                        key={opt.val}
                        onClick={() => setOrigin(opt.val)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          origin === opt.val
                            ? 'bg-teal-50 border-teal-600 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900">{opt.label}</span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            origin === opt.val ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300'
                          }`}>
                            {origin === opt.val && <Check className="w-2.5 h-2.5" />}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: How long have you experienced symptoms? */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-teal-700">Question 02 of 05</span>
                    <h4 className="text-xl font-bold font-serif text-slate-900">
                      How long have you experienced symptoms?
                    </h4>
                    <p className="text-xs text-slate-500">
                      Chronicity helps distinguish acute capsular synovitis from long-standing joint remodeling.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Less than 3 months',
                      '3–12 months',
                      'More than 1 year',
                      'No symptoms; seeking evaluation'
                    ].map((dur) => (
                      <div
                        key={dur}
                        onClick={() => setDuration(dur)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          duration === dur
                            ? 'bg-teal-50 border-teal-600 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">{dur}</span>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          duration === dur ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300'
                        }`}>
                          {duration === dur && <Check className="w-2.5 h-2.5" />}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: What symptoms are you experiencing? */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-teal-700">Question 03 of 05</span>
                    <h4 className="text-xl font-bold font-serif text-slate-900">
                      What symptoms are you experiencing?
                    </h4>
                    <p className="text-xs text-slate-500">
                      Select all that apply to guide our diagnostic mapping.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { title: 'Jaw pain', desc: 'Aching or sharp pain in joint or cheek' },
                      { title: 'Clicking or popping', desc: 'Joint noise during opening or closing' },
                      { title: 'Jaw locking', desc: 'Episodes where jaw catches or gets stuck' },
                      { title: 'Limited mouth opening', desc: 'Restricted interincisal range (<35mm)' },
                      { title: 'Pain when chewing', desc: 'Discomfort eating harder foods' },
                      { title: 'Ear fullness or headaches', desc: 'Preauricular pressure or temple tension' },
                      { title: 'Other symptoms', desc: 'Facial asymmetry or neck tension' },
                    ].map((item) => {
                      const isChecked = selectedSymptoms.includes(item.title);
                      return (
                        <div
                          key={item.title}
                          onClick={() => toggleSymptom(item.title)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-2 ${
                            isChecked
                              ? 'bg-teal-50 border-teal-600 shadow-xs'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 block">{item.title}</span>
                            <span className="text-[11px] text-slate-500 leading-snug">{item.desc}</span>
                          </div>
                          <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                            isChecked ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300'
                          }`}>
                            {isChecked && <Check className="w-2.5 h-2.5" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Have you received treatment for this condition? */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-teal-700">Question 04 of 05</span>
                    <h4 className="text-xl font-bold font-serif text-slate-900">
                      Have you received prior treatment for this condition?
                    </h4>
                    <p className="text-xs text-slate-500">
                      We honor your previous care history to prevent repeating unsuccessful therapies.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { val: 'No previous treatment', desc: 'First time seeking professional evaluation for jaw symptoms.' },
                      { val: 'Medication, physical therapy, or dental appliance', desc: 'Conservative management with splints, night guards, or NSAIDs.' },
                      { val: 'Injections or arthrocentesis', desc: 'Prior steroid injections, botulinum toxin, or joint washouts.' },
                      { val: 'Previous TMJ surgery', desc: 'Open joint surgery, disc repair, or arthroscopic intervention.' },
                      { val: 'Other / Not sure', desc: 'Chiropractic, acupuncture, or alternative modalities.' },
                    ].map((opt) => (
                      <div
                        key={opt.val}
                        onClick={() => setPriorTreatments(opt.val)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          priorTreatments === opt.val
                            ? 'bg-teal-50 border-teal-600 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 block">{opt.val}</span>
                          <span className="text-[11px] text-slate-500">{opt.desc}</span>
                        </div>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          priorTreatments === opt.val ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300'
                        }`}>
                          {priorTreatments === opt.val && <Check className="w-2.5 h-2.5" />}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Contact Details & Medical Records */}
              {currentStep === 5 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-teal-700">Question 05 of 05</span>
                    <h4 className="text-xl font-bold font-serif text-slate-900">
                      Your Details &amp; Records Availability
                    </h4>
                    <p className="text-xs text-slate-500">
                      Our clinical coordinator will contact you to confirm details and coordinate intake.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="First and Last Name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(832) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Do you have existing TMJ imaging (MRI, CBCT, or Panorex)?
                      </label>
                      <select
                        value={hasImaging}
                        onChange={(e) => setHasImaging(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                      >
                        <option value="Yes (MRI or CBCT available)">Yes — I have recent MRI or CBCT disc/imaging scans</option>
                        <option value="Dental X-Rays only">Only general dental panoramic X-rays</option>
                        <option value="No prior imaging">No prior TMJ imaging completed yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Additional Clinical Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        placeholder="Describe specific functional goals, bite changes, or previous doctor evaluations..."
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  {/* Summary Preview Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                    <span className="font-bold text-slate-900 block">Intake Summary:</span>
                    <p>
                      <strong>Origin:</strong> {origin} &bull; <strong>Duration:</strong> {duration}
                    </p>
                    <p>
                      <strong>Symptoms ({selectedSymptoms.length}):</strong> {selectedSymptoms.join(', ')}
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    onClick={handleBack}
                    className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  onClick={handleNext}
                  disabled={currentStep === 5 && (!fullName || !email || !phone)}
                  className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                    currentStep === 5 && (!fullName || !email || !phone)
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-teal-700 hover:bg-teal-800 text-white shadow-md shadow-teal-700/20'
                  }`}
                >
                  <span>{currentStep === 5 ? 'Submit Evaluation Request' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* Post-Submission Confirmation & Triage Analysis */
            <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-700">
                  Intake Successfully Submitted
                </span>
                <h4 className="text-2xl font-serif font-bold text-slate-900">
                  Thank You, {fullName || 'Patient'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your clinical screening details have been routed to the RENAXIS TMJ Coordination Team in The Woodlands, Texas.
                </p>
              </div>

              {/* Preliminary Triage Review Card */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3 max-w-lg mx-auto">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>Preliminary Clinical Triage</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-900">
                    {triage.urgency}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-medium block">Recommended Focus:</span>
                  <p className="text-sm font-bold font-serif text-slate-900">
                    {triage.recommendedPathway}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {triage.rationale}
                </p>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-500">
                  <strong>Reminder:</strong> &ldquo;Your jaw deserves a diagnosis before a treatment decision.&rdquo; Final procedural selection occurs only following comprehensive in-person structural and functional examination.
                </div>
              </div>

              {/* Next Steps List */}
              <div className="text-left max-w-lg mx-auto space-y-2 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block">Next Steps from Our Care Team:</span>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>A clinical coordinator will contact you at <strong>{phone || 'your phone'}</strong> or <strong>{email || 'your email'}</strong> within 1 business day.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>If you indicated existing imaging ({hasImaging}), you will receive a secure portal link to transmit DICOM files.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Return to Program Website
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

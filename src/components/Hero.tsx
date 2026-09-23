import React from 'react';
import { 
  ArrowRight, ShieldCheck, Stethoscope, Activity, CheckCircle2, 
  MapPin, Sparkles, AlertCircle, Compass, FileCheck
} from 'lucide-react';

interface HeroProps {
  onRequestEvaluation: () => void;
  onExploreDiagnostics: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestEvaluation,
  onExploreDiagnostics,
  onExploreTreatments,
}) => {
  return (
    <div className="relative bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-sky-600 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Philosophy Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>RENAXIS Clinical Philosophy</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 font-serif leading-[1.12]">
                TMJ Pain? <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 via-sky-200 to-teal-100 italic">
                  Understand Your Options
                </span>{' '}
                Before Surgery.
              </h1>
              <p className="text-lg sm:text-xl text-teal-100/90 font-medium max-w-2xl leading-relaxed">
                Comprehensive diagnosis and individualized regenerative care for temporomandibular joint disorders.
              </p>
            </div>

            {/* Program Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              At <strong className="text-white font-semibold">RENAXIS</strong>, we combine detailed clinical evaluation, targeted nonsurgical procedures, and guided rehabilitation to help patients manage jaw pain and restore function whenever nonsurgical care is appropriate.
            </p>

            {/* Distinctive Program Positioning Callout */}
            <div className="p-4 rounded-xl bg-slate-800/80 border-l-4 border-teal-400 border border-slate-700/60 shadow-lg">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-serif text-lg font-semibold tracking-tight">
                    &ldquo;Your jaw deserves a diagnosis before a treatment decision.&rdquo;
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Unlike clinics advertising a pre-selected injection, RENAXIS identifies your dominant joint pathology before recommending any intervention.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestEvaluation}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-wide uppercase shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 transition-all cursor-pointer"
              >
                <span>Request a TMJ Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreDiagnostics}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-teal-400" />
                <span>Our Diagnostic Approach</span>
              </button>
            </div>

            {/* Geographic Inclusivity Note */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Welcoming Local (Houston / The Woodlands), National, and International Patients</span>
            </div>

          </div>

          {/* Right Visual & Clinical Architecture Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              
              {/* Clinical Card Header */}
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400 block">
                    RENAXIS Clinical Framework
                  </span>
                  <h3 className="text-white font-serif text-xl font-bold">
                    The 5 Diagnostic Pathways
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-teal-950 border border-teal-600/40 flex items-center justify-center text-teal-300">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              {/* Pathway Micro-Breakdown */}
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs flex items-center justify-center">
                      A
                    </span>
                    <span className="text-sm text-slate-200 font-medium">Predominantly Muscular (Myofascial)</span>
                  </div>
                  <span className="text-[11px] text-teal-400 font-semibold uppercase">Rehab First</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center">
                      B
                    </span>
                    <span className="text-sm text-slate-200 font-medium">Joint Inflammation &amp; Degeneration</span>
                  </div>
                  <span className="text-[11px] text-sky-400 font-semibold uppercase">PRF / Injections</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center">
                      C
                    </span>
                    <span className="text-sm text-slate-200 font-medium">Articular Disc Displacement</span>
                  </div>
                  <span className="text-[11px] text-indigo-400 font-semibold uppercase">Lavage / Splints</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 font-bold text-xs flex items-center justify-center">
                      D
                    </span>
                    <span className="text-sm text-slate-200 font-medium">Advanced Structural Deterioration</span>
                  </div>
                  <span className="text-[11px] text-rose-400 font-semibold uppercase">OMFS Surgery</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center">
                      E
                    </span>
                    <span className="text-sm text-slate-200 font-medium">Non-TMD Cranial / Neural Etiology</span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-semibold uppercase">Specialty Referral</span>
                </div>
              </div>

              {/* Biological Capital Snippet */}
              <div className="mt-5 pt-4 border-t border-slate-700/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Biological Capital Baseline:</span>
                  <span className="text-teal-300 font-semibold">Structural &bull; Biological &bull; Functional</span>
                </div>
                <button
                  onClick={onExploreDiagnostics}
                  className="w-full mt-3 py-2.5 rounded-lg bg-teal-950/60 hover:bg-teal-900/70 border border-teal-700/50 text-teal-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Diagnostic Pathway Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                <span className="font-bold text-teal-300 block text-sm font-serif">AAOMS</span>
                <span className="text-[10px] text-slate-400">Decision Aligned</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                <span className="font-bold text-teal-300 block text-sm font-serif">Autologous</span>
                <span className="text-[10px] text-slate-400">PRF Fibrin Matrix</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                <span className="font-bold text-teal-300 block text-sm font-serif">3 Pathways</span>
                <span className="text-[10px] text-slate-400">Local &bull; US &bull; Global</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

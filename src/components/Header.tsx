import React, { useState } from 'react';
import { 
  Menu, X, Phone, Calendar, ChevronRight, ShieldCheck, 
  MapPin, Stethoscope, FileText, ArrowRight
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestEvaluation: (origin?: string) => void;
  onOpenClinicianModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onRequestEvaluation,
  onOpenClinicianModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'conditions', label: 'Conditions & Symptoms' },
    { id: 'diagnosis', label: 'Comprehensive Diagnosis' },
    { id: 'treatments', label: 'Treatment Options' },
    { id: 'patient-experience', label: 'Patient Experience' },
    { id: 'clinicians', label: 'For Clinicians' },
    { id: 'evidence', label: 'Research & Evidence' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Institutional Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="font-semibold tracking-wider text-slate-100 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              RENAXIS REGENERATIVE ORTHOPEDIC CENTER
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              The Woodlands &amp; Greater Houston, Texas
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onOpenClinicianModal()}
              className="text-slate-300 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Doctor Referral Portal</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href="tel:3462785330" 
              className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>346-278-5330</span>
            </a>
          </div>
        </div>
      </div>

      {/* Program Brand & Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo & Program Identity */}
          <div 
            onClick={() => handleNavClick('overview')}
            className="cursor-pointer group flex items-center gap-3 py-2"
          >
            <div className="w-11 h-11 rounded-lg bg-linear-to-br from-slate-900 via-sky-950 to-teal-900 flex items-center justify-center text-white font-bold shadow-md group-hover:shadow-teal-900/20 transition-all">
              <span className="text-lg font-serif">R</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 font-serif">
                  RENAXIS
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                  TMJ Program
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                TMJ Regenerative Care &bull; Diagnosis &bull; Treatment &bull; Rehabilitation
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md transition-all text-xs font-semibold uppercase tracking-wider ${
                    isActive
                      ? 'text-teal-950 bg-teal-50/90 border-b-2 border-teal-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onRequestEvaluation()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Request TMJ Evaluation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => onRequestEvaluation()}
              className="sm:hidden px-3 py-1.5 rounded-md bg-teal-700 text-white text-xs font-semibold"
            >
              Evaluate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Program Secondary Credibility Strip */}
      <div className="hidden lg:block bg-slate-50 border-t border-slate-100 py-1.5 px-4 text-center">
        <p className="text-xs text-slate-600 font-medium tracking-wide">
          <span className="font-semibold text-teal-800">Core Clinical Philosophy:</span>{' '}
          &ldquo;Your jaw deserves a diagnosis before a treatment decision.&rdquo; &bull; Local, National &amp; International Care Pathways
        </p>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
          <div className="p-3 bg-teal-50 rounded-lg border border-teal-100 mb-3">
            <p className="text-xs text-teal-900 font-medium">
              &ldquo;Your jaw deserves a diagnosis before a treatment decision.&rdquo;
            </p>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                activeTab === item.id
                  ? 'bg-teal-700 text-white font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestEvaluation();
              }}
              className="w-full py-3 rounded-lg bg-teal-700 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Request TMJ Evaluation</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClinicianModal();
              }}
              className="w-full py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Referring Clinician Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

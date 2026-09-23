import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SymptomsSection } from './components/SymptomsSection';
import { DiagnosticDifferenceSection } from './components/DiagnosticDifferenceSection';
import { ClinicalPhilosophySection } from './components/ClinicalPhilosophySection';
import { BiologicalCapitalSection } from './components/BiologicalCapitalSection';
import { TreatmentCatalogSection } from './components/TreatmentCatalogSection';
import { PatientSelectionSection } from './components/PatientSelectionSection';
import { PatientJourneySection } from './components/PatientJourneySection';
import { PatientPathwaysSection } from './components/PatientPathwaysSection';
import { OutcomesTimelineSection } from './components/OutcomesTimelineSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ReferringCliniciansSection } from './components/ReferringCliniciansSection';
import { ResearchEvidenceSection } from './components/ResearchEvidenceSection';
import { Footer } from './components/Footer';
import { IntakeModal } from './components/IntakeModal';
import { ClinicianReferralModal } from './components/ClinicianReferralModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isIntakeOpen, setIsIntakeOpen] = useState<boolean>(false);
  const [intakeOrigin, setIntakeOrigin] = useState<string | undefined>(undefined);
  const [isClinicianModalOpen, setIsClinicianModalOpen] = useState<boolean>(false);

  const handleRequestEvaluation = (origin?: string) => {
    setIntakeOrigin(origin);
    setIsIntakeOpen(true);
  };

  const handleOpenClinicianModal = () => {
    setIsClinicianModalOpen(true);
  };

  const navigateToTab = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* Sticky Program Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={navigateToTab}
        onRequestEvaluation={() => handleRequestEvaluation()}
        onOpenClinicianModal={handleOpenClinicianModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {activeTab === 'overview' && (
          <div>
            {/* 01. Hero */}
            <Hero
              onRequestEvaluation={() => handleRequestEvaluation()}
              onExploreDiagnostics={() => navigateToTab('diagnosis')}
              onExploreTreatments={() => navigateToTab('treatments')}
            />

            {/* 02. Symptoms Recognition */}
            <SymptomsSection
              onRequestEvaluation={() => handleRequestEvaluation()}
            />

            {/* 03. The Diagnostic Difference & 5 Decision Pathways */}
            <DiagnosticDifferenceSection
              onRequestEvaluation={() => handleRequestEvaluation()}
            />

            {/* 04. Clinical Philosophy & 5 Stepwise Treatment Stages */}
            <ClinicalPhilosophySection
              onRequestEvaluation={() => handleRequestEvaluation()}
              onExploreTreatments={() => navigateToTab('treatments')}
            />

            {/* 04b. Beyond the Joint: Biological Capital (Structural, Biological, Functional domains) */}
            <BiologicalCapitalSection
              onRequestEvaluation={() => handleRequestEvaluation()}
            />

            {/* 05. Treatment Options */}
            <TreatmentCatalogSection
              onRequestEvaluation={() => handleRequestEvaluation()}
            />

            {/* 06. Patient Selection & Candidacy */}
            <PatientSelectionSection
              onRequestEvaluation={() => handleRequestEvaluation()}
            />

            {/* 07. Your Patient Journey */}
            <PatientJourneySection
              onRequestEvaluation={() => handleRequestEvaluation()}
            />

            {/* 08. Traveling to RENAXIS & 3 Patient Pathways */}
            <PatientPathwaysSection
              onRequestEvaluation={(origin) => handleRequestEvaluation(origin)}
            />

            {/* 09. Clinical Outcomes & Longitudinal Follow-Up */}
            <OutcomesTimelineSection
              onRequestEvaluation={() => handleRequestEvaluation()}
            />

            {/* 10. Final Call to Action */}
            <FinalCTASection
              onRequestEvaluation={() => handleRequestEvaluation()}
              onOpenClinicianModal={handleOpenClinicianModal}
            />
          </div>
        )}

        {/* Dedicated Conditions Tab */}
        {activeTab === 'conditions' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                  Clinical Specialization
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                  Conditions &amp; TMJ Symptoms
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  Explore common symptoms, clinical indicators, and differential diagnostics for temporomandibular joint and myofascial disorders.
                </p>
              </div>
            </div>
            <SymptomsSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <PatientSelectionSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <FinalCTASection
              onRequestEvaluation={() => handleRequestEvaluation()}
              onOpenClinicianModal={handleOpenClinicianModal}
            />
          </div>
        )}

        {/* Dedicated Comprehensive Diagnosis Tab */}
        {activeTab === 'diagnosis' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                  Diagnostic Architecture
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                  Comprehensive Diagnosis &amp; Biological Capital
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  Stratifying the 5 dominant pathologies and evaluating Structural, Biological, and Functional baseline domains.
                </p>
              </div>
            </div>
            <DiagnosticDifferenceSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <BiologicalCapitalSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <PatientSelectionSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <FinalCTASection
              onRequestEvaluation={() => handleRequestEvaluation()}
              onOpenClinicianModal={handleOpenClinicianModal}
            />
          </div>
        )}

        {/* Dedicated Treatments Tab */}
        {activeTab === 'treatments' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                  Evidence-Based Procedures
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                  Treatment Options &amp; Clinical Protocols
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  Autologous PRF, minimally invasive arthrocentesis, precision image guidance, conservative rehabilitation, and surgical referral.
                </p>
              </div>
            </div>
            <ClinicalPhilosophySection
              onRequestEvaluation={() => handleRequestEvaluation()}
              onExploreTreatments={() => {}}
            />
            <TreatmentCatalogSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <FinalCTASection
              onRequestEvaluation={() => handleRequestEvaluation()}
              onOpenClinicianModal={handleOpenClinicianModal}
            />
          </div>
        )}

        {/* Dedicated Patient Experience Tab */}
        {activeTab === 'patient-experience' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                  Care Coordination
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                  Patient Experience &amp; Traveling to RENAXIS
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  Three distinct onboarding pathways for local Houston/Woodlands patients, national US travelers, and international inquiries.
                </p>
              </div>
            </div>
            <PatientPathwaysSection onRequestEvaluation={(orig) => handleRequestEvaluation(orig)} />
            <PatientJourneySection onRequestEvaluation={() => handleRequestEvaluation()} />
            <OutcomesTimelineSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <FinalCTASection
              onRequestEvaluation={() => handleRequestEvaluation()}
              onOpenClinicianModal={handleOpenClinicianModal}
            />
          </div>
        )}

        {/* Dedicated Clinicians Tab */}
        {activeTab === 'clinicians' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                  Professional Network
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                  Information for Referring Clinicians
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  Co-management, records transmission, and counter-referrals for Dentists, Oral Surgeons, and Physical Therapists.
                </p>
              </div>
            </div>
            <ReferringCliniciansSection onOpenClinicianModal={handleOpenClinicianModal} />
            <ResearchEvidenceSection onRequestEvaluation={() => handleRequestEvaluation()} />
          </div>
        )}

        {/* Dedicated Research & Evidence Tab */}
        {activeTab === 'evidence' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">
                  Literature &amp; Safeguards
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                  Clinical Evidence &amp; Regulatory Safeguards
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  Systematic reviews on autologous PRF, AAOMS guidelines, NIDCR conservative care standards, and FDA exosome disclosures.
                </p>
              </div>
            </div>
            <ResearchEvidenceSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <OutcomesTimelineSection onRequestEvaluation={() => handleRequestEvaluation()} />
            <FinalCTASection
              onRequestEvaluation={() => handleRequestEvaluation()}
              onOpenClinicianModal={handleOpenClinicianModal}
            />
          </div>
        )}

      </main>

      {/* Program Footer */}
      <Footer
        setActiveTab={navigateToTab}
        onRequestEvaluation={() => handleRequestEvaluation()}
        onOpenClinicianModal={handleOpenClinicianModal}
      />

      {/* Interactive Screening Intake Modal (5 Progressive Questions) */}
      <IntakeModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
        preselectedOrigin={intakeOrigin}
      />

      {/* Referring Clinician Modal */}
      <ClinicianReferralModal
        isOpen={isClinicianModalOpen}
        onClose={() => setIsClinicianModalOpen(false)}
      />

    </div>
  );
}

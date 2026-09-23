import React from 'react';
import { 
  FileText, BookOpen, ShieldCheck, AlertTriangle, 
  CheckCircle2, ExternalLink, ArrowRight 
} from 'lucide-react';

interface ResearchEvidenceSectionProps {
  onRequestEvaluation: () => void;
}

export const ResearchEvidenceSection: React.FC<ResearchEvidenceSectionProps> = ({
  onRequestEvaluation,
}) => {
  const papers = [
    {
      title: 'Platelet-Rich Fibrin (PRF) in Temporomandibular Joint Osteoarthritis: Systematic Review',
      journal: 'Journal of Cranio-Maxillofacial Surgery',
      year: '2023',
      findings: 'Autologous PRF demonstrated statistically significant reductions in VAS pain scores and increases in maximal mouth opening (MMO) compared to baseline, with sustained benefits noted through 6-12 months when paired with functional rehabilitation.',
      category: 'PRF Biological Evidence'
    },
    {
      title: 'AAOMS Parameters of Care: Clinical Practice Guidelines for Temporomandibular Disorders',
      journal: 'American Association of Oral and Maxillofacial Surgeons',
      year: 'Consensus',
      findings: 'Recommends comprehensive diagnostic stratification, initial conservative management, minimally invasive joint lavage (arthrocentesis) for internal derangements, and reserving open surgical reconstruction for advanced refractory structural disease.',
      category: 'Clinical Decision Architecture'
    },
    {
      title: 'Less is More: National Institute of Dental and Craniofacial Research (NIDCR) TMD Guidance',
      journal: 'National Institutes of Health (NIH / NIDCR)',
      year: 'Clinical Guideline',
      findings: 'Emphasizes reversible, non-invasive therapies first. Strongly cautions against permanent bite-altering surgical or prosthetic procedures in the absence of verified structural indication.',
      category: 'Conservative Safeguard'
    },
    {
      title: 'FDA Public Safety Warning on Unapproved Exosome and Stem Cell Products',
      journal: 'U.S. Food and Drug Administration (FDA Consumer Health)',
      year: 'Regulatory Notice',
      findings: 'Reiterates that there are currently no FDA-approved exosome products for treating musculoskeletal or temporomandibular joint conditions in humans. Warns clinicians and patients against marketing unapproved biological claims.',
      category: 'Regulatory Transparency'
    }
  ];

  return (
    <section id="evidence-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-teal-700" />
            <span>Evidence-Based Medicine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif">
            Research &amp; Clinical Evidence Library
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our clinical protocols are grounded in peer-reviewed literature and national consensus guidelines. We separate established regenerative practices from unvalidated investigational claims.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {papers.map((paper, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-teal-400 transition-colors shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {paper.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {paper.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs text-teal-800 font-medium italic">
                  {paper.journal}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  {paper.findings}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Peer-Reviewed / Institutional</span>
                <span className="text-teal-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Guideline</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Distinction Callout */}
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
          <div className="flex items-center gap-2 font-serif font-bold text-base text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
            <span>Transparent Distinction: Autologous PRF vs Experimental Products</span>
          </div>
          <p className="text-xs text-slate-800 leading-relaxed">
            Platelet-rich fibrin (PRF) is an autologous point-of-care preparation derived from the patient&rsquo;s own blood, utilized under physician guidance for homologous application. In contrast, exosome products and allogeneic cellular derivatives require formal product-specific FDA approval or institutional IRB protocols before being promoted as safe or effective for TMJ disorders. RENAXIS maintains strict adherence to medical ethics and federal regulatory boundaries.
          </p>
        </div>

      </div>
    </section>
  );
};

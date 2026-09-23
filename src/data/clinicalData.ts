export interface SymptomItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  commonCauses: string[];
  clinicalSignificance: string;
  recommendedDiagnosticStep: string;
  tag: string;
}

export interface DiagnosticPathway {
  id: string;
  title: string;
  subtitle: string;
  pathwayLetter: 'A' | 'B' | 'C' | 'D' | 'E';
  description: string;
  clinicalApproach: string;
  recommendedTreatments: string[];
  caution: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  category: 'REGENERATIVE' | 'MINIMALLY INVASIVE' | 'CONSERVATIVE' | 'INVESTIGATIONAL / RESEARCH' | 'SURGICAL REFERRAL';
  badgeColor: string;
  overview: string;
  rationale: string;
  indications: string[];
  proceduralDetails: string[];
  expectedRecovery: string;
  evidenceAndLimits: string;
  regulatoryNote?: string;
  isBookable: boolean;
}

export interface PatientPathway {
  id: 'local' | 'national' | 'international';
  title: string;
  locationScope: string;
  steps: string[];
  travelCoordination: string;
  ctaText: string;
}

export const SYMPTOMS_DATA: SymptomItem[] = [
  {
    id: 'jaw-facial-pain',
    title: 'Jaw & Facial Pain',
    shortDesc: 'Aching, dull, or sharp pain in the temporomandibular joint, preauricular area, or masticatory muscles.',
    fullDesc: 'Pain in the jaw region is the most common presenting symptom of temporomandibular disorders (TMD). It can originate from the masticatory muscles (masseter, temporalis, pterygoids), the joint capsule, or the intra-articular disc attachments. Accurate differential diagnosis is critical because muscle hypertonicity responds differently than synovial inflammation.',
    commonCauses: ['Myofascial pain dysfunction', 'Capsulitis & synovitis', 'Joint loading overload', 'Bruxism / clenching'],
    clinicalSignificance: 'Must be differentiated from odontogenic (dental) pain, trigeminal neuralgia, and temporal arteritis.',
    recommendedDiagnosticStep: 'Bimanual palpation, range of motion mapping, dynamic load testing.',
    tag: 'Frequent'
  },
  {
    id: 'clicking-popping-locking',
    title: 'Clicking, Popping & Locking',
    shortDesc: 'Audible or felt joint sounds during opening or closing; sudden episodes where the jaw gets stuck open or shut.',
    fullDesc: 'A click during opening often indicates anterior disc displacement with reduction (the articular disc slides back into normal position). Closed lock (disc displacement without reduction) occurs when the displaced disc acts as a mechanical obstacle, limiting opening to 20-25mm.',
    commonCauses: ['Anterior disc displacement with reduction', 'Anterior disc displacement without reduction (closed lock)', 'Joint laxity', 'Subluxation'],
    clinicalSignificance: 'Painless joint clicking alone may not require invasive intervention. However, acute closed lock requires prompt clinical assessment to prevent chronic disc deformity.',
    recommendedDiagnosticStep: 'High-resolution dynamic MRI to evaluate disc morphology, position, and reduction capability.',
    tag: 'Mechanical'
  },
  {
    id: 'tmj-arthritis-degeneration',
    title: 'TMJ Arthritis & Degeneration',
    shortDesc: 'Crepitus (grating sound), structural erosion of the condyle, joint stiffness, and chronic morning tenderness.',
    fullDesc: 'Degenerative joint disease (osteoarthritis) or inflammatory arthritis (rheumatoid, psoriatic) causes progressive loss of articular fibrocartilage and subchondral bone remodeling in the mandibular condyle and glenoid fossa.',
    commonCauses: ['Osteoarthritis (wear & mechanical remodeling)', 'Inflammatory systemic arthropathies', 'Post-traumatic joint collapse'],
    clinicalSignificance: 'Assessment of structural stability vs active osteolysis is needed before selecting intra-articular therapies.',
    recommendedDiagnosticStep: 'Cone Beam Computed Tomography (CBCT) for osseous condylar architecture, paired with biological inflammatory workup.',
    tag: 'Degenerative'
  },
  {
    id: 'disc-displacement',
    title: 'Articular Disc Displacement',
    shortDesc: 'Mechanical displacement of the biconcave fibrocartilaginous disc relative to the condylar head.',
    fullDesc: 'The TMJ articular disc serves as a shock absorber and frictionless gliding surface. Mechanical strain, trauma, or ligamentous elongation can lead to anterior, medial, or anterolateral displacement.',
    commonCauses: ['Lateral pterygoid dyssynergy', 'Posterior retrodiscal ligament stretch', 'Microtrauma or macrotrauma'],
    clinicalSignificance: 'Determines whether conservative splint decompression, arthrocentesis, or autologous biological support is indicated.',
    recommendedDiagnosticStep: 'Open and closed mouth sagittal and coronal MRI sequences.',
    tag: 'Structural'
  },
  {
    id: 'limited-jaw-opening',
    title: 'Restricted Mouth Opening',
    shortDesc: 'Inability to open the mouth normally (typically less than 35-40mm interincisal distance).',
    fullDesc: 'Severe restriction (trismus or mechanical block) significantly impairs chewing, speech, oral hygiene, and routine dental care. Causes range from acute muscular spasm to fibrous ankylosis or mechanical disc blockage.',
    commonCauses: ['Acute disc displacement without reduction', 'Severe masticatory muscle spasm (trismus)', 'Intra-articular adhesions', 'Post-radiation or post-surgical fibrosis'],
    clinicalSignificance: 'Requires differentiating mechanical intra-articular blockage from muscular guarding before physical therapy or intervention.',
    recommendedDiagnosticStep: 'Calibrated millimeter ruler measurement (maximum active and passive opening) with joint end-feel testing.',
    tag: 'Functional'
  },
  {
    id: 'muscle-related-tmd',
    title: 'Muscle-Related TMD (Myofascial)',
    shortDesc: 'Diffuse facial tightness, soreness radiating to temples, cheeks, and neck without major joint destruction.',
    fullDesc: 'Myofascial pain is predominantly extra-capsular. Overactive masseter and temporalis muscles develop tender trigger points that refer pain throughout the craniomandibular complex.',
    commonCauses: ['Nocturnal bruxism', 'Centrally mediated muscle pain', 'Stress and sympathetic arousal', 'Postural cervical dysfunction'],
    clinicalSignificance: 'Intra-articular injections are rarely appropriate for primary muscular TMD. Conservative rehabilitation, trigger therapy, and behavioral modifications are first-line.',
    recommendedDiagnosticStep: 'Palpation score of masticatory and cervical musculature, bite contact analysis.',
    tag: 'Muscular'
  },
  {
    id: 'headaches-ear-symptoms',
    title: 'Headaches & Ear-Related Symptoms',
    shortDesc: 'Temporal headaches, ear fullness, deep ache, tinnitus, or dizziness closely timed with jaw usage.',
    fullDesc: 'Because the TMJ shares embryological origins and neural innervation (trigeminal and auriculotemporal nerves) with the middle ear and masticatory muscles, TMJ dysfunction frequently manifests as otalgia (ear pain), sensation of fullness, or temporal tension headaches.',
    commonCauses: ['Auriculotemporal nerve irritation', 'Tensor veli palatini / tensor tympani reflex hypertonicity', 'Referred muscular trigger pain'],
    clinicalSignificance: 'Patients often undergo repeated ENT evaluations with normal otoscopic findings before TMJ etiology is recognized.',
    recommendedDiagnosticStep: 'Joint capsule tenderness check, coordination with ENT records to rule out primary middle ear pathology.',
    tag: 'Referred'
  }
];

export const DIAGNOSTIC_PATHWAYS: DiagnosticPathway[] = [
  {
    id: 'pathway-a',
    title: 'Predominantly Muscular Dysfunction',
    subtitle: 'Extra-capsular myofascial pain & guarding',
    pathwayLetter: 'A',
    description: 'Pain and restriction arising primarily from masticatory muscle hyperactivity, clenching, and tender trigger points without active intra-articular breakdown.',
    clinicalApproach: 'Conservative management, individualized physical rehabilitation, behavioral modifications, sleep posture review, and reversible dental appliance management.',
    recommendedTreatments: ['Targeted physical therapy & trigger release', 'Reversible stabilization splint', 'Biofeedback & stress mitigation', 'Neuromuscular re-education'],
    caution: 'Avoid premature intra-articular injections or irreversible dental bite adjustments.'
  },
  {
    id: 'pathway-b',
    title: 'Intra-Articular Inflammation or Degenerative Changes',
    subtitle: 'Capsulitis, synovitis, and joint cartilage remodeling',
    pathwayLetter: 'B',
    description: 'Active synovial inflammation, effusion, or osteoarthritis of the condyle causing localized joint pain and chewing limitations.',
    clinicalApproach: 'Stepwise progression: conservative care first. If persistent, evaluate image-guided intra-articular therapy or autologous PRF to support the local biological environment.',
    recommendedTreatments: ['Conservative anti-inflammatory regimen', 'Image-guided joint intervention', 'Autologous PRF (Platelet-Rich Fibrin)', 'Guided functional loading'],
    caution: 'Patient systemic inflammatory & metabolic health must be evaluated in parallel.'
  },
  {
    id: 'pathway-c',
    title: 'Disc Displacement or Mechanical Dysfunction',
    subtitle: 'Internal derangement (reducing or non-reducing disc)',
    pathwayLetter: 'C',
    description: 'The articular disc is displaced anteriorly or medially, resulting in reciprocal clicking or mechanical closed locking that impedes translation.',
    clinicalApproach: 'Differentiate reducing from non-reducing disc via MRI. Assess whether joint decompression, arthrocentesis/lavage, or specialized appliance therapy is needed.',
    recommendedTreatments: ['Arthrocentesis & joint lavage (hydraulic release)', 'Anterior repositioning or decompression appliance', 'Specialized manual therapy', 'Autologous PRF adjunct'],
    caution: 'Chronic deformed non-reducing discs may require surgical assessment if non-responsive.'
  },
  {
    id: 'pathway-d',
    title: 'Advanced Structural Deterioration',
    subtitle: 'Severe condylar resorption, fibrous ankylosis, or avascular necrosis',
    pathwayLetter: 'D',
    description: 'Significant structural loss, end-stage osseous destruction, or total mechanical immobility where nonsurgical modalities have limited biological potential.',
    clinicalApproach: 'Early and honest explanation of structural limitations. Direct referral and collaborative consultation with an Oral and Maxillofacial Surgeon (OMFS).',
    recommendedTreatments: ['Oral & Maxillofacial Surgery consultation', 'Surgical arthroscopy or open joint arthroplasty', 'Total joint replacement assessment (if indicated)', 'Palliative supportive care'],
    caution: 'Do not promise regenerative reconstruction when bone and disc architecture are structurally exhausted.'
  },
  {
    id: 'pathway-e',
    title: 'Symptoms Not Primarily Attributable to TMD',
    subtitle: 'Non-TMD cranial, neural, or systemic etiologies',
    pathwayLetter: 'E',
    description: 'Symptoms masquerading as TMJ dysfunction caused by dental infection, neuropathic pain (trigeminal neuralgia), cervical spine radiculopathy, or temporal arteritis.',
    clinicalApproach: 'Investigate alternative diagnoses systematically. Coordinate prompt specialty referral to neurology, endodontics, rheumatology, or ENT.',
    recommendedTreatments: ['Diagnostic local anesthetic block (if needed)', 'Cross-specialty referral (Neurology / ENT / Rheumatology)', 'Discontinuation of unwarranted TMJ procedures'],
    caution: 'Treating a non-TMD condition with TMJ injections delays proper medical diagnosis.'
  }
];

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'prf',
    title: 'PRF (Platelet-Rich Fibrin) Intra-Articular Treatment',
    category: 'REGENERATIVE',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    overview: 'Platelet-rich fibrin (PRF) is an autologous blood-derived preparation containing a natural fibrin matrix, platelets, leukocytes, and slow-releasing biological signaling factors.',
    rationale: 'Unlike traditional PRP that uses synthetic anticoagulants and rapidly clears the joint, PRF forms a three-dimensional fibrin scaffold that releases growth factors (VEGF, TGF-beta, PDGF) over an extended timeframe, helping modulate synovial inflammation and support cell migration.',
    indications: [
      'Mild-to-moderate TMJ osteoarthritis with persistent pain',
      'Chronic capsular synovitis refractory to conservative care',
      'Adjunct following arthrocentesis joint lavage to stabilize joint biology'
    ],
    proceduralDetails: [
      'Autologous blood draw performed chairside without chemical additives',
      'Low-speed centrifugation protocol to isolate platelet and white cell concentrate in fibrin matrix',
      'Image-guided (ultrasound) intra-articular delivery directly into the superior joint space under sterile conditions'
    ],
    expectedRecovery: 'Mild local soreness for 24-48 hours. Patients are instructed on gentle jaw motion and a soft food diet for 7-14 days while the biological matrix settles.',
    evidenceAndLimits: 'Clinical trials demonstrate significant improvements in visual analog pain scores (VAS) and maximal mouth opening. However, PRF cannot guarantee anatomical regeneration of severely deformed discs or eroded condylar bone. It must be paired with functional rehabilitation.',
    regulatoryNote: 'Prepared chairside from the patient’s own blood for immediate homologous autologous use under physician supervision.',
    isBookable: true
  },
  {
    id: 'arthrocentesis',
    title: 'TMJ Arthrocentesis & Joint Lavage',
    category: 'MINIMALLY INVASIVE',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    overview: 'A minimally invasive procedure where the superior joint compartment is accessed using sterile cannulas and flushed with physiologic lactated Ringer’s or saline solution.',
    rationale: 'The objective is mechanical and biochemical: flushing out inflammatory mediators (IL-1, TNF-alpha, leukotrienes), lysing microscopic fibrous adhesions, and expanding joint volume to allow the disc and condyle to mobilize.',
    indications: [
      'Acute or subacute closed lock (sudden inability to open mouth)',
      'Severe TMJ synovitis with joint effusion on MRI',
      'Painful restriction unresponsive to 4-6 weeks of physical therapy'
    ],
    proceduralDetails: [
      'Local anesthesia with precise preauricular anatomical landmarks',
      'Double-needle or single-cannula dual-port technique under ultrasound or anatomical guidance',
      'Irrigation with 100-300 ml of sterile physiologic fluid under controlled hydraulic pressure',
      'Optional introduction of PRF or hyaluronic acid at conclusion of lavage'
    ],
    expectedRecovery: 'Mild preauricular swelling for 2-4 days. Immediate post-procedure jaw mobilization exercises are initiated within 24 hours.',
    evidenceAndLimits: 'Supported by extensive AAOMS literature for improving mouth opening and reducing pain in internal derangements. It does not reshape damaged bone or re-position permanently torn discs.',
    isBookable: true
  },
  {
    id: 'image-guided',
    title: 'Image-Guided Precision Interventions',
    category: 'MINIMALLY INVASIVE',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    overview: 'High-resolution real-time musculoskeletal ultrasound or fluoroscopy utilized to visualize the mandibular condyle, articular eminence, and joint space during procedures.',
    rationale: 'The temporomandibular joint is a compact structure measuring mere millimeters, adjacent to the superficial temporal artery and facial nerve branches. Real-time visualization enhances safety and ensures accurate delivery into the superior joint space.',
    indications: [
      'Complex joint anatomy or restricted anatomical landmarks',
      'Delivery of therapeutic agents or autologous biologics',
      'Aspiration of joint effusion for diagnostic analysis'
    ],
    proceduralDetails: [
      'High-frequency linear ultrasound probe placed in oblique coronal/sagittal planes over the preauricular fossa',
      'Direct visualization of needle tip entering the superior joint compartment',
      'Avoidance of vascular structures via color Doppler mapping'
    ],
    expectedRecovery: 'Standard post-injection protocol; minimal downtime.',
    evidenceAndLimits: 'Improves procedural precision and reduces soft tissue trauma compared to blind anatomical landmark injections.',
    isBookable: true
  },
  {
    id: 'splints',
    title: 'Occlusal Splints & Dental Appliances',
    category: 'CONSERVATIVE',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    overview: 'Custom-fabricated, hard acrylic oral appliances designed to reduce nocturnal joint loading, provide muscular relaxation, and decompress the temporomandibular joint.',
    rationale: 'Stabilization splints provide a stable orthopedic platform for the mandible, reducing muscle hypertonicity and shielding intra-articular structures from excessive bruxism pressures.',
    indications: [
      'Nocturnal clenching and grinding with morning jaw tenderness',
      'Joint loading intolerance during daytime activities',
      'Protection of dentition and joint during healing phases'
    ],
    proceduralDetails: [
      'Digital 3D intraoral scanning or high-precision dental impressions',
      'Careful occlusal adjustment to ensure mutually protected occlusion and uniform posterior contact',
      'Integration and follow-up with the patient’s primary dental team'
    ],
    expectedRecovery: 'Initial adaptation period of 3-7 days. Regular adjustment checks at 2 and 6 weeks.',
    evidenceAndLimits: 'Reversible appliance therapy is well-supported by NIDCR and AAOMS. Permanent bite-altering procedures (such as irreversible full-mouth equilibration, orthodontics, or prosthetics solely for TMD) must be approached with extreme caution.',
    regulatoryNote: 'Complies with NIDCR guidance advising reversible, non-invasive oral appliance management.',
    isBookable: true
  },
  {
    id: 'rehabilitation',
    title: 'TMJ Functional Rehabilitation & Recovery',
    category: 'CONSERVATIVE',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    overview: 'A specialized, phased physical therapy and rehabilitation program tailored specifically to craniomandibular mechanics, cervical posture, and masticatory coordination.',
    rationale: 'Injections and appliances address inflammation and joint loading, but sustained recovery requires restoring neuromuscular control, bilateral tongue-mandible coordination, and functional chewing tolerance.',
    indications: [
      'All patients undergoing conservative or interventional TMJ care',
      'Post-arthrocentesis or post-PRF recovery protocol',
      'Myofascial pain dysfunction and cervical-cranial posture imbalance'
    ],
    proceduralDetails: [
      'Isometric stabilization and Rocabado 6x6 jaw coordination exercises',
      'Gentle manual joint distraction and soft tissue release of pterygoid and masseter muscles',
      'Graded functional dietary progression from liquid-pureed to controlled solid food chewing'
    ],
    expectedRecovery: 'Ongoing 6-12 week protocol with active home compliance.',
    evidenceAndLimits: 'Strong level-1 evidence supports physical therapy as an essential pillar of long-term TMD management.',
    isBookable: true
  },
  {
    id: 'exosomes',
    title: 'Exosome-Based Interventions (Research & Review)',
    category: 'INVESTIGATIONAL / RESEARCH',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    overview: 'Extracellular vesicles involved in intercellular signaling that have generated scientific interest for their immunomodulatory and paracrine properties in preclinical models.',
    rationale: 'In laboratory studies, exosome vesicles isolated from mesenchymal stem cells have shown potential in reducing inflammatory cytokines in joint synovial models.',
    indications: [
      'Scientific review and educational discussion only',
      'Investigational protocols under formal institutional research oversight'
    ],
    proceduralDetails: [
      'Currently NOT offered as a routine clinical treatment at RENAXIS pending formal FDA regulatory clearance and peer-reviewed human safety validation'
    ],
    expectedRecovery: 'N/A — Informational research listing only.',
    evidenceAndLimits: 'The FDA has explicitly stated that there are currently no FDA-approved exosome products for TMJ or orthopedic treatment, and has issued public safety alerts regarding unapproved products. RENAXIS maintains strict regulatory compliance by presenting this for scientific transparency rather than as a commercial therapy.',
    regulatoryNote: 'REGULATORY SAFEGUARD: Not an FDA-approved clinical therapy for TMD. Informational and educational purposes only. Cannot be booked directly.',
    isBookable: false
  },
  {
    id: 'surgery',
    title: 'Oral & Maxillofacial Surgical Referral',
    category: 'SURGICAL REFERRAL',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    overview: 'Collaborative specialist referral pathway to board-certified Oral and Maxillofacial Surgeons (OMFS) for patients with advanced structural pathology or failure of nonsurgical management.',
    rationale: 'Our philosophy is rooted in identifying the least invasive effective treatment. When a joint presents with true mechanical obstruction, severe avascular necrosis, or fibrous ankylosis, delaying surgical evaluation is counterproductive.',
    indications: [
      'Total bony or fibrous ankylosis',
      'Severe condylar resorption unresponsive to conservative or biological intervention',
      'Significant skeletal malocclusion secondary to active condylar breakdown',
      'Suspected neoplasm or severe structural osteonecrosis'
    ],
    proceduralDetails: [
      'Comprehensive records compilation including volumetric CBCT and dynamic MRI',
      'Structured clinical briefing sent to our network of premier hospital-affiliated OMFS surgeons',
      'Pre- and post-operative functional rehabilitation coordination'
    ],
    expectedRecovery: 'Varies by surgical procedure (arthroscopy vs open joint arthroplasty vs total joint replacement).',
    evidenceAndLimits: 'Surgery is reserved for approximately 5-10% of TMD patients with clear anatomical indications.',
    isBookable: true
  }
];

export const PATIENT_PATHWAYS: PatientPathway[] = [
  {
    id: 'local',
    title: 'Local Patients',
    locationScope: 'The Woodlands · Houston Metro · Montgomery & Harris County',
    steps: [
      'Submit preliminary online evaluation screening or call our clinic coordinator directly.',
      'Complete initial digital intake and submit any prior dental or medical records.',
      'Attend in-person comprehensive diagnostic evaluation at our clinic.',
      'Receive your individualized diagnosis and multimodal treatment recommendation.'
    ],
    travelCoordination: 'Convenient same-week scheduling available for local consultations with ample parking and accessibility at our clinic in The Woodlands.',
    ctaText: 'Request Local Consultation'
  },
  {
    id: 'national',
    title: 'National Patients',
    locationScope: 'Traveling from Elsewhere in the United States',
    steps: [
      'Submit an inquiry and upload existing MRI, CBCT, and medical records to our secure portal.',
      'Preliminary records review and remote teleconsultation when clinically and legally appropriate.',
      'Coordinate coordinated 2-to-3 day travel to Texas for diagnostic evaluation and potential same-trip treatment.',
      'Establish a customized recovery and longitudinal follow-up plan prior to traveling home.'
    ],
    travelCoordination: 'Concierge travel assistance, preferred rates at partner hotels in The Woodlands/North Houston, and proximity to Houston George Bush Intercontinental Airport (IAH, 25 mins).',
    ctaText: 'Plan Your Travel Visit'
  },
  {
    id: 'international',
    title: 'International Patients',
    locationScope: 'International Inquiries & Global Medical Travel',
    steps: [
      'Submit clinical inquiry and international medical records for preliminary administrative triage.',
      'Physician preliminary record review to assess whether an in-person journey to the US is clinically warranted.',
      'Coordinate travel scheduling, medical visa invitation letters, and expected length of stay (typically 4-7 days).',
      'Comprehensive in-person evaluation, treatment execution, and structured post-care plan for your local physician.'
    ],
    travelCoordination: 'International patient coordination team assisting with airport transfers from IAH, language support, and comprehensive digital records export for home physicians.',
    ctaText: 'International Patient Inquiry'
  }
];

export const OUTCOME_SCHEDULE = [
  {
    time: 'Baseline',
    focus: 'Comprehensive Diagnostic Workup',
    details: 'Quantification of visual analog pain score (VAS), maximum active interincisal opening (mm), chewing tolerance index, and diagnostic classification (Pathways A-E).'
  },
  {
    time: '2 Weeks',
    focus: 'Early Healing & Tolerability',
    details: 'Evaluation of procedural recovery, adverse events, reduction in acute capsular effusion, and initial adherence to gentle rehabilitation exercises.'
  },
  {
    time: '6 Weeks',
    focus: 'Functional Progress & Dynamic Mechanics',
    details: 'Measurement of interincisal opening improvement, lateral excursion symmetry, joint auscultation, and advancement of diet from soft to moderate chew.'
  },
  {
    time: '12 Weeks',
    focus: 'Clinical Consolidation & Functional Goals',
    details: 'Comprehensive assessment of sustained pain reduction, chewing comfort, splint therapy adjustment, and determination if maintenance therapy is required.'
  },
  {
    time: '6 – 12 Months',
    focus: 'Longitudinal Durability & Quality of Life',
    details: 'Evaluation of long-term joint stability, recurrence prevention, durability of functional gains, and documentation in longitudinal outcomes registry.'
  }
];

import { ArrowLeft, Download } from 'lucide-react';

const reportViews = [
  {
    image: '/images/gtm-overview.png',
    alt: 'Funnel overview with baseline and current counts for outreach, replies, bookings, and held demos',
    caption: 'Outreach doubled from 300 to 600 while held demos fell from 29 to 19.',
  },
  {
    image: '/images/gtm-segments.png',
    alt: 'Broad and targeted lab segments with meeting outcomes separated by status',
    caption: 'Segment comparisons show where conversion changed. Missing meeting outcomes remain unknown.',
  },
  {
    image: '/images/gtm-hypotheses.png',
    alt: 'Competing hypotheses with supporting metrics, counterevidence, and questions to investigate',
    caption: 'Hypotheses include supporting evidence, limitations, and a proposed next investigation.',
  },
];

export function LeadOpsLab() {
  return (
    <>
      <section className="case-heading container">
        <a className="back-link" href="#/"><ArrowLeft size={16} aria-hidden="true" />All projects</a>
        <div className="eyebrow">05 / SALES ANALYTICS + CRM AUTOMATION</div>
        <div className="case-title"><h1>LeadOps Lab<span>.</span></h1></div>
        <p className="case-intro">Two workflows for finding where leads drop off and deciding what to do next.</p>
        <p className="leadops-summary">
          GTM Diagnosis Lab compares funnel performance across periods and segments. Lead-to-Demo Accelerator
          uses the history of an individual lead to recommend a follow-up and verify permitted CRM changes.
        </p>
        <div className="tags"><span>n8n</span><span>HubSpot</span><span>JavaScript</span><span>OpenAI</span></div>
      </section>

      <div className="container case-body gtm-case">
        <section className="leadops-evidence" aria-labelledby="gtm-workflow">
          <div className="eyebrow">01 / FUNNEL DIAGNOSIS</div>
          <h2 id="gtm-workflow">GTM Diagnosis Lab</h2>
          <p>
            The report calculates conversion rates from synthetic outreach, replies, bookings, and meeting outcomes.
            AI suggests what to investigate, and JavaScript checks that the cited metrics exist.
            A separate HubSpot branch audits which contact and meeting fields are available.
          </p>
          <div className="case-links">
            <a className="button secondary" href="/downloads/gtm-diagnosis-lab.json" download>
              <Download size={16} aria-hidden="true" />Download GTM workflow JSON
            </a>
          </div>
          <video className="gtm-video" controls playsInline preload="none" poster="/images/gtm-workflow.png" aria-label="GTM Diagnosis Lab recorded walkthrough">
            <source src="/media/gtm-diagnosis-lab.mp4" type="video/mp4" />
            <a href="/media/gtm-diagnosis-lab.mp4">Open the GTM recording</a>
          </video>
          <figure className="leadops-workflow">
            <a href="/images/gtm-workflow.png" target="_blank" rel="noreferrer">
              <img src="/images/gtm-workflow.png" alt="GTM n8n canvas showing the HubSpot audit and synthetic funnel report branches" width="1607" height="676" loading="lazy" />
            </a>
          </figure>
          <div className="evidence-grid gtm-evidence">
            {reportViews.map(({ image, alt, caption }) => (
              <figure key={image}>
                <a href={image} target="_blank" rel="noreferrer">
                  <img src={image} alt={alt} loading="lazy" />
                </a>
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="leadops-evidence" aria-labelledby="accelerator-workflow">
          <div className="eyebrow">02 / LEAD QUALIFICATION & FOLLOW-UP</div>
          <h2 id="accelerator-workflow">LeadOps 2.0: Lead-to-Demo Accelerator</h2>
          <p>
            The workflow reads a lead’s HubSpot notes, tasks, meetings, calls, and emails. It uses that context to
            assess buying intent, fit with the ideal customer profile, urgency, and follow-up needs.
          </p>
          <p>
            It checks for repeated events and existing tasks before recommending action. It protects populated CRM
            fields and verifies permitted writes. When the result of a write is uncertain, it checks the CRM
            before deciding whether the case needs human review.
          </p>
          <div className="case-links">
            <a className="button secondary" href="/downloads/lead-to-demo-accelerator.json" download>
              <Download size={16} aria-hidden="true" />Download Accelerator workflow JSON
            </a>
          </div>
          <video className="gtm-video" controls playsInline preload="none" poster="/images/lead-to-demo-workflow.png" aria-label="Lead-to-Demo Accelerator recorded walkthrough">
            <source src="https://01c4gthax6prqeif.public.blob.vercel-storage.com/lead-to-demo-accelerator-4k-Z7GLgbu91Jmxj6AzaPOoSoaanxBT5F.mp4" type="video/mp4" />
            <a href="https://01c4gthax6prqeif.public.blob.vercel-storage.com/lead-to-demo-accelerator-4k-Z7GLgbu91Jmxj6AzaPOoSoaanxBT5F.mp4">Open the Accelerator recording</a>
          </video>
          <figure className="leadops-workflow">
            <a href="/images/lead-to-demo-workflow.png" target="_blank" rel="noreferrer">
              <img src="/images/lead-to-demo-workflow.png" alt="Accelerator n8n canvas showing CRM activity reads, lead qualification, replay checks, verification, and review branches" width="1880" height="662" loading="lazy" />
            </a>
          </figure>
          <p className="leadops-evidence-caption">
            To run the downloaded workflow, connect your own HubSpot and OpenAI credentials and select your n8n data tables.
          </p>
        </section>
      </div>
    </>
  );
}

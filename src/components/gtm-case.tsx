import { ArrowLeft, Download } from 'lucide-react';

const reportViews = [
  {
    image: '/images/gtm-overview.png',
    alt: 'Funnel overview with baseline and current counts for outreach, replies, bookings, and held demos',
    caption: 'The overview compares volumes across the funnel. Outreach doubled from 300 to 600 while held demos fell from 29 to 19.',
  },
  {
    image: '/images/gtm-segments.png',
    alt: 'Funnel breakdown for broad and targeted lab segments, with meeting outcomes separated by status',
    caption: 'Segment comparisons show where conversion changed. Unrecorded meeting outcomes stay marked as unknown.',
  },
  {
    image: '/images/gtm-hypotheses.png',
    alt: 'Two competing hypotheses with supporting metrics, counterevidence, and questions to investigate',
    caption: 'Each hypothesis links to supporting evidence, limitations, and a proposed next investigation.',
  },
];

export function GtmCase() {
  return (
    <>
      <section className="case-heading container">
        <a className="back-link" href="#/"><ArrowLeft size={16} aria-hidden="true" />All projects</a>
        <div className="eyebrow">05 / SALES FUNNEL ANALYTICS</div>
        <div className="case-title"><h1>GTM Diagnosis Lab<span>.</span></h1></div>
        <p className="case-intro">Why did twice the outreach lead to fewer held demos?</p>
        <p className="leadops-summary">
          An n8n workflow analyzes synthetic sales events across outreach, replies, demo bookings, and meetings held.
          JavaScript calculates conversion rates by period and segment. AI proposes explanations and what to investigate next,
          and a validation step checks that the cited metrics exist.
        </p>
        <div className="tags"><span>n8n</span><span>JavaScript</span><span>OpenAI</span></div>
        <div className="case-links">
          <a className="button secondary" href="/downloads/gtm-diagnosis-lab.json" download>
            <Download size={16} aria-hidden="true" />Download n8n workflow
          </a>
        </div>
      </section>

      <div className="container case-body gtm-case">
        <section className="leadops-evidence" aria-labelledby="gtm-recording">
          <div className="eyebrow">RECORDED DEMO</div>
          <h2 id="gtm-recording">Walk through the lab</h2>
          <video className="gtm-video" controls playsInline preload="none" poster="/images/gtm-workflow.png" aria-label="GTM Diagnosis Lab recorded walkthrough">
            <source src="/media/gtm-diagnosis-lab.mp4" type="video/mp4" />
            <a href="/media/gtm-diagnosis-lab.mp4">Open the MP4 recording</a>
          </video>
        </section>

        <section className="leadops-evidence" aria-labelledby="gtm-workflow">
          <h2 id="gtm-workflow">How the workflow works</h2>
          <p>
            The report path generates synthetic events, computes funnel metrics, and checks AI references before rendering the report.
            A separate branch reads HubSpot contacts and meetings to audit which fields are available.
          </p>
          <figure className="leadops-workflow">
            <img src="/images/gtm-workflow.png" alt="n8n canvas with a separate HubSpot data audit branch and a synthetic funnel diagnosis and reporting branch" width="1607" height="676" loading="lazy" />
          </figure>
        </section>

        <section className="leadops-evidence" aria-labelledby="gtm-findings">
          <h2 id="gtm-findings">What the report shows</h2>
          <div className="evidence-grid gtm-evidence">
            {reportViews.map(({ image, alt, caption }) => (
              <figure key={image}>
                <a href={image} target="_blank" rel="noreferrer" aria-label={alt + ' (opens full image in a new tab)'}>
                  <img src={image} alt={alt} loading="lazy" />
                </a>
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="leadops-evidence-caption">
            The demo uses synthetic data. The hypotheses guide further investigation, and any CRM or automation changes require human review.
          </p>
        </section>
      </div>
    </>
  );
}

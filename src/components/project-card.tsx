// Adapted from Project Card by ravikatiyar162, retrieved through 21st.dev (5964).
// See ATTRIBUTION.md. Same image/content/link composition, adapted to project tokens.
import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';
export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string; description: string; link: string; index: string; category: string;
  tags: string[]; imgSrc?: string; imgAlt?: string; cover?: React.ReactNode; tone?: string;
}
export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({title,description,link,index,category,tags,imgSrc,imgAlt,cover,tone='',className='',...props},ref)=>(
    <article ref={ref} className={`project-card ${className}`} {...props}>
      <a href={link} className={`project-cover ${tone}`} aria-label={`Explore ${title}`}>
        {imgSrc ? <img src={imgSrc} alt={imgAlt||title} loading="lazy" width="1000" height="650"/> : cover}
        <span className="cover-arrow"><ArrowUpRight size={21} aria-hidden="true"/></span>
      </a>
      <div className="project-content"><div className="project-meta"><span>{index} / {category}</span><ArrowUpRight size={18} aria-hidden="true"/></div>
        <h3><a href={link}>{title}</a></h3><p>{description}</p><div className="tags">{tags.map(t=><span key={t}>{t}</span>)}</div>
      </div>
    </article>
  )
);
ProjectCard.displayName='ProjectCard';

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { portfolioCategories } from "@/lib/data";
import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";
import { WaterRevealText } from "./WaterRevealText";

export function CategoryPortfolioPage({ slug }: { slug: string }) {
  const category = portfolioCategories[slug];

  if (!category) return null;

  return (
    <main className="category-page">
      <section className="category-hero page-wrap">
        <Link href="/#services" className="text-link category-back-link">
          <ArrowLeft size={15} /> Back to Services
        </Link>
        <div className="category-heading">
          <Reveal>
            <p className="eyebrow">
              {category.number} / {category.label}
            </p>
            <h1>
              <AnimatedText
                lines={[
                  <span key={category.label}>
                    {category.title.split(" / ")[0]} <em><WaterRevealText>{category.title.split(" / ")[1]}</WaterRevealText></em>
                  </span>,
                ]}
              />
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="category-description">{category.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="category-work page-wrap">
        <div className="category-work-header">
          <p className="eyebrow">SELECTED WORK</p>
          <p className="category-work-count">
            {category.projects.length.toString().padStart(2, "0")} PROJECTS
          </p>
        </div>

        {category.projects.length > 0 ? (
          <div className="category-project-grid">
            {category.projects.map((project, index) => {
              const content = (
                <>
                  <div className={`category-project-visual visual-${category.tone}`}>
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} project preview`} />
                    ) : project.video ? (
                      <video src={project.video} muted loop playsInline />
                    ) : (
                      <span className="category-project-placeholder">{project.title.slice(0, 2).toUpperCase()}</span>
                    )}
                    <span className="visual-caption">{category.number} / ORYN STUDIO</span>
                  </div>
                  <div className="category-project-meta">
                    <div>
                      <p>{project.categories}</p>
                      <h2>{project.title}</h2>
                      <span>{project.description}</span>
                    </div>
                    <span className="project-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </>
              );

              return (
                <Reveal key={project.title} delay={index * 0.08}>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="category-project-card">
                      {content}
                    </a>
                  ) : (
                    <div className="category-project-card">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        ) : (
          <Reveal>
            <div className={`category-empty visual-${category.tone}`}>
              <p className="eyebrow">IN PROGRESS</p>
              <h2>New work is taking shape.</h2>
              <p>Published {category.label.toLowerCase()} projects will appear here as they launch.</p>
            </div>
          </Reveal>
        )}
      </section>
    </main>
  );
}

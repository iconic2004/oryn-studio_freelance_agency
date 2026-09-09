"use client";

import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolioCategories } from "@/lib/data";
import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";
import { WaterRevealText } from "./WaterRevealText";

type SelectedMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      alt: string;
    };

export function CategoryPortfolioPage({ slug }: { slug: string }) {
  const category = portfolioCategories[slug];

  const [selectedMedia, setSelectedMedia] =
    useState<SelectedMedia | null>(null);

  useEffect(() => {
    if (!selectedMedia) return;

    const previousBodyOverflow = document.body.style.overflow;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMedia(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedMedia]);

  if (!category) return null;

  return (
    <main className="category-page">
      <section className="category-hero page-wrap">
        <Link href="/#services" className="text-link category-back-link">
          <ArrowLeft size={15} />
          Back to Services
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
                    {category.title.split(" / ")[0]}{" "}
                    <em>
                      <WaterRevealText>
                        {category.title.split(" / ")[1]}
                      </WaterRevealText>
                    </em>
                  </span>,
                ]}
              />
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="category-description">
              {category.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="category-work page-wrap">
        <div className="category-work-header">
          <p className="eyebrow">HERE IS OUR WORK</p>

          <p className="category-work-count">
            {category.projects.length.toString().padStart(2, "0")} PROJECTS
          </p>
        </div>

        {category.projects.length > 0 ? (
          <div className="category-project-grid">
            {category.projects.map((project, index) => {
              const content = (
                <>
                  <div
                    className={`category-project-visual visual-${category.tone}`}
                  >
                    {project.videos?.length ? (
                      <div className="category-project-video-gallery">
                        {project.videos.map((video, videoIndex) => (
                          <button
                            key={video}
                            type="button"
                            className="category-project-video-button"
                            onClick={() =>
                              setSelectedMedia({
                                type: "video",
                                src: video,
                                alt: `${project.title} video preview ${
                                  videoIndex + 1
                                }`,
                              })
                            }
                            aria-label={`Open ${project.title} video ${
                              videoIndex + 1
                            }`}
                          >
                            <video
                              src={video}
                              muted
                              loop
                              autoPlay
                              playsInline
                              preload="metadata"
                            />

                            <span className="category-video-play">
                              ↗
                            </span>
                          </button>
                        ))}
                      </div>
                    ) : project.images?.length ? (
                      <div className="category-project-gallery">
                        {project.images.map((image, imageIndex) => (
                          <button
                            key={image}
                            type="button"
                            className="category-project-image-button"
                            onClick={() =>
                              setSelectedMedia({
                                type: "image",
                                src: image,
                                alt: `${project.title} project preview ${
                                  imageIndex + 1
                                }`,
                              })
                            }
                            aria-label={`Open ${project.title} project preview ${
                              imageIndex + 1
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${project.title} project preview ${
                                imageIndex + 1
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                      />
                    ) : project.video ? (
                      <video
                        src={project.video}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <span className="category-project-placeholder">
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    )}

                    <span className="visual-caption">
                      {category.number} / ORYN STUDIO
                    </span>
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
                <Reveal
                  key={project.title}
                  delay={index * 0.08}
                >
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="category-project-card"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="category-project-card">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        ) : (
          <Reveal>
            <div
              className={`category-empty visual-${category.tone}`}
            >
              <p className="eyebrow">IN PROGRESS</p>

              <h2>New work is taking shape.</h2>

              <p>
                Published {category.label.toLowerCase()} projects
                will appear here as they launch.
              </p>
            </div>
          </Reveal>
        )}
      </section>

      {selectedMedia && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project preview"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close expanded project preview"
          >
            <X size={22} />
          </button>

          {selectedMedia.type === "video" ? (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              playsInline
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </div>
      )}
    </main>
  );
}
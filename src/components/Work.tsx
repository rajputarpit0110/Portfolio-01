import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "Video Calling Web Application",
    category: "Real-Time Communication Platform",
    tools: "React.js, ZEGOCLOUD Call Kit, Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Currency Converter Web Application",
    category: "Real-Time Currency Converter",
    tools: "React.js, Exchange Rate API, Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Modern Restaurant Website",
    category: "Modern Responsive Restaurant Website",
    tools: "React.js, Tailwind CSS, Antigravity AI",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Salon Booking Website",
    category: "Modern Salon Booking Platform",
    tools: "React.js, Tailwind CSS, Antigravity AI",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
  },
];

const Work = () => {
  useGSAP(() => {
    const workSection = document.querySelector(
      ".work-section"
    ) as HTMLElement;

    const workFlex = document.querySelector(
      ".work-flex"
    ) as HTMLElement;

    const totalScroll =
      workFlex.scrollWidth - window.innerWidth;

    gsap.to(workFlex, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: workSection,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
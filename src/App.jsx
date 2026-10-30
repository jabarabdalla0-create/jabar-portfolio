import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Menu,
  X,
  Github,
} from "lucide-react";
import { art } from "./art.jsx";
import {
  profile,
  emailConfig,
  nav,
  highlights,
  projects,
  skills,
  projectTypes,
} from "./content.js";
gsap.registerPlugin(ScrollTrigger);

const media = (filename) => `${import.meta.env.BASE_URL}media/${filename}`;

const go = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const Words = ({ text, cls = "" }) =>
  text.split("\n").map((line, i) => (
    <span className={`line ${cls}`} key={i}>
      {line.split(" ").map((w, j) => (
        <span className="mask" key={j}>
          <span className="w">{w}</span>{" "}
        </span>
      ))}
    </span>
  ));

function Navbar({ active }) {
  const [open, setOpen] = useState(false),
    [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => {
      const y =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setSolid(y > 60);
    };
    f();
    addEventListener("scroll", f, { passive: true });
    document.addEventListener("scroll", f, { passive: true, capture: true });
    addEventListener("resize", f);
    return () => {
      removeEventListener("scroll", f);
      document.removeEventListener("scroll", f, true);
      removeEventListener("resize", f);
    };
  }, []);
  const to = (id) => {
    setOpen(false);
    go(id);
  };
  return (
    <header className={`nav ${solid ? "solid" : ""} ${open ? "menu" : ""}`}>
      <a
        href="#home"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          to("home");
        }}
      >
        JABAR.
      </a>
      <nav className={open ? "open" : ""} aria-label="Main">
        {nav.map(([l, id]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              to(id);
            }}
          >
            {l}
          </a>
        ))}
        <button className="btn sm mobile-only" onClick={() => to("contact")}>
          Let's talk
        </button>
      </nav>
      <button className="btn sm desk-only" onClick={() => go("contact")}>
        Let's talk
      </button>
      <button
        className="burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  const [failed, setFailed] = useState(false),
    vid = useRef(null);
  useEffect(() => {
    const v = vid.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    const play = () => v.play().catch(() => {});
    play();
    v.addEventListener("canplay", play);
    const once = () => {
      play();
      ["pointerdown", "touchstart", "scroll", "keydown"].forEach((e) =>
        removeEventListener(e, once),
      );
    };
    ["pointerdown", "touchstart", "scroll", "keydown"].forEach((e) =>
      addEventListener(e, once, { passive: true }),
    );
    return () => {
      v.removeEventListener("canplay", play);
      ["pointerdown", "touchstart", "scroll", "keydown"].forEach((e) =>
        removeEventListener(e, once),
      );
    };
  }, []);
  return (
    <section id="home" className="hero" data-section>
      {!failed && (
        <video
          ref={vid}
          className="bg"
          src={media("hero.mp4")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={media("poster.jpg")}
          onError={() => setFailed(true)}
        />
      )}
      {failed && <img className="bg" src={media("poster.jpg")} alt="" />}
      <div className="shade" />
      <div className="hero-inner">
        <p className="kicker">Independent developer, Kurdistan, Iraq</p>
        <h1 className="hero-h">
          <Words text={"CRAFTING\nDIGITAL EXPERIENCES."} />
        </h1>
        <p className="hero-name">Jabar Abdulla</p>
        <p className="lead">
          I build modern, interactive, and responsive web experiences that
          combine thoughtful design with clean front-end development.
        </p>
        <div className="row">
          <button className="btn" onClick={() => go("projects")}>
            Explore my work <ArrowUpRight size={18} />
          </button>
          <button className="btn ghost" onClick={() => go("contact")}>
            Let's talk
          </button>
        </div>
      </div>
      <p className="loc">Based in Kurdistan, Iraq</p>
      <div className="scroll-ind" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="sec about" data-section>
      <p className="label">01 / About me</p>
      <h2 className="big">
        <Words text={"DESIGN MINDED.\nCODE DRIVEN."} />
      </h2>
      <div className="about-grid">
        <div className="prose scrub-text">
          <p>
            I'm Jabar Abdulla, a front-end developer passionate about building
            modern websites that combine creativity, functionality, and
            performance.
          </p>
          <p>
            I enjoy transforming ideas into engaging digital experiences, from
            clean business websites to interactive portfolios and visually
            distinctive landing pages.
          </p>
          <p>
            My focus is on writing maintainable code, creating responsive
            interfaces, and making websites that feel smooth and intuitive to
            use.
          </p>
          <p>
            I'm always learning new technologies and exploring better ways to
            bring creative ideas to life.
          </p>
        </div>
        <ul className="cards">
          {highlights.map(([t, d], i) => (
            <li className="card reveal" key={t}>
              <span className="num">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects" data-section>
      <div className="track-wrap">
        <div className="proj-head sec">
          <p className="label">02 / Selected work</p>
          <h2 className="big">
            <Words text={"IDEAS INTO\nEXPERIENCES."} />
          </h2>
        </div>
        <div className="track">
          {projects.map((p, i) => (
            <article className="proj" key={p.title} style={{ "--hue": p.hue }}>
              <div className="shot">
                <div className="shot-in">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                    />
                  ) : (
                    (() => {
                      const A = art[p.art];
                      return A ? (
                        <div className="ph art">
                          <A />
                        </div>
                      ) : (
                        <div className="ph">
                          <span>0{i + 1}</span>
                        </div>
                      );
                    })()
                  )}
                </div>
              </div>
              <div className="proj-body">
                <span className="num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="row">
                  <a
                    className="btn sm"
                    href={p.live || undefined}
                    aria-disabled={!p.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => !p.live && e.preventDefault()}
                  >
                    {p.live ? "Live demo" : "Demo soon"}{" "}
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    className="btn sm ghost"
                    href={p.code || undefined}
                    aria-disabled={!p.code}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => !p.code && e.preventDefault()}
                  >
                    <Github size={16} /> {p.code ? "Source" : "Source soon"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="sec" data-section>
      <p className="label">03 / Toolkit</p>
      <h2 className="big">
        <Words text={"TOOLS I USE\nTO BUILD FOR THE WEB."} />
      </h2>
      <ul className="skills">
        {skills.map(([n, s]) => (
          <li key={n} className={`skill reveal ${s}`}>
            <span className="dot" />
            {n}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experiments() {
  const ref = useRef(null);
  const tilt = (e) => {
    const r = ref.current.getBoundingClientRect();
    gsap.to(ref.current.querySelector(".stage"), {
      rotateY: ((e.clientX - r.left) / r.width - 0.5) * 14,
      rotateX: -((e.clientY - r.top) / r.height - 0.5) * 10,
      duration: 0.6,
      ease: "power3.out",
    });
  };
  return (
    <section
      className="sec lab"
      data-section
      ref={ref}
      onPointerMove={tilt}
      aria-label="Creative experiment"
    >
      <div className="glow g1" />
      <div className="glow g2" />
      <div className="persp">
        <div className="stage">
          <h2 className="lab-h">
            <Words text={"THE WEB CAN\nFEEL DIFFERENT."} />
          </h2>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [state, setState] = useState("idle"),
    [err, setErr] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    if (state === "sending") return;
    const f = e.currentTarget;
    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }
    if (f.querySelector('[name="_gotcha"]')?.value) {
      setState("sent");
      f.reset();
      return;
    }
    setState("sending");
    setErr("");
    try {
      const data = new FormData(f);
      const params = {
        name: data.get("name"),
        from_name: data.get("name"),
        email: data.get("email"),
        from_email: data.get("email"),
        reply_to: data.get("email"),
        project_type: data.get("project_type"),
        message: data.get("message"),
        to_email: profile.email,
      };
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        params,
        { publicKey: emailConfig.publicKey },
      );
      setState("sent");
      f.reset();
    } catch (er) {
      console.error("EmailJS error:", er);
      setState("error");
      setErr(
        "Not sent. Reason: " +
          (er?.text || er?.message || "unknown error") +
          (er?.status ? ` (code ${er.status})` : "") +
          ". You can also email me directly.",
      );
    }
  };
  return (
    <section id="contact" className="sec contact" data-section>
      <p className="label">04 / Contact</p>
      <h2 className="big">
        <Words text={"HAVE AN IDEA?\nLET'S BUILD IT."} />
      </h2>
      <div className="contact-grid">
        <div>
          <p className="lead">
            Have a business that needs a website, an interesting project in
            mind, or an idea you'd like to bring to life? Let's talk.
          </p>
          <ul className="links">
            <li>
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} /> {profile.email}
              </a>
            </li>
            <li>
              <a href="tel:+9647510572447">
                <Phone size={18} /> {profile.phone}
              </a>
            </li>
            <li>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp 07510572447
              </a>
            </li>
            <li>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
              >
                <Instagram size={18} /> Instagram
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Project type
            <select name="project_type" defaultValue="">
              {
                <option value="" disabled>
                  Choose one
                </option>
              }
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required minLength="10" />
          </label>
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            className="hp"
            aria-hidden="true"
          />
          <button className="btn" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" className={`msg ${state}`}>
            {state === "sent" &&
              "Thanks for reaching out! Your message has been sent successfully."}
            {state === "error" && err}
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div>
        <strong>JABAR ABDULLA</strong>
        <p>Building meaningful experiences for the modern web.</p>
      </div>
      <nav aria-label="Footer">
        {[
          ["Home", "home"],
          ["Projects", "projects"],
          ["Contact", "contact"],
        ].map(([l, i]) => (
          <a
            key={i}
            href={`#${i}`}
            onClick={(e) => {
              e.preventDefault();
              go(i);
            }}
          >
            {l}
          </a>
        ))}
      </nav>
      <p>© {new Date().getFullYear()}</p>
      <button
        className="top"
        aria-label="Back to top"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}

export default function App() {
  const root = useRef(null),
    [active, setActive] = useState("home");
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero: one orchestrated reveal, then scrub the headline away
        gsap.from(".hero .w", {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.07,
          ease: "power4.out",
          delay: 0.2,
        });
        gsap.from(".hero .kicker,.hero-name,.hero .lead,.hero .row,.loc", {
          opacity: 0,
          y: 24,
          duration: 1,
          stagger: 0.12,
          delay: 0.7,
        });
        gsap.to(".hero-inner", {
          yPercent: -18,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(".hero .bg", {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        // Section headings: masked word reveal
        gsap.utils.toArray(".big,.lab-h").forEach((h) =>
          gsap.from(h.querySelectorAll(".w"), {
            yPercent: 110,
            duration: 1,
            stagger: 0.06,
            ease: "power4.out",
            scrollTrigger: { trigger: h, start: "top 85%" },
          }),
        );
        // About: paragraphs light up with scroll
        gsap.utils.toArray(".scrub-text p").forEach((p) =>
          gsap.fromTo(
            p,
            { opacity: 0.2 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: p,
                start: "top 80%",
                end: "top 45%",
                scrub: true,
              },
            },
          ),
        );
        gsap.utils.toArray(".reveal").forEach((el, i) =>
          gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            delay: (i % 4) * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 92%" },
          }),
        );
        // Lab: scroll-reactive perspective
        gsap.fromTo(
          ".stage",
          { rotateX: 35, scale: 0.85 },
          {
            rotateX: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".lab",
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          },
        );
        gsap.to(".g1", {
          yPercent: -40,
          ease: "none",
          scrollTrigger: { trigger: ".lab", scrub: true },
        });
        gsap.to(".g2", {
          yPercent: 40,
          ease: "none",
          scrollTrigger: { trigger: ".lab", scrub: true },
        });
      });
      // Pinned horizontal gallery on desktop only; natural vertical stack elsewhere
      mm.add(
        "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = root.current.querySelector(".track"),
            wrap = root.current.querySelector(".track-wrap");
          const dist = () => track.scrollWidth - innerWidth + innerWidth * 0.08;
          gsap.to(track, {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              pin: true,
              scrub: 0.6,
              start: "top top",
              end: () => "+=" + dist(),
              invalidateOnRefresh: true,
            },
          });
          gsap.utils.toArray(".shot-in").forEach((el) =>
            gsap.fromTo(
              el,
              { scale: 1.25 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: el.closest(".proj"),
                  containerAnimation: gsap.getTweensOf(track)[0],
                  start: "left 95%",
                  end: "left 40%",
                  scrub: true,
                },
              },
            ),
          );
        },
      );
      mm.add(
        "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.utils.toArray(".proj").forEach((el) =>
            gsap.from(el, {
              opacity: 0,
              y: 50,
              duration: 0.9,
              scrollTrigger: { trigger: el, start: "top 90%" },
            }),
          );
        },
      );
    }, root);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    root.current.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    addEventListener("load", refresh);
    return () => {
      ctx.revert();
      io.disconnect();
      removeEventListener("load", refresh);
    };
  }, []);
  return (
    <div ref={root}>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

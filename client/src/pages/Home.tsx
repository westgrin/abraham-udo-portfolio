/* SIGNAL LEDGER — Evidence-led Cloud/DevOps portfolio page. The layout uses an operational side rail, dossier-like projects, and Telemetry Teal as the health signal. */
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  CheckCircle2,
  CloudCog,
  Github,
  Mail,
  MapPin,
  ServerCog,
} from "lucide-react";

const projects = [
  {
    id: "PRJ-01",
    title: "ECS web application delivery pipeline",
    description: "A modular infrastructure build that containers a Node.js application, places the image in ECR, provisions an ECS cluster and service, and drives the workflow through Terraform and GitHub Actions.",
    outcome: "Evidence: containers, registry, orchestration, IaC, automation",
    tech: ["Terraform", "Docker", "ECR", "ECS", "GitHub Actions"],
    href: "https://github.com/westgrin/terraform-ecs-webapp",
    className: "hero-project has-image",
    style: { backgroundImage: 'url("/manus-storage/abraham-udo-hero-cloud-topology_5fa28f72.jpg")' },
  },
  {
    id: "PRJ-02",
    title: "Kubernetes observability with Prometheus",
    description: "Deployed Prometheus and Node Exporter to Minikube, configured metric scraping and alert rules, then validated monitored targets and high-CPU alerting.",
    outcome: "Outcome: measurable cluster health signals",
    tech: ["Kubernetes", "Prometheus", "Helm", "Docker"],
    href: "https://github.com/westgrin/prometheus-kubernetes",
    className: "tall-project has-image",
    style: { backgroundImage: 'url("/manus-storage/abraham-udo-monitoring-dossier_117bf09b.jpg")' },
  },
  {
    id: "PRJ-03",
    title: "High-availability web tier on AWS",
    description: "Configured a Launch Template, Application Load Balancer, target group, and CPU-driven Auto Scaling Group; traffic testing verified dynamic instance scaling.",
    outcome: "Evidence: resilience, scaling policy, traffic distribution",
    tech: ["AWS", "ALB", "Auto Scaling", "EC2"],
    href: "https://github.com/westgrin/Load_Balancer_and_Auto_Scaling",
    className: "small-project",
  },
  {
    id: "PRJ-04",
    title: "Terraform modules with remote state control",
    description: "Created reusable VPC and S3 modules, then configured S3 remote state with DynamoDB locking and a GitHub Actions automation path.",
    outcome: "Evidence: modular IaC and state governance",
    tech: ["Terraform", "VPC", "S3", "DynamoDB"],
    href: "https://github.com/westgrin/terraform-modules-vpc-s3",
    className: "small-project",
  },
  {
    id: "PRJ-05",
    title: "Nginx configuration management with Ansible",
    description: "Automated Nginx installation and site configuration on an AWS EC2 target using an Ansible inventory and separate deployment playbooks.",
    outcome: "Evidence: repeatable configuration and HTTP validation",
    tech: ["Ansible", "Nginx", "AWS EC2", "GitHub Actions"],
    href: "https://github.com/westgrin/ansible-nginx-deployment",
    className: "small-project",
  },
  {
    id: "PRJ-06",
    title: "Advanced CI quality gates",
    description: "Created a modular Node.js CI workflow with version matrices, dependency caching, tests, linting, health checks, and secret-aware configuration.",
    outcome: "Evidence: quality gates beyond a basic build",
    tech: ["GitHub Actions", "Jest", "ESLint", "Node.js"],
    href: "https://github.com/westgrin/Advanced_GitHub_Actions",
    className: "small-project",
  },
  {
    id: "PRJ-07",
    title: "Automated WordPress deployment on AWS",
    description: "Provisioned a scalable WordPress environment with a secure VPC, EC2, RDS, EFS, ALB, Auto Scaling, and Terraform-driven workflow.",
    outcome: "Evidence: integrated application infrastructure",
    tech: ["AWS", "Terraform", "RDS", "EFS"],
    href: "https://github.com/westgrin/terraform-wordpress-aws",
    className: "small-project",
  },
  {
    id: "PRJ-08",
    title: "Gatus uptime monitoring & alerting",
    description: "Containerized availability monitoring for websites and APIs, with tuned checks, dashboard customization, and Slack incident notifications.",
    outcome: "Evidence: active endpoint visibility",
    tech: ["Gatus", "Docker", "Slack", "YAML"],
    href: "https://github.com/westgrin/gatus-monitoring",
    className: "small-project",
  },
];

const skillGroups = [
  ["Cloud & infrastructure", "AWS (EC2, S3, IAM, VPC, RDS, EFS, ALB, Auto Scaling), Azure DevOps, GCP, DigitalOcean"],
  ["Infrastructure as code", "Terraform, AWS CloudFormation, Pulumi"],
  ["Containers", "Docker, Kubernetes, Minikube, Helm"],
  ["CI/CD & automation", "Jenkins, GitHub Actions, Bash scripting, pipeline workflows"],
  ["Monitoring", "Prometheus, Gatus, and foundational Grafana experience"],
  ["Systems & networking", "Linux / Ubuntu, WSL, Git, GitHub, TCP/IP, DNS, HTTP/HTTPS, SSH"],
];

const experiences = [
  {
    date: "APR 2024 — APR 2025",
    role: "Administrative & Academic Support",
    org: "National Youth Service Corps · Government Secondary School, Jos",
    copy: "Maintained academic and administrative records, prepared routine documentation, coordinated communication, and supported structured school activities throughout the service year.",
  },
  {
    date: "MAY 2021 — JUL 2021",
    role: "Industrial Intern",
    org: "Federal Ministry of Mines & Steel Development · Mines Inspectorate",
    copy: "Supported field inspection and compliance activities, organized technical information, prepared reports, and strengthened a careful approach to documentation and problem-solving.",
  },
  {
    date: "AUG 2021 — NOV 2021",
    role: "Industrial Intern",
    org: "Malcomines Minor Metals · Jos",
    copy: "Contributed to geological field activities, sample record keeping, technical summaries, and collaborative field operations.",
  },
];

export default function Home() {
  return (
    <div className="ledger-shell">
      <aside className="ledger-rail" aria-label="Primary navigation">
        <a className="rail-logo" href="#top" aria-label="Abraham Udo home">
          <img src="/manus-storage/abraham-udo-logo-mark_5760a7d8.png" alt="AU routing mark" />
        </a>
        <div className="rail-monogram" aria-hidden="true">AU/</div>
        <nav className="rail-nav" aria-label="Portfolio sections">
          <a href="#work">WORK</a>
          <a href="#stack">STACK</a>
          <a href="#experience">PATH</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="rail-status"><span className="status-dot" />AVAILABLE</div>
      </aside>

      <main className="site-main" id="top">
        <div className="ledger-signal" aria-hidden="true" />
        <div className="utility-bar">
          <span className="location"><MapPin size={12} strokeWidth={1.8} />JOS, NIGERIA</span>
          <div className="utility-right"><span>Cloud & DevOps Engineer</span><a href="https://github.com/westgrin" target="_blank" rel="noreferrer">GitHub / westgrin</a></div>
        </div>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div>
              <div className="brand-lockup"><img src="/manus-storage/abraham-udo-logo-mark_5760a7d8.png" alt="" /><span className="brand-monogram">AU/</span><span className="brand-name">Abraham Udo</span><span className="brand-discipline">Cloud systems</span></div>
              <div className="eyebrow">Infrastructure log · 2026</div>
              <h1 id="hero-title">Abraham <span>Udo.</span></h1>
              <div className="portrait-mobile"><img src="/manus-storage/abraham-udo-portrait_3561184d.webp" alt="Portrait of Abraham Udo" /><span><strong>Abraham Udo</strong> Cloud & DevOps Engineer</span></div>
              <p className="hero-sub">I build dependable cloud systems through infrastructure as code, thoughtful automation, and observable delivery workflows.</p>
              <div className="hero-actions">
                <a className="action-primary" href="#work">View project records <ArrowDown size={16} /></a>
                <a className="action-secondary" href="mailto:udoabraham73@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-aside">
              <div className="portrait-frame"><img src="/manus-storage/abraham-udo-portrait_3561184d.webp" alt="Abraham Udo, Cloud and DevOps Engineer" /></div>
              <div className="stamp">STATUS: AVAILABLE<br />FOCUS: RELIABILITY</div>
              <p>Cloud infrastructure, delivery automation, and systems that remain visible under load.</p>
            </div>
          </div>
          <div className="scroll-cue">Scroll to inspect <ArrowDown size={14} /></div>
        </section>

        <section className="section section-dark" id="about" aria-labelledby="scope-title">
          <div className="section-label">
            <div className="section-no">01 / SCOPE</div>
            <div>
              <p className="section-kicker">The operating principle</p>
              <h2 className="section-title" id="scope-title">A practical DevOps profile, built around reliable systems.</h2>
            </div>
          </div>
          <div className="scope-layout">
            <p className="scope-quote">From AWS provisioning to Kubernetes monitoring, I work toward <em>systems that are secure, observable, and easier to operate.</em></p>
            <div className="scope-note">
              <p>My work combines Linux administration, cloud services, container platforms, CI/CD automation, and documentation discipline. I am especially interested in reliability-minded infrastructure for financial technology environments.</p>
              <div className="focus-tags"><span>SECURITY</span><span>OBSERVABILITY</span><span>AUTOMATION</span><span>INFRASTRUCTURE AS CODE</span></div>
            </div>
          </div>
        </section>

        <section className="section section-white" id="team-fit" aria-labelledby="team-fit-title">
          <div className="section-label">
            <div className="section-no">02 / TEAM FIT</div>
            <div>
              <p className="section-kicker">How I add operational value</p>
              <h2 className="section-title" id="team-fit-title">More than a tool list: an engineering mindset built for dependable delivery.</h2>
            </div>
          </div>
          <div className="recruiter-grid">
            <div>
              <p className="recruiter-lede">I am most useful where a team needs to turn <strong>manual setup into versioned practice</strong>, make deployments easier to trust, and improve the signal around what is running.</p>
              <div className="role-signal"><span>Ready to contribute in</span><strong>CLOUD / DEVOPS</strong><strong>INFRASTRUCTURE AUTOMATION</strong><strong>PLATFORM OPERATIONS</strong></div>
            </div>
            <div className="recruiter-manifest">
              <div className="manifest-item"><span>01</span><div><h3>Build with repeatability in mind.</h3><p>Terraform modules, Ansible playbooks, and documented workflows make the path from intent to environment clearer and easier to maintain.</p></div></div>
              <div className="manifest-item"><span>02</span><div><h3>Treat visibility as part of delivery.</h3><p>Health endpoints, Prometheus, Node Exporter, and Gatus reflect an instinct to verify behaviour after systems are deployed.</p></div></div>
              <div className="manifest-item"><span>03</span><div><h3>Keep operational context clear.</h3><p>My technical documentation, reporting background, and hands-on repositories show a preference for traceable work that teammates can understand and continue.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section section-cream" id="work" aria-labelledby="work-title">
          <div className="section-label">
            <div className="section-no">03 / WORK</div>
            <div>
              <p className="section-kicker">Selected deployment records</p>
              <h2 className="section-title" id="work-title">Projects that turn platform concepts into working infrastructure.</h2>
              <p className="section-intro">The lead records below are selected from my public GitHub work because they connect real implementation steps across provisioning, delivery, containers, monitoring, and configuration management.</p>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.id} style={project.style}>
                <div className="project-meta"><span className="project-id">{project.id}</span><span>Repository</span></div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><ArrowUpRight size={18} /></a>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-outcome">{project.outcome}</p>
                <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-white" id="stack" aria-labelledby="stack-title">
          <div className="section-label">
            <div className="section-no">04 / STACK</div>
            <div>
              <p className="section-kicker">Tools I reach for</p>
              <h2 className="section-title" id="stack-title">A working stack for automated, observable cloud delivery.</h2>
            </div>
          </div>
          <div className="stack-ledger">
            <aside className="stack-stamp"><p>Stack control</p><strong>Tools chosen to make delivery more dependable.</strong><span>06 CAPABILITY GROUPS</span></aside>
            <div className="skills-layout">
              {skillGroups.map(([title, skills]) => (
                <div className="skill-row" key={title}><h3>{title}</h3><p>{skills}</p></div>
              ))}
            </div>
          </div>
          <div className="skills-visual" aria-label="Abstract infrastructure architecture visual">
            <div className="skills-caption"><h3>Make infrastructure legible.</h3><p>Version the configuration, validate the pathway, measure the outcome, and improve the operational surface.</p></div>
          </div>
        </section>

        <section className="section section-dark" id="experience" aria-labelledby="experience-title">
          <div className="section-label">
            <div className="section-no">05 / PATH</div>
            <div>
              <p className="section-kicker">Experience & foundations</p>
              <h2 className="section-title" id="experience-title">Documentation discipline, technical practice, and an evolving infrastructure career.</h2>
            </div>
          </div>
          <div className="experience-layout">
            <div className="section-no">TIMELINE</div>
            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-item" key={`${experience.date}-${experience.role}`}>
                  <div className="timeline-date">{experience.date}</div>
                  <div><h3 className="timeline-role">{experience.role}</h3><p className="timeline-org">{experience.org}</p><p className="timeline-copy">{experience.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-cream" aria-labelledby="credentials-title">
          <div className="section-label">
            <div className="section-no">06 / BASE</div>
            <div><p className="section-kicker">Credentials & education</p><h2 className="section-title" id="credentials-title">Built on continuous learning and a geoscience foundation.</h2></div>
          </div>
          <div className="credentials">
            <div className="credential-ledger">
              <div className="credential-ledger-heading"><p>Verification ledger</p><span>03 / 03</span></div>
              <div className="credential-list">
                <div className="credential"><div><h3>ISC2 Certified in Cybersecurity (CC)</h3><p>ISSUED · JUL 2024</p></div><Award size={20} /></div>
                <div className="credential"><div><h3>AWS Cloud Fundamentals Training</h3><p>COMPLETED · AUG 2022</p></div><CloudCog size={20} /></div>
                <div className="credential"><div><h3>DevOps Engineering Certificate, 3MTT</h3><p>FEDERAL GOVERNMENT OF NIGERIA · JUL 2025</p></div><ServerCog size={20} /></div>
              </div>
            </div>
            <div className="education-block"><p className="section-kicker">Education</p><h3>BSc, Geology<br />University of Jos</h3><p>Graduated in 2023. The program developed experience in field investigation, technical reporting, data discipline, and systematic problem-solving.</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-topline">Next deployment</div>
          <h2 className="contact-title" id="contact-title"><a href="mailto:udoabraham73@gmail.com">Let’s make it<br />more reliable. <ArrowUpRight aria-hidden="true" /></a></h2>
          <div className="contact-grid">
            <p>Send the next deployment brief, platform question, or reliability conversation. I am available to discuss Cloud and DevOps opportunities where practical automation matters.</p>
            <div className="contact-links"><a href="mailto:udoabraham73@gmail.com"><Mail size={15} />Open email channel</a><a href="https://github.com/westgrin" target="_blank" rel="noreferrer"><Github size={15} />Inspect GitHub record</a><a href="tel:+2348141892328"><CheckCircle2 size={15} />Open phone channel</a></div>
          </div>
        </section>
        <footer className="footer"><span className="footer-brand"><img src="/manus-storage/abraham-udo-logo-mark_5760a7d8.png" alt="" /><strong>AU/</strong> © 2026 Abraham Udo</span><a href="#top">Return to top ↑</a></footer>
      </main>
    </div>
  );
}

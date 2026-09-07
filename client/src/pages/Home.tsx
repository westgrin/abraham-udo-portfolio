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

const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;

const projects = [
  {
    id: "PRJ-01",
    title: "ECS web application delivery pipeline",
    description: "I packaged a Node.js application in Docker, stored the image in ECR, and used Terraform to set up the ECS environment that runs it. GitHub Actions ties the delivery steps together.",
    outcome: "What it shows: containers, cloud delivery, and automation",
    tech: ["Terraform", "Docker", "ECR", "ECS", "GitHub Actions"],
    href: "https://github.com/westgrin/terraform-ecs-webapp",
    className: "hero-project has-image",
    style: { backgroundImage: `url("${asset("abraham-udo-hero-cloud-topology.jpg")}")` },
  },
  {
    id: "PRJ-02",
    title: "Kubernetes observability with Prometheus",
    description: "I set up Prometheus and Node Exporter on a Minikube cluster, then configured alerts so I could see what was happening inside the environment before a problem became harder to trace.",
    outcome: "What it shows: practical monitoring and alerting",
    tech: ["Kubernetes", "Prometheus", "Helm", "Docker"],
    href: "https://github.com/westgrin/prometheus-kubernetes",
    className: "tall-project has-image",
    style: { backgroundImage: `url("${asset("abraham-udo-monitoring-dossier.jpg")}")` },
  },
  {
    id: "PRJ-03",
    title: "High-availability web tier on AWS",
    description: "I built a web tier that can respond to changing demand, using an Application Load Balancer and CPU-based Auto Scaling. I also tested it with traffic to confirm that scaling worked as expected.",
    outcome: "What it shows: availability and capacity planning",
    tech: ["AWS", "ALB", "Auto Scaling", "EC2"],
    href: "https://github.com/westgrin/Load_Balancer_and_Auto_Scaling",
    className: "small-project",
  },
  {
    id: "PRJ-04",
    title: "Terraform modules with remote state control",
    description: "I organised the VPC and S3 setup into reusable Terraform modules, then configured remote state with DynamoDB locking so changes could be managed more safely and consistently.",
    outcome: "What it shows: reusable infrastructure and safer state management",
    tech: ["Terraform", "VPC", "S3", "DynamoDB"],
    href: "https://github.com/westgrin/terraform-modules-vpc-s3",
    className: "small-project",
  },
  {
    id: "PRJ-05",
    title: "Nginx configuration management with Ansible",
    description: "I used Ansible playbooks to install and configure Nginx on an AWS EC2 instance, keeping the process repeatable instead of relying on manual server changes.",
    outcome: "What it shows: repeatable server configuration",
    tech: ["Ansible", "Nginx", "AWS EC2", "GitHub Actions"],
    href: "https://github.com/westgrin/ansible-nginx-deployment",
    className: "small-project",
  },
  {
    id: "PRJ-06",
    title: "Advanced CI quality gates",
    description: "I built a Node.js CI workflow that checks more than whether an app starts. It runs tests and linting, uses version matrices and dependency caching, and handles configuration with care.",
    outcome: "What it shows: a thoughtful approach to CI quality",
    tech: ["GitHub Actions", "Jest", "ESLint", "Node.js"],
    href: "https://github.com/westgrin/Advanced_GitHub_Actions",
    className: "small-project",
  },
  {
    id: "PRJ-07",
    title: "Automated WordPress deployment on AWS",
    description: "I brought together networking, compute, storage, a database, load balancing, and auto scaling in one Terraform-led WordPress environment on AWS.",
    outcome: "What it shows: end-to-end cloud infrastructure",
    tech: ["AWS", "Terraform", "RDS", "EFS"],
    href: "https://github.com/westgrin/terraform-wordpress-aws",
    className: "small-project",
  },
  {
    id: "PRJ-08",
    title: "Gatus uptime monitoring & alerting",
    description: "I used Gatus in Docker to keep an eye on websites and APIs, with clear checks, a tailored dashboard, and Slack notifications when an endpoint needs attention.",
    outcome: "What it shows: practical uptime monitoring",
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
          <img src={asset("abraham-udo-logo-mark.png")} alt="AU routing mark" />
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
              <div className="brand-lockup"><img src={asset("abraham-udo-logo-mark.png")} alt="" /><span className="brand-monogram">AU/</span><span className="brand-name">Abraham Udo</span><span className="brand-discipline">Cloud systems</span></div>
              <div className="eyebrow">Infrastructure log · 2026</div>
              <h1 id="hero-title">Abraham <span>Udo.</span></h1>
              <div className="portrait-mobile"><img src={asset("abraham-udo-portrait.webp")} alt="Portrait of Abraham Udo" /><span><strong>Abraham Udo</strong> Cloud & DevOps Engineer</span></div>
              <p className="hero-sub">I am a Cloud and DevOps engineer who enjoys making infrastructure easier to run, easier to understand, and more reliable for the people who depend on it.</p>
              <div className="hero-actions">
                <a className="action-primary" href="#work">View project records <ArrowDown size={16} /></a>
                <a className="action-secondary" href="mailto:udoabraham73@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-aside">
              <div className="portrait-frame"><img src={asset("abraham-udo-portrait.webp")} alt="Abraham Udo, Cloud and DevOps Engineer" /></div>
              <div className="stamp">STATUS: AVAILABLE<br />FOCUS: RELIABILITY</div>
              <p>Cloud infrastructure, delivery automation, and a practical focus on systems that stay clear and dependable as they grow.</p>
            </div>
          </div>
          <div className="scroll-cue">Scroll to inspect <ArrowDown size={14} /></div>
        </section>

        <section className="section section-dark" id="about" aria-labelledby="scope-title">
          <div className="section-label">
            <div className="section-no">01 / SCOPE</div>
            <div>
              <p className="section-kicker">The operating principle</p>
              <h2 className="section-title" id="scope-title">I care about building systems that people can run with confidence.</h2>
            </div>
          </div>
          <div className="scope-layout">
            <p className="scope-quote">From AWS provisioning to Kubernetes monitoring, I am learning to build <em>systems that are secure, visible, and easier to look after.</em></p>
            <div className="scope-note">
              <p>My work brings together Linux, cloud services, containers, CI/CD, and careful documentation. I am particularly interested in the kind of dependable infrastructure that helps financial technology teams move quickly without losing control.</p>
              <div className="focus-tags"><span>SECURITY</span><span>OBSERVABILITY</span><span>AUTOMATION</span><span>INFRASTRUCTURE AS CODE</span></div>
            </div>
          </div>
        </section>

        <section className="section section-white" id="team-fit" aria-labelledby="team-fit-title">
          <div className="section-label">
            <div className="section-no">02 / TEAM FIT</div>
            <div>
              <p className="section-kicker">How I add operational value</p>
              <h2 className="section-title" id="team-fit-title">The way I work matters as much as the tools I use.</h2>
            </div>
          </div>
          <div className="recruiter-grid">
            <div>
              <p className="recruiter-lede">I work best with teams that want to turn <strong>manual setup into a clear, repeatable process</strong>, make deployments easier to trust, and know what their systems are doing after release.</p>
              <div className="role-signal"><span>Ready to contribute in</span><strong>CLOUD / DEVOPS</strong><strong>INFRASTRUCTURE AUTOMATION</strong><strong>PLATFORM OPERATIONS</strong></div>
            </div>
            <div className="recruiter-manifest">
              <div className="manifest-item"><span>01</span><div><h3>Make repeatability the default.</h3><p>I use Terraform modules, Ansible playbooks, and clear documentation to make infrastructure less dependent on memory or one-off manual changes.</p></div></div>
              <div className="manifest-item"><span>02</span><div><h3>Check what happens after deployment.</h3><p>Health endpoints, Prometheus, Node Exporter, and Gatus are part of how I make sure a deployed service is still doing what it should.</p></div></div>
              <div className="manifest-item"><span>03</span><div><h3>Leave a useful trail for the next person.</h3><p>My background in reporting and technical documentation has made me deliberate about recording what changed, why it changed, and how it can be continued.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section section-cream" id="work" aria-labelledby="work-title">
          <div className="section-label">
            <div className="section-no">03 / WORK</div>
            <div>
              <p className="section-kicker">Selected deployment records</p>
              <h2 className="section-title" id="work-title">Projects where I put the learning into practice.</h2>
              <p className="section-intro">These are selected from my public GitHub work because each one combines real implementation steps across cloud provisioning, delivery, containers, monitoring, or configuration management.</p>
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
              <h2 className="section-title" id="stack-title">The tools I have used to build, automate, and monitor cloud environments.</h2>
            </div>
          </div>
          <div className="stack-ledger">
            <aside className="stack-stamp"><p>Working toolkit</p><strong>Tools I keep returning to when I want delivery to be more dependable.</strong><span>06 CAPABILITY GROUPS</span></aside>
            <div className="skills-layout">
              {skillGroups.map(([title, skills]) => (
                <div className="skill-row" key={title}><h3>{title}</h3><p>{skills}</p></div>
              ))}
            </div>
          </div>
          <div className="skills-visual" aria-label="Abstract infrastructure architecture visual">
            <div className="skills-caption"><h3>Keep infrastructure understandable.</h3><p>Version the setup, check the path to deployment, measure what is running, and improve what the team has to operate.</p></div>
          </div>
        </section>

        <section className="section section-dark" id="experience" aria-labelledby="experience-title">
          <div className="section-label">
            <div className="section-no">05 / PATH</div>
            <div>
              <p className="section-kicker">Experience & foundations</p>
              <h2 className="section-title" id="experience-title">Experience that shaped how I approach technical work.</h2>
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
            <div><p className="section-kicker">Credentials & education</p><h2 className="section-title" id="credentials-title">A foundation in continuous learning, technical reporting, and problem-solving.</h2></div>
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
            <p>If you are hiring for a Cloud or DevOps role, or simply want to talk about infrastructure, automation, or monitoring, I would be glad to hear from you.</p>
            <div className="contact-links"><a href="mailto:udoabraham73@gmail.com"><Mail size={15} />Email Abraham</a><a href="https://github.com/westgrin" target="_blank" rel="noreferrer"><Github size={15} />View GitHub</a><a href="tel:+2348141892328"><CheckCircle2 size={15} />Call Abraham</a></div>
          </div>
        </section>
        <footer className="footer"><span className="footer-brand"><img src={asset("abraham-udo-logo-mark.png")} alt="" /><strong>AU/</strong> © 2026 Abraham Udo</span><a href="#top">Return to top ↑</a></footer>
      </main>
    </div>
  );
}

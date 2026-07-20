import { createFileRoute, Link } from "@tanstack/react-router";
import heroWorkshop from "@/assets/hero-workshop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — St. Martha Institute" },
      { name: "description", content: "History, mission, leadership and accreditation of St. Martha Technical & Vocational Institute, run by the Sisters of St. Martha." },
      { property: "og:title", content: "About — St. Martha Institute" },
      { property: "og:description", content: "Fifty years of technical education by the Sisters of St. Martha." },
    ],
  }),
  component: About,
});

const coreValues = [
  { t: "Excellence", d: "Rigorous standards across every workshop, classroom, and production floor." },
  { t: "Integrity", d: "Honest work, honest craft — the foundation of every graduate we form." },
  { t: "Compassion", d: "Service-minded formation rooted in the charism of the Sisters of St. Martha." },
  { t: "Dignity of Labour", d: "Skilled trades honoured as pathways to a self-reliant, purposeful life." },
];

const infrastructure = [
  { t: "Technical Workshops", d: "Twelve fully-equipped workshops for electrical, mechanical, carpentry and tailoring trades." },
  { t: "Culinary & Hospitality Wing", d: "Industrial kitchens, a training restaurant and a bakery serving the Entebbe community." },
  { t: "Student Residences", d: "On-campus hostels for 800 students with study halls, chapel and dining facilities." },
  { t: "Production House", d: "A working furniture and textile production facility that trains and generates institutional revenue." },
  { t: "Library & Digital Lab", d: "20,000-volume library and a 60-station computer laboratory with fibre internet." },
  { t: "Sports & Chapel Grounds", d: "Playing fields, a multi-purpose hall and the campus chapel at the heart of daily life." },
];

const departments = [
  { name: "Hospitality & Catering", head: "Sr. Margaret Nakato" },
  { name: "Electrical Technology", head: "Eng. Peter Okello" },
  { name: "Fashion & Textiles", head: "Ms. Sarah Namuli" },
  { name: "Carpentry & Joinery", head: "Mr. Joseph Ssekandi" },
  { name: "Food Processing", head: "Sr. Christine Auma" },
  { name: "ICT & Digital Skills", head: "Mr. Daniel Wamala" },
];

const board = [
  { name: "Sr. Agnes Nabirye", role: "Chairperson, Board of Governors" },
  { name: "Hon. Justice R. Kigongo", role: "Vice Chairperson" },
  { name: "Dr. Mary Nansubuga", role: "Academic Affairs" },
  { name: "Mr. Charles Mubiru", role: "Industry Representative" },
  { name: "Sr. Beatrice Nalwoga", role: "Congregational Delegate" },
  { name: "Mrs. Florence Kabuye", role: "Finance & Audit" },
];

const accreditations = [
  "Ministry of Education & Sports — Uganda",
  "Directorate of Industrial Training (DIT)",
  "Uganda Business & Technical Examinations Board (UBTEB)",
  "National Council for Higher Education",
  "Association of Catholic Technical Institutions",
];

function ImageSlot({ label, ratio = "aspect-[4/3]", src }: { label: string; ratio?: string; src?: string }) {
  return (
    <div className={`w-full ${ratio} rounded-xl ring-1 ring-border overflow-hidden bg-surface-muted flex items-center justify-center text-xs uppercase tracking-widest text-muted-foreground/60`}>
      {src ? (
        <img src={src} alt={label} className="w-full h-full object-cover" />
      ) : (
        <span>[ {label} ]</span>
      )}
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">{eyebrow}</span>
      <h2 className="font-serif text-4xl md:text-5xl text-brand text-balance max-w-[30ch]">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-surface text-foreground font-sans">
      {/* Announcement */}
      <div className="bg-brand text-brand-foreground py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-4 text-xs font-medium tracking-wide">
          <span>ADMISSIONS OPEN FOR SEPTEMBER 2026 INTAKE</span>
          <span className="w-1 h-1 rounded-full bg-brand-foreground/40" />
          <Link to="/" hash="apply" className="underline underline-offset-4 decoration-brand-foreground/30 hover:decoration-brand-foreground">
            Download Prospectus
          </Link>
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-tight text-brand">St. Martha Institute</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Technical &amp; Vocational</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link to="/" hash="courses" className="hover:text-brand transition-colors">Academics</Link>
              <Link to="/about" className="text-brand">About</Link>
              <Link to="/" hash="production" className="hover:text-brand transition-colors">Production</Link>
              <Link to="/" hash="contact" className="hover:text-brand transition-colors">Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm font-medium px-4 py-2 hover:text-brand transition-colors">Portal</button>
            <Link to="/" hash="apply" className="bg-brand text-brand-foreground text-sm font-medium py-2 px-4 flex items-center gap-1.5 rounded ring-1 ring-brand">
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Page hero */}
        <section className="py-20 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">About the Institute</span>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-brand text-balance max-w-[22ch]">
              A half-century of skilled formation, quietly at work.
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-[62ch]">
              St. Martha Institute is a Catholic technical &amp; vocational institution founded and led by the Sisters
              of St. Martha, dedicated to preparing skilled, compassionate professionals for Uganda and beyond.
            </p>
          </div>
        </section>

        {/* History / Our Story */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <SectionHeader eyebrow="Our History" title="From four students in 1974 to a national institution." />
              <p className="text-muted-foreground text-pretty">
                Founded in 1974 by a small community of the Sisters of St. Martha, the institute began in two borrowed
                classrooms on the shores of Lake Victoria — training four young women in tailoring and household skills.
                Fifty years later, that quiet mission has grown into a fully accredited technical &amp; vocational institute
                serving over 1,200 students across twelve departments.
              </p>
              <p className="text-muted-foreground text-pretty">
                Through decades of steady work, the Sisters have shepherded generations of technicians, artisans and
                hospitality professionals into dignified employment across East Africa and the Gulf. Today the campus
                spans thirty acres, but the founding conviction is unchanged: skilled hands and compassionate hearts.
              </p>
            </div>
            <ImageSlot label="Historical photo — founding sisters or early campus" ratio="aspect-[4/5]" src={heroWorkshop} />
          </div>
        </section>

        {/* Role of the Sisters */}
        <section className="py-24 px-6 bg-brand text-brand-foreground">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            <ImageSlot label="Photo of the Sisters" ratio="aspect-[4/5]" />
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">The Sisters of St. Martha</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance max-w-[30ch]">
                The Sisters remain at the centre of daily life on campus.
              </h2>
              <p className="text-brand-foreground/75 text-pretty max-w-[60ch]">
                The congregation founded, owns and stewards the institute. Beyond governance, individual Sisters serve
                as department heads, chaplains, hostel matrons and instructors — living alongside students and shaping
                the moral and academic culture of the campus.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Formation &amp; Pastoral Care</h4>
                  <p className="text-xs text-brand-foreground/60">Daily chapel, values formation, and one-to-one mentorship for every student.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Academic Leadership</h4>
                  <p className="text-xs text-brand-foreground/60">Sisters lead four of twelve departments and chair the Board of Governors.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Community Outreach</h4>
                  <p className="text-xs text-brand-foreground/60">Scholarships for vulnerable youth funded through the congregation's ministries.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Stewardship</h4>
                  <p className="text-xs text-brand-foreground/60">Long-term custodianship of the campus, its heritage, and its future.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 px-6 bg-surface-muted">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-xl bg-surface ring-1 ring-border flex flex-col gap-4">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">Our Vision</span>
              <h3 className="font-serif text-3xl text-brand text-balance">
                A generation of skilled, dignified professionals shaping their own communities.
              </h3>
              <p className="text-muted-foreground text-pretty">
                We envision a Uganda where every young person has access to world-class technical education grounded
                in faith, integrity, and the dignity of skilled work.
              </p>
            </div>
            <div className="p-10 rounded-xl bg-surface ring-1 ring-border flex flex-col gap-4">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">Our Mission</span>
              <h3 className="font-serif text-3xl text-brand text-balance">
                To form skilled hands and compassionate hearts through excellent technical training.
              </h3>
              <p className="text-muted-foreground text-pretty">
                We equip students with market-ready trades, moral formation, and lifelong support — bridging the gap
                between education and dignified employment.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-20">
            <div className="text-center flex flex-col gap-2 mb-12">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">Our Core Values</span>
              <h3 className="font-serif text-4xl text-brand">What we hold to.</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((v) => (
                <div key={v.t} className="p-6 rounded-xl bg-surface ring-1 ring-border flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-serif text-lg">
                    {v.t.charAt(0)}
                  </div>
                  <h4 className="font-serif text-xl text-brand">{v.t}</h4>
                  <p className="text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Infrastructure" title="A campus built for practical, hands-on learning." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructure.map((i) => (
                <article key={i.t} className="flex flex-col rounded-xl overflow-hidden ring-1 ring-border bg-surface-muted/40">
                  <ImageSlot label={i.t} ratio="aspect-[4/3]" />
                  <div className="p-6 flex flex-col gap-2">
                    <h4 className="font-serif text-xl text-brand">{i.t}</h4>
                    <p className="text-sm text-muted-foreground">{i.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Management / Board of Governors */}
        <section className="py-24 px-6 bg-surface-muted border-y border-border">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Governance" title="Management & Board of Governors" />
            <p className="text-muted-foreground text-pretty max-w-[62ch] mb-12">
              Our Board of Governors brings together religious leadership, academics, industry veterans and legal
              counsel — ensuring the institute is stewarded with rigour, transparency and faithfulness to its founding
              charism.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {board.map((m) => (
                <article key={m.name} className="flex flex-col rounded-xl overflow-hidden ring-1 ring-border bg-surface">
                  <ImageSlot label={`Photo — ${m.name}`} ratio="aspect-square" />
                  <div className="p-6 flex flex-col gap-1">
                    <h4 className="font-serif text-xl text-brand leading-tight">{m.name}</h4>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{m.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Departments & Heads */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Academic Leadership" title="Departments & their Heads" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((d) => (
                <article key={d.name} className="flex gap-4 items-center p-4 rounded-xl ring-1 ring-border bg-surface-muted/40">
                  <div className="shrink-0 w-20 h-20 rounded-lg bg-surface ring-1 ring-border overflow-hidden flex items-center justify-center text-[9px] uppercase tracking-widest text-muted-foreground/60 text-center">
                    [ photo ]
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-serif text-lg text-brand leading-tight">{d.name}</h4>
                    <span className="text-xs text-muted-foreground">Head of Department</span>
                    <span className="text-sm font-medium">{d.head}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition & Accreditation */}
        <section className="py-24 px-6 bg-brand text-brand-foreground">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">Recognition</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Accredited, recognised and trusted.
              </h2>
              <p className="text-brand-foreground/75 text-pretty max-w-[52ch]">
                St. Martha Institute operates under full accreditation from Uganda's national education and vocational
                authorities, and is a member of regional and international bodies committed to excellence in technical
                training.
              </p>
            </div>
            <ul className="flex flex-col divide-y divide-brand-foreground/10 ring-1 ring-brand-foreground/10 rounded-xl overflow-hidden">
              {accreditations.map((a, idx) => (
                <li key={a} className="flex items-center gap-6 px-6 py-5">
                  <span className="font-serif text-brand-accent text-lg w-8">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="text-sm md:text-base">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-surface-muted border-y border-border">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="font-serif text-4xl text-brand leading-tight text-balance">
              Come and see the campus for yourself.
            </h2>
            <p className="text-muted-foreground text-pretty">
              Prospective students and families are welcome to visit any weekday. Our admissions team will host you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" hash="apply" className="bg-brand text-brand-foreground text-sm font-medium h-10 px-8 inline-flex items-center rounded ring-1 ring-brand">
                Begin Application
              </Link>
              <Link to="/" hash="contact" className="bg-transparent text-foreground text-sm font-medium h-10 px-8 inline-flex items-center rounded ring-1 ring-border hover:bg-foreground/5">
                Contact Admissions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-muted border-t border-border py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1.5fr] gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-tight text-brand">St. Martha Institute</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Technical &amp; Vocational</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-[35ch]">
              Dedicated to the holistic formation of technical professionals through excellence, integrity, and faith-based values.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" hash="courses" className="hover:text-brand">Academics</Link>
              <Link to="/about" className="hover:text-brand">About</Link>
              <Link to="/" hash="production" className="hover:text-brand">Production</Link>
              <Link to="/" hash="apply" className="hover:text-brand">Apply</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Contact Information</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Plot 124, Saint Martha Road</span>
              <span>Entebbe, Uganda</span>
              <span className="mt-2">+256 414 555 0192</span>
              <span>admissions@stmartha.edu</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          <span>&copy; 2026 Sisters of Saint Martha</span>
          <span>Managed by the Sisters of St. Martha</span>
        </div>
      </footer>
    </div>
  );
}

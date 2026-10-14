import { useState } from "react"
import { Link } from "react-router"
import {
  COURSES,
  SOCIAL_PACKS,
  WEB_PACKS,
} from "../data/products"

const INSTAGRAM_URL = "https://www.instagram.com/thedopemedia/"
const WHATSAPP_URL =
  "https://wa.me/918247587412?text=Hi%20Dope%20Media%2C%20I%27d%20like%20to%20discuss%20a%20project."

const CATEGORIES = [
  {
    number: "01",
    title: "AI Courses",
    price: "₹999",
    description: "Practical, self-paced courses built to turn AI into an everyday business advantage.",
    href: "/store#courses",
  },
  {
    number: "02",
    title: "Social Media",
    price: "From ₹4,999",
    description: "Strategy, content, community, and reporting handled by one focused creative team.",
    href: "/store#smm",
  },
  {
    number: "03",
    title: "Graphic Design",
    price: "From ₹4,999",
    description: "Sharp brand systems and social assets designed to make every touchpoint feel intentional.",
    href: "/store#design",
  },
  {
    number: "04",
    title: "AI Automations",
    price: "From ₹10,000",
    description: "Custom workflows that remove repetitive work and help your team move faster.",
    href: "/store#ai",
  },
  {
    number: "05",
    title: "Website Design",
    price: "From ₹2,999",
    description: "Responsive, conversion-minded websites that look credible and make the next step obvious.",
    href: "/store#web",
  },
]

const FEATURED = [
  {
    type: "Course",
    title: COURSES[0].title,
    description: COURSES[0].description,
    price: COURSES[0].price,
    state: { kind: "course", item: COURSES[0] },
  },
  {
    type: "Social Media",
    title: SOCIAL_PACKS[1].name,
    description: SOCIAL_PACKS[1].description,
    price: SOCIAL_PACKS[1].price,
    state: { kind: "pack", item: SOCIAL_PACKS[1] },
  },
  {
    type: "Website Design",
    title: WEB_PACKS[1].name,
    description: WEB_PACKS[1].description,
    price: WEB_PACKS[1].price,
    state: { kind: "pack", item: WEB_PACKS[1] },
  },
]

const WORKS = [
  {
    number: "01",
    client: "D2C Skincare",
    title: "Launch identity & social system",
    tags: ["Brand identity", "Social design"],
    visual: "GLOW",
    tone: "yellow",
    before: "Scattered visuals",
    after: "One launch-ready identity",
  },
  {
    number: "02",
    client: "Local Food Brand",
    title: "A scroll-stopping content refresh",
    tags: ["Content strategy", "Reels"],
    visual: "BOLD",
    tone: "dark",
    before: "Inconsistent posting",
    after: "A repeatable content system",
  },
  {
    number: "03",
    client: "Business Coach",
    title: "Lead generation on autopilot",
    tags: ["Landing page", "Automation"],
    visual: "GROW",
    tone: "light",
    before: "Manual lead follow-up",
    after: "An automated enquiry flow",
  },
]

const FEEDBACK = [
  {
    quote: "The team made our brand feel clear, consistent, and premium. The whole process was fast and refreshingly simple.",
    name: "Sample client",
    role: "D2C founder",
  },
  {
    quote: "We finally have a content system we can actually maintain. Every deliverable felt thoughtful and ready to use.",
    name: "Sample client",
    role: "Small business owner",
  },
  {
    quote: "Dope Media understood the brief quickly and turned it into a site that feels like us and guides people to act.",
    name: "Sample client",
    role: "Independent consultant",
  },
]

const TEAM = [
  ["Adarsh VK", "Graphic Designer & AI Expert"],
  ["Kiran VK", "Prompt Engineer & AI Expert"],
  ["Bharath", "Web Designer"],
  ["Pradeep J", "Marketing Expert"],
]

const BUNDLES = [
  {
    category: "Launch Bundle",
    name: "Brand Launch Kit",
    price: 12999,
    tag: "Best Value",
    description: "A coordinated identity, social starter kit, and focused landing page.",
    includes: ["Brand essentials", "10 social templates", "Conversion landing page"],
    idealFor: "New businesses and launches",
  },
  {
    category: "Growth Bundle",
    name: "Digital Growth Stack",
    price: 19999,
    tag: "Popular",
    description: "A practical growth setup combining content, web, and lead automation.",
    includes: ["Monthly content system", "Business website", "Lead follow-up workflow"],
    idealFor: "Growing service businesses",
  },
]

const FAQS = [
  ["How quickly can we start?", "Most projects begin within 3–5 working days after payment and a completed brief."],
  ["How many revisions are included?", "Revision allowances depend on the selected package. Every scope is confirmed before work begins."],
  ["What do you need from me?", "Your goals, brand assets, references, and timely feedback. We provide a simple onboarding checklist."],
  ["How do payments work?", "You can pay securely through Razorpay, QR code, or direct UPI. No GST is currently added."],
  ["When will my project be delivered?", "Courses are available immediately. Service timelines vary by package and are confirmed during onboarding."],
  ["Can I request a custom package?", "Yes. Message us on WhatsApp and we’ll recommend a scope based on your goals and budget."],
]

function formatPrice(price: number) {
  return `₹${price.toLocaleString("en-IN")}`
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Home() {
  const [leadEmail, setLeadEmail] = useState("")
  const [leadSubmitted, setLeadSubmitted] = useState(false)

  return (
    <main className="page-dot-grid overflow-x-hidden bg-white text-[#0a0a0a]">
      <section className="hero-section relative flex min-h-[94vh] items-center overflow-hidden px-6 pb-20 pt-28">
        <div className="hero-yellow-block absolute -right-20 top-24 h-[28rem] w-[28rem] rotate-6 bg-[#FFE030]" />
        <div className="absolute right-8 top-32 hidden border border-black/20 bg-[#FFE030] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] lg:block">
          Store / 2026
        </div>
        <div className="absolute -left-10 bottom-10 hidden h-24 w-24 rotate-12 border-2 border-black/10 lg:block" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1100px] items-end gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 border border-black/15 bg-white/90 px-4 py-2 backdrop-blur-sm">
              <span className="pulse-dot h-2 w-2 rounded-full bg-[#FFE030]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                Dope Media Store / Now live
              </span>
            </div>

            <h1 className="hero-title font-['Barlow_Condensed'] text-[clamp(5.2rem,14vw,10.5rem)] font-black uppercase leading-[0.76] tracking-[-0.05em]">
              Build bold.
              <span className="relative block w-fit text-outline">
                Sell smarter.
                <span className="hero-title-mark" aria-hidden="true" />
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-7 text-[#555] sm:text-lg">
              Digital products, creative services, and intelligent systems built to
              turn attention into real business growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/store"
                className="group inline-flex items-center gap-10 bg-[#0a0a0a] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#FFE030] hover:text-[#0a0a0a]"
              >
                Explore what’s live
                <Arrow />
              </Link>
              <a
                href="#recent-works"
                className="border-b border-black py-2 text-sm font-semibold"
              >
                See our recent work
              </a>
            </div>
          </div>

          <aside className="hero-summary border border-black/10 bg-white/90 p-7 shadow-[10px_10px_0_#FFE030] backdrop-blur-sm lg:mb-2">
            <div className="mb-10 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#888]">
                Your growth stack
              </span>
              <span className="flex h-8 w-8 items-center justify-center bg-[#FFE030] font-['Barlow_Condensed'] text-lg font-black">
                01
              </span>
            </div>
            <p className="font-['Barlow_Condensed'] text-3xl font-bold uppercase leading-[1.05]">
              Learn it. Build it.
              <span className="block text-[#b69d00]">Scale it.</span>
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-black/10 pt-6">
              <div>
                <strong className="block font-['Barlow_Condensed'] text-4xl font-black">
                  5
                </strong>
                <span className="text-xs uppercase tracking-wider text-[#777]">
                  Categories
                </span>
              </div>
              <div>
                <strong className="block font-['Barlow_Condensed'] text-4xl font-black">
                  ₹999
                </strong>
                <span className="text-xs uppercase tracking-wider text-[#777]">
                  Starting at
                </span>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Courses", "Creative", "Web", "AI"].map((item) => (
                <span
                  key={item}
                  className="border border-black/10 bg-[#f7f7f4] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div className="page-grid-band overflow-hidden bg-[#FFE030] py-4">
        <div className="marquee-track flex w-max gap-12 font-['Barlow_Condensed'] text-2xl font-black uppercase tracking-wide">
          {[...CATEGORIES, ...CATEGORIES].map((item, index) => (
            <span key={`${item.title}-${index}`} className="flex items-center gap-12">
              {item.title}
              <span className="text-white">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="bg-[#0a0a0a] px-6 py-24 text-white">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#777]">
                Everything you need to grow
              </span>
              <h2 className="font-['Barlow_Condensed'] text-[clamp(3.5rem,8vw,6.5rem)] font-black uppercase leading-[0.82]">
                Pick your
                <span className="block text-[#FFE030]">power-up.</span>
              </h2>
            </div>
            <Link to="/store" className="text-sm font-semibold text-[#FFE030]">
              View all products <Arrow />
            </Link>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {CATEGORIES.map((category) => (
              <Link
                key={category.title}
                to={category.href}
                className="category-row group grid gap-4 py-7 transition-colors hover:bg-white/[0.03] md:grid-cols-[60px_1fr_1.2fr_150px_24px] md:items-center"
              >
                <span className="text-xs text-[#555]">{category.number}</span>
                <h3 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase">
                  {category.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-[#777]">
                  {category.description}
                </p>
                <span className="font-['Barlow_Condensed'] text-xl font-bold text-[#FFE030]">
                  {category.price}
                </span>
                <span className="text-[#FFE030] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f3] px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Start here</span>
              <h2 className="section-title">Store favourites.</h2>
            </div>
            <span className="hidden text-sm text-[#777] sm:block">No GST added at checkout</span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {FEATURED.map((product, index) => (
              <article
                key={product.title}
                className="group flex min-h-[370px] flex-col border border-black/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#FFE030]"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#888]">
                    {product.type}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center bg-[#f3f3ef] font-['Barlow_Condensed'] font-bold group-hover:bg-[#FFE030]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-['Barlow_Condensed'] text-3xl font-black uppercase leading-none">
                  {product.title}
                </h3>
                <p className="mt-5 flex-1 text-sm leading-7 text-[#666]">
                  {product.description}
                </p>
                <div className="mt-8 flex items-end justify-between border-t border-black/10 pt-5">
                  <strong className="font-['Barlow_Condensed'] text-3xl font-black">
                    {formatPrice(product.price)}
                  </strong>
                  <Link
                    to="/checkout"
                    state={product.state}
                    className="bg-[#0a0a0a] px-4 py-3 text-xs font-semibold text-white hover:bg-[#FFE030] hover:text-black"
                  >
                    Buy now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Better together</span>
            <h2 className="section-title">Bundles built for momentum.</h2>
            <p className="mt-5 text-sm leading-7 text-[#666]">
              Combine the essentials, keep one team across every touchpoint, and launch
              with a system instead of disconnected deliverables.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {BUNDLES.map((bundle, index) => (
              <article
                key={bundle.name}
                className="grid overflow-hidden border border-black/10 lg:grid-cols-[1fr_190px]"
              >
                <div className="p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#888]">
                    {bundle.category}
                  </span>
                  <h3 className="mt-4 font-['Barlow_Condensed'] text-4xl font-black uppercase leading-none">
                    {bundle.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#666]">{bundle.description}</p>
                  <ul className="mt-6 space-y-2">
                    {bundle.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className="font-bold text-[#d1b400]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex flex-col justify-between p-7 ${
                    index === 0 ? "bg-[#FFE030]" : "bg-[#0a0a0a] text-white"
                  }`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] opacity-60">
                    Bundle price
                  </span>
                  <div>
                    <strong className="block font-['Barlow_Condensed'] text-4xl font-black">
                      {formatPrice(bundle.price)}
                    </strong>
                    <Link
                      to="/checkout"
                      state={{
                        kind: "pack",
                        item: { ...bundle, id: `bundle-${index + 1}` },
                      }}
                      className={`mt-5 block px-4 py-3 text-center text-xs font-semibold ${
                        index === 0 ? "bg-black text-white" : "bg-[#FFE030] text-black"
                      }`}
                    >
                      Choose bundle
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="recent-works" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">Recent works</span>
            <h2 className="section-title">
              Proof, not
              <span className="text-[#FFE030]"> promises.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#666]">
              A sample of how we bring strategy, design, and technology together.
              Replace these project summaries with your latest client work.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {WORKS.map((work) => (
              <article key={work.number} className="work-card group">
                <div className={`work-visual work-visual--${work.tone}`}>
                  <span className="absolute left-5 top-5 text-xs font-semibold">
                    {work.number}
                  </span>
                  <span className="font-['Barlow_Condensed'] text-7xl font-black tracking-[-0.06em] transition-transform duration-300 group-hover:scale-105">
                    {work.visual}
                  </span>
                </div>
                <div className="pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#999]">
                    {work.client}
                  </span>
                  <h3 className="mt-2 font-['Barlow_Condensed'] text-2xl font-bold uppercase">
                    {work.title}
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-px bg-black/10 text-xs">
                    <div className="bg-[#f6f6f3] p-3">
                      <span className="mb-1 block text-[9px] font-semibold uppercase tracking-wider text-[#999]">
                        Before
                      </span>
                      {work.before}
                    </div>
                    <div className="bg-[#FFE030] p-3">
                      <span className="mb-1 block text-[9px] font-semibold uppercase tracking-wider text-black/50">
                        After
                      </span>
                      {work.after}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span key={tag} className="border border-black/10 px-3 py-1 text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFE030] px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12">
            <span className="eyebrow !text-black/50">Client feedback</span>
            <h2 className="section-title">Good work. Good words.</h2>
          </div>
          <div className="grid gap-px bg-black/15 md:grid-cols-3">
            {FEEDBACK.map((item) => (
              <figure key={item.role} className="flex min-h-72 flex-col bg-[#FFE030] p-7">
                <span className="font-['Barlow_Condensed'] text-5xl font-black leading-none">“</span>
                <blockquote className="mt-3 flex-1 text-lg leading-8">{item.quote}</blockquote>
                <figcaption className="mt-8 border-t border-black/20 pt-4">
                  <strong className="block text-sm">{item.name}</strong>
                  <span className="text-xs text-black/55">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-xs text-black/55">
            Sample testimonials — replace with verified client feedback before publishing.
          </p>
          <div className="mt-10 border-t border-black/20 pt-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <strong className="text-xs uppercase tracking-[0.16em]">
                Verified client wall
              </strong>
              <span className="text-xs text-black/50">
                Add real client logos and review links here
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Client logo 01", "Client logo 02", "Client logo 03", "Client logo 04"].map(
                (logo) => (
                  <div
                    key={logo}
                    className="flex h-24 items-center justify-center border border-dashed border-black/30 text-[10px] font-semibold uppercase tracking-wider text-black/45"
                  >
                    {logo}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24 text-white">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow !text-[#666]">Meet the crew</span>
              <h2 className="section-title">
                Four minds.
                <span className="block text-[#FFE030]">One mission.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[#777]">
              A focused team combining creative craft, marketing strategy, and practical AI.
            </p>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map(([name, role], index) => (
              <article key={name} className="group bg-[#0a0a0a] p-6 hover:bg-[#141414]">
                <span className="mb-12 flex h-11 w-11 items-center justify-center bg-[#FFE030] font-['Barlow_Condensed'] text-xl font-black text-black transition-transform group-hover:-rotate-6">
                  {name.slice(0, 1)}
                </span>
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">
                  {name}
                </h3>
                <p className="mt-1 text-xs text-[#666]">{role}</p>
                <span className="mt-5 block text-[10px] text-[#333]">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f3] px-6 py-24">
        <div className="mx-auto grid max-w-[1100px] overflow-hidden bg-white lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 sm:p-12">
            <span className="eyebrow">Free growth checklist</span>
            <h2 className="section-title">Find your next growth move.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#666]">
              Get our concise brand and marketing checklist covering positioning,
              content, conversion, automation, and measurement.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              {["Brand clarity", "Content system", "Lead capture", "Smart automation"].map(
                (item) => (
                  <div key={item} className="border-l-2 border-[#FFE030] pl-3">
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#FFE030] p-8 sm:p-12">
            {leadSubmitted ? (
              <>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                  Your checklist is ready
                </span>
                <h3 className="mt-4 font-['Barlow_Condensed'] text-4xl font-black uppercase">
                  Start with the gaps that matter.
                </h3>
                <a
                  href="/dope-media-growth-checklist.txt"
                  download
                  className="mt-8 bg-[#0a0a0a] px-6 py-4 text-center text-sm font-semibold text-white"
                >
                  Download the checklist
                </a>
              </>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  if (leadEmail.trim()) setLeadSubmitted(true)
                }}
              >
                <label htmlFor="lead-email" className="text-xs font-semibold uppercase tracking-[0.16em]">
                  Send it to your inbox
                </label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={leadEmail}
                  onChange={(event) => setLeadEmail(event.target.value)}
                  placeholder="you@business.com"
                  className="mt-5 w-full border-0 border-b-2 border-black bg-transparent px-0 py-4 text-base outline-none placeholder:text-black/40"
                />
                <button
                  type="submit"
                  className="mt-6 w-full bg-[#0a0a0a] px-6 py-4 text-sm font-semibold text-white"
                >
                  Get the free checklist
                </button>
                <p className="mt-4 text-xs leading-5 text-black/50">
                  No spam. Use this form with your email platform to store submissions.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Fresh from Instagram</span>
              <h2 className="section-title">@thedopemedia</h2>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-6 bg-[#0a0a0a] px-6 py-4 text-sm font-semibold text-white hover:bg-[#FFE030] hover:text-black"
            >
              Follow on Instagram <Arrow />
            </a>
          </div>

          <div className="instagram-grid grid grid-cols-2 gap-2 md:grid-cols-4">
            {["Think bold.", "Create.", "Scale smart.", "Stay dope."].map((text, index) => (
              <a
                key={text}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${text} on the Dope Media Instagram profile`}
                className={`instagram-tile instagram-tile--${index + 1}`}
              >
                <span>{text}</span>
                <small>Featured Reel 0{index + 1} ↗</small>
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-[#999]">
            Reel-ready slots currently open your profile. Replace each link with its
            public Instagram Reel URL to feature specific videos.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <span className="eyebrow !text-[#666]">Frequently asked</span>
            <h2 className="section-title">
              Clear answers.
              <span className="block text-[#FFE030]">No fine print.</span>
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-6 border border-[#FFE030] px-5 py-3 text-sm font-semibold text-[#FFE030]"
            >
              Ask us on WhatsApp <Arrow />
            </a>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {question}
                  <span className="text-xl font-light text-[#FFE030] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-xl pt-4 text-sm leading-7 text-[#777]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFE030] px-6 py-20">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-8">
          <h2 className="font-['Barlow_Condensed'] text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.8] tracking-[-0.04em]">
            Ready to
            <span className="block text-white">level up?</span>
          </h2>
          <Link
            to="/store"
            className="inline-flex items-center gap-12 bg-[#0a0a0a] px-8 py-5 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
          >
            Explore the store <Arrow />
          </Link>
        </div>
      </section>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Dope Media on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-[#0a0a0a] px-5 py-4 text-xs font-semibold text-white shadow-xl transition-transform hover:-translate-y-1"
      >
        <span className="h-2 w-2 rounded-full bg-[#FFE030]" />
        Chat on WhatsApp
      </a>
    </main>
  )
}

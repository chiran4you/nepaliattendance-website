import Image from "next/image";

const downloadUrl =
  "https://downloads.nepaliattendance.com/nepaliattendance.apk";

const features = [
  {
    icon: "वि.स",
    title: "Nepali Calendar",
    description:
      "Take and review attendance using familiar Bikram Sambat dates.",
  },
  {
    icon: "✓",
    title: "Offline Attendance",
    description:
      "Continue taking attendance even when the internet connection is unavailable.",
  },
  {
    icon: "SMS",
    title: "Parent SMS Alerts",
    description:
      "Inform guardians when students are absent through timely SMS notifications.",
  },
  {
    icon: "▦",
    title: "Detailed Reports",
    description:
      "Review daily and monthly attendance records without maintaining paper registers.",
  },
  {
    icon: "🏫",
    title: "White-Label Support",
    description:
      "Configure the application with each school’s name, identity and preferences.",
  },
  {
    icon: "👥",
    title: "Student Management",
    description:
      "Organize classes, sections, student profiles and guardian contact information.",
  },
];

const screenshots = [
  {
    src: "/images/screenshot1.png",
    alt: "Class management screen",
    title: "Manage Classes",
  },
  {
    src: "/images/screenshot2.png",
    alt: "Add students screen",
    title: "Add Students",
  },
  {
    src: "/images/screenshot3.png",
    alt: "Student list screen",
    title: "Student Directory",
  },
  {
    src: "/images/screenshot4.png",
    alt: "Attendance dashboard",
    title: "Attendance Dashboard",
  },
  {
    src: "/images/screenshot5.png",
    alt: "Student attendance screen",
    title: "Mark Attendance",
  },
  {
    src: "/images/screenshot6.png",
    alt: "Holiday management screen",
    title: "Manage Holidays",
  },
  {
    src: "/images/screenshot7.png",
    alt: "Attendance report screen",
    title: "View Reports",
  },
];

const comparisonRows = [
  ["Nepali date support", true, false],
  ["Automatic attendance reports", true, false],
  ["Parent SMS notifications", true, false],
  ["Offline attendance entry", true, true],
  ["Fast student search", true, false],
  ["Centralized digital records", true, false],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex shrink-0 items-center gap-3.5">
  <Image
    src="/android-chrome-192x192.png"
    alt="Nepali Attendance icon"
    width={56}
    height={56}
    priority
    className="h-12 w-12 rounded-xl object-cover shadow-sm sm:h-14 sm:w-14"
  />

  <div className="leading-tight">
    <p className="whitespace-nowrap text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
      Nepali <span className="text-blue-700">Attendance</span>
    </p>

    <p className="hidden whitespace-nowrap pt-1 text-xs font-medium tracking-wide text-slate-500 lg:block">
      Smarter Attendance. Empowering Schools.
    </p>
  </div>
</a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a className="transition hover:text-blue-700" href="#features">
              Features
            </a>
            <a className="transition hover:text-blue-700" href="#screenshots">
              Screenshots
            </a>
            <a className="transition hover:text-blue-700" href="#how-it-works">
              How it works
            </a>
            <a className="transition hover:text-blue-700" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href={downloadUrl}
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            Download APK
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
              Built specifically for schools in Nepal
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Smarter Attendance.
              <span className="block text-blue-700">Empowering Schools.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Manage students, classes, daily attendance, holidays, reports and
              parent SMS alerts from one easy-to-use Android application.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={downloadUrl}
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Download Android APK
                <span className="ml-2">↓</span>
              </a>

              <a
                href="#screenshots"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
              >
                Explore the App
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span>✓ Nepali date support</span>
              <span>✓ Offline enabled</span>
              <span>✓ School-specific branding</span>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md justify-center">
            <div className="absolute inset-8 rounded-full bg-blue-300/30 blur-3xl" />

            <div className="relative rounded-[2.8rem] border-[10px] border-slate-900 bg-slate-900 p-1 shadow-2xl">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" />

              <Image
                src="/images/screenshot4.png"
                alt="Nepali Attendance application dashboard"
                width={581}
                height={1280}
                priority
                className="h-auto w-[285px] rounded-[2rem]"
              />
            </div>

            <div className="absolute -left-3 top-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:-left-16">
              <p className="text-xs font-medium text-slate-500">
                Attendance status
              </p>
              <p className="mt-1 text-lg font-bold text-emerald-600">
                Recorded ✓
              </p>
            </div>

            <div className="absolute -right-3 bottom-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:-right-16">
              <p className="text-xs font-medium text-slate-500">Works with</p>
              <p className="mt-1 font-bold text-blue-700">Nepali BS Date</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 text-center md:grid-cols-4 lg:px-8">
          <div>
            <p className="text-3xl font-bold text-blue-700">Offline</p>
            <p className="mt-1 text-sm text-slate-600">Attendance support</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">BS</p>
            <p className="mt-1 text-sm text-slate-600">Nepali calendar</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">SMS</p>
            <p className="mt-1 text-sm text-slate-600">Guardian alerts</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">100%</p>
            <p className="mt-1 text-sm text-slate-600">School focused</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">
              Core features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything needed for everyday attendance management
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Replace repetitive paperwork with a simple system designed around
              the actual needs of Nepali schools.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl bg-blue-100 px-3 font-bold text-blue-700">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="overflow-hidden bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">
              Application preview
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Simple enough for daily use
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Clear screens and familiar workflows help teachers complete
              attendance tasks quickly and confidently.
            </p>
          </div>

          <div className="mt-12 flex snap-x gap-7 overflow-x-auto pb-8">
            {screenshots.map((screenshot) => (
              <figure
                key={screenshot.src}
                className="min-w-[245px] snap-start sm:min-w-[280px]"
              >
                <div className="rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 p-1 shadow-xl">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={581}
                    height={1280}
                    className="h-auto w-full rounded-[1.8rem]"
                  />
                </div>
                <figcaption className="mt-4 text-center font-semibold text-slate-800">
                  {screenshot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* White label */}
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-cyan-400">
              White-label capability
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Your school. Your identity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Nepali Attendance can be configured for different schools while
              preserving each institution’s name, branding and operational
              preferences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "School name and branding",
              "Class and section setup",
              "Custom SMS identity",
              "School-specific configuration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-cyan-400">✓</span>
                <p className="mt-2 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">
              Easy workflow
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start taking attendance in four steps
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              ["01", "Create Classes", "Add grades, sections and class details."],
              ["02", "Add Students", "Create student profiles and guardian contacts."],
              ["03", "Take Attendance", "Mark present, absent, leave or sick."],
              ["04", "Review Reports", "Check attendance records and summaries."],
            ].map(([number, title, description]) => (
              <article key={number} className="relative">
                <div className="text-5xl font-black text-blue-100">{number}</div>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">
              A better approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Move beyond the paper register
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-slate-900 px-5 py-5 font-semibold text-white sm:px-8">
              <div>Feature</div>
              <div className="text-center">Nepali Attendance</div>
              <div className="text-center">Paper Register</div>
            </div>

            {comparisonRows.map(([label, app, paper]) => (
              <div
                key={String(label)}
                className="grid grid-cols-3 items-center border-t border-slate-200 px-5 py-5 sm:px-8"
              >
                <div className="pr-3 font-medium">{String(label)}</div>
                <div className="text-center text-xl font-bold text-emerald-600">
                  {app ? "✓" : "—"}
                </div>
                <div className="text-center text-xl font-bold text-slate-400">
                  {paper ? "✓" : "—"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="contact" className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to simplify school attendance?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Download Nepali Attendance for Android and explore a smarter way to
            manage everyday attendance records.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={downloadUrl}
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Download APK
            </a>

            <a
              href="mailto:contact@nepaliattendance.com"
              className="rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

          <p className="mt-5 text-sm text-blue-200">
            Android APK · Direct and secure download
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <p className="font-bold text-white">Nepali Attendance</p>
            <p className="mt-1 text-sm">
              Smarter Attendance. Empowering Schools.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#screenshots">
              Screenshots
            </a>
            <a className="hover:text-white" href={downloadUrl}>
              Download
            </a>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Nepali Attendance
          </p>
        </div>
      </footer>
    </main>
  );
}
import { desc } from "framer-motion/m";

export default function Education() {
  const items = [
    {
      year: "2022 – Present",
      title: "Bangkok University",
      place: " GPA: 2.56",
      desc: "Bachelor of Science in Computer Science / Focused on Web Development, Cloud Computing, and AI/ML fundamentals.",
    },
    {
      year: "2019 – 2021",
      title: "SBAC Saphanmai",
      place: "GPA: 3.7",
      desc: "Diploma in Information Technology / Learned basic programming, networking, and graphic design principles. ",
    },
  ];

  return (
    <section className="relative w-full py-24 text-white font-poppins">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== HEADER ===== */}
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          {/* LEFT SIDE */}
          <div>
            <div className="h-1 w-16 rounded bg-sky-500 mb-4" />
            <h2 className="text-4xl font-extrabold">Education</h2>
            <p className="mt-4 max-w-md text-white/70 leading-relaxed">
                My educational background has shaped my passion for technology,
                creativity, and problem-solving. These experiences built the
                foundation for my career in software and web development.
            </p>
          </div>

          {/* ===== RIGHT: EDUCATION LIST ===== */}
          <div className="space-y-8">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-md backdrop-blur-sm hover:bg-white/[0.08] transition duration-300"
              >
                {/* YEAR */}
                <div className="absolute top-6 right-8 text-5xl font-extrabold text-white/10 select-none">
                  {it.year}
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-semibold">{it.title}</h3>
                <p className="mt-1 text-sky-400 font-medium">– {it.place}</p>
                <p className="mt-3 text-white/80 leading-relaxed max-w-xl">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== BACKGROUND GLOW ===== */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-3xl" />
    </section>
  );
}

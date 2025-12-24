import { FaGraduationCap } from "react-icons/fa";

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
    <section className="relative w-full py-24 text-slate-900 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col items-center text-center mb-16">
            <div className="h-1 w-16 rounded bg-indigo-600 mb-4" />
            <h2 className="text-4xl font-extrabold">Education</h2>
            <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
                My educational background has shaped my passion for technology,
                creativity, and problem-solving. These experiences built the
                foundation for my career in software and web development.
            </p>
        </div>

        {/* ===== EDUCATION LIST ===== */}
        <div className="grid gap-8 md:grid-cols-2">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-lg hover:border-indigo-200 hover:shadow-xl transition duration-300"
              >
                {/* YEAR */}
                <div className="flex items-center gap-2 mb-2 text-lg font-bold text-indigo-600">
                  <FaGraduationCap className="text-xl" />
                  <span>{it.year}</span>
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-semibold">{it.title}</h3>
                <p className="mt-1 text-indigo-600 font-medium">– {it.place}</p>
                <p className="mt-3 text-slate-600 leading-relaxed max-w-xl">
                  {it.desc}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Removed glow */}
    </section>
  );
}

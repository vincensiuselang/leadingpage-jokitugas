import { Code, Brain, BarChart3, FileText, Layout, Sigma } from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Tugas Coding",
      desc: "Python, Java, Web Development, JavaScript, MATLAB, MySql, MongoDB",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Data Science / AI Project",
      desc: "Data cleaning, visualisasi, prediksi, analisis menyeluruh.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Machine Learning & Deep Learning",
      desc: "Model training, optimasi, deployment sesuai kebutuhan.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Pembuatan Laporan & Dokumentasi",
      desc: "Word, PPT, PDF — rapi, jelas, dan siap presentasi.",
    },
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Desain UI/UX & Frontend Web",
      desc: "Figma, Tailwind, React — desain modern & responsif.",
    },
    {
      icon: <Sigma className="h-8 w-8 text-primary" />,
      title: "Analisis Data & Statistik",
      desc: "SPSS, Excel, R — hasil akurat & terpercaya.",
    },
  ];

  return (
    <section className="w-full animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Layanan yang saya Tawarkan
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="mb-4 transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-muted-foreground">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

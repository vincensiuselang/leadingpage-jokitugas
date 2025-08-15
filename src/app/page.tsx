import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import ServiceSection from "@/components/ui/ServiceSection"; // Import the new component

const testimonials = [
  {
    img: "/Screenshot 2025-08-15 155234.png",
    quote:
      "Respon cepat banget, harga juga masuk akal. Tugas selesai sebelum deadline, puas banget!",
    author: "- Klien Puas ⭐⭐⭐⭐⭐",
  },
  {
    img: "/Screenshot 2025-08-15 155554.png",
    quote:
      "Keren! Detailnya rapi, hasilnya sesuai request, dan prosesnya transparan. Bakal repeat order lagi!",
    author: "- Klien Loyal ⭐⭐⭐⭐⭐",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 font-body">
      <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center space-y-12 text-center px-4 py-8"> {/* Increased space-y */}
        {/* Hero Section */}
        <div className="space-y-4 animate-in fade-in-0 slide-in-from-top-4 duration-1000">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground transition-colors duration-500 hover:text-primary/90 sm:text-5xl md:text-6xl lg:text-7xl">
            Butuh Bantuan Tugas?
            <br />
            <span className="text-primary">Serahkan Saja!</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl">
            Tugas menumpuk bikin pusing? Serahkan pada ahlinya. Saya siap
            membantu Anda menyelesaikan tugas dengan hasil yang cepat, akurat,
            dan terjamin orisinalitasnya.
          </p>
        </div>

        {/* Layanan Section (New) */}
        <div className="mb-4 flex justify-center transition-transform group-hover:scale-110">
          <ServiceSection />
        </div>

        {/* Testimonial Section */}
        <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-150 fill-mode-both">
 <div className="mx-auto max-w-2xl rounded-lg border bg-card p-4 sm:p-6 shadow-sm w-full">
            <h3 className="mb-6 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"> {/* Updated heading styling */}Testimoni Klien (Mahasiswa)
              Apa Kata Mereka?
            </h3>

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center gap-4 mb-4 last:mb-0"
              >
                <div className="flex-shrink-0 w-full sm:w-64">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={t.img}
                      alt={`Testimoni ${i + 1}`}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-muted-foreground italic mb-2">
                    {t.quote}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {t.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <p className="text-xl font-semibold text-red-500 animate-pulse md:text-2xl">
            Deadline mepet? Chat sekarang, kerjaan langsung mulai!
          </p>
        <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
          <Button
            size="lg"
            className="group h-14 rounded-full bg-green-500 px-6 sm:px-8 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 sm:hover:scale-110 hover:shadow-xl hover:bg-green-600 active:scale-100 w-full sm:w-auto"
          >
            <a 
            href="whatsapp://send?phone=6285947094014&text=Halo%20kak%2C%20saya%20mau%20jokiin%20tugas.%20Bisa%20dibantu%20ya%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <WhatsappIcon className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              Chat via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}

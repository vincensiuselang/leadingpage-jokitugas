import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 font-body">
      <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center space-y-8 text-center">
        <div className="animate-in fade-in-0 slide-in-from-top-4 duration-1000 space-y-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground transition-colors duration-500 hover:text-primary/90 sm:text-5xl md:text-6xl lg:text-7xl">
            Butuh Bantuan Tugas?
            <br />
            <span className="text-primary">
              Serahkan Saja!
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl">
            Tugas menumpuk bikin pusing? Serahkan pada ahlinya. Saya siap membantu Anda menyelesaikan tugas dengan hasil yang cepat, akurat, dan terjamin orisinalitasnya.
          </p>
        </div>

        <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-150 fill-mode-both">
          <div className="mx-auto max-w-md rounded-lg border bg-card p-4 shadow-sm">
            <h3 className="mb-3 text-center text-sm font-semibold text-foreground">
              Testimoni Klien
            </h3>
            <div className="overflow-hidden rounded-md">
              <img
                src="/Screenshot 2025-08-15 155234.png"
                alt="Testimoni dari klien yang puas dengan layanan joki tugas"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
          <Button
            asChild
            size="lg"
            className="group h-14 rounded-full bg-accent px-8 text-lg font-bold text-accent-foreground shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:bg-accent/90 active:scale-100"
          >
            <a
              href="https://wa.me/6285947094014?text=Halo%20kak%2C%20saya%20mau%20jokiin%20tugas.%20Bisa%20dibantu%20ya%3F"
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

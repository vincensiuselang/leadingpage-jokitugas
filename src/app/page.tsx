import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4 font-body">
      <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center space-y-8 text-center">
        <div className="animate-in fade-in slide-in-from-top-4 duration-700 space-y-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Butuh Joki Tugas?
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kami Siap Bantuin!
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl">
            Jangan biarkan tugas menumpuk. Tim profesional kami siap mengerjakan
            tugas Anda dengan cepat, tepat, dan bebas plagiarisme.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-accent px-8 text-lg font-bold text-accent-foreground shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-accent/90 active:scale-95"
          >
            <a
              href="https://wa.me/6285947094014"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon className="mr-3 h-6 w-6" />
              Chat via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}

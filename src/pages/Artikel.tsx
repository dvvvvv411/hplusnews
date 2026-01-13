import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Clock, Share2, Bookmark, Volume2 } from "lucide-react";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import RelatedArticles from "@/components/news/RelatedArticles";
import authorImage from "@/assets/author-felix-stippler.jpg";
import heroImage from "@/assets/jonas-trading-setup.jpg";

const Artikel = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Gastronomie</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">Artikel</span>
        </nav>

        {/* Category Badge */}
        <Badge className="bg-accent hover:bg-accent text-accent-foreground font-bold text-sm mb-4">
          Gastronomie
        </Badge>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 text-balance">
          Wie Jonas M. sein Restaurant zum Erfolg führte
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
          Von der kleinen Küche zum gefragten Lokal: Die Geschichte eines Hamburger Gastronomen, der seinen Traum verwirklichte.
        </p>

        {/* Author & Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-accent">
              <AvatarImage src={authorImage} alt="Felix Stippler" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">Felix Stippler</p>
              <p className="text-sm text-muted-foreground">Wirtschaftsredakteur</p>
            </div>
          </div>
          
          <Separator orientation="vertical" className="hidden sm:block h-10" />
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{formattedDate}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              6 Min. Lesezeit
            </span>
            <span className="flex items-center gap-1 opacity-50">
              <Volume2 className="w-4 h-4" />
              Audio nicht verfügbar
            </span>
          </div>
          
          <div className="flex items-center gap-2 sm:ml-auto">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Teilen
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <figure className="mb-10">
          <img
            src={heroImage}
            alt="Jonas M. in seinem Restaurant"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-muted-foreground mt-3 italic">
            Jonas M. in seinem Restaurant in Hamburg-Altona.
          </figcaption>
        </figure>

        {/* Article Content */}
        <article className="article-content">
          <h2>Von der Leidenschaft zum eigenen Restaurant</h2>
          
          <p>
            <strong>Hamburg-Altona, Dienstagmorgen.</strong> Der Duft von frisch gebackenem Brot zieht durch die Küche. Jonas M. steht zwischen Töpfen und Pfannen, während sein Team die Vorbereitungen für den Mittagsservice trifft. „Das hier ist mein Traum", sagt er mit einem zufriedenen Lächeln. „Jeden Tag aufs Neue."
          </p>
          
          <p>
            Was heute wie ein etabliertes Lokal aussieht, war vor fünf Jahren nur eine vage Idee in seinem Kopf. Der Weg dorthin war alles andere als einfach – aber genau das macht die Geschichte so authentisch.
          </p>

          <Separator className="my-10" />

          <h2>Vom Angestellten zum Gastronomen</h2>
          
          <p>
            Bevor Jonas sein eigenes Restaurant eröffnete, arbeitete er jahrelang als Koch in verschiedenen Küchen der Stadt. Lange Schichten, wenig Anerkennung, noch weniger kreative Freiheit. „Irgendwann wusste ich: Wenn ich wirklich kochen will, wie ich es mir vorstelle, muss ich es selbst machen", erinnert er sich.
          </p>
          
          <p>
            Mit 32 Jahren wagte er den Schritt. Kündigte seinen sicheren Job, nahm einen Kredit auf und mietete ein kleines Ladenlokal in Altona. <em>„Meine Familie hielt mich anfangs für verrückt. Aber sie haben mich trotzdem unterstützt."</em>
          </p>

          <Separator className="my-10" />

          <h2>Die Anfänge – Klein aber fein</h2>
          
          <p>
            Das erste Jahr war hart. 40 Quadratmeter, 20 Sitzplätze, ein winziges Budget. Jonas war Koch, Kellner und Buchhalter in einer Person. Die Tage begannen um 6 Uhr morgens auf dem Großmarkt und endeten oft nach Mitternacht.
          </p>

          <p>
            „Ich habe in den ersten Monaten praktisch nichts verdient. Manchmal habe ich mich gefragt, ob ich das durchhalten kann", gibt Jonas ehrlich zu. Doch aufgeben kam für ihn nicht in Frage.
          </p>
          
          <p>
            Stattdessen konzentrierte er sich auf das, was er am besten konnte: ehrliche, handwerklich perfekte Küche mit regionalen Zutaten.
          </p>

          <Separator className="my-10" />

          <h2>Qualität statt Quantität</h2>
          
          <p>
            Jonas' Philosophie war von Anfang an klar: Wenige Gerichte, aber diese dafür perfekt. Keine Fertigprodukte, keine Kompromisse bei den Zutaten. Er arbeitet bis heute eng mit lokalen Bauern und Lieferanten zusammen.
          </p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>Gemüse vom Wochenmarkt in Altona</li>
            <li>Fleisch von einem Bio-Hof aus dem Hamburger Umland</li>
            <li>Fisch direkt vom Hamburger Fischmarkt</li>
            <li>Brot aus der Backstube eines befreundeten Bäckermeisters</li>
          </ul>
          
          <p>
            „Die Leute merken den Unterschied. Vielleicht nicht beim ersten Bissen, aber spätestens beim zweiten Besuch", erklärt Jonas seine Überzeugung.
          </p>

          <Separator className="my-10" />

          <h2>Der Durchbruch</h2>
          
          <p>
            Nach etwa anderthalb Jahren kam der Wendepunkt. Ein lokaler Food-Blogger schrieb über das kleine Restaurant, dann folgten Empfehlungen in mehreren Hamburg-Magazinen. Plötzlich standen die Leute Schlange.
          </p>

          <p>
            Jonas konnte expandieren, stellte seine ersten Mitarbeiter ein und vergrößerte das Lokal. Heute hat das Restaurant 60 Plätze und ein festes Team von acht Leuten. Die Reservierungsliste ist oft Wochen im Voraus ausgebucht.
          </p>

          <p>
            <em>„Das Wichtigste ist, dass wir unsere Werte nicht verloren haben. Wir kochen immer noch genauso wie am ersten Tag – nur eben für mehr Gäste"</em>, betont Jonas.
          </p>

          <Separator className="my-10" />

          <h2>Was Jonas anderen Gründern rät</h2>
          
          <p>
            Auf die Frage, welche Tipps er Gründern in der Gastronomie geben würde, überlegt Jonas kurz:
          </p>
          
          <p>
            „Erstens: Unterschätze niemals die Bürokratie. Genehmigungen, Hygiene-Vorschriften, Steuern – das kostet alles Zeit und Nerven. Zweitens: Hab Geduld. Erfolg kommt nicht über Nacht. Und drittens: Bleib bei dem, was du kannst. Kopiere niemanden, sei authentisch."
          </p>

          <p>
            Dann fügt er hinzu: „Und ganz wichtig – umgib dich mit Menschen, die an dich glauben. Ohne meine Familie und mein Team wäre ich nicht hier."
          </p>

          <Separator className="my-10" />

          <h2>Ein Blick in die Zukunft</h2>
          
          <p>
            Für die Zukunft hat Jonas bescheidene Pläne. Keine Filialen, keine Franchise-Ambitionen. „Ich möchte einfach weiter gutes Essen machen. Vielleicht irgendwann ein kleines Kochbuch schreiben oder Workshops geben. Aber im Kern bleibt alles beim Alten."
          </p>
          
          <p>
            Was er sich wünscht? „Dass die Leute weiterhin gerne zu uns kommen. Dass sie sich bei uns wohlfühlen. Das ist eigentlich alles, was zählt."
          </p>

          <p>
            Jonas M. hat bewiesen, dass man mit Leidenschaft, harter Arbeit und der richtigen Einstellung seinen Traum verwirklichen kann. Seine Geschichte ist ein Beispiel dafür, dass Erfolg nicht immer spektakulär sein muss – manchmal reicht es, einfach richtig gut in dem zu sein, was man liebt.
          </p>
        </article>

      </main>

      <NewsFooter />
    </div>
  );
};

export default Artikel;

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Clock, Share2, Bookmark, Volume2 } from "lucide-react";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
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
          <span>Startseite</span>
          <span className="mx-2">/</span>
          <span>Wirtschaft</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">Erfolgsgeschichte</span>
        </nav>

        {/* Category Badge */}
        <Badge className="bg-accent hover:bg-accent text-accent-foreground font-bold text-sm mb-4">
          Wirtschaft
        </Badge>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 text-balance">
          Vom Bankangestellten zum erfolgreichen Trader: Jonas M. über ein Jahrzehnt harte Arbeit
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
          Keine Abkürzungen, kein Glück: Wie ein Hamburger durch Disziplin und jahrelange Weiterbildung seinen Weg an den Finanzmärkten fand – und warum er heute von einem Wandel im Trading spricht.
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
              9 Min. Lesezeit
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
            alt="Jonas M. an seinem Arbeitsplatz"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-muted-foreground mt-3 italic">
            Jonas M. an seinem Arbeitsplatz in Hamburg. Nach über zehn Jahren im Trading hat er gelernt, dass Erfolg Zeit braucht.
          </figcaption>
        </figure>

        {/* Article Content */}
        <article className="article-content">
          <h2>Der Weg eines Traders – keine Abkürzungen</h2>
          
          <p>
            <strong>Hamburg-Eppendorf, 7 Uhr morgens.</strong> Während die meisten Menschen noch schlafen oder sich müde den ersten Kaffee einschenken, sitzt Jonas M. (42) bereits seit einer Stunde vor seinen Bildschirmen. Kein hektisches Klicken, keine nervösen Blicke – nur konzentrierte Ruhe. Was wie ein gewöhnlicher Arbeitstag aussieht, ist das Ergebnis von mehr als einem Jahrzehnt harter Arbeit, unzähliger Rückschläge und einer Lernkurve, die steiler war als jeder Chart.
          </p>
          
          <p>
            „Das hier ist das Resultat von zwölf Jahren", sagt Jonas, ohne den Blick von den Monitoren abzuwenden. „Nicht von zwölf Monaten, nicht von einem Kurs am Wochenende. Zwölf Jahre echtes Lernen, echte Fehler, echte Entwicklung."
          </p>

          <Separator className="my-10" />

          <h2>Die Anfänge: Ein langer Weg mit vielen Umwegen</h2>
          
          <p>
            Vor zwölf Jahren war Jonas noch Angestellter bei einer großen deutschen Bank. Ein sicherer Job, gutes Gehalt, klare Karriereleiter. Doch etwas fehlte. „Ich habe jeden Tag mit Geld gearbeitet, aber nie wirklich verstanden, wie die Märkte funktionieren", erinnert er sich. In seiner Freizeit begann er, Bücher über Börsenpsychologie und technische Analyse zu lesen. Abends nach der Arbeit, am Wochenende, im Urlaub.
          </p>
          
          <p>
            „Die ersten Jahre waren ernüchternd", gibt Jonas offen zu. „Ich dachte, ich könnte das nebenbei lernen. Aber die Märkte sind gnadenlos ehrlich. Sie zeigen dir sehr schnell, was du noch nicht weißt." Seine ersten Trades? Mehr Verluste als Gewinne. Sein erstes Jahr als aktiver Trader? Ein deutliches Minus.
          </p>

          <Separator className="my-10" />

          <h2>Jahre des Lernens: Demut als wichtigste Lektion</h2>
          
          <p>
            Was Jonas von vielen unterscheidet, die an den Märkten scheitern: Er hat nicht aufgegeben. Stattdessen hat er jeden Fehler dokumentiert, analysiert und daraus gelernt. Fünf Jahre lang. <em>„Das ist der Teil, den niemand sehen will"</em>, sagt er. <em>„Die endlosen Stunden des Studierens, die schlaflosen Nächte, die Zweifel. Erfolg im Trading sieht von außen glamourös aus, aber der Weg dorthin ist alles andere als das."</em>
          </p>
          
          <p>
            Er besuchte Seminare, tauschte sich mit erfahrenen Tradern aus, und – vielleicht am wichtigsten – lernte, seine Emotionen zu kontrollieren. „Die größte Hürde bin ich selbst", erklärt Jonas. „Gier, Angst, Ungeduld – das sind die wahren Gegner. Der Markt macht einfach das, was er macht."
          </p>

          <Separator className="my-10" />

          <h2>Der Wandel: Neue Zeiten an den Finanzmärkten</h2>
          
          <p>
            In den letzten Jahren hat Jonas einen fundamentalen Wandel beobachtet. „Die Art, wie wir heute auf Märkte zugreifen können, hat sich komplett verändert", erklärt er. Neue Technologien, bessere Analysewerkzeuge, schnellerer Informationsfluss. „Was früher institutionellen Investoren vorbehalten war, ist heute für jeden zugänglich."
          </p>

          <p>
            Jonas spricht von einer „stillen Revolution" im Trading. Nicht laut, nicht marktschreierisch, aber fundamental. „Die Werkzeuge werden immer besser. Die Datenanalyse, die Mustererkennung, die Geschwindigkeit." Aber – und hier wird er ernst – „die Werkzeuge allein machen noch keinen erfolgreichen Trader. Das ist wie mit einem Chirurgen: Das beste Skalpell nützt nichts ohne jahrelange Ausbildung."
          </p>

          <Separator className="my-10" />

          <h2>Disziplin als Fundament</h2>
          
          <p>
            Heute beginnt Jonas' Tag um sechs Uhr. Erst Sport, dann Frühstück mit der Familie, dann die Vorbereitung auf den Handelstag. Er analysiert Märkte, prüft seine Positionen, liest Wirtschaftsnachrichten. Wenn die europäischen Börsen öffnen, ist er vorbereitet.
          </p>

          <p>
            „Mein wichtigstes Werkzeug ist nicht mein Computer", sagt er mit einem Lächeln. „Es ist meine Routine. Disziplin schlägt Talent. Jeden Tag." Er handelt nach strengen Regeln, die er über Jahre entwickelt hat. Maximales Risiko pro Trade, klare Ausstiegspunkte, keine impulsiven Entscheidungen.
          </p>

          <p>
            Die Statistik kennt er genau: Etwa 80 bis 90 Prozent aller privaten Trader verlieren langfristig Geld. Jonas hat großen Respekt vor diesen Zahlen. „Ich vergesse nie, dass die Märkte mich jederzeit demütigen können. Diese Haltung hält mich am Boden – und im Spiel."
          </p>

          <Separator className="my-10" />

          <h2>Was Jonas anderen mit auf den Weg gibt</h2>
          
          <p>
            Auf die Frage, was er Menschen raten würde, die sich für Trading interessieren, antwortet Jonas ohne zu zögern:
          </p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>„Erwarte nichts schnell. Plane in Jahren, nicht in Monaten."</li>
            <li>„Investiere zuerst in deine Bildung, nicht in den Markt."</li>
            <li>„Riskiere niemals Geld, das du zum Leben brauchst."</li>
            <li>„Lerne, Verluste zu akzeptieren – sie gehören dazu."</li>
            <li>„Sei misstrauisch gegenüber jedem, der schnellen Reichtum verspricht."</li>
          </ul>
          
          <p>
            Besonders der letzte Punkt ist ihm wichtig. „Das Internet ist voll von Menschen, die das schnelle Geld versprechen. Die Realität ist: Konstanter Erfolg an den Märkten erfordert Jahre der Vorbereitung, eiserne Disziplin und die Bereitschaft, immer weiter zu lernen."
          </p>

          <Separator className="my-10" />

          <h2>Ein Blick in die Zukunft</h2>
          
          <p>
            Und wie geht es weiter für Jonas? „Ich möchte irgendwann mein Wissen weitergeben", sagt er nachdenklich. „Nicht um Leute reich zu machen – das kann ich nicht versprechen. Aber um zu zeigen, dass es einen seriösen Weg gibt. Einen, der Zeit braucht, aber nachhaltig ist."
          </p>
          
          <p>
            Er plant, in den kommenden Jahren mehr Zeit mit Mentoring zu verbringen. Nicht für die Massen, sondern für einzelne Menschen, die bereit sind, den langen Weg zu gehen. „Ich suche keine Schüler, die schnell reich werden wollen", betont er. „Ich suche Menschen, die bereit sind, hart zu arbeiten. So wie ich es tun musste."
          </p>

          <p>
            Als wir uns verabschieden, ist es kurz vor Mittag. Die Märkte laufen, aber Jonas wirkt entspannt. „Das ist vielleicht die größte Veränderung", sagt er zum Abschied. „Früher war ich nervös, hektisch, süchtig nach jedem Tick. Heute weiß ich: Die Märkte sind morgen auch noch da. Und übermorgen. Geduld ist die beste Strategie."
          </p>

          <Separator className="my-10" />

          <p className="text-sm text-muted-foreground italic">
            Hinweis: Dieser Artikel stellt keine Anlageberatung dar. Trading birgt erhebliche Risiken, und vergangene Erfolge sind keine Garantie für zukünftige Ergebnisse. Jeder sollte sich vor Investitionsentscheidungen unabhängig beraten lassen.
          </p>
        </article>

      </main>

      <NewsFooter />
    </div>
  );
};

export default Artikel;

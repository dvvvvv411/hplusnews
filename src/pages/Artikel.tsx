import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Share2, Bookmark, Volume2, TrendingUp, ExternalLink } from "lucide-react";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import RelatedArticles from "@/components/news/RelatedArticles";
import authorImage from "@/assets/author-felix-stippler.jpg";
import heroImage from "@/assets/bitloon-trading-hero.jpg";
import jonasImage from "@/assets/jonas-trading-setup.jpg";

const Artikel = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Krypto</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">Artikel</span>
        </nav>

        {/* Category Badge */}
        <Badge className="bg-accent hover:bg-accent text-accent-foreground font-bold text-sm mb-4">
          Krypto
        </Badge>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 text-balance">
          So verdiente Jonas M. mit KI Millionen an der Börse
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
          Der autonome Trading-Bot Bitloon revolutioniert das Krypto-Trading durch vollautomatische Handelsentscheidungen.
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
            <span>12.01.2026</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 Min. Lesezeit
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

        {/* Audio Player Placeholder */}
        <Card className="mb-8 bg-muted/50">
          <CardContent className="p-4 flex items-center gap-4">
            <Button variant="secondary" size="sm" disabled className="opacity-50">
              <Volume2 className="w-4 h-4 mr-2" />
              Artikel anhören
            </Button>
            <span className="text-sm text-muted-foreground">Audiofunktion nicht verfügbar</span>
          </CardContent>
        </Card>

        {/* Hero Image */}
        <figure className="mb-10">
          <img
            src={heroImage}
            alt="Bitloon Trading Setup"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-muted-foreground mt-3 italic">
            Bitloon: Autonomer Trading-Bot für vollautomatisierten Krypto-Handel.
          </figcaption>
        </figure>

        {/* Article Content */}
        <article className="article-content">
          <h2>Rechnen statt Raten: Der neue Weg, im Krypto-Markt Geld zu verdienen</h2>
          
          <p>
            <strong>Hamburg-Altona, Dienstagmorgen.</strong> Draußen Nieselregen, drinnen flackern leuchtende Kursbewegungen über sechs Monitore. Jonas M. sitzt entspannt vor seiner Trading-Umgebung. „Ich analysiere hier nichts mehr selbst", sagt er mit einem leichten Grinsen. „Das übernimmt längst Bitloon."
          </p>
          
          <p>
            Was klingt wie Zukunftsmusik, ist für Jonas Alltag: Ein vollautomatischer Krypto-Trading-Bot, der eigenständig handelt, auswertet und Gewinne realisiert – rund um die Uhr.
          </p>

          <Separator className="my-10" />

          <h2>Vom Excel-Angestellten zum Architekten eines autonomen Systems</h2>
          
          <p>
            Vor drei Jahren noch arbeitete Jonas in einem Großkonzern – lange Meetings, starre Abläufe. In seiner Freizeit begann er, sich intensiv mit dem Kryptomarkt und maschinellem Lernen zu beschäftigen.
          </p>
          
          <p>
            Was ihn faszinierte: die Unberechenbarkeit menschlichen Verhaltens – und die Vorhersagbarkeit von Mustern dahinter.
          </p>

          {/* Quote Box */}
          <Card className="my-10 border-l-4 border-accent bg-muted/30">
            <CardContent className="p-6">
              <blockquote className="text-xl md:text-2xl font-semibold italic">
                „Irgendwann wurde mir klar, dass ich nicht selbst besser werden musste – ich musste einen bauen, der automatisch besser handelt als ich."
              </blockquote>
              <cite className="text-muted-foreground mt-4 block">– Jonas M., Bitloon-Entwickler</cite>
            </CardContent>
          </Card>

          <p>
            Die Idee zu Bitloon war geboren.
          </p>

          {/* Image of Jonas */}
          <figure className="my-10">
            <img
              src={jonasImage}
              alt="Jonas M. vor seinem Trading-Setup"
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-3 italic">
              Jonas M. in seinem Home-Office in Hamburg-Altona.
            </figcaption>
          </figure>

          <Separator className="my-10" />

          <h2>Der Bot: Bitloon</h2>
          
          <p>
            Bitloon ist ein autonomer Trading-Bot, speziell für den hochvolatilen Kryptomarkt entwickelt. Anders als Signal-Dienste oder halbautomatische Tools handelt Bitloon vollständig selbstständig – ohne menschliche Bestätigung oder manuelle Eingriffe.
          </p>

          {/* Feature Box */}
          <Card className="my-10 bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Was Bitloon auswertet:
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Kursbewegungen in Echtzeit auf Plattformen wie Binance, Coinbase, Kraken
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Wallet-Aktivitäten großer Marktteilnehmer (sog. „Whales") direkt aus der Blockchain
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Marktstimmungen aus Krypto-Twitter, Telegram-Gruppen und Newsfeeds
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  On-Chain-Daten: Liquidität, Volumen, Transaktionshäufungen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Korrelationen und Volatilitätszonen zwischen BTC, ETH, SOL, uvm.
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <p>
            „Der Bot sucht nicht nach Trends – er rechnet Wahrscheinlichkeiten. Und handelt dann schneller als jeder Mensch reagieren könnte", erklärt Jonas.
          </p>

          <Separator className="my-10" />

          <h2>Der Praxistest: 200 € Start – 543 € Ergebnis</h2>
          
          <p>
            Wir wollten es wissen: Funktioniert Bitloon wirklich? Jonas richtet gemeinsam mit uns ein Testkonto bei einem regulierten Krypto-Broker ein.
          </p>

          {/* Result Box */}
          <Card className="my-10 border-4 border-accent bg-accent/10">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-2">Startkapital</p>
              <p className="text-4xl md:text-5xl font-black">200 €</p>
              <div className="text-6xl my-4">→</div>
              <p className="text-muted-foreground mb-2">Ergebnis nach 28 Stunden</p>
              <p className="text-5xl md:text-6xl font-black text-accent">543 €</p>
              <p className="mt-4 text-lg text-muted-foreground">
                Über 60 Einzel-Trades • Hohe Trefferquote • Kaum Drawdown
              </p>
            </CardContent>
          </Card>
          
          <p>
            Bitloon wurde aktiviert, im konservativen Modus (geringes Risiko, harte Stop-Loss-Grenzen). Überwachungszeitraum: 28 Stunden – keine manuellen Eingriffe, keine Anpassungen.
          </p>

          {/* Quote Box 2 */}
          <Card className="my-10 border-l-4 border-accent bg-muted/30">
            <CardContent className="p-6">
              <blockquote className="text-xl md:text-2xl font-semibold italic">
                „Das System ist nicht spektakulär. Aber es ist strukturiert. Und es macht keine emotionalen Fehler."
              </blockquote>
              <cite className="text-muted-foreground mt-4 block">– Jonas M.</cite>
            </CardContent>
          </Card>

          <Separator className="my-10" />

          <h2>Kein Bauchgefühl. Kein Chart-Gefluche. Nur Wahrscheinlichkeiten.</h2>
          
          <p>
            Jonas betont: Bitloon ersetzt nicht den Verstand – aber er ersetzt die Emotion. Wo viele Hobby-Traders bei jedem Dip nervös werden, bleibt Bitloon stoisch. Reagiert nur auf Daten. Und genau das scheint den Unterschied zu machen.
          </p>

          {/* Quote Box 3 */}
          <Card className="my-10 border-l-4 border-accent bg-muted/30">
            <CardContent className="p-6">
              <blockquote className="text-xl md:text-2xl font-semibold italic">
                „Ich verspreche niemandem Reichtum. Aber ich zeige, dass es eine Alternative gibt zu Panik, YouTube-Gurus und Chart-Roulette."
              </blockquote>
              <cite className="text-muted-foreground mt-4 block">– Jonas M.</cite>
            </CardContent>
          </Card>

          <Separator className="my-10" />

          <h2>Die stille Community dahinter</h2>
          
          <p>
            Inzwischen setzen über <strong>20.000 Nutzer weltweit</strong> Bitloon ein – mit Einsätzen zwischen 100 und 10.000 Euro. Viele berichten von konstanten Ergebnissen, einem besseren Risikogefühl und – ganz wichtig – <strong>mehr Freizeit</strong>.
          </p>
          
          <p>
            Denn Bitloon läuft <strong>24/7</strong>. Ohne Pause. Ohne „mal kurz schauen". Und genau das macht ihn für viele zur echten Alternative im Kryptomarkt.
          </p>

          <Separator className="my-10" />

          {/* CTA Box */}
          <Card className="my-10 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Interesse?</h2>
              
              <p className="text-lg mb-6 opacity-90">
                Bitloon ist aktuell nur limitiert verfügbar. Wer sich rechtzeitig informiert, kann eine Lizenz erwerben, den Bot selbst einrichten und auf dem eigenen Börsenkonto laufen lassen – komplett eigenständig, mit vollem Kapitalzugriff.
              </p>
              
              <Card className="bg-background/10 border-0 mb-6">
                <CardContent className="p-4 text-center">
                  <p className="font-bold text-lg">Exklusiv für unsere Leser:</p>
                  <p className="text-2xl md:text-3xl font-black mt-2">
                    Mit dem Code <span className="bg-background/20 px-3 py-1 rounded">"FINANCE"</span>
                  </p>
                  <p className="mt-2 text-lg">erhalten Sie bei der Registrierung 50€ Startguthaben geschenkt.</p>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 font-bold text-lg px-8 py-6"
                  asChild
                >
                  <a href="https://bitloon.io" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Mehr erfahren auf bitloon.io
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <p className="text-sm text-muted-foreground italic mt-8">
            Hinweis: Dieser Artikel enthält werbliche Inhalte. Investitionen in Kryptowährungen sind mit Risiken verbunden. Handeln Sie verantwortungsvoll und investieren Sie nur Kapital, dessen Verlust Sie verkraften können.
          </p>
        </article>

        {/* Related Articles */}
        <RelatedArticles />
      </main>

      <NewsFooter />
    </div>
  );
};

export default Artikel;

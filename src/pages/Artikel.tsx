import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Clock, Share2, Bookmark, Volume2, Shield, Users, TrendingUp, Phone, MessageCircle, ChevronRight } from "lucide-react";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import RelatedArticles from "@/components/news/RelatedArticles";
import authorImage from "@/assets/author-felix-stippler.jpg";
import heroImage from "@/assets/bitloon-trading-hero.jpg";

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
            <span>{formattedDate}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 Min. Lesezeit
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
            Was ihn faszinierte: die Unberechenbarkeit menschlichen Verhaltens – und die Vorhersagbarkeit von Mustern dahinter. <em>„Irgendwann wurde mir klar, dass ich nicht selbst besser werden musste – ich musste einen bauen, der automatisch besser handelt als ich"</em>, erinnert sich Jonas.
          </p>

          <p>
            Die Idee zu Bitloon war geboren.
          </p>

          <Separator className="my-10" />

          <h2>Der Bot: Bitloon</h2>
          
          <p>
            Bitloon ist ein autonomer Trading-Bot, speziell für den hochvolatilen Kryptomarkt entwickelt. Anders als Signal-Dienste oder halbautomatische Tools handelt Bitloon vollständig selbstständig – ohne menschliche Bestätigung oder manuelle Eingriffe.
          </p>

          <p>
            Das System wertet kontinuierlich verschiedene Datenquellen aus:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>Kursbewegungen in Echtzeit auf Plattformen wie Binance, Coinbase, Kraken</li>
            <li>Wallet-Aktivitäten großer Marktteilnehmer (sog. „Whales") direkt aus der Blockchain</li>
            <li>Marktstimmungen aus Krypto-Twitter, Telegram-Gruppen und Newsfeeds</li>
            <li>On-Chain-Daten: Liquidität, Volumen, Transaktionshäufungen</li>
            <li>Korrelationen und Volatilitätszonen zwischen BTC, ETH, SOL, uvm.</li>
          </ul>
          
          <p>
            „Der Bot sucht nicht nach Trends – er rechnet Wahrscheinlichkeiten. Und handelt dann schneller als jeder Mensch reagieren könnte", erklärt Jonas.
          </p>

          <Separator className="my-10" />

          <h2>Der Praxistest: 200 € Start – 543 € Ergebnis</h2>
          
          <p>
            Wir wollten es wissen: Funktioniert Bitloon wirklich? Jonas richtet gemeinsam mit uns ein Testkonto bei einem regulierten Krypto-Broker ein.
          </p>

          <p>
            Bitloon wurde aktiviert, im konservativen Modus (geringes Risiko, harte Stop-Loss-Grenzen). Überwachungszeitraum: 28 Stunden – keine manuellen Eingriffe, keine Anpassungen. Das Ergebnis: Aus einem Startkapital von 200 Euro wurden 543 Euro. Bitloon führte über 60 Einzel-Trades aus, mit einer hohen Trefferquote und kaum Drawdown.
          </p>

          <p>
            <em>„Das System ist nicht spektakulär. Aber es ist strukturiert. Und es macht keine emotionalen Fehler"</em>, kommentiert Jonas das Ergebnis.
          </p>

          <Separator className="my-10" />

          <h2>Kein Bauchgefühl. Kein Chart-Gefluche. Nur Wahrscheinlichkeiten.</h2>
          
          <p>
            Jonas betont: Bitloon ersetzt nicht den Verstand – aber er ersetzt die Emotion. Wo viele Hobby-Traders bei jedem Dip nervös werden, bleibt Bitloon stoisch. Reagiert nur auf Daten. Und genau das scheint den Unterschied zu machen.
          </p>

          <p>
            <em>„Ich verspreche niemandem Reichtum. Aber ich zeige, dass es eine Alternative gibt zu Panik, YouTube-Gurus und Chart-Roulette"</em>, sagt Jonas.
          </p>

          <Separator className="my-10" />

          <h2>Die stille Community dahinter</h2>
          
          <p>
            Inzwischen setzen über <strong>20.000 Nutzer weltweit</strong> Bitloon ein – mit Einsätzen zwischen 100 und 10.000 Euro. Viele berichten von konstanten Ergebnissen, einem besseren Risikogefühl und – ganz wichtig – <strong>mehr Freizeit</strong>.
          </p>
          
          <p>
            Denn Bitloon läuft <strong>24/7</strong>. Ohne Pause. Ohne „mal kurz schauen". Und genau das macht ihn für viele zur echten Alternative im Kryptomarkt.
          </p>

          <Separator className="my-10" />

          {/* Conversion-optimized CTA Box */}
          <div className="bg-gradient-to-br from-primary/5 via-background to-accent/10 border-2 border-primary/20 rounded-2xl p-8 my-12 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8">
              {/* Left Column - Main Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-4">
                    VERDIENE BIS ZU 100.000€ PRO MONAT MIT KRYPTO-TRADING
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nutze unsere KI-gestützte Trading-Plattform und profitiere vom Bitcoin-Boom. Keine Vorkenntnisse erforderlich – unser Algorithmus handelt automatisch für dich.
                  </p>
                </div>
                
                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-background/80 rounded-xl border border-border/50">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <span className="text-xs font-semibold text-foreground">Reguliert & Sicher</span>
                  </div>
                  <div className="text-center p-3 bg-background/80 rounded-xl border border-border/50">
                    <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <span className="text-xs font-semibold text-foreground">25.000+ Nutzer</span>
                  </div>
                  <div className="text-center p-3 bg-background/80 rounded-xl border border-border/50">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <div>
                      <span className="text-lg font-black text-accent">+30.2%</span>
                      <p className="text-[10px] text-muted-foreground">Ø Profit</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Premium Service */}
              <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-border/50 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
                    PREMIUM-SERVICE
                  </span>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">Persönlicher Ansprechpartner</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">Kostenlose Beratung durch Finanzexperten</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  JETZT KOSTENLOS STARTEN
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            
            {/* Risk Notice */}
            <p className="relative z-10 text-xs text-muted-foreground mt-6 pt-4 border-t border-border/30">
              <strong>Risikohinweis:</strong> Trading birgt Verlustrisiken. Vergangene Gewinne sind keine Garantie für zukünftige Ergebnisse.
            </p>
          </div>
        </article>

        {/* Related Articles */}
        <RelatedArticles />
      </main>

      <NewsFooter />
    </div>
  );
};

export default Artikel;

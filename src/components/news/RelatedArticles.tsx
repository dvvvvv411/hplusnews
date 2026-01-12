import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const relatedArticles = [
  {
    id: 1,
    category: "Krypto",
    title: "Bitcoin durchbricht 150.000 Dollar-Marke: Was Experten jetzt erwarten",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=250&fit=crop",
    date: "11.01.2026",
  },
  {
    id: 2,
    category: "Technologie",
    title: "KI-Revolution 2026: Diese 5 Tools verändern die Arbeitswelt",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    date: "10.01.2026",
  },
  {
    id: 3,
    category: "Wirtschaft",
    title: "DAX-Allzeithoch: Deutsche Anleger in Feierlaune",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    date: "09.01.2026",
  },
  {
    id: 4,
    category: "Krypto",
    title: "Ethereum 3.0: Das erwartet Investoren im neuen Jahr",
    image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&h=250&fit=crop",
    date: "08.01.2026",
  },
];

const RelatedArticles = () => {
  return (
    <section className="border-t border-border pt-12 mt-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-accent"></span>
        Mehr zu diesem Thema
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedArticles.map((article) => (
          <Card key={article.id} className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md">
            <Link to="#">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className="absolute top-3 left-3 bg-accent hover:bg-accent text-accent-foreground font-bold"
                >
                  {article.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-base leading-tight group-hover:text-accent transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{article.date}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;

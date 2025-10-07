import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AffiliateLinkProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export const AffiliateLink = ({ title, description, url, image }: AffiliateLinkProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-md bg-card">
        <div className="flex items-start gap-4 p-5">
          {image && (
            <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-muted">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="font-semibold text-base text-foreground mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
          <ExternalLink className="flex-shrink-0 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
        </div>
      </Card>
    </a>
  );
};

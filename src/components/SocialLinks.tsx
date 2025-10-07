import { Facebook, Instagram, Youtube } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61581553626571",
    icon: <Facebook className="w-5 h-5" />,
    color: "",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pettoolshub",
    icon: <Instagram className="w-5 h-5" />,
    color: "",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@pettoolshub",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    color: "",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@pettoolshub",
    icon: <Youtube className="w-5 h-5" />,
    color: "",
  },
];

export const SocialLinks = () => {
  return (
    <div className="py-8">
      <p className="text-center text-sm font-medium mb-4 text-muted-foreground">Follow Us</p>
      <div className="flex items-center justify-center gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary bg-card text-muted-foreground hover:text-primary transition-all"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

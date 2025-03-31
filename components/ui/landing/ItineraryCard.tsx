import Image from 'next/image';

interface ItineraryCardProps {
  image: string;
  title: string;
  author: string;
  likes: number;
  badge: string;
}

export function ItineraryCard({
  image,
  title,
  author,
  likes,
  badge,
}: ItineraryCardProps) {
  return (
    <div className="rounded-lg border border-primary/10 bg-background shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
      <div className="relative">
        <Image
          src={ image ||  "/images/placeholder.png"}
          alt={title}
          layout="responsive"
          height={200}
          width={200}
          className="object-cover transition-transform duration-500 max-h-64"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-accent/90 text-white px-3 py-1 rounded-full text-xs font-medium rotate-2">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">By {author}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart text-accent group-hover:fill-accent transition-all"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';


export type WorkProps = {
  image: string;
  title: string | undefined; 
  role: string | undefined; 
  date: string | undefined;
};


export const Work = ({ image, title, role, date }: WorkProps) => {
  return (
    <div className="flex items-center gap-2 hover:bg-accent/50 transition-colors p-2 rounded">
      <Image 
        src={image || "default-image-url.png"} 
        alt={title || "Titre par défaut"} 
        width={300} 
        height={300}
        className="w-9 h-9 object-contain bg-slate-500 rounded p-1" 
      />
      <div className="mr-auto">
        <p className="text-lg font-semibold">{title || "Titre par défaut"}</p>
        <p className="text-xs text-muted-foreground">{role || "Rôle par défaut"}</p>
      </div>
      <p className="text-lg text-muted-foreground">{date || "Date par défaut"}</p>
    </div>
  );
};

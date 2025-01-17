import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MoveUpRight } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';


export const ContactCard = (props: {
  image: string,
  mediumImage: string,
  name: string,
  description: string,
  url?: string,
  className?: string
}) => {
  const url = props.url || "/";

  return (
    <Link href={url} target="_blank" className={cn(props.className, "w-full")}>
      <Card className="p-1.5 bg-accent/10 flex items-center gap-4 hover:bg-accent/50 transition-colors group">
        <div className="relative w-9 h-9">
          <Image src={props.mediumImage} alt={props.name} width={20} height={20} quality={100} className="w-10 h-10 rounded-full" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <MoveUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
      </Card>
    </Link>
  );
}

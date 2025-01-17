import Link from "next/link"

type WorkProps = {
  image: string,
  title: string,
  role: string,
  date: string,
  url: string
}

export const Work = (props: WorkProps) => {
  return (
    <div className="flex items-center gap-2 hover:bg-accent/50 transition-colors p-2 rounded">
      <img src={props.image} alt={props.title} className="w-9 h-9 object-contain bg-slate-500 rounded p-1" />
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-lg text-muted-foreground">{props.date}</p>
    </div>
  )
}
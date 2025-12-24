import Image from "next/image"

type SideProjectProps = {
  Image: string
  title: string
  description: string
  url: string
}

export const SideProject = (props: SideProjectProps) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={`/img/${props.Image}`}
        alt={props.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="rounded-sm mt-2 object-cover"
      />
      <div className="absolute bottom-0 left-0 bg-black/60 p-4">
        <h2 className="text-xl text-white">{props.title}</h2>
        <p className="text-xs text-white font-semibold lg:text-sm">
          {props.description}
        </p>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="text-lg font-semibold mt-2 inline-block hover:underline"
        >
          Voir le projet
        </a>
      </div>
    </div>
  )
}

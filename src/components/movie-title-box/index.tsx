import Icon from '@/components/icon'
import Image from 'next/image'

interface MovieTitleBoxProps {
  movie: any
  randChipColor: any
}

export default function MovieTitleBox(props: MovieTitleBoxProps) {
  return (
    <div className="mt-8 pl-40 w-full flex justify-start items-center gap-8">
      <div className="flex justify-center items-start gap-3">
        <div className="w-12 h-16 relative rounded-lg overflow-hidden">
          <Image
            className="object-cover object-top"
            src={
              props.movie
                ? `${process.env.TMDB_IMAGE_URL}${props.movie.poster_path}`
                : '/images/top-gun-thumbnail.jpg'
            }
            alt="Top Gun Thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <p className="max-w-[10rem] truncate font-medium">
            {props.movie ? props.movie.title : 'Top Gun'}
          </p>
          <div className="mt-2 flex justify-start items-center gap-1 text-gray-600">
            <p className="text-sm">Film series</p>
            <div className="w-4 h-4 rounded-full hover:bg-gray-100 flex justify-center items-center text-gray-500 cursor-pointer">
              <Icon icon="mdi:dots-vertical" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4">
        <div
          className={`px-4 py-2 rounded-3xl select-none border ${
            props.randChipColor ||
            'bg-feminine hover:bg-pink border-oud text-oud'
          }`}
        >
          <p className="text-sm">Overview</p>
        </div>

        <div
          className={`px-4 py-2 rounded-3xl select-none cursor-pointer ${
            props.randChipColor ||
            'bg-feminine hover:bg-pink border-feminine text-oud'
          }`}
        >
          <p className="text-sm">Movies</p>
        </div>

        <div
          className={`px-4 py-2 rounded-3xl select-none cursor-pointer ${
            props.randChipColor ||
            'bg-feminine hover:bg-pink border-feminine text-oud'
          }`}
        >
          <p className="text-sm">Cast</p>
        </div>

        <div
          className={`px-4 py-2 rounded-3xl select-none cursor-pointer ${
            props.randChipColor ||
            'bg-feminine hover:bg-pink border-feminine text-oud'
          }`}
        >
          <p className="text-sm">Trailers & clips</p>
        </div>
      </div>
    </div>
  )
}

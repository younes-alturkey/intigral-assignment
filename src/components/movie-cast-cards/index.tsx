import MovieCastCardsPlaceholder from '@/components/movie-cast-cards/movie-cast-cards-placeholder'
import * as utils from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

interface MovieCastCardsProps {
  cast: any
}

export default function MovieCastCards(props: MovieCastCardsProps) {
  return (
    <div className="mt-4 grid grid-cols-6 justify-start items-start gap-2">
      {utils.isArray(props.cast) && utils.isNoneEmptyArray(props.cast) ? (
        props.cast.slice(0, 6).map((c: any) => (
          <Link
            key={c.id}
            href={`https://www.google.com/search?q=${c.original_name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-full h-40 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-top"
                  src={
                    c.profile_path
                      ? `${process.env.TMDB_IMAGE_URL}${c.profile_path}`
                      : 'https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png'
                  }
                  alt="Miles Teller"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="w-32 mt-2 text-sm truncate">{c.original_name}</p>
              <p className="w-32 text-sm truncate">{c.character}</p>
            </div>
          </Link>
        ))
      ) : (
        <MovieCastCardsPlaceholder />
      )}
    </div>
  )
}

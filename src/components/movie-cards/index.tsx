import PlaceholderMovieCards from '@/components/movie-cards/placeholder-movie-cards'
import * as utils from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

interface MovieCardsProps {
  searchResult: any
}
export default function MovieCards(props: MovieCardsProps) {
  return (
    <div className="mt-4 w-full flex justify-start items-start gap-8">
      {utils.isArray(props.searchResult) &&
      utils.isNoneEmptyArray(props.searchResult) ? (
        props.searchResult.slice(0, 6).map((movie: any) => (
          <Link
            key={movie.id}
            href={`https://www.google.com/search?q=${movie.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-24 h-40 relative rounded-lg overflow-hidden">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                  src={
                    movie.poster_path
                      ? `${process.env.TMDB_IMAGE_URL}${movie.poster_path}`
                      : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'
                  }
                  alt="Top Gun banner image"
                />
              </div>
              <p className="w-20 mt-2 text-sm truncate">{movie.title}</p>
              <p className="w-20 text-sm truncate">
                {movie.release_date.split('-')[0]}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <PlaceholderMovieCards />
      )}
    </div>
  )
}

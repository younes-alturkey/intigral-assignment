import MovieRecommendationsCardsPlaceholder from '@/components/movie-recommendations-cards/movie-recommendations-cards-placeholder'
import * as utils from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

interface MovieRecommendationsCardsProps {
  recommendations: any
}
export default function MovieRecommendationsCards(
  props: MovieRecommendationsCardsProps
) {
  return (
    <>
      {utils.isArray(props.recommendations) &&
      utils.isNoneEmptyArray(props.recommendations) ? (
        <div className="mt-4 w-full grid grid-cols-4 justify-start items-start gap-4">
          {props.recommendations.slice(0, 8).map((rec: any) => (
            <Link
              key={rec.id}
              href={`https://www.google.com/search?q=${rec.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
                <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
                  <Image
                    className="object-cover object-top"
                    src={
                      rec.poster_path
                        ? `${process.env.TMDB_IMAGE_URL}${rec.poster_path}`
                        : 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg'
                    }
                    alt="Top Gun: Maverick"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="w-28 mt-2 text-sm truncate">{rec.title}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <MovieRecommendationsCardsPlaceholder />
      )}
    </>
  )
}

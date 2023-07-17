import * as api from '@/api'
import AccountMenu from '@/components/account-menu'
import AppLoading from '@/components/app-loading'
import CharactersBox from '@/components/characters-box'
import Icon from '@/components/icon'
import MovieCards from '@/components/movie-cards'
import MovieCastCards from '@/components/movie-cast-cards'
import MovieRecommendationsCards from '@/components/movie-recommendations-cards'
import MovieTitleBox from '@/components/movie-title-box'
import ResultMetricsBox from '@/components/result-metrics-box'
import SearchBox from '@/components/search-box'
import SearchOptions from '@/components/search-options'
import SeeMoreButton from '@/components/see-more-button'
import metadata from '@/config/metadata'
import * as enums from '@/enums'
import Layout from '@/layout'
import * as types from '@/types'
import * as utils from '@/utils'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

export default function Home(props: types.HomeProps) {
  const [randChipColor, setRandChipColor] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [elapsedSearchTime, setElapsedSearchTime] = useState(0)
  const [searchResult, setSearchResult] = useState<any>(null)
  const [movie, setMovie] = useState<any>(null)
  const [cast, setCast] = useState<any>(null)
  const [recommendations, setRecommendations] = useState<any>(null)

  const onClear = () => {
    setSearchTerm('')
  }

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const onMovieSearch = async () => {
    setLoading(true)
    const start = Date.now()
    try {
      const movieResult = await api.searchForMovieByName(searchTerm)
      if (movieResult.status === enums.HTTP.OK) {
        const result = movieResult.data.results
        if (utils.isArray(result) && utils.isNoneEmptyArray(result)) {
          setSearchResult(result)
          setMovie(result[0])
          const movieId = result[0].id

          console.log(await api.getMovieDetailsById(movieId))

          const movieCreditsResult = await api.getMovieCreditsById(movieId)
          if (movieResult.status === enums.HTTP.OK) {
            setCast(movieCreditsResult.data.cast)
          }

          const movieRecommendationsResult =
            await api.getMovieRecommendationsById(movieId)
          if (movieRecommendationsResult.status === enums.HTTP.OK) {
            setRecommendations(movieRecommendationsResult.data.results)
          }
        }
      }
    } catch (err) {
      console.log(err)
    }

    const end = Date.now()
    const elapsedTimeInSeconds = (end - start) / 1000
    setElapsedSearchTime(elapsedTimeInSeconds)
    toast.success(`Generated results within ${elapsedTimeInSeconds} s`)
    setRandChipColor(utils.getRandomChipColors())
    setLoading(false)
  }

  return (
    <Layout metadata={props.metadata}>
      <section className="px-8 w-full flex justify-between items-start">
        <div className="w-[850px]">
          <SearchBox
            searchTerm={searchTerm}
            onSearchTermChange={onSearchTermChange}
            onClear={onClear}
            onMovieSearch={onMovieSearch}
          />

          <SearchOptions />

          <ResultMetricsBox
            searchResult={searchResult}
            elapsedSearchTime={elapsedSearchTime}
          />

          <MovieTitleBox movie={movie} randChipColor={randChipColor} />
        </div>

        <AccountMenu />
      </section>

      <section className="mt-8 pl-[12rem] pr-16 border-t border-gray-100 w-full flex justify-between items-start gap-8 py-4">
        <div className="w-full">
          <div className="flex justify-start items-center gap-1 text-gray-600 select-none">
            <h5>Movies</h5>
            <Icon className="mt-1" icon="mdi:chevron-right" fontSize="1.8rem" />
          </div>

          <MovieCards searchResult={searchResult} />

          <div className="mt-8 flex justify-start items-center gap-1 text-gray-600 select-none">
            <h5>Cast</h5>
            <Icon className="mt-1" icon="mdi:chevron-right" fontSize="1.8rem" />
          </div>

          <MovieCastCards cast={cast} />
        </div>

        <div className="px-4 w-full border-l border-gray-100">
          <p>About</p>

          <CharactersBox cast={cast} />

          <p className="mt-4 font-bold text-sm w-80">
            Production companies:{' '}
            <span className="text-blue font-normal hover:underline cursor-pointer">
              Paramount Pictures, Skydance Media, MORE
            </span>
          </p>

          <p className="mt-4 font-bold text-sm w-80">
            Directors:{' '}
            <span className="text-blue font-normal hover:underline cursor-pointer">
              Tony Scott, Joseph Kosinski
            </span>
          </p>

          <div className="w-8/12 flex justify-end items-center">
            <p className="text-sm text-gray-500 cursor-pointer">Feedback</p>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 w-8/12">
            <p>People also search for</p>

            <MovieRecommendationsCards recommendations={recommendations} />

            <SeeMoreButton />
          </div>
        </div>
      </section>

      {loading ? <AppLoading /> : <></>}
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      metadata,
    },
  }
}

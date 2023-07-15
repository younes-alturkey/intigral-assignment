import * as api from '@/api'
import Icon from '@/components/icon'
import metadata from '@/config/metadata'
import * as enums from '@/enums'
import Layout from '@/layout'
import * as types from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

export default function Home(props: types.HomeProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const onClear = () => {
    setSearchTerm('')
  }

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const onMovieSearch = async () => {
    try {
      const movieResult = await api.searchForMovieByName(searchTerm)
      if (movieResult.status === enums.HTTP.OK) {
        console.log(movieResult.data)
        setSearchResult(movieResult.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(props.movieData)
  // console.log(props.titanicSearch)
  // console.log(props.alternativesData)
  // console.log(props.recommendationsData)

  return (
    <Layout metadata={props.metadata}>
      <section className="px-8 w-full flex justify-between items-start">
        <div className="w-[850px]">
          <div className="w-full flex justify-center items-center gap-10">
            <Link
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mt-1 w-[92px] h-[33px] relative">
                <Image
                  className="object-cover"
                  priority
                  fill
                  src="/images/google.svg"
                  alt="Google white logo"
                />
              </div>
            </Link>

            <div className="w-full h-[46px] relative">
              <input
                className="w-full h-full p-2 rounded-3xl shadow hover:shadow-md text-lg border border-gray-100 outline-none pl-4 pr-44"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChange}
              />
              <p
                className={`absolute top-[0.15rem] right-[8.3rem] text-3xl text-gray-200 opacity-50 ${
                  !searchTerm && 'hidden'
                }`}
              >
                |
              </p>
              <Icon
                onClick={onClear}
                className={`text-gray-600 hover:text-gray-800 absolute top-3 right-[9.2rem] cursor-pointer z-50 ${
                  !searchTerm && 'hidden'
                }`}
                icon="mdi:close"
              />
              <div className=" absolute top-3 right-[1rem] flex justify-center items-center gap-6">
                <div className="w-5 h-5 relative cursor-pointer hover:opacity-80">
                  <Image
                    src="/images/mic.svg"
                    alt="Google Mic search icon"
                    fill
                    priority
                  />
                </div>

                <div className="w-5 h-5 relative cursor-pointer hover:opacity-80">
                  <Image
                    src="/images/image.svg"
                    alt="Google Image search icon"
                    fill
                    priority
                  />
                </div>

                <div
                  className="w-5 h-5 relative cursor-pointer hover:opacity-80"
                  onClick={onMovieSearch}
                >
                  <Image
                    className="object-cover"
                    src="/images/search.svg"
                    alt="Google Search Icon"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pl-40 pr-4 w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-6 text-gray-500">
              <div className="flex justify-center items-center gap-2 border-b-4 border-google pb-2 select-none">
                <div className="w-5 h-5 relative">
                  <Image
                    fill
                    priority
                    src="/images/search.png"
                    alt="Google Search icon"
                  />
                </div>
                <p className="text-sm text-google">All</p>
              </div>

              <div className="flex justify-center items-center gap-2 pb-2 cursor-pointer select-none hover:opacity-90">
                <div className="w-5 h-5 relative">
                  <Icon icon="mdi:image-outline" />
                </div>
                <p className="text-sm">Images</p>
              </div>

              <div className="flex justify-center items-center gap-2 pb-2 cursor-pointer select-none hover:opacity-90">
                <div className="w-5 h-5 relative">
                  <Icon icon="mdi:television-play" />
                </div>
                <p className="text-sm">Videos</p>
              </div>

              <div className="flex justify-center items-center gap-2 pb-2 cursor-pointer select-none hover:opacity-90">
                <div className="w-5 h-5 relative">
                  <Icon icon="mdi:newspaper-variant-outline" />
                </div>
                <p className="text-sm">News</p>
              </div>

              <div className="flex justify-center items-center gap-2 pb-2 cursor-pointer select-none hover:opacity-90">
                <div className="w-5 h-5 relative">
                  <Icon icon="mdi:map-marker-outline" />
                </div>
                <p className="text-sm">Maps</p>
              </div>

              <div className="flex justify-center items-center gap-2 pb-2 cursor-pointer select-none hover:opacity-90">
                <div className="w-5 h-5 relative">
                  <Icon icon="mdi:dots-vertical" />
                </div>
                <p className="text-sm">More</p>
              </div>
            </div>

            <div className="px-2 py-1 text-gray-600 hover:bg-gray-100 border border-white hover:border-gray-200 flex justify-center items-center cursor-pointer select-none">
              <p className="text-sm">Tools</p>
            </div>
          </div>

          <div className="mt-4 pl-40">
            <p className="text-gray-600 text-sm">
              About 2,720,000,000 results (0.35 seconds)
            </p>
          </div>

          <div className="mt-8 pl-40 w-full flex justify-start items-center gap-8">
            <div className="flex justify-center items-start gap-3">
              <div className="w-12 h-16 relative rounded-lg overflow-hidden">
                <Image
                  className=" object-cover object-top"
                  src="/images/top-gun-thumbnail.jpg"
                  alt="Top Gun Thumbnail"
                  fill
                  priority
                />
              </div>
              <div>
                <h4>Top Gun</h4>
                <div className="mt-2 flex justify-start items-center gap-1 text-gray-600">
                  <p className="text-sm">Film series</p>
                  <div className="w-4 h-4 rounded-full hover:bg-gray-100 flex justify-center items-center text-gray-500 cursor-pointer">
                    <Icon icon="mdi:dots-vertical" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="rounded-3xl select-none bg-feminine border border-oud text-oud px-4 py-2">
                <p>Overview</p>
              </div>

              <div className="rounded-3xl select-none cursor-pointer bg-feminine hover:bg-pink border border-feminine text-oud px-4 py-2">
                <p>Movies</p>
              </div>

              <div className="rounded-3xl select-none cursor-pointer bg-feminine hover:bg-pink border border-feminine text-oud px-4 py-2">
                <p>Cast</p>
              </div>

              <div className="rounded-3xl select-none cursor-pointer bg-feminine hover:bg-pink border border-feminine text-oud px-4 py-2">
                <p>Trailers & clips</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-12 rounded-full hover:bg-gray-100 flex justify-center items-center text-gray-500 cursor-pointer">
            <Icon icon="mdi:cog-outline" />
          </div>

          <div className="w-12 h-12 rounded-full hover:bg-gray-100 flex justify-center items-center text-gray-500 cursor-pointer">
            <Icon icon="mdi:dots-grid" fontSize="1.7rem" />
          </div>

          <Link
            href="https://www.linkedin.com/in/satatwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:opacity-80">
              <Image
                className="object-cover object-top"
                src="/images/sat.jpg"
                alt="Engineering Manager Sat photo"
                fill
                priority
              />
            </div>
          </Link>
        </div>
      </section>

      <section className="mt-8 pl-[12rem] pr-16 border-t border-gray-100 w-full flex justify-between items-start gap-8 py-4">
        <div className="w-full">
          <div className="flex justify-start items-center gap-1 text-gray-600 select-none">
            <h5>Movies</h5>
            <Icon className="mt-1" icon="mdi:chevron-right" fontSize="1.8rem" />
          </div>

          <div className="mt-4 w-full flex justify-start items-start gap-8">
            <div className="text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-24 h-40 relative rounded-lg overflow-hidden">
                <Image
                  fill
                  priority
                  className="object-cover object-top"
                  src="/images/top-gun-banner.jpg"
                  alt="Top Gun banner image"
                />
              </div>
              <p className="w-20 mt-2 text-sm">Top Gun</p>
              <p className="w-20 text-sm">1986</p>
            </div>

            <div className="text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-24 h-40 relative rounded-lg overflow-hidden">
                <Image
                  fill
                  priority
                  className="object-cover object-top"
                  src="/images/top-gun-banner-2.jpg"
                  alt="Top Gun: Maverick banner image"
                />
              </div>
              <p className="w-20 mt-2 text-sm">Top Gun: Maverick</p>
              <p className="w-20 text-sm">2022</p>
            </div>
          </div>

          <div className="mt-8 flex justify-start items-center gap-1 text-gray-600 select-none">
            <h5>Cast</h5>
            <Icon className="mt-1" icon="mdi:chevron-right" fontSize="1.8rem" />
          </div>
          <div className="mt-4 grid grid-cols-6 justify-start items-start gap-4">
            <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-full h-28 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-top"
                  src="/images/miles-teller.jpg"
                  alt="Miles Teller"
                  fill
                  priority
                />
              </div>
              <p className="w-32 mt-2 text-sm">Miles Teller</p>
              <p className="w-32 text-sm truncate">Bradley Bradshaw</p>
            </div>

            <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-full h-28 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-top"
                  src="/images/tom-cruise.jpg"
                  alt="Tom Cruise"
                  fill
                  priority
                />
              </div>
              <p className="w-32 mt-2 text-sm">Tom Cruise</p>
              <p className="w-32 text-sm truncate">Pete Mitchell</p>
            </div>

            <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-full h-28 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-top"
                  src="/images/kelly-mcgills.jpg"
                  alt="Kelly McGillis"
                  fill
                  priority
                />
              </div>
              <p className="w-32 mt-2 text-sm">Kelly McGillis</p>
              <p className="w-32 text-sm truncate">
                Charlotte 'Charlie' Blackwood
              </p>
            </div>

            <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-full h-28 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-top"
                  src="/images/val-kilmer.jpg"
                  alt="Val Kilmer"
                  fill
                  priority
                />
              </div>
              <p className="w-32 mt-2 text-sm">Val Kilmer</p>
              <p className="w-32 text-sm truncate">Tom Kazansky</p>
            </div>

            <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-full h-28 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-top"
                  src="/images/jennifer-connelly.jpg"
                  alt="Jennifer Connelly"
                  fill
                  priority
                />
              </div>
              <p className="w-32 mt-2 text-sm">Jennifer Connelly</p>
              <p className="w-32 text-sm truncate">Penny Benjamin</p>
            </div>

            <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
              <div className="w-full h-28 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-top"
                  src="/images/glen-powell.jpg"
                  alt="Glen Powell"
                  fill
                  priority
                />
              </div>
              <p className="w-32 mt-2 text-sm">Glen Powell</p>
              <p className="w-32 text-sm truncate">
                Lt. Jake 'Hangman' Seresin
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 w-full border-l border-gray-100">
          <p>About</p>

          <p className="mt-8 font-bold text-sm w-80">
            Characters:{' '}
            <span className="text-blue font-normal hover:underline cursor-pointer">
              LTJG Nick 'Goose' Bradshaw, Penny Benjamin, MORE
            </span>
          </p>

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

            <div className="mt-4 w-full grid grid-cols-4 justify-start items-start gap-4">
              <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
                <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
                  <Image
                    className="object-cover object-top"
                    src="/images/maverick.jpg"
                    alt="Top Gun: Maverick"
                    fill
                    priority
                  />
                </div>
                <p className="w-32 mt-2 text-sm">Top Gun:</p>
                <p className="w-32 text-sm truncate">Maverick</p>
              </div>

              <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
                <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
                  <Image
                    className="object-cover object-top"
                    src="/images/impossible.jpg"
                    alt="Impossible"
                    fill
                    priority
                  />
                </div>
                <p className="w-32 mt-2 text-sm">Mission:</p>
                <p className="w-32 text-sm truncate">Impossible</p>
              </div>

              <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
                <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
                  <Image
                    className="object-cover object-top"
                    src="/images/flash.jpg"
                    alt="The Batman"
                    fill
                    priority
                  />
                </div>
                <p className="w-32 mt-2 text-sm">The Batman</p>
              </div>

              <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
                <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
                  <Image
                    className="object-cover object-top"
                    src="/images/matrix.jpg"
                    alt="The Matrix"
                    fill
                    priority
                  />
                </div>
                <p className="w-32 mt-2 text-sm">The Matrix</p>
              </div>
            </div>

            <div className="mt-4 w-full bg-gray-100 hover:bg-gray-200 rounded-3xl text-gray-700 p-1 flex justify-center items-center gap-2 select-none cursor-pointer">
              <p>See more</p>
              <Icon icon="mdi:arrow-right" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const titanic = await api.searchForMovieByName('Titanic')
  const titanicSearch = titanic.data

  const movie = await api.searchForMovieById('1137094')
  const movieData = movie.data

  const alternatives = await api.searchForMovieById('1137094')
  const alternativesData = alternatives.data

  const recommendations = await api.getRecommendationsById('1137094')
  const recommendationsData = recommendations.data
  return {
    props: {
      metadata,
      titanicSearch,
      movieData,
      alternativesData,
      recommendationsData,
    },
  }
}

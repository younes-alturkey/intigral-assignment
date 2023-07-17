import Icon from '@/components/icon'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent } from 'react'

interface SearchBoxProps {
  searchTerm: string
  onSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  onMovieSearch: () => void
}

export default function SearchBox(props: SearchBoxProps) {
  return (
    <div className="w-full flex justify-center items-center gap-10">
      <Link
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mt-1 w-[92px] h-[33px] relative">
          <Image
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/google.svg"
            alt="Google white logo"
          />
        </div>
      </Link>

      <div className="w-full h-[46px] relative">
        <input
          className="w-full h-full p-2 rounded-3xl shadow hover:shadow-md text-lg border border-gray-100 outline-none pl-4 pr-44"
          type="text"
          value={props.searchTerm}
          onFocus={props.onClear}
          onChange={props.onSearchTermChange}
        />
        <p
          className={`absolute top-[0.15rem] right-[8.3rem] text-3xl text-gray-200 opacity-50 ${
            !props.searchTerm && 'hidden'
          }`}
        >
          |
        </p>
        <Icon
          onClick={props.onClear}
          className={`text-gray-600 hover:text-gray-800 absolute top-3 right-[9.2rem] cursor-pointer z-50 ${
            !props.searchTerm && 'hidden'
          }`}
          icon="mdi:close"
        />
        <div className=" absolute top-3 right-[1rem] flex justify-center items-center gap-6">
          <div className="w-5 h-5 relative cursor-pointer hover:opacity-80">
            <Image
              src="/images/mic.svg"
              alt="Google Mic search icon"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="w-5 h-5 relative cursor-pointer hover:opacity-80">
            <Image
              src="/images/image.svg"
              alt="Google Image search icon"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div
            className="w-5 h-5 relative cursor-pointer hover:opacity-80"
            onClick={props.onMovieSearch}
          >
            <Image
              className="object-cover"
              src="/images/search.svg"
              alt="Google Search Icon"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

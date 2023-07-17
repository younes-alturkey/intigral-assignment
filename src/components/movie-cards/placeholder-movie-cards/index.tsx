import Image from 'next/image'
import Link from 'next/link'

export default function PlaceholderMovieCards() {
  return (
    <>
      <Link
        href={`https://www.google.com/search?q=${'Top Gun'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-24 h-40 relative rounded-lg overflow-hidden">
            <Image
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top"
              src="/images/top-gun-banner.jpg"
              alt="Top Gun banner image"
            />
          </div>
          <p className="w-20 mt-2 text-sm truncate">Top Gun</p>
          <p className="w-20 text-sm truncate">1986</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Top Gun: Maverick'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-24 h-40 relative rounded-lg overflow-hidden">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top"
              src="/images/top-gun-banner-2.jpg"
              alt="Top Gun: Maverick banner image"
            />
          </div>
          <p className="w-20 mt-2 text-sm truncate">Top Gun: Maverick</p>
          <p className="w-20 text-sm truncate">2022</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'To Catch a Killer'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-24 h-40 relative rounded-lg overflow-hidden">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top"
              src="/images/to-catch-a-killer.jpg"
              alt="To Catch a Killer banner image"
            />
          </div>
          <p className="w-20 mt-2 text-sm truncate">To Catch a Killer</p>
          <p className="w-20 text-sm truncate">2023</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Titanic'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-24 h-40 relative rounded-lg overflow-hidden">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top"
              src="/images/titanic.jpg"
              alt="Titanic banner image"
            />
          </div>
          <p className="w-20 mt-2 text-sm truncate">Titanic</p>
          <p className="w-20 text-sm truncate">1997</p>
        </div>
      </Link>
    </>
  )
}

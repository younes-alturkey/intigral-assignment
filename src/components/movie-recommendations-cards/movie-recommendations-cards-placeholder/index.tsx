import Image from 'next/image'
import Link from 'next/link'

export default function MovieRecommendationsCardsPlaceholder() {
  return (
    <div className="mt-4 w-full grid grid-cols-4 justify-start items-start gap-4">
      <Link
        href={`https://www.google.com/search?q=${'Top Gun: Maverick'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/maverick.jpg"
              alt="Top Gun: Maverick"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-28 mt-2 text-sm truncate">Top Gun: Maverick</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Mission: Impossible'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/impossible.jpg"
              alt="Impossible"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-28 mt-2 text-sm truncate">Mission: Impossible</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'The Batman'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/flash.jpg"
              alt="The Batman"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-28 mt-2 text-sm truncate">The Batman</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'The Matrix'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/matrix.jpg"
              alt="The Matrix"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-28 mt-2 text-sm truncate">The Matrix</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Rain Man'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/rain.jpg"
              alt="Rain Man"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-28 mt-2 text-sm truncate">Rain Man</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${`Selina's Gold`}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/selinasgold.jpg"
              alt="Selina's Gold"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-28 mt-2 text-sm truncate">Selina's Gold</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Mission: Impossible'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/mission-impossible.jpg"
              alt="Mission: Impossible"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-28 mt-2 text-sm truncate">Mission: Impossible</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Wuhan Wuhan'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-[6.5rem] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/wuhan.jpg"
              alt="Wuhan Wuhan"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-28 mt-2 text-sm truncate">Wuhan Wuhan</p>
        </div>
      </Link>
    </div>
  )
}

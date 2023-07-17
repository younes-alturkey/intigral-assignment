import Image from 'next/image'
import Link from 'next/link'

export default function MovieCastCardsPlaceholder() {
  return (
    <>
      <Link
        href={`https://www.google.com/search?q=${'Miles Teller'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-28 relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/miles-teller.jpg"
              alt="Miles Teller"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-32 mt-2 text-sm">Miles Teller</p>
          <p className="w-32 text-sm truncate">Bradley Bradshaw</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Tom Cruise'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-28 relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/tom-cruise.jpg"
              alt="Tom Cruise"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-32 mt-2 text-sm">Tom Cruise</p>
          <p className="w-32 text-sm truncate">Pete Mitchell</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Kelly McGillis'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-28 relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/kelly-mcgills.jpg"
              alt="Kelly McGillis"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-32 mt-2 text-sm">Kelly McGillis</p>
          <p className="w-32 text-sm truncate">Charlotte 'Charlie' Blackwood</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Val Kilmer'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-28 relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/val-kilmer.jpg"
              alt="Val Kilmer"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-32 mt-2 text-sm">Val Kilmer</p>
          <p className="w-32 text-sm truncate">Tom Kazansky</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Jennifer Connelly'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-28 relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/jennifer-connelly.jpg"
              alt="Jennifer Connelly"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-32 mt-2 text-sm">Jennifer Connelly</p>
          <p className="w-32 text-sm truncate">Penny Benjamin</p>
        </div>
      </Link>

      <Link
        href={`https://www.google.com/search?q=${'Glen Powell'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-gray-600 hover:underline select-none cursor-pointer">
          <div className="w-full h-28 relative rounded-lg overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/images/glen-powell.jpg"
              alt="Glen Powell"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="w-32 mt-2 text-sm">Glen Powell</p>
          <p className="w-32 text-sm truncate">Lt. Jake 'Hangman' Seresin</p>
        </div>
      </Link>
    </>
  )
}

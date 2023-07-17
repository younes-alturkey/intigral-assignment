import * as utils from '@/utils'
import Link from 'next/link'

interface CharactersBoxProps {
  cast: any
}
export default function CharactersBox(props: CharactersBoxProps) {
  return (
    <p className="mt-8 font-bold text-sm w-80">
      Characters:{' '}
      <span className="text-blue font-normal">
        {utils.isArray(props.cast) && utils.isNoneEmptyArray(props.cast) ? (
          props.cast.slice(0, 4).map((c: any) => (
            <Link
              key={c.id}
              href={`https://www.google.com/search?q=${c.character}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline">{c.character}, </span>
            </Link>
          ))
        ) : (
          <>
            <Link
              href={`https://www.google.com/search?q=${"LTJG Nick 'Goose' Bradshaw"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline">
                LTJG Nick 'Goose' Bradshaw,
              </span>
            </Link>{' '}
            <Link
              href={`https://www.google.com/search?q=${'Penny Benjamin'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline">Penny Benjamin, </span>
            </Link>
          </>
        )}
        MORE
      </span>
    </p>
  )
}

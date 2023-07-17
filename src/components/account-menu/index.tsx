import Icon from '@/components/icon'
import Image from 'next/image'
import Link from 'next/link'

export default function AccountMenu() {
  return (
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>
      </Link>
    </div>
  )
}

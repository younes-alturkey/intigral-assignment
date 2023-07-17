import Icon from '@/components/icon'
import Image from 'next/image'

export default function SearchOptions() {
  return (
    <div className="mt-8 pl-40 pr-4 w-full flex justify-between items-center">
      <div className="flex justify-start items-center gap-6 text-gray-500">
        <div className="flex justify-center items-center gap-2 border-b-4 border-google pb-2 select-none">
          <div className="w-5 h-5 relative">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  )
}

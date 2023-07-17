import Icon from '@/components/icon'

export default function SeeMoreButton() {
  return (
    <div className="mt-4 w-full bg-gray-100 hover:bg-gray-200 rounded-3xl text-gray-700 p-1 flex justify-center items-center gap-2 select-none cursor-pointer">
      <p>See more</p>
      <Icon icon="mdi:arrow-right" />
    </div>
  )
}

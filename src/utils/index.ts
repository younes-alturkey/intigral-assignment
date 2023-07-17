export const isArray = (unknown: any) => Array.isArray(unknown)

export const isNoneEmptyArray = (array: Array<any>) => array.length > 0

export const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const getRandomChipColors = () => {
  const rand = randomIntFromInterval(1, 200)

  if (rand < 20)
    return 'bg-cyan-100 hover:bg-cyan-200 border-cyan-300 text-cyan-700'
  else if (rand < 50)
    return `bg-feminine hover:bg-pink border-feminine border-oud text-oud`
  else if (rand < 70)
    return 'bg-purple-100 hover:bg-purple-200 border-purple-400 text-purple-800'
  else if (rand < 90)
    return 'bg-yellow-100 hover:bg-yellow-200 border-yellow-400 text-yellow-800'
  else
    return 'bg-orange-100 hover:bg-orange-200 border-orange-400 text-orange-800'
}

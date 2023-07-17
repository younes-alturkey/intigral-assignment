import * as utils from '@/utils'

interface ResultMetricsBoxProps {
  searchResult: any
  elapsedSearchTime: any
}

export default function ResultMetricsBox(props: ResultMetricsBoxProps) {
  return (
    <div className="mt-4 pl-40">
      <p className="text-gray-600 text-sm">
        About{' '}
        {utils.isArray(props.searchResult) &&
        utils.isNoneEmptyArray(props.searchResult)
          ? (props.searchResult.length * 1000000).toLocaleString()
          : '2,720,000,000'}{' '}
        results (
        {props.elapsedSearchTime ? props.elapsedSearchTime.toFixed(2) : 0.35}{' '}
        seconds)
      </p>
    </div>
  )
}

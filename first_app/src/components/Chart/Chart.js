import './Chart.css'
import CharBar from './ChartBar';

const Chart = props => {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return <div className='chart'>
    {props.dataPoints.map(dataPoints => (
      <CharBar
        key={dataPoints.label}
        value={dataPoints.value}
        maxValue={totalMaximum}
        label={dataPoints.label}
      />
    ))}
  </div>
}

export default Chart; 
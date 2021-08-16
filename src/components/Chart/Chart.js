 import './Chart.css';
 import Chartbar from './ChartBar.js';



 const Chart =props => {

    let dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    let totalMaximum = Math.max(...dataPointValues);

    return (<div className='chart'>
        {props.dataPoints.map(dataPoint => 
        <Chartbar 
        value ={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label} 
        key ={dataPoint.label}>
            
        </Chartbar>)}
    </div>);
 }


 export default Chart;
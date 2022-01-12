
import { useEffect, useRef, useCallback } from 'react';
import './App.css';
import {ForceGraph} from "./ForceGraph";
import {miserables} from "./miserables"

function App() {
  const nodeHoverTooltip = useCallback((name) => {
    return `<div>     
      <b>${name}</b>
    </div>`;
  }, []);
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      drawChart();
    }
  }, [])
  const drawChart = () => {
    ForceGraph(miserables, {
      nodeId: d => d.id,
      nodeGroup: d => d.group,
      nodeTitle: d => `${d.id}\n${d.group}`,
      linkStrokeWidth: l => Math.sqrt(l.value),
      ref: chartRef,
      nodeHoverTooltip,
    });
  }
  return (
    <div className="App">
      <div className="graph-body">   
        <div ref={chartRef}></div>
      </div>
    </div>
  );
}

export default App;

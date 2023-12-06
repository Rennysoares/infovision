import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as d3 from 'd3';

const Graph = ({seg, ter, qua, qui, sex, sab, dom}) => {

 
  const data = [
    { x: 0, y: seg },
    { x: 1, y: ter },
    { x: 2, y: qua },
    { x: 3, y: qui },
    { x: 4, y: sex },
    { x: 5, y: sab },
    { x: 6, y: dom },
  ];

  const width = 200;
  const height = 100;
  const margin = 10;

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([margin, width - margin]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([height - margin, margin]);

  const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  const reads = [seg, ter, qua, qui, sex, sab, dom]

  const numVerticalLines = 6;
  const numHorizontalLines = Math.max(...reads);

  const xGridPoints = d3.range(0, numVerticalLines + 1).map(i => {
    const xValue = d3.max(data, d => d.x) * (i / numVerticalLines);
    return {
      x1: xScale(xValue),
      y1: margin,
      x2: xScale(xValue),
      y2: height - margin,
    };
  });

  const yGridPoints = d3.range(0, numHorizontalLines + 1).map(i => {
    const yValue = d3.max(data, d => d.y) * (i / numHorizontalLines);
    return {
      x1: margin,
      y1: yScale(yValue),
      x2: width - margin,
      y2: yScale(yValue),
    };
  });

  return (
    <View>
      <Svg width={width} height={height}>
      {xGridPoints.map((d, i) => (
          <Line
            key={i}
            x1={d.x1}
            y1={d.y1}
            x2={d.x2}
            y2={d.y2}
            stroke="lightgray"
            strokeWidth="1"
          />
        ))}
        {yGridPoints.map((d, i) => (
          <Line
            key={i}
            x1={d.x1}
            y1={d.y1}
            x2={d.x2}
            y2={d.y2}
            stroke="lightgray"
            strokeWidth="1"
          />
        ))}
        
        <Path d={line(data)} fill="none" stroke="lightgray" strokeWidth="2" />

        {data.map((d, i) => (
          <Circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r={4}
            fill="white"
          />
        ))}
        
        <Path
          d={xAxis.tickSizeOuter(0)(d3.select(null))}
          fill="none"
          stroke="black"
        />
        <Path
          d={yAxis.tickSizeOuter(0)(d3.select(null))}
          fill="none"
          stroke="black"
        />
      </Svg>
      <View style={{width: 200, height: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.weeks}>Seg</Text>
        <Text style={styles.weeks}>Ter</Text>
        <Text style={styles.weeks}>Qua</Text>
        <Text style={styles.weeks}>Qui</Text>
        <Text style={styles.weeks}>Sex</Text>
        <Text style={styles.weeks}>Sáb</Text>
        <Text style={styles.weeks}>Dom</Text>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    weeks:{
        fontSize: 11,
        color: "rgb(255, 255, 255)"
    }
})
export default Graph;

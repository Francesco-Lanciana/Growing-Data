import React from 'react';
import * as d3 from 'd3';

require('ComponentStyles/line-graph');

/*
TODO: Fix the data formats... they make me sad.
      Allow multiple companies to be displayed
      Allow multiple companies and dataType to be displayed
      Restructure code so as to not offend the gods
*/

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.createLineGraph = this.createLineGraph.bind(this);
  }

  componentDidMount() {
    this.createLineGraph();
  }

  componentDidUpdate() {
    this.createLineGraph();
  }

  getDataExtent(data, parseTime) {
    //Find the extent of data over all data sets
    let xDomain = {min: parseTime('2300'), max: parseTime('1800')};
    let yDomain = {min: 100000, max: 0};
    let temp1, temp2;
    data.forEach((filing) => {
      [temp1, temp2] = d3.extent(filing, (d) => d.yearFormatted);
      xDomain.min = d3.min([xDomain.min, temp1]);
      xDomain.max = d3.max([xDomain.max, temp2]);

      [temp1, temp2] = d3.extent(filing, (d) => d.metric);
      yDomain.min = d3.min([yDomain.min, temp1]);
      yDomain.max = d3.max([yDomain.max, temp2]);
    });

    return {
      x: [xDomain.min, xDomain.max],
      y: [yDomain.min, yDomain.max],
    };
  }

  createLineGraph() {

    const {data, dataLabels} = this.props;

    // Extract metric code and name
    let metricCode = dataLabels.dataType.id;
    let metricName = dataLabels.dataType.name;

    const node = d3.select("svg"),
          margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = node.attr("width") - margin.left - margin.right,
          height = node.attr("height") - margin.top - margin.bottom,
          parseTime = d3.timeParse("%Y");

    // Extract data of interest for plotting
    data.forEach((filing) => {
      filing.forEach((d) => {
        d.yearFormatted = parseTime(d['year']);
        d.metric = d[metricCode];
      });
	  });

    // Sort in ascending year order
    data.forEach((filing) => {
      filing = filing.sort((a, b) => (a.year - b.year));
    });

    let extent = this.getDataExtent(data, parseTime);

    /* TODO: colorScale's domain should be between 0 and the longest set of
      data, not just the length of the first set.
    */
    let xScale = d3.scaleTime().domain([extent.x[0], extent.x[1]]).rangeRound([0, width - 50]),
        yScale = d3.scaleLinear().domain([extent.y[0], extent.y[1]]).rangeRound([height, 0]),
        colorScale = d3.scaleLinear().domain([0, data[0].length]).range(["red", "green"]);

    // Remove previouse graph if there was one.
    node.selectAll("g").remove();

    // Create another element as a child of our graph node. Translate it so its
    // origin is at the same point of the node.
  	let g = node
      .append("g")
 	    .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Create line function
   	var line = d3.line()
      .x((d) => {
        return xScale(d.yearFormatted);
      })
      .y((d) => {
        return yScale(d.metric);
      });

    // Create x-axis
    g.append("g")
      .attr("transform", `translate(0, ${height})`)
      .attr("id", "xAxisG")
      .call(d3.axisBottom(xScale).ticks(4))
      .select(".domain")
      .remove();

    // Create y-axis
    g.append("g")
      .attr("id", "yAxisG")
      .call(d3.axisLeft(yScale))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text(metricName);


    // Create circles at each data point, as well as the lines through them
    for (let i = 0; i < data.length; i++) {
      g.selectAll(`circle.c${i}`)
        .data(data[i])
        .enter()
        .append("circle")
        .attr("class", `c${i}`)
        .attr("r", 3)
        .attr("cx", (d) => xScale(d.yearFormatted))
        .attr("cy", (d) => yScale(d.metric));

      g.append("path")
        .attr("d", line(data[i]))
        .attr("class", "line")
        .attr("stroke", colorScale(i*2));
    }

    // Create text at the end of each line
    g.selectAll('text.labels')
      .data(data)
      .enter()
      .append("text")
      .attr("transform", (d, i) => {
        let x = (xScale(d[d.length - 2].yearFormatted) + xScale(d[d.length - 1].yearFormatted))/2;
        let y = (yScale(d[d.length - 2].metric) + yScale(d[d.length - 1].metric))/2;
        return `translate(${x}, ${y})`;
      })
      .attr("y", -4)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .style("font", "12px sans-serif")
      .style("fill", (d,i) => colorScale(i*2+1))
      .text((d, i) => dataLabels.names[i]);

    g.selectAll('text.labels')
      .each()


  }

  render() {
    return <svg width={this.props.size[0]} height={this.props.size[1]}></svg>
  }
}

export default LineGraph;

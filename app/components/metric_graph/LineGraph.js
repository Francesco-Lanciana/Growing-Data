import React from 'react';
import * as d3 from 'd3';

require('ComponentStyles/line-graph');

/*
TODO: Fix the data formats... they make me sad.
      Allow multiple companies to be displayed
      Allow multiple companies and metrics to be displayed
      Restructure code so as to not offend the gods
*/

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.createLineGraph = this.createLineGraph.bind(this);
  }

  componentDidMount() {
    console.log("DID MOUNT");
    this.createLineGraph();
  }

  componentDidUpdate() {
    console.log("DID UPDATE");
    this.createLineGraph();
  }

  createLineGraph() {

    const {filings, metrics} = this.props;

    let metricCodes = metrics.map(function(d) {
        return d["id"];
    });

    let metricNames = metrics.map(function(d) {
        return d["name"];
    });

    const node = d3.select("svg"),
          margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = node.attr("width") - margin.left - margin.right,
          height = node.attr("height") - margin.top - margin.bottom,
          parseTime = d3.timeParse("%Y");

    // Extract data of interest for plotting
    filings.forEach((filing) => {
      filing.forEach((d) => {
        d.yearFormatted = parseTime(d['year']);
        d.metric = d[metricCodes[0]];
      });
	  });

    // Sort in ascending year order
    filings.forEach((filing) => {
      filing = filing.sort((a, b) => (a.year - b.year));
    });

    console.log(filings);

    //Find the extent of data over all data sets
    let xDomain = {min: parseTime('2300'), max: parseTime('1800')};
    let yDomain = {min: 100000, max: 0};
    let temp1, temp2;
    filings.forEach((filing) => {
      [temp1, temp2] = d3.extent(filing, (d) => d.yearFormatted);
      xDomain.min = d3.min([xDomain.min, temp1]);
      xDomain.max = d3.max([xDomain.max, temp2]);

      [temp1, temp2] = d3.extent(filing, (d) => d.metric);
      yDomain.min = d3.min([yDomain.min, temp1]);
      yDomain.max = d3.max([yDomain.max, temp2]);
    });

    let xScale = d3.scaleTime().domain([xDomain.min, xDomain.max]).rangeRound([0, width]),
        yScale = d3.scaleLinear().domain([yDomain.min, yDomain.max]).rangeRound([height, 0]);

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
      .text(metricNames[0]);


    // Create circles at each data point
    for (let i = 0; i < filings.length; i++) {
      g.selectAll(`circle.c${i}`)
        .data(filings[i])
        .enter()
        .append("circle")
        .attr("class", `c${i}`)
        .attr("r", 3)
        .attr("cx", (d) => {
          console.log(xScale(d.yearFormatted));
          return xScale(d.yearFormatted)
        })
        .attr("cy", (d) => {
          console.log(yScale(d.metric));
          return yScale(d.metric)
        });
    }

    // Create lines for each data set
    for (let i = 0; i < filings.length; i++) {
      g.append("path")
        .attr("d", line(filings[i]))
        .attr("class", "line");
    }

  }

  render() {
    return <svg width={this.props.size[0]} height={this.props.size[1]}></svg>
  }
}

export default LineGraph;

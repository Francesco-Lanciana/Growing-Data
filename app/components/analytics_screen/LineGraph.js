import React from 'react';
import * as d3 from 'd3';

require('ComponentStyles/line-graph');

/*
TODO: Fix the data formats... they make me sad.
      Allow multiple metrics to be displayed
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
    this.createLineGraph();
  }

  componentDidUpdate() {
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
          height = node.attr("height") - margin.top - margin.bottom;

    let x = d3.scaleTime().rangeRound([0, width]),
        y = d3.scaleLinear().rangeRound([height, 0]);

    // Create another element as a child of our graph node. Translate it so its
    // origin is at the same point of the node.
  	let g = node
      .append("g")
 	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let parseTime = d3.timeParse("%Y");

   	var line = d3.line()
      .x((d) => {
        return x(d.yearFormatted);
      })
      .y((d) => {
        return y(d.metric);
      });

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

    // Sets the domain (range) to be from the minimum to maximum year/metric
    x.domain([xDomain.min, xDomain.max]);
    y.domain([yDomain.min, yDomain.max]);

    // Create x-axis
	  g.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).ticks(4))
      .select(".domain")
      .remove();

    // Create y-axis
	  g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text(metricNames[0]);

    // g.selectAll("path")
    //   .data(companyFilingData)
    //   .enter().append("path")
    //   .attr("class", "line")
    //   .attr("d", line);


    for (let i = 0; i < filings.length; i++) {
      g.append("path")
        .attr("d", line(filings[i]))
        .attr("class", "line");
        //.attr("d", line(companyFilingData[i]));
    }

    //Styling and creating the line
	  // g.append("path")
    //   .datum(companyFilingData)
    //   .attr("class", "line")
    //   .attr("d", line(companyFilingData));

  }

  render() {
    return <svg ref={node => this.node = node} width={1000} height={500}></svg>
  }
}

export default LineGraph;

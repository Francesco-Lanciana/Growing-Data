import React from 'react';
import * as d3 from 'd3';

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
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d['GD_RECEIVABLES_DAYS']); });

    let companyFilingData = [];

    for (let id in filings) {
      if (filings.hasOwnProperty(id)) {
        let filing = filings[id];

        for (let year in filing) {
          if (filing.hasOwnProperty(year)) {
            companyFilingData.push(filing[year]);
          }
        }

      }
    }

	  companyFilingData.forEach(function(d) {
      d.year = parseTime(d['year']);
      d.metric = d['GD_RECEIVABLES_DAYS'];
	  });

    // Sort in ascending year order
    companyFilingData = companyFilingData.sort((a, b) => (a.year - b.year));

    // Sets the domain (range) to be from the minimum to maximum year/metric
	  x.domain(d3.extent(companyFilingData, function(d) { return d.year; }));
	  y.domain(d3.extent(companyFilingData, function(d) { return d.metric; }));

	  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(4))
      .select(".domain")
      .remove();

	  g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Receivables Days");

	  g.append("path")
      .datum(companyFilingData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);

  }

  render() {
    return <svg ref={node => this.node = node} width={1000} height={500}></svg>
  }
}

export default LineGraph;

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Chartd = ({ d3JSdataSource }) => {

    const svgRef = useRef();

    useEffect(() => {
        if (d3JSdataSource.length === 0) {
            return;
        }

        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 400;
        const radius = Math.min(width, height) / 2;

        var colorScale = d3.scaleOrdinal()
            .domain(d3JSdataSource.map((v) => v.label))
            .range([
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#0ac360',
                '#4d5791',
                '#58595b',
            ]);

        const pie = d3
            .pie()
            .sort(null)
            .value((d) => d.budget);

        const arc = d3
            .arc()
            .innerRadius(0)
            .outerRadius(radius);


        const g = svg
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        g.selectAll('pieces')
            .data(pie(d3JSdataSource))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', (d) => colorScale(d.data.title))
            .attr('stroke', '#121926')
            .style('stroke-width', '1px');

        const labelLocation = d3.arc().innerRadius(100).outerRadius(radius);

        g.selectAll('pieces')
            .data(pie(d3JSdataSource))
            .enter()
            .append('text')
            .text((d) => d.data.title)
            .attr(
                'transform',
                (d) => 'translate(' + labelLocation.centroid(d) + ')'
            )
            .style('text-anchor', 'middle')
            .style('font-size', 15);

    }, [d3JSdataSource]);



    return (
        <div className="chart-container" style={{ width: 450, height: 500 }}>
            <h2 style={{ textAlign: "center" }}>D3JS Pie Chart</h2>
            <svg ref={svgRef} width={400} height={400}>
                {d3JSdataSource.length === 0 && (
                    <text x="50%" y="50%" textAnchor="middle">Loading...</text>
                )}

            </svg>
        </div>
    );
};

export default Chartd;
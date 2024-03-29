import React, {Component} from 'react';
import c3  from 'c3';
import PropTypes from 'prop-types';

export default class C3Chart extends Component {
  updateChart() {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: this.props.type
      },
      axis: {x: this.props.xAxis},
      grid: {y: {show:true}}
    });
  }

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  render() {
    return <div id="chart"></div>;
  }
}

C3Chart.propTypes = {
  columns: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  xAxis: PropTypes.array.isRequired,
};

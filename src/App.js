import React, { Component } from 'react';
import Isobar from './components/Isobar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.table = [
      [3,0,0,130],
      [6,0,0,153],
      [9,0,0,181],
      [12,0,0,202],
      [15,0,0,224],
      [18,0,32,241],
      [21,0,66,254],
      [24,0,95,255],
      [27,0,128,255],
      [30,0,144,255],
      [33,0,160,255],
      [36,0,175,255],
      [39,0,193,255],
      [42,0,207,255],
      [45,0,226,255],
      [48,0,240,223],
      [51,0,255,194],
      [54,65,255,128],
      [57,129,255,64],
      [60,162,255,33],
      [63,194,255,0],
      [66,223,255,0],
      [69,255,255,0],
      [72,255,239,0],
      [75,255,223,0],
      [78,255,200,0],
      [81,255,175,0],
      [84,255,160,0],
      [87,255,145,0],
      [90,255,121,0],
      [93,255,96,0],
      [96,255,48,0],
      [100,255,0,0]
      ];

      this.sortTable = function(a, b) {
        return (a[0] < b[0] ? -1 : 1)
      };

      this.colorTable = this.table.sort(this.sortTable)
  };

  render() {
    return (
      <div style={{width: '24px', height: '800px'}}>
        <Isobar
          lowLabel="Low"
          highLabel="High"
          titleLabel="Pressure"
          colorTable={this.colorTable}
        />
      </div>
    );
  };
};

export default App;

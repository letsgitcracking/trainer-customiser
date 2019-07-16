import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allColors: [],
      allImagesObject: {},
      bySizeObject: {},
      listColorsObject: {},
      sizesByColor: [],
      selectedColor: "",
      selectedSize: "9"
    };
  }

  async componentDidMount() {
    await fetch("https://all.data.alexbooster.com/json/sneakers.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          allColors: data[0].allColors.sort(),
          allImagesObject: data[0].allImages,
          bySizeObject: data[0].bySize,
          listColorsObject: data[0].byColor,
        })
      }).catch(error => {
        console.log(error);
      });
      this.initialProduct();
  }

  initialProduct = () => {
    let orderedListSizes = this.state.bySizeObject[this.state.selectedSize].reduce((acc, val, idx) => {
      let trainerObject = this.state.listColorsObject[this.state.bySizeObject[this.state.selectedSize][idx]].length;
      acc[val] = trainerObject;
      return acc;
    }, {})

    let color = Object.keys(orderedListSizes).sort((a, b) => orderedListSizes[b] - orderedListSizes[a])[0];
    this.setState({
      selectedColor: color,
      sizesByColor: this.state.listColorsObject[color]
    })
  }

  handleOnChangeSize = (e) => {
    this.setState({
      selectedSize: e.target.value
    });
  }

  handleOnChangeColor = (e) => {
    let color = e.target.value;
    this.setState({
      selectedColor: color,
      sizesByColor: this.state.listColorsObject[color],
      selectedSize: this.state.listColorsObject[color][0]
    });
  }

  render() {
    return (
      <div>
        <h1>Trainers</h1>
        <p>Select the desired colour or size below:</p>
        <img src={this.state.allImagesObject[this.state.selectedColor]} width="400" alt={this.state.selectedColor.charAt(0).toUpperCase() + this.state.selectedColor.slice(1) + " Trainer"} />

        <div>Size:
          <select name="size" value={this.state.selectedSize} onChange={this.handleOnChangeSize}>
            {Object.values(this.state.sizesByColor).map(size => <option key={size} value={size}>{size}</option>)}
          </select>
        </div>

        <div>Colour:
          <select name="color" value={this.state.selectedColor} onChange={this.handleOnChangeColor}>
            {this.state.allColors.map(color => <option key={color} value={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default App;

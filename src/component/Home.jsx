import React, { Component } from "react";
import Glass from "./Glass";
import Header from "./Header";
import Model from "./Model";

export default class Home extends Component {
  data = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    glassOnModel: "./glassesImage/v1.png",
    glassName: "GUCCI G8850U",
    glassDesc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
  };
  displayGlass = () => {
    return this.data.map((item) => {
      return (
        <div key={item.id} className="col-xl-2 col-sm-4 col-6">
          <Glass glass={item} onChangeGlassImg={this.handleChangeGlassImg} />
        </div>
      );
    });
  };
  handleChangeGlassImg = (img, name, desc) => {
    this.setState({
      glassOnModel: img,
      glassName: name,
      glassDesc: desc,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            backgroundColor: "black",
            opacity: "0.5",
            zIndex: 0,
          }}
        ></div>
        <Header />
        <div className=" model container mt-5">
          <div className="row">
            <div className="col-xl-6 col-sm-12 position-relative ">
              <Model />
              <div
                style={{
                  position: "absolute",
                  top: 100,
                  left: 85,
                  opacity: 0.8,
                }}
              >
                <img src={this.state.glassOnModel} alt="" width={"45%"} />
              </div>
              <div
                style={{
                  backgroundColor: "orange",
                  maxWidth: "57%",
                  position: "absolute",
                  bottom: 0,
                  left: 122,
                  opacity: 0.8,
                  paddingLeft: "10px",
                }}
              >
                <h3 className="text-primary text-left">
                  {this.state.glassName}
                </h3>
                <p className="text-white text-left">
                  {this.state.glassDesc}  
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12">
              <Model />
            </div>
          </div>
        </div>
        <div
          className="glass-list container "
          style={{
            backgroundColor: "white",
            position: "relative",
            marginTop: "50px",
            padding: "30px",
          }}
        >
          <div className="row">{this.displayGlass()}</div>
        </div>
      </div>
    );
  }
}

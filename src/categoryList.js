import React from "react";
import axios from "axios";
import Menu from "./menu";

class categoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      curMenu: [],
      itemShorName: "",
      showMenu: false
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://stream-restaurant-menu-svc.herokuapp.com/category"
    })
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(err => {
        console.log("Cannot fetch data" + err);
      });
  }

  handleClick = itemShorName => {
    axios({
      method: "GET",
      url: `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${itemShorName}`
    })
      .then(res => {
        this.setState({
          curMenu: res.data,
          curShortName: itemShorName,
          showMenu: true
        });
      })
      .catch(err => {
        console.log("Cannot fetch data" + err);
      });
  };

  // TODO: hover
  handleHover = () => {
    return null;
  }
  render() {
    return (
      <div>
        <h2> Menu Categories </h2>
        <div className="container">
          <div className="list col-md-5">
            <ul>
              {this.state.categories.map((element, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      return this.handleClick(element.short_name);
                    }}
                  >
                    {element.name} - ({element.short_name})
                  </li>
                );
              })}
            </ul>
          </div>
          {this.state.showMenu === true ? (
            <div className="menu col-md-7">
              <Menu
                curMenu={this.state.curMenu}
                curShortName={this.state.curShortName}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default categoryList;

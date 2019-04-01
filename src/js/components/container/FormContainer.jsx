import React, { Component } from "react";
import ReactDOM from "react-dom";
import StarRatings from "react-star-ratings";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  
  }

  render() {
    return (
      <div>
        <div>
          <center>
            <h2>Ratings &amp; reviews <u>81</u></h2>
            <StarRatings
              rating={4}
              starDimension="24px"
              starSpacing="0px"
              starRatedColor="gold"
            /> 
          </center>
        </div>
        <div>
          <h3>Most helpful positive reviews</h3>
          <div>
            <table>
              <tr><td>
                <h4>Great Shirt</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                username - 1 year ago
                </span>
                <br></br>
                <span>Love this shirt. The material has a nice feel to it, and isn't overly thin. My husband wears a medium shirt and prefers the slim fit style, but unfortunately the medium in this brand did not work for him. While it fit in the torso area, it was too snug in the shoulder and arm area. If you're purchasing this for someone that is a little more muscular, I would recommend having them try it on first in case you need to go up a size.</span>
              </td>
              <td>
                <h4>Great Shirt</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                username - 1 year ago
                </span>
                <br></br>
                <span>Love this shirt. The material has a nice feel to it, and isn't overly thin. My husband wears a medium shirt and prefers the slim fit style, but unfortunately the medium in this brand did not work for him. While it fit in the torso area, it was too snug in the shoulder and arm area. If you're purchasing this for someone that is a little more muscular, I would recommend having them try it on first in case you need to go up a size.</span>
              </td></tr>
              <tr><td>
                <h4>Great Shirt</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                username - 1 year ago
                </span>
                <br></br>
                <span>True to size and decent quality. Could be cheaper though.</span>
              </td>
              <td>
                <h4>Great Shirt</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                username - 1 year ago
                </span>
                <br></br>
                <span>Love this shirt. The material has a nice feel to it, and isn't overly thin. My husband wears a medium shirt and prefers the slim fit style, but unfortunately the medium in this brand did not work for him. While it fit in the torso area, it was too snug in the shoulder and arm area. If you're purchasing this for someone that is a little more muscular, I would recommend having them try it on first in case you need to go up a size.</span>
              </td></tr>
            </table>
          </div>
        </div>
        <br></br>
        <div>
          <h3>Most recent reviews</h3>
          <div>
            <table>
              <tr><td>
                <h4>Great Shirt</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                username - 1 year ago
                </span>
                <br></br>
                <span>Love this shirt. The material has a nice feel to it, and isn't overly thin. My husband wears a medium shirt and prefers the slim fit style, but unfortunately the medium in this brand did not work for him. While it fit in the torso area, it was too snug in the shoulder and arm area. If you're purchasing this for someone that is a little more muscular, I would recommend having them try it on first in case you need to go up a size.</span>
              </td><td>
                <h4>Great Shirt</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                username - 1 year ago
                </span>
                <br></br>
                <span>Love this shirt. The material has a nice feel to it, and isn't overly thin. My husband wears a medium shirt and prefers the slim fit style, but unfortunately the medium in this brand did not work for him. While it fit in the torso area, it was too snug in the shoulder and arm area. If you're purchasing this for someone that is a little more muscular, I would recommend having them try it on first in case you need to go up a size.</span>
              </td></tr>
              <tr><td>
                <h4>Great Shirt</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                username - 1 year ago
                </span>
                <br></br>
                <span>Love this shirt. The material has a nice feel to it, and isn't overly thin. My husband wears a medium shirt and prefers the slim fit style, but unfortunately the medium in this brand did not work for him. While it fit in the torso area, it was too snug in the shoulder and arm area. If you're purchasing this for someone that is a little more muscular, I would recommend having them try it on first in case you need to go up a size.</span>
              </td><td>
                <h4>Great Shirt</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                username - 1 year ago
                </span>
                <br></br>
                <span>Love this shirt. The material has a nice feel to it, and isn't overly thin. My husband wears a medium shirt and prefers the slim fit style, but unfortunately the medium in this brand did not work for him. While it fit in the torso area, it was too snug in the shoulder and arm area. If you're purchasing this for someone that is a little more muscular, I would recommend having them try it on first in case you need to go up a size.</span>
              </td></tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
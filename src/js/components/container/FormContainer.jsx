import React, { Component } from "react";
import ReactDOM from "react-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: [
        {header: '', stars: '', post_date: '', body: '', username: ''},
        {header: '', stars: '', post_date: '', body: '', username: ''},
        {header: '', stars: '', post_date: '', body: '', username: ''},
        {header: '', stars: '', post_date: '', body: '', username: ''}
      ],
      recent: [
        {header: '', stars: '', post_date: '', body: '', username: ''},
        {header: '', stars: '', post_date: '', body: '', username: ''},
        {header: '', stars: '', post_date: '', body: '', username: ''},
        {header: '', stars: '', post_date: '', body: '', username: ''}
      ]
    };
  
  }

  componentDidMount() {
    axios.get('/product/reviews/recent' )
      .then(res => {
        console.log(res.data)
        let recentData = res.data;
        this.setState({
          recent: recentData
        })
      })
      .catch(err => {
        console.error(err);
      })
   
    axios.get('/product/reviews/helpful')
      .then(res => {
        console.log(res.data)
        let helpfulData = res.data;
        this.setState({
          helpful: helpfulData
        }) 
      })
      .catch(err => {
        console.error(err);
      })
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
          <br></br>
          <div>
            <table>
              <tr><td>
                <h4>{this.state.helpful[0].header}</h4> {/*Customer Review Header {this.state.helpful[0].header}*/}
                <div>(Would Recommend)</div> {/*If greater than or equal to 3 star review*/}
                <span>
                  {/*Customer review star rating this.state.helpful[0].stars*/}
                <StarRatings
                  rating={5} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {/*Customer Username and timestamp from post date {this.state.helpful[0].username} - {this.state.helpful[0].post_date}*/}
                {this.state.helpful[0].username} - {this.state.helpful[0].post_date}
                </span>
                <br></br>
                {/*Customer review body {this.state.helpful[0].body}*/}
                <span>{this.state.helpful[0].body}</span>
              </td>
              <td>
                <h4>{this.state.helpful[1].header}</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={5}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[1].username} - {this.state.helpful[1].post_date}
                </span>
                <br></br>
                <span>{this.state.helpful[1].body}</span>
              </td></tr>
              <br></br>
              <tr><td>
                <h4>{this.state.helpful[2].header}</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={5}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[2].username} - {this.state.helpful[2].post_date}
                </span>
                <br></br>
                <span>{this.state.helpful[2].body}</span>
              </td>
              <td>
                <h4>{this.state.helpful[3].header}</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={5}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[3].username} - {this.state.helpful[3].post_date}
                </span>
                <br></br>
                <span>{this.state.helpful[3].body}</span>
              </td></tr>
            </table>
          </div>
        </div>
        <br></br>
        <div>
          <h3>Most recent reviews</h3>
          <br></br>
          <div>
            <table>
              <tr><td>
                <h4>{this.state.recent[0].header}</h4>
                <div>(Would Recommend)</div>
                <span>
                <StarRatings
                  rating={5}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[0].username} - {this.state.helpful[0].post_date}
                </span>
                <br></br>
                <span>{this.state.helpful[0].body}</span>
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
              <br></br>
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
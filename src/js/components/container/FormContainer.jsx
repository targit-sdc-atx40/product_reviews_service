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
        console.log(res.data);
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
        console.log(res.data);
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
            <h2>Ratings &amp; reviews</h2>
            <StarRatings
              rating={4.5}
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
                <h4>{this.state.helpful[0].header}</h4> 
                <div>{this.state.helpful[0].stars >= 3 ? '(would recommend)' : '(would not recommend)'}</div> 
                <span>
                <StarRatings
                  rating={5} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[0].username} - {this.state.helpful[0].post_date.slice(0, 10)}
                </span>
                <br></br>
                <span>{this.state.helpful[0].body}</span>
              </td>
              <td>
                <h4>{this.state.helpful[1].header}</h4> 
                <div>{this.state.helpful[1].stars >= 3 ? '(would recommend)' : '(would not recommend)'}</div> 
                <span>
                <StarRatings
                  rating={5} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[1].username} - {this.state.helpful[1].post_date.slice(0, 10)}
                </span>
                <br></br>
                <span>{this.state.helpful[1].body}</span>
              </td></tr>
              <br></br>
              <tr><td>
                <h4>{this.state.helpful[2].header}</h4> 
                <div>{this.state.helpful[2].stars >= 3 ? '(would recommend)' : '(would not recommend)'}</div> 
                <span>
                <StarRatings
                  rating={5} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[2].username} - {this.state.helpful[2].post_date.slice(0, 10)}
                </span>
                <br></br>
                <span>{this.state.helpful[2].body}</span>
              </td>
              <td>
                <h4>{this.state.helpful[3].header}</h4> 
                <div>{this.state.helpful[3].stars >= 3 ? '(would recommend)' : '(would not recommend)'}</div> 
                <span>
                <StarRatings
                  rating={5} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[3].username} - {this.state.helpful[3].post_date.slice(0, 10)}
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
          <div>
            <table>
              <tr><td>
                <h4>{this.state.recent[0].header}</h4> 
                <div>{this.state.recent[0].stars >= 3 ? '(would recommend)' : '(would not recommend)'}</div> 
                <span>
                <StarRatings
                  rating={4} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[0].username} - {this.state.recent[0].post_date.slice(0, 10)}
                </span>
                <br></br>
                <span>{this.state.recent[0].body}</span>
              </td>
              <td>
                <h4>{this.state.recent[1].header}</h4> 
                <div>{this.state.recent[1].stars >= 3 ? '(would recommend)' : '(would not recommend)'}</div> 
                <span>
                <StarRatings
                  rating={4} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[1].username} - {this.state.recent[1].post_date.slice(0, 10)}
                </span>
                <br></br>
                <span>{this.state.recent[1].body}</span>
              </td></tr>
              <br></br>
              <tr><td>
                <h4>{this.state.recent[2].header}</h4> 
                <div>{this.state.recent[2].stars >= 3 ? '(would recommend)' : '(would not recommend)'}</div> 
                <span>
                <StarRatings
                  rating={5} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[2].username} - {this.state.recent[2].post_date.slice(0, 10)}
                </span>
                <br></br>
                <span>{this.state.recent[2].body}</span>
              </td>
              <td>
                <h4>{this.state.recent[3].header}</h4> 
                <div>{this.state.recent[3].stars >= 3 ? '(would recommend)' : '(would not recommend)'}</div> 
                <span>
                <StarRatings
                  rating={2} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[3].username} - {this.state.recent[3].post_date.slice(0, 10)}
                </span>
                <br></br>
                <span>{this.state.recent[3].body}</span>
              </td></tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
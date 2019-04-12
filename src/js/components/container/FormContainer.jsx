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
      ], 
      totalReviews: [],
      totalRating: 0, 
      helpfulRating1: 0, 
      helpfulRating2: 0, 
      helpfulRating3: 0, 
      helpfulRating4: 0, 
      recentRating1: 0, 
      recentRating2: 0,
      recentRating3: 0,
      recentRating4: 0
    };
  }

  componentDidMount() {
    window.addEventListener('changeItem', (event) => {let currentSku=event.detail; 
    this.updateCurrentReviews(currentSku); 
    console.log('currentsku', currentSku)});
    // this.updateCurrentReviews();
  }

  updateCurrentReviews(sku) {
    
    axios.get('http://ec2-3-19-71-180.us-east-2.compute.amazonaws.com:3002/product/reviews/recent', {
      params: {
        sku: sku
      }
    })
      .then(res => {
        console.log(res.data);
        let recentData = res.data;
        this.setState({
          recent: recentData,
          recentRating1: (recentData[0] ? recentData[0].stars : 0), 
          recentRating2: (recentData[1] ? recentData[1].stars : 0),
          recentRating3: (recentData[2] ? recentData[2].stars : 0),
          recentRating4: (recentData[3] ? recentData[3].stars : 0)
        })
      })
      .catch(err => {
        console.error(err);
      })

    axios.get('http://ec2-3-19-71-180.us-east-2.compute.amazonaws.com:3002/product/reviews/helpful', {
      params: {
        sku: sku
      }
    })
      .then(res => {
        console.log(res.data);
        let helpfulData = res.data;
        this.setState({
          helpful: helpfulData, 
          helpfulRating1: (helpfulData[0] ? helpfulData[0].stars : 0), 
          helpfulRating2: (helpfulData[1] ? helpfulData[1].stars : 0), 
          helpfulRating3: (helpfulData[2] ? helpfulData[2].stars : 0), 
          helpfulRating4: (helpfulData[3] ? helpfulData[3].stars : 0)
        }) 
      })
      .catch(err => {
        console.error(err);
      })

      axios.get('http://ec2-3-19-71-180.us-east-2.compute.amazonaws.com:3002/product/reviews/all', {
        params: {
          sku: sku
        }  
      })
      .then(res => {
        console.log(res.data);
        let allData = res.data;
        let num = 0;
        for (let x = 0; x < allData.length; x++) {
          num += allData[x].stars;
        }
        num = num/allData.length;
        this.setState({
          totalReviews: allData,
          totalRating: num
        }) 
        console.log('here', num);
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    // window.reviews = this;
    return (
      <div style={{fontFamily: "Helvetica Neue", color: "#333333", marginLeft: '100px', marginRight: '100px'}}>
      <br></br>
        <div>
          <center>
            <h2 style={{fontSize: '23px', fontWeight: 'bold'}}>Ratings &amp; reviews <u style={{color: '#666666'}}>{this.state.totalReviews? this.state.totalReviews.length : 0}</u></h2>
            <StarRatings
              rating={this.state.totalRating}
              starDimension="24px"
              starSpacing="0px"
              starRatedColor="gold"
            /> 
          </center>
        </div>
        <div>
          <h3 style={{fontSize: '19px', fontWeight: 'bold'}}>Most helpful positive reviews test</h3>
          <div>
            <table>
              <tr><td style={{width: '677.5px'}}>
                <h4 style={{fontSize: '16px', fontWeight: 'bold'}}>{this.state.helpful[0] ? this.state.helpful[0].header : null}</h4> 
                <div style={{fontSize: '14px'}}>{this.state.helpful[0]? (this.state.helpful[0].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span style={{fontSize: '12px'}}>
                <StarRatings
                  rating={this.state.helpfulRating1} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[0] ? this.state.helpful[0].username : null} - {this.state.helpful[0] ? this.state.helpful[0].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px'}}>{this.state.helpful[0] ? this.state.helpful[0].body : null}</div>
              </td>
              <td style={{width: '677.5px'}}>
                <h4>{this.state.helpful[1] ? this.state.helpful[1].header : null}</h4> 
                <div>{this.state.helpful[1]? (this.state.helpful[1].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span>
                <StarRatings
                  rating={this.state.helpfulRating2} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[1] ? this.state.helpful[1].username : null} - {this.state.helpful[1] ? this.state.helpful[1].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px'}}>{this.state.helpful[1] ? this.state.helpful[1].body : null}</div>
              </td></tr>
              <br></br>
              <tr><td style={{width: '677.5px'}}>
                <h4>{this.state.helpful[2] ? this.state.helpful[2].header : null}</h4> 
                <div>{this.state.helpful[2]? (this.state.helpful[2].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span>
                <StarRatings
                  rating={this.state.helpfulRating3} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[2] ? this.state.helpful[2].username : null} - {this.state.helpful[2] ? this.state.helpful[2].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{padding: '10 px'}}>{this.state.helpful[2] ? this.state.helpful[2].body : null}</div>
              </td>
              <td style={{width: '677.5px'}}> 
                <h4>{this.state.helpful[3] ? this.state.helpful[3].header : null}</h4> 
                <div>{this.state.helpful[3]? (this.state.helpful[3].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span>
                <StarRatings
                  rating={this.state.helpfulRating4} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[3] ? this.state.helpful[3].username : null} - {this.state.helpful[3] ? this.state.helpful[3].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{padding: '10 px'}}>{this.state.helpful[3] ? this.state.helpful[3].body : null}</div>
              </td></tr>
            </table>
          </div>
        </div>
        <br></br>
        <div>
          <h3 style={{fontSize: '19px', fontWeight: 'bold'}}>Most recent reviews</h3>
          <div>
            <table>
              <tr><td style={{width: '677.5px'}}>
                <h4>{this.state.recent[0] ? this.state.recent[0].header : null}</h4> 
                <div>{this.state.recent[0]? (this.state.recent[0].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span>
                <StarRatings
                  rating={this.state.recentRating1} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[0] ? this.state.recent[0].username : null} - {this.state.recent[0] ? this.state.recent[0].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{padding: '10 px'}}>{this.state.recent[0] ? this.state.recent[0].body : null}</div>
              </td>
              <td style={{width: '677.5px'}}>
                <h4>{this.state.recent[1] ? this.state.recent[1].header : null}</h4> 
                <div>{this.state.recent[1]? (this.state.recent[1].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span>
                <StarRatings
                  rating={this.state.recentRating2} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[1] ? this.state.recent[1].username : null} - {this.state.recent[1] ? this.state.recent[1].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{padding: '10 px'}}>{this.state.recent[1] ? this.state.recent[1].body : null}</div>
              </td></tr>
              <br></br>
              <tr><td style={{width: '677.5px'}}>
                <h4>{this.state.recent[2] ? this.state.recent[2].header : null}</h4> 
                <div>{this.state.recent[2]? (this.state.recent[2].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span>
                <StarRatings
                  rating={this.state.recentRating3}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[2] ? this.state.recent[2].username : null} - {this.state.recent[2] ? this.state.recent[2].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{padding: '10 px'}}>{this.state.recent[2] ? this.state.recent[2].body : null}</div>
              </td>
              <td style={{width: '677.5px'}}>
                <h4>{this.state.recent[3] ? this.state.recent[3].header : null}</h4> 
                <div>{this.state.recent[3]? (this.state.recent[3].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span>
                <StarRatings
                  rating={this.state.recentRating4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[3] ? this.state.recent[3].username : null} - {this.state.recent[3] ? this.state.recent[3].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{padding: '10 px'}}>{this.state.recent[3] ? this.state.recent[3].body : null}</div>
              </td></tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById("reviews");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
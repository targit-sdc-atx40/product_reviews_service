import React, { Component } from "react";
import ReactDOM from "react-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

class FormContainer extends Component {
  constructor(props, context) {
    super(props, context);
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
      recentRating4: 0,
      show: false, 
      sku: null, 
      radioButtonValue: ''
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.radioButtonChange1 = this.radioButtonChange1.bind(this);
    this.radioButtonChange2 = this.radioButtonChange2.bind(this);
    this.radioButtonChange3 = this.radioButtonChange3.bind(this);
    this.radioButtonChange4 = this.radioButtonChange4.bind(this);
    this.radioButtonChange5 = this.radioButtonChange5.bind(this);
  }

  componentDidMount() {
    window.addEventListener('changeItem', (event) => {let currentSku=event.detail; 
    this.updateCurrentReviews(currentSku); 
    this.setState({
      sku: currentSku
    })});
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  addReviews(header, stars, username, body, sku_ID) {
    let post_date = new Date();
    axios.post('http://ec2-3-19-71-180.us-east-2.compute.amazonaws.com:3002/product/reviews', {
      "header": header, 
      "stars": stars, 
      "post_date": post_date, 
      "username":username, 
      "body": body, 
      "sku_ID": sku_ID
    })
    .then(() => {
      this.updateCurrentReviews(sku_ID);
    })
    .catch((err) => {
      console.error(err)
    });
  }

  updateCurrentReviews(sku) {
    axios.get('http://ec2-3-19-71-180.us-east-2.compute.amazonaws.com:3002/product/reviews/recent', {
      params: {
        sku: sku
      }
    })
      .then(res => {
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
      })
      .catch(err => {
        console.error(err);
      })
  }
  
  radioButtonChange1() {
    this.setState({radioButtonValue: 1});
  }

  radioButtonChange2() {
    this.setState({radioButtonValue: 2});
  }

  radioButtonChange3() {
    this.setState({radioButtonValue: 3});
  }

  radioButtonChange4() {
    this.setState({radioButtonValue: 4});
  }

  radioButtonChange5() {
    this.setState({radioButtonValue: 5});
  }

  render() {
    return (
      <div style={{fontFamily: "Helvetica Neue", color: "#333333", marginLeft: '20px', marginRight: '20px', boxSizing: 'border-box', textSizeAdjust: '100%'}}>
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
          <h3 style={{fontSize: '19px', fontWeight: 'bold', display: 'block'}}>Most helpful positive reviews</h3>
          <div>
            <table>
              <tr><td style={{width: '677.5px', padding: '0', verticalAlign: 'top'}}>
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
                <div style={{paddingRight: '15px', fontSize: '14px'}}>{this.state.helpful[0] ? this.state.helpful[0].body : null}</div>
              </td>
              <td style={{width: '677.5px', padding: '0', verticalAlign: 'top'}}>
                <h4 style={{fontSize: '16px', fontWeight: 'bold', display: 'block'}}>{this.state.helpful[1] ? this.state.helpful[1].header : null}</h4> 
                <div style={{fontSize: '14px'}}>{this.state.helpful[1]? (this.state.helpful[1].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span style={{fontSize: '12px'}}>
                <StarRatings
                  rating={this.state.helpfulRating2} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                /> 
                {this.state.helpful[1] ? this.state.helpful[1].username : null} - {this.state.helpful[1] ? this.state.helpful[1].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px', fontSize: '14px'}}>{this.state.helpful[1] ? this.state.helpful[1].body : null}</div>
              </td></tr>
              <br></br>
              <tr><td style={{width: '677.5px', padding: '0', verticalAlign: 'top'}}>
                <h4 style={{fontSize: '16px', fontWeight: 'bold'}}>{this.state.helpful[2] ? this.state.helpful[2].header : null}</h4> 
                <div style={{fontSize: '14px'}}>{this.state.helpful[2]? (this.state.helpful[2].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span style={{fontSize: '12px'}}>
                <StarRatings
                  rating={this.state.helpfulRating3} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[2] ? this.state.helpful[2].username : null} - {this.state.helpful[2] ? this.state.helpful[2].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px', fontSize: '14px'}}>{this.state.helpful[2] ? this.state.helpful[2].body : null}</div>
              </td>
              <td style={{width: '677.5px', padding: '0', verticalAlign: 'top'}}> 
                <h4 style={{fontSize: '16px', fontWeight: 'bold'}}>{this.state.helpful[3] ? this.state.helpful[3].header : null}</h4> 
                <div style={{fontSize: '14px'}}>{this.state.helpful[3]? (this.state.helpful[3].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span style={{fontSize: '12px'}}>
                <StarRatings
                  rating={this.state.helpfulRating4} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.helpful[3] ? this.state.helpful[3].username : null} - {this.state.helpful[3] ? this.state.helpful[3].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px', fontSize: '14px'}}>{this.state.helpful[3] ? this.state.helpful[3].body : null}</div>
              </td></tr>
            </table>
          </div>
        </div>
        <br></br>
        <div>
          <h3 style={{fontSize: '19px', fontWeight: 'bold'}}>Most recent reviews</h3>
          <div>
            <table>
              <tr><td style={{width: '677.5px', padding: '0', verticalAlign: 'top'}}>
                <h4 style={{fontSize: '16px', fontWeight: 'bold'}}>{this.state.recent[0] ? this.state.recent[0].header : null}</h4> 
                <div style={{fontSize: '14px'}}>{this.state.recent[0]? (this.state.recent[0].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span style={{fontSize: '12px'}}>
                <StarRatings
                  rating={this.state.recentRating1} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[0] ? this.state.recent[0].username : null} - {this.state.recent[0] ? this.state.recent[0].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px', fontSize: '14px'}}>{this.state.recent[0] ? this.state.recent[0].body : null}</div>
              </td>
              <td style={{width: '677.5px', padding: '0', verticalAlign: 'top'}}>
                <h4 style={{fontSize: '16px', fontWeight: 'bold'}}>{this.state.recent[1] ? this.state.recent[1].header : null}</h4> 
                <div style={{fontSize: '14px'}}>{this.state.recent[1]? (this.state.recent[1].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span style={{fontSize: '12px'}}>
                <StarRatings
                  rating={this.state.recentRating2} 
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[1] ? this.state.recent[1].username : null} - {this.state.recent[1] ? this.state.recent[1].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px', fontSize: '14px'}}>{this.state.recent[1] ? this.state.recent[1].body : null}</div>
              </td></tr>
              <br></br>
              <tr><td style={{width: '677.5px', padding: '0', verticalAlign: 'top'}}>
                <h4 style={{fontSize: '16px', fontWeight: 'bold'}}>{this.state.recent[2] ? this.state.recent[2].header : null}</h4> 
                <div style={{fontSize: '14px'}}>{this.state.recent[2]? (this.state.recent[2].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span style={{fontSize: '12px'}}>
                <StarRatings
                  rating={this.state.recentRating3}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[2] ? this.state.recent[2].username : null} - {this.state.recent[2] ? this.state.recent[2].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px', fontSize: '14px'}}>{this.state.recent[2] ? this.state.recent[2].body : null}</div>
              </td>
              <td style={{width: '677.5px', padding: '0', verticalAlign: 'top'}}>
                <h4 style={{fontSize: '16px', fontWeight: 'bold'}}>{this.state.recent[3] ? this.state.recent[3].header : null}</h4> 
                <div style={{fontSize: '14px'}}>{this.state.recent[3]? (this.state.recent[3].stars >= 3 ? '(would recommend)' : '(would not recommend)') : null}</div> 
                <span style={{fontSize: '12px'}}>
                <StarRatings
                  rating={this.state.recentRating4}
                  starDimension="12px"
                  starSpacing="0px"
                  starRatedColor="gold"
                />
                {this.state.recent[3] ? this.state.recent[3].username : null} - {this.state.recent[3] ? this.state.recent[3].post_date.slice(0, 10) : null}
                </span>
                <br></br>
                <div style={{paddingRight: '15px', fontSize: '14px'}}>{this.state.recent[3] ? this.state.recent[3].body : null}</div>
              </td></tr>
            </table>
          </div>
        </div>
        <br></br>
        <div>
          <center>
          <>
           <button style={{fontFamily: "Helvetica Neue", backgroundColor:"#cc0000", color: "white", fontSize:"14px", borderRadius: "4px", padding: "8px"}} onClick={this.handleShow}>
            write a review
           </button>
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontFamily: "Helvetica Neue", color: "#333333", fontSize: "19px", fontWeight: "bold"}}>tell us what you think...</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontFamily: "Helvetica Neue", color: "#333333", fontWeight: "bold"}}>
            first, rate this item
            <br></br>
            <form action="" id="buttonArea" style={{fontFamily: "Helvetica Neue", color: "#333333", fontSize: "14px"}}>
              <input onChange={this.radioButtonChange1} type="radio" name="rating" value="1" id="one"/> &nbsp; 1 &nbsp;
              <input onChange={this.radioButtonChange2} type="radio" name="rating" value="2" id="two"/> &nbsp; 2 &nbsp;
              <input onChange={this.radioButtonChange3} type="radio" name="rating" value="3" id="three"/> &nbsp; 3 &nbsp;
              <input onChange={this.radioButtonChange4} type="radio" name="rating" value="4" id="four"/> &nbsp; 4 &nbsp;
              <input onChange={this.radioButtonChange5} type="radio" name="rating" value="5" id="five"/> &nbsp; 5 
            </form>
            <hr></hr>
            write your review
            <br></br>
            <form className="textArea" style={{fontFamily: "Helvetica Neue", color: "#333333", fontSize: "14px"}}>
              <br/>
              <input ref="name" type="text" name="name" placeholder="your name" style={{fontFamily: "Helvetica Neue", color: "#333333", fontSize: "14px", width: "470px"}} id="name"/>
              <br/>
              <br/>
              <input ref="title" type="text" name="review" placeholder="title of review" style={{fontFamily: "Helvetica Neue", color: "#333333", fontSize: "14px", width: "470px"}} id="title"/>
              <br/>
              <br/>
            </form>
            <textarea ref="review" name="comment" form="textArea" placeholder="review" style={{fontFamily: "Helvetica Neue", color: "#333333", fontSize: "14px", width: "470px", height: "150px"}} id="review"></textarea>
          </Modal.Body>
          <Modal.Footer>
            <button style={{fontFamily: "Helvetica Neue", backgroundColor:"#cc0000", color: "white", fontSize:"14px", borderRadius: "4px", padding: "8px"}} onClick={this.handleClose}>
              close
            </button>
            <button style={{fontFamily: "Helvetica Neue", backgroundColor:"#cc0000", color: "white", fontSize:"14px", borderRadius: "4px", padding: "8px"}} onClick={() => {
              let header = this.refs.title.value;
              let body = this.refs.review.value;
              let username = this.refs.name.value;
              let sku_ID = this.state.sku;
              let stars = this.state.radioButtonValue;
              this.addReviews(header, stars, username, body, sku_ID); this.handleClose()}}>
              submit
            </button>
          </Modal.Footer>
          </Modal>
         </>
          </center>
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById("reviews");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
import React, { Component } from 'react';
import Review from '../components/Review';
import ReviewForm from './ReviewForm';
import Dropzone from 'react-dropzone'


class PaintsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paint: {},
      reviews: [],
      userId: '',
      paintId: this.props.params.id
    }
    this.addNewReview = this.addNewReview.bind(this);
  }

  componentDidMount() {
    let paintId = this.state.paintId
    fetch(`/api/v1/paints/${paintId}/`,{
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          paint: body.paint,
          userId: body.user_id,
          reviews: body.reviews
        });
      })
      .catch(error => console.error (`Error in fetch: ${error.message}`));
  }

  addNewReview(formPayload) {
    let paintId = this.state.paintId
    fetch(`/api/v1/paints/${paintId}/reviews.json`, {
      method: 'POST',
      body: JSON.stringify(formPayload),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })

    .then(response => response.json())
    .then(body => {
      this.setState ({
        reviews: this.state.reviews.concat(body)
      })
    })
  }

  render () {
    let reviews = this.state.reviews.map((review) => {
      return(
        <Review
          key={review.id}
          title={review.title}
          rating={review.rating}
          body={review.body}
        />
      )
    })

    let photos;

    if(this.state.paint.photo) {
      photos = <img src={this.state.paint.photo.url} className="review-photo" />
    }

    let form;
    if (this.state.userId){
      form = <ReviewForm
              addNewReview={this.addNewReview}
              paintId={this.state.paintId}
              userId={this.state.userId}
            />
    }else{
      form = <h2>Sign in to review this paint!</h2>
    }

    return(
      <div>
        <h2>{this.state.paint.title}</h2>
        <div className="clearfix">
          <div className="photos clearfix">
            <p>{photos}</p>
          </div>
          <div className="paint-info">
            <ul>
              <li className="description">Description: {this.state.paint.description}</li>
            </ul>
          </div>
        </div>
        <div className="submitted-reviews">
          <h3>Reviews:</h3>
            {reviews}
            {form}
        </div>
    </div>
    )
  }
}

export default PaintsForm;

import React, { Component } from 'react';
import Review from '../components/Review';
import Form from './Form';
import Dropzone from 'react-dropzone'


class ContainersForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paint: {},
      reviews: [],
      userId: '',
      paintId: this.props.params.id,
      file: []
    }
    this.addNewReview = this.addNewReview.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    let paintId = this.state.paintId
    fetch(`/api/v1/paint/${paintId}`, {
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


  onDrop(event) {
    let picture = event.target.value
      this.setState({ file: picture })
  }

  render () {
    let reviews = this.state.reviews.map((review) => {
      return(
        <Review
          key={review.id}
          title={review.title}
          rating={review.rating}
          date={review.created_at}
          body={review.body}
        />
      )
    })

    let photos;

    if(this.state.paint.avatar) {
      photos = <img src={this.state.paint.photo.url} />
    }

    let form;
    if (this.state.userId){
      form = <Form
              addNewReview={this.addNewReview}
              paintId={this.state.paint.id}
              userId={this.state.userId}
            />
    }else{
      form = <h2>Sign in to review this paint!</h2>
    }

    return(
      <div>
        <h2>{this.state.paint.name}</h2>
        <div className="clearfix">
          <div className="photos clearfix">
            <p>{photos}</p>
          </div>
          <div className="paint-info">
            <ul>
              <li className="address">Location:</li>
            <li>{this.state.paint.street_address}</li>
              <li className="description">Description:</li>
            <li>{this.state.paint.description}</li>
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

export default ContainersForm;

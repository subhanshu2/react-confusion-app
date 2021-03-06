import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem  } from "reactstrap";
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

 function RenderDish({dish}) {
    return (
      <Card>
        <CardImg width="100%" top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle> {dish.name} </CardTitle>
          <CardText> {dish.description} </CardText>
        </CardBody>
      </Card>
    );
  }

  function RenderComment({dishComment}) {
    if (dishComment == null) {
      return <div></div>;
    }
    const comment = dishComment.map((comments) => {
      return (
        <li key={comments.id}>
          <p className="row mt-2">{comments.comment}</p>
          <p className="row mt-3">
            --{comments.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(Date.parse(comments.date)))}
          </p>
        </li>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{comment}</ul>
        <CommentForm/>
      </div>
    );
  }
 
const DishDetail = (props) =>{
  if (props.dish != null)
      return (
        <div className="container">
          <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
<RenderDish dish={props.dish}/>
          </div>
          <div className="col-12 col-md-5 m-3">
<RenderComment dishComment={props.comments}/>           
          </div>
        </div>
        </div>
      );
    else return <div> </div>;
}

export default DishDetail;
      
import React from 'react';
import { connect } from 'react-redux';
 
const App = ({ articles, searchTerm, onSearch }) =>
  <div  className="container">
    <div className="row">

    <Articles articles={articles} />
    </div>
  </div>
 

const Articles = ({ articles }) =>
  <div>
    {articles.map(article =>
     <div className="card" style={{width: "18rem" }}>
     <img className="card-img-top" src={article.item.images.information} alt="Card image cap"/>
     <div className="card-body">
       <h5 className="card-title">{article.item.name}</h5>
       <p className="card-text">{article.item.description}</p>
       <div className="star-rating">
        <span className={ `fa fa-star-o ${Math.round(article.item.ratings.avgStars) >=1 ? 'checked' : ''}`} data-rating="1"></span>
        <span className={ `fa fa-star-o ${Math.round(article.item.ratings.avgStars) >=2 ? 'checked' : ''}`} data-rating="2"></span>
        <span className={ `fa fa-star-o ${Math.round(article.item.ratings.avgStars) >=3 ? 'checked' : ''}`} data-rating="3"></span>
        <span className={ `fa fa-star-o ${Math.round(article.item.ratings.avgStars) >= 4 ? 'checked' : ''}`} data-rating="4"></span>
        <span className={ `fa fa-star-o ${Math.round(article.item.ratings.avgStars) ==5 ? 'checked' : ''}`} data-rating="5"></span>
      </div>
     </div> 
   </div> 
    )}
  </div>
 
// connecting view layer to state layer with react-redux

const mapStateToProps = state => ({
  articles: state.articlesState.siteUrl.data
});
 

export default connect(mapStateToProps)(App);

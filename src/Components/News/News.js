import React, {Component} from 'react'
import {cn} from '@bem-react/classname';
import {connect} from "react-redux";
import './News.sass'

export const NewsCN=cn('news');
class News extends Component{
  state={
    items: 5
  }
  render() {
    let news;
    if(this.props.data && this.props.data.articles) {
       news = this.props.data.articles.map((el,i)=>{
        return(<div  key={i} className={NewsCN('note')}>
            <h1  className={NewsCN('title')}><a rel="noopener noreferrer  " href={el.url} target='_blank'>{el.title}</a></h1>
            <img alt={'news'} src={el.urlToImage} className={NewsCN('image')}/>
            <div className={NewsCN('content')}>{el.content}</div>
          </div>
        )
      });
       news = news.slice(0,this.state.items);
    }
    return (<>
      {news ? (
      <div className={NewsCN('container')}>
        {news}
        <button onClick={()=>{
          let newStateItem;
          console.log(this.state)
          console.log(this.props)
          if (this.props.data && this.props.data.articles ){
            console.log("lol");
            if(this.props.data.articles.length> this.state.items+5){
              newStateItem=this.state.items + 5
            } else{
              newStateItem = this.props.data.articles.length
            }
            this.setState({
              ...this.state,
              items: newStateItem
            })
          }
        }}>Show More</button>
      </div> )
      :  (<></>)  }
  </>)
  }
}
const mapStateToProps= (state)=>{
  return{...state}
};
const NewsContainer = connect(mapStateToProps)(News);
export {NewsContainer as News}

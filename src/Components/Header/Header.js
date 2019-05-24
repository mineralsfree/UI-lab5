import React, {Component} from 'react'
import {cn} from '@bem-react/classname';
import {connect} from "react-redux";
import {fetchNote} from "../../redux/actions/noteActions";
import {getSelect} from "../../helpers";
const headerCN = cn('header');
 class Header  extends Component{
   state={
     query: ''
   };
searchHandler = ()=>{
  this.props.fetchNote(`q=${this.state.query}&`, null);
}
  render() {
    return (
      <div className={headerCN('container')}>
        <h1>News API Client</h1>
      <input type={'search'}
             onKeyPress={(e)=>{
        if(e.key==="Enter"){
          this.searchHandler();
        }
      }}
      onChange={(e)=>{
        this.setState({
          ...this.state,
          query: e.target.value
        })
      }}
      />
      <button onClick={()=>{this.searchHandler()}}>Search</button>
        <select name="selection" onChange={(e)=>{
          this.props.fetchNote(null, `sources=${e.target.value}&`)
        }} className={headerCN('selection')}>
        {getSelect()}
        </select>
      </div>



    );
  }
}

const mapDispatchToProps = {fetchNote}
const HeaderContainer = connect(null, mapDispatchToProps)(Header);
export {HeaderContainer as Header}
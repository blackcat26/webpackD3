require('../../css/css2.css');

var React = require('react');
var ReactDOM = require('react-dom');
var style = require('../../css/css.css');

var HelloWebpackClass = React.createClass({
   render:function(){
       return (
           <div>
               <h1 className={style.h1}>this.props.children</h1>
               <h2 className="h2">this.props.h2</h2>
               <img src={require('../../img/small.png')} />
               <br/>
               <img src={require('../../img/big.png')} />
           </div>
       );
   }
});

ReactDOM.render(
    <HelloWebpackClass h2="h22222">h11111</HelloWebpackClass>,
    document.getElementById('content')
);
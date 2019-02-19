import React,{Component} from 'react';


class Producto extends Component{
    render(){
        return(
            <div>
                {console.log(this.props)}
            </div>
        );
    }
}
export default Producto;
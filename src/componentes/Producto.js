import React,{Component} from 'react';


class Producto extends Component{
    render(){
        // destructing
        const {nombre,precio}=this.props.producto
        return(
            <div>
                <strong>{nombre} </strong>
                Precio: ${precio}
            </div>
        );
    }
}
export default Producto;
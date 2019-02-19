import React,{Component} from 'react';
import Productos from './Productos'
import Footer from './Footer'
import Header from './Header'


class Aplicacion extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         productos :[
    //             {nombre:'libros',precio:300},
    //             {nombre:'disco de music',precio:100},
    //             {nombre:'instrumento musical',precio:800},
    //             {nombre:'reproductor musical',precio:150},
    //             {nombre:'Album Edicion especial',precio:500}
    //         ]
    //     };
    // }
    
    //hay dos formas de hacer states
        state={
            productos :[]
        };
        componentDidMount(){
            setTimeout(()=>{
                //variable con productos
                const productos=[
                    {nombre:'libros',precio:300},
                    {nombre:'disco de music',precio:100},
                    {nombre:'instrumento musical',precio:800},
                    {nombre:'reproductor musical',precio:150},
                    {nombre:'Album Edicion especial',precio:500}
                ]
                this.setState({
                    productos:productos
                });
            },3000)
        }

    render(){
        return(
            <div>
                <Header 
                    titulo='Nuestra Tienda Virtual'
                />
                <Productos 
                    productos={this.state.productos}
                />
                <Footer />
            </div>
        );
    }
}
export default Aplicacion;
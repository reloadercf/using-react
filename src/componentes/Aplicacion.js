import React,{Component} from 'react';
import Productos from './Productos'
import Footer from './Footer'
import Header from './Header'

class Aplicacion extends Component{
    render(){
        const productos =[
            {nombre:'libro',precio:200},
            {nombre:'disco de music',precio:100},
            {nombre:'instrumento musical',precio:800},
            {nombre:'reproductor musical',precio:150},
            {nombre:'Album Edicion especial',precio:500}
        ]
        return(
            <div>
                <Header 
                    titulo='Nuestra Tienda Virtual'
                />
                <Productos 
                productos={productos}
                />
                <Footer />
            </div>
        );
    }
}
export default Aplicacion;
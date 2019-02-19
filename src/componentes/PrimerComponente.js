import React,{Component} from 'react';
import Header from './Header'

class PrimerComponente extends Component{
    render(){
        return(
            <div>
                <Header/>
                <p>Hello From my First Component</p>
            </div>
        );
    }
}
export default PrimerComponente;
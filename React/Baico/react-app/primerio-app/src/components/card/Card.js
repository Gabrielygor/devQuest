import React from 'react'
import './Card.css'


const Card = (props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    )


};


export default Card

// class Card extends React.Component {
//     render() {
//         return(
// <div className='card'>
//     <h2>
//         {this.props.title}
//     </h2>
//     <h3>
//         Otariossssss
//     </h3>
//     <p>
//         Conteudo Do card
//     </p>
// </div>    
//         )
//     };
// };

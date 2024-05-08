import './button.css'


const sayHello = () => {
    console.log('oi');
}


const Button = (props) => {

    return <button className="btn" onClick={sayHello}>
        {props.label}
    </button>

};

Button.defaultProps = {
    label:'Clique aqui'
}

export default Button
import './button.css'

const Button = (props) => {

    return <button className="btn">
        {props.label}
    </button>

};

Button.defaultProps = {
    label:'Clique aqui'
}

export default Button
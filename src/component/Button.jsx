function Button(props){
    return(
        <button style={{
            padding:props.padding,
            backgroundColor:props.backgroundColor,
            color:"white",
            fontWeight:"600",
            border:props.border
            }}>
              {props.children}
        </button>
    )
}
export default Button;
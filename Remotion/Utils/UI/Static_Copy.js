


export const H1 = (props)=>{
    return(
      <h1>
        {props.children}
      </h1>
    )
}


export const P = (props)=>{
  const {
    weight=400,
    size='2em',
    margin='1em 0',
    color='#fff',
    lineHeight='1em',
    textAlign='center',
    letterSpacing='0px'
    
  } = props

  return(
    <p
      style={{
        fontWeight:weight,
        fontSize:size,
        margin,
        color,
        lineHeight,
        textAlign,
        letterSpacing
      }}
    
    >
      {props.children}
    </p>
  )
}

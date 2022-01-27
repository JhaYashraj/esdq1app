function Sub(props) {
    
    return (
        <>
            <h1>This is Sub Component!</h1>

            {props.x}
          <br />
          {props.y}
          <br />
          {props.x - props.y}
        </>
    );

}

export default Sub;
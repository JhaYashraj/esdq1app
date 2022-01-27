
function Add(props) {
  return (
    <div>
          <h1>This is ADD Component</h1>
          
          {props.x}
          <br />
          {props.y}
          <br />
          {props.x + props.y}
    </div>
  );
}

export default Add;
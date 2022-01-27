function Student(props) {

    const {name, age, roll_no, city} = props.data;

    return (
        <>
            <h1>This is Student Component</h1>

            <div>
                {name}    
            </div>
            <div>
                {roll_no}    
            </div>
            <div>
                {city}    
            </div>
            <div>
                {age}    
            </div>
        </>
    );
}

export default Student;
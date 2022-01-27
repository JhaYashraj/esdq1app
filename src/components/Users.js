function User(props) {

    const {id, email, first_name, last_name, avatar} = props;

    return ( 
        <>
            <tr>
                <td>{id}</td>
                <td>{email}</td>
                <td>{first_name} {last_name}</td>
                <td><img src={avatar} alt="" /></td>
            </tr>
        </>
     );
}

export default User;
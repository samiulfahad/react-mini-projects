import User from './User'

const List = props => {
    return ( 
    <>
        {props.users.map(user=> <User name={user.name} age={user.age} key={user.id}/>)}
    </>
    )
}

export default List
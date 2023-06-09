
const User = props => {
    return (
        <div className="flex justify-start mx-auto items-center space-x-4 w-60 rounded text-white bg-blue-400 px-4 py-1 my-2">
            <p className="font-bold font-mono">{props.name}</p>
            <p>({props.age})</p>
        </div>
    )
}

export default User
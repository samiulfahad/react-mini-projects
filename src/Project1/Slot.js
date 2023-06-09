import MyDate from './Date'

const Item = props => {
    let hour = 'hour'
    let minute = 'minute'
    if (parseInt(props.hour) > 1) hour = 'hours'
    if (parseInt(props.minute) > 1) minute = 'minutes'

    return (
        <div className="max-w-3xl mx-auto flex justify-between items-center font-mono font-bold text-2xl rounded-lg text-white bg-blue-400 py-3 px-10 my-4">
            <MyDate date={props.date}/>
            <div>
                <p className="">{props.subject}</p>
            </div>
            <div>
                <p className="">{parseInt(props.hour)}{hour} {parseInt(props.minute)}{minute}</p>
            </div>
        </div>
    )
}

export default Item
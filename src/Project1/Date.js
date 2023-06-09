
const MyDate = props => {
    const newDate = new Date(props.date)
    const day = newDate.getDate()
    const dayName = newDate.toLocaleDateString('en-US', { weekday: 'long' })
    const month = newDate.toLocaleDateString('en-US', { month: 'long' }); 
    const year = newDate.getFullYear()

    return (
        <div className="rounded-lg text-gray-300 bg-indigo-600 font-mono py-2 w-24 text-center border-4 border-white">
            <p className="text-sm text-white">{month}</p>
            <p className="text-xl text-white">{day}</p>
            <p className="text-sm">{dayName}</p>
            <p className="text-sm">{year}</p>
        </div>
    )
}

export default MyDate
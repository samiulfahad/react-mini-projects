import { useState } from 'react'
const AddSlot = props => {
    const [subject, setSubject] = useState()
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [unitH, setUnitH] = useState('')
    const [unitM, setUnitM] = useState('')
    const [validity, setValidity] = useState(true)
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [day, setDay] = useState(new Date(date).toLocaleDateString('en-US', { weekday: 'long' }))

    const setSubjectH = e => {
        setSubject(e.target.value)
    }
    const setHourH = e => {
        setHour(e.target.value)
        const hour = parseInt(e.target.value)
        if (hour > 1) setUnitH('s')
        if (hour <= 1) setUnitH('')
    }
    const setMinuteH = e => {
        setMinute(e.target.value)
        const minute = parseInt(e.target.value)
        if (minute > 1) setUnitM('s')
        if (minute <= 1) setUnitM('')
    }

    const setDateH = e => {
        setDate(e.target.value)
        setDay(new Date(e.target.value).toLocaleDateString('en-US', { weekday: 'long' }))
    }

    const formHandler = e => {
        e.preventDefault()
        const input = document.getElementById('textInput') 
        if( input.value.trim().length === 0) {
            setValidity(false)
            return
        }
        const slot = { subject, hour, minute, date }
        setSubject('')
        setHour(0)
        setMinute(0)
        setDate(new Date().toISOString().split('T')[0])
        document.getElementById('default').selected = true;
        input.value = ''
        props.saveSlot(slot)
    }

    const inputH = e => {
        if (e.target.value.trim().length > 0) {
            setValidity(true)
            return
        }
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div className='text-md mx-auto text-center font-mono bg-sky-200 rounded-lg p-4 max-w-3xl'>
                    <label>Hi, I am Samiul Fahad. I have studied </label>
                    <select onChange={setSubjectH} className='text-center rounded-lg py-1'>
                        <option id="default">Select</option>
                        <option value="Bangla" >Bangla</option>
                        <option value="English" >English</option>
                        <option value="BD Affair" >BD Affair</option>
                        <option value="International Affair">International Affair</option>
                    </select>
                    <span> for <input type='number' value={hour} min="0" max="20" onChange={setHourH} className='my-2 text-center rounded-lg'></input> hour{unitH}</span>
                    <span> and <input type='number' step={10} value={minute} min="0" max="59" onChange={setMinuteH} className='text-center rounded-lg'></input> minute{unitM} </span>
                    <span> on {day} <input type='date' value={date} min="2023-01-01" max="2023-08-30" onChange={setDateH} className='px-4 rounded-lg'></input> </span>
                    <input id='textInput' type='text' onChange={inputH} className={`border-4 ${validity? 'border-blue-500' : 'border-red-500'}`}></input>
                    <p className='text-center mx-auto mt-4'>Now I want to <button type='submit' className='bg-sky-400 text-white rounded-md px-3 py-1 font-bold'>Add This Slot</button> to my Activity Tracker</p>
                </div>
            </form>
        </div>
    )
}

export default AddSlot
import Slot from './Slot'

const SlotHolder = props =>{
    return (
        props.slots.map(slot => (<Slot key={slot.id} subject={slot.subject} hour={slot.hour} minute={slot.minute} date={slot.date}/>))
    )
}

export default SlotHolder
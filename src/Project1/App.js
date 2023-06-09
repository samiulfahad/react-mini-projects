import { useState } from 'react';
import AddSlot from './AddSlot';
import SlotHolder from './SlotHolder';

const App = () => {
  const slotList = [
    { id: 1, subject: "Math", hour: 2, minute: 32, date: new Date() }]
  const [slots, setSlot] = useState(slotList)
  const save = slot => {
    slot.id = Math.random()
    setSlot([...slots, slot])
  }

  return (
    <div className="w-full mx-auto px-10">
      <p className="font-mono text-3xl text-center">Hello There</p>
      <AddSlot saveSlot={save} />
      <SlotHolder slots={slots} />
    </div>
  );
}

export default App;

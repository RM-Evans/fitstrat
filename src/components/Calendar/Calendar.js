import React, { useState, useEffect } from 'react'
import './Calendar.css'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
// import scrollGridPlugin from '@fullcalendar/scrollgrid'

export default function Calendar() {
  const [dateModal, setDateModal] = useState(false)

  const handleModal = () => {
    setDateModal((tog) => !tog)
    console.log(dateModal)
  }
  const closeModal = () => setDateModal(false)

  return (
    <div>
      <div onClick={closeModal}>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            listPlugin,
            // scrollGridPlugin,
          ]}
          initialView="dayGridWeek"
        />

        <div className={dateModal ? 'show' : 'hide'}>modal</div>
      </div>

      <button onClick={handleModal}>addstuff</button>
    </div>
  )
}

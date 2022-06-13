import React from 'react'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
// import scrollGridPlugin from '@fullcalendar/scrollgrid'

export default function Calendar() {
  // const [dateModal, setDateModal]
  return (
    <div>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          listPlugin,
          // scrollGridPlugin,
        ]}
        initialView="dayGridWeek"
      />

      {/* <button onClick="open-">addstuff</button> */}
    </div>
  )
}

import { useState, useEffect } from 'react'

export default function useDate() {
  const [today, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date())
    }, 10 * 1000)
    return () => {
      clearInterval(timer) // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, [])

  const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' }
  const currentDate = today.toLocaleDateString('en-US', dateOptions)

  return currentDate
}

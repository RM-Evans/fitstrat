import './Home.css'

// import logo from '../../logo.svg'
import Date from '../../components/Date'

export default function Home() {
  return (
    <main>
      <div className="todays-greeting">
        <Date />
        <h1>Today's workout:</h1>
        <p className="todays-workout-title">back and bi</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    </main>
  )
}

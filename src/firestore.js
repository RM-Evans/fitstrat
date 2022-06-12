import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDkHUFm4vXvRpwA04FBjHlMtGuXsQghjM8',
  authDomain: 'fitstrat-ed8b3.firebaseapp.com',
  projectId: 'fitstrat-ed8b3',
  storageBucket: 'fitstrat-ed8b3.appspot.com',
  messagingSenderId: '169125590066',
  appId: '1:169125590066:web:a5081476a4934988c3f82b',
  measurementId: 'G-WY5Q3QSR93',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth()
const db = getFirestore(app)

export { auth, db }

// !------
// db.collection('users').doc().set(
//   values
// {s
// name: 'name',
// email: 'email',
// comment: 'comment',
// }
// )
// !------
// let ref1 = db.database().ref().child('users').push()
// let key = ref1.key
// values.id = key
// ref1.set(values)
// console.log(ref1.key)

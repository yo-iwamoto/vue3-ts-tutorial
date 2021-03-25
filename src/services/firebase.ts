import firebaseModule from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBe83QE9l3L8ur4Di6LPt3JxLvMqtGt-u8',
  authDomain: 'leisurely-todo.firebaseapp.com',
  projectId: 'leisurely-todo',
  storageBucket: 'leisurely-todo.appspot.com',
  messagingSenderId: '82097767737',
  appId: '1:82097767737:web:9224d52643c4e9890d94e8'
}

export const firebase = firebaseModule.initializeApp(firebaseConfig)

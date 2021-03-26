import axios from '@/services/axios'
import { firebase } from '@/services/firebase'
import { SignupForm, LoginForm } from '@/types/forms'
import { store } from '@/services/store'
import { router } from '@/router'

axios.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('Access-Token')
    if (accessToken) {
      config.headers.common['Access-Token'] = accessToken
    }
    return config
  }
)

// Userが作成され，idをエンコードしたaccessTokenが受取り，これをlocalStorageに格納
export const createUser = async () => {
  try {
    const res: any = await axios.post('/auth/register')
    await localStorage.setItem('Access-Token', res.headers['access-token'])
    store.register()
    router.push('/')
  } catch (err) {
    console.log(err)
  }
}

// Firebase Authenticationのuser.uidを，accessTokenから得られるUserに紐付ける
const syncUser = async (uid: string) => {
  try {
    await axios.post('/auth/sync', { uid: uid })
    router.push('/')
  } catch (err) {
    console.log(err)
  }
}

// Firebase Authenticationでユーザー登録，uidをsyncUserに渡す
export const signup = async (signupForm: SignupForm) => {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(
      signupForm.email,
      signupForm.password
    )
    if (res.user) {
      store.login()
      syncUser(res.user.uid)
    }
  } catch (err) {
    console.log(err)
  }
}

const login = async (uid: string) => {
  try {
    const res = await axios.post('/auth/login', { uid: uid })
    localStorage.removeItem('Access-Token')
    await localStorage.setItem('Access-Token', res.headers['access-token'])
    store.login()
    router.push('/')
  } catch (err) {
    store.logout()
    console.log(err)
  }
}

// Firebase Authenticationで認証，uidを受取り，これをExpress側に送信してUserを受け取る（未実装）
export const firebaseLogin = async (loginForm: LoginForm) => {
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(
      loginForm.email,
      loginForm.password
    )
    if (res.user) {
      login(res.user.uid)
    }
  } catch (err) {
    console.log(err)
  }
}

// localStorageにAccess-Tokenがあれば，サーバーに送信して正当な値か検証しログイン
export const autoLogin = async () => {
  if (store.state.isRegistered) {
    try {
      // 不正な値であれば400を返すので例外でなければログイン
      await axios.post('/auth/auto_login')
      store.login()
    } catch (err) {
      console.log(err)
    }
  }
}

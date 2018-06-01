import { delay } from 'dva/saga'

export default {

  namespace: 'count',

  state: {
    record: 0,
    current: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log('subscriptions setup')
    }
  },

  effects: {
    *addEffect({ payload }, { call, put }) {  // eslint-disable-line
      console.log('effects/addEffect')
      yield put({ type: 'add' })
      yield put({ type: 'add' })
      yield put({ type: 'add' })
      yield put({ type: 'add' })
      yield put({ type: 'add' })
    },
    *minusEffect({ payload }, { call, put }) {  // eslint-disable-line
      console.log('effects/minusEffect')
      yield put({ type: 'minus' })
      yield put({ type: 'minus' })
      yield put({ type: 'minus' })
      yield put({ type: 'minus' })
      yield put({ type: 'minus' })
      yield put({ type: 'minus' })
    },
    *watchRequest({ payload }, { call, put, take, actionChannel }) {  // eslint-disable-line
      console.log('init watchRequest')
      const requestChan = yield actionChannel('count/REQUEST')
      while (true) {
        yield call(delay, 1000)
        // 2- take from the channel
        const sth = yield take(requestChan)
        console.log('2- take from the channel')
        console.log(sth.payload)
      }
    },
    *watchRequest2({ payload }, { call, put, take }) { // eslint-disable-line
      console.log('arrive watchRequest2')
      yield call(delay, 1000)
      console.log('payload')
      console.log(payload)
    }
  },

  reducers: {
    add(state) {
      console.log('reducers/add')
      const newCurrent = state.current + 1
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent
      }
    },
    minus(state) {
      console.log('reducers/minus')
      return { ...state, current: state.current - 1 }
    },
    hahaha(state, {payload}) {
      console.log(payload)
      return state
    }
  }

}

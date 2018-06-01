import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Button } from 'antd'
const { push } = routerRedux

const Count = ({ count, dispatch }) => {
  console.log(count)
  dispatch({ type: 'count/watchRequest', payload: 'sadasd' })
  return (
    <div>
      <div>Highest Record: {count.record}</div>
      <div>{count.current}</div>
      <div>
        <Button icon="plus" onClick={() => { dispatch({ type: 'count/add' }) }}></Button>
        <Button icon="minus" onClick={() => { dispatch({ type: 'count/minus' }) }}></Button>
        <Button icon="warning" onClick={() => { dispatch({ type: 'count/addEffect' }) }}></Button>
        <Button icon="search" onClick={() => { dispatch(push('/foo')) }}></Button>
        <Button onClick={() => { dispatch({type: 'count/hahaha', payload: {foo: 'bar'}}) }}>Test Payload</Button>
        <Button onClick={() => { dispatch({ type: 'count/REQUEST', payload: { foo: 'ha' } }) }}>watch</Button>
        <Button onClick={() => { dispatch({ type: 'count/watchRequest2', payload: {foo: 'hehe'} }) }}>watch2</Button>
      </div>
    </div>
  )
}

Count.propTypes = {
}

function mapStateToProps(state) {
  console.log('mapStateToProps')
  return { count: state.count }
}

export default connect(mapStateToProps)(Count)

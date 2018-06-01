import React from 'react'
import { routerRedux, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
import Count from './components/Count'
import Foo from './components/Foo'
import { LocaleProvider } from 'antd'
import zhTW from 'antd/lib/locale-provider/zh_TW'
const { ConnectedRouter } = routerRedux

function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhTW}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/test" exact component={Count} />
          <Route path="/foo" exact component={Foo} />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  )
}

export default RouterConfig

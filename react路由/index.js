const routerObserveQueue = []

export const RouterHooks = {
  beforeRouterComponentLoad(callback) {
    routerObserveQueue.push({
      type: 'before',
      callback
    })
  },

  afterRouterComponentLoaded(callback) {
    routerObserveQueue.push({
      type: 'after',
      callback
    })
  }

}

export default function AsyncRouter(loadRouter) {
  return class Content extends React.Component {
    constructor(props) {
      super(props)
    }
    state = {Component: null}
    dispatchRouterQueue(type) {
      const {history} = this.props
      routerObserveQueue.forEach(item => {
        if(item.type === type) item.callback(history)
      })
    }

    componentDidMount() {
      if (this.state.Component) return
      loadRouter()
        .then(module => module.default)
        .then(Component => this.setState({Component},
          () => {
            /* 触发每个路由加载之后钩子函数 */
            this.dispatchRouterQueue('after')
          }))
    }

  }
}
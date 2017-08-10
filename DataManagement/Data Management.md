# Data Management 

## Component State

state 相当于MVC中的model,用于存储组件内部数据，独立于应用其他组件的数据。

## Smart/Container Components

container 相当于MVC模式中的controller, 处理逻辑业务，数据更新及用户交互。将数据、回调函数传递给view层。

## Presentational/Dumb Components

组件相当于MVC模式中的view层，不需要处理业务逻辑。唯一的输入为props.

## Redux

复杂些的应用多使用Redux管理data及state。

## Redux Architecture

## store

* 一个应用只需要创建一个store保存data和state(不同于Flux需要多个stores).
* store.getState() 获取state.
* store.dispatch(action) 通过传递一个action更更改state, 不能直接更改state.

## action 

action是一个普通对象，至少有一个type属性。{type: 'INCREMENT'}。type属性值可以为任意类型。action只有type, playload, error, meta 这四个属性。参见 [Flux Standard Action](https://github.com/acdlite/flux-standard-action)。实际应用中type是必须，但也可以包含任意自定义属性。

## reducer

reducer是更新state的函数。action、state作为reducer的参数传入，reducer根据不同的action.type来处理state。返回处理后的state。

```javascript
export default class App extends Component {

  state = {}

  componentWillMount() {
    const {store} = this.props   

    const {todos} = store.getState()  
    this.setState({todos})   // state获取store中的缓存数据

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState()
      this.setState({todos})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onAddTodo = (text) => {
    const {store} = this.props

    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {store} = this.props

    store.dispatch(actionCreators.remove(index))   // 通过dispatch一个新的action来更新state
  }

  render() {
    const {todos} = this.state

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}
```

## React Redux

```javascript
const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props

    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App) // 将state.todos、store.dispatch()映射到this.props。
```

## Redux Persist

* React Redux 为内存缓存，Redux persist为“磁盘缓存”











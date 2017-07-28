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

action是一个普通对象，至少有一个type属性。{type: 'INCREMENT'}。type属性值可以为任意类型。action只有type, playload, error, meta 这四个属性。参见 [Flux Standard Action](https://github.com/acdlite/flux-standard-action)

## reducer

reducer是更新state的函数。action、state作为reducer的参数传入，reducer根据不同的action.type来处理state。返回处理后的state。














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

## action [Flux Standard Action](https://github.com/acdlite/flux-standard-action)

## Example

A basic Flux Standard Action:

{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'  
  }
}
An FSA that represents an error, analogous to a rejected Promise:

{
  type: 'ADD_TODO',
  payload: new Error(),
  error: true
}

## Actions

An action MUST

* be a plain JavaScript object.
* have a type property.

An action MAY

* have an error property.
* have a payload property.
* have a meta property.

An action MUST NOT include properties other than type, payload, error, and meta.

## type

The type of an action identifies to the consumer the nature of the action that has occurred. By convention, type is usually a string constant or a Symbol. If two types are the same, they MUST be strictly equivalent (using ===).

## payload

The optional payload property MAY be any type of value. It represents the payload of the action. Any information about the action that is not the type or status of the action should be part of the payload field.

By convention, if error is true, the payload SHOULD be an error object. This is akin to rejecting a promise with an error object.

## error

The optional error property MAY be set to true if the action represents an error.

An action whose error is true is analogous to a rejected Promise. By convention, the payload SHOULD be an error object.

If error has any other value besides true, including undefined and null, the action MUST NOT be interpreted as an error.

m## eta

The optional meta property MAY be any type of value. It is intended for any extra information that is not part of the payload.











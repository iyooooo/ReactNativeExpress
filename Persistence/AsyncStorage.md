# AsyncStorage

* AsyncStorage 是 React Native 内置的客户端数据持久化 API。
* Redux Peisist 对 AsyncStorage做了封装，处理复杂数据时使用。

# API
* AsyncStorage 获取或存储键值对都是异步的, 存储值可以是 string 或 json。

* await getItem(key) => ?string

根据键值获取到存储的字符串、null、json。使用 JSON.parse(value) 解析返回的json。

* await setItem(key, value)

存储 string、json。 使用 JSON.stringfy(value) 讲字符串转换成json再存储。

* await clear()

清除存储数据

* 一些常用APIs

removeIterm(key)
mergeIterm(key,value)
getAllKeys() => ?Array;string;
flushGetRequests()
multiGet(keys) => ?Array;Array;string;
multiSet(keyValuePairs)
multiRemoves(keys)
multiMerge(keysValuePairs)

* 以上出现方法失败都可以捕捉errors。

# Example










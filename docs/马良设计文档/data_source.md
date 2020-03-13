<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-12 10:29:44
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-12 17:14:59
 -->

# 数据源仓库

## 数据源结构

```typescript
interface Other {
  tc_mc?: {
    tc: string;
    mc: string;
    _name: string;
  }[];
  url_params?: {
    key: val;
  };
}

interface Data_source {
  note: string; // 描述
  id: string; // 数据源id 数据源唯一标识
  method: 'post' | 'get'; // 请求类型
  url: string; // 接口地址
  other: Other; // 其他参数
  header: Header; // header 参数
  inArg: inArg; // 入参修饰 处理接口入参
  outArg: outArg; // 出参修饰  处理接口出参
}
```

### inArg 入参修饰 处理接口入参

```typescript
// 以前正常 入参
const inArg = {
  size: 6,
};

// 修饰 同 出参
// 不同的是val 需要默认值
```

### outArg 出参修饰 处理接口出参

```typescript
// 以前 正常返回值
const rtData = {
    size: 6,
    unit: 'px',
    child: [
        {
            time: '',
            id: '',
        },
        ...
    ],
    other: {
        todo: 'go to home',
        ...
    }
}


// 修饰后 保证map 结构
// bedeck 修饰参数可以不存在 如果不存在 按照string | number 处理
const outArg = {
    key: // 处理函数生成的
}

[
    {
        tc: 1492,
        mc: 123,
        val: ''
    },
    {
        tc: 1492,
        mc: 122
    }
]
```

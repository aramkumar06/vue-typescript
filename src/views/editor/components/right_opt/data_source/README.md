<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-09 16:11:24
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-09 17:11:01
 -->

# 数据源

> 数据源主要是对页面数据进行处理

## 数据结构

> 编辑器元数据 key 通过生成器进行生成

```javascript
interface editSourceData {
  _name: string;
  key: string;
  type: 'string' | 'number' | 'object' | 'array' | 'boolean';
  val: any;
  children: editSourceData[];
}

const editSourceData: editSourceData[] = [
  {
    _name: '', // 用户手动填写
    key: '', // 通过生成器生成
    type: '', // 类型记录该值类型 string number object array boolean
    val: '', // 记录值
    children: [],
  },
];
```

> 页面真实使用数据源结构

```javascript
const pageSourceData = {
    `${key}`: {
        val,
        _name,
        type,
    }
}
```

> 后端接口数据返回结构, 要做出一定的牺牲

```JAVA
@RequestMapping(method = RequestMethod.GET, value = "/getPageData")
public editSourceData[] getPageData(HttpServletRequest req) {

    editSourceData[] result = {

    };

    // 以前
    result = {
        key: val
    }

    // malyan
    result = [
        {
            _name: string;
            key: string;
            type: 'string' | 'number' | 'object' | 'array' | 'boolean';
            val: any;
            children: editSourceData[];
        }
    ]

    return result;
}
```

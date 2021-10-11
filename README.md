# 无权限组件
业务中配合Tea组件库使用，tea-component、oit-style，使用

[Vue版本: oit-permission-vue](https://www.npmjs.com/package/oit-permission-vue)

## 安装

```bash
npm i oit-permission
or
yarn add oit-permission
```
## Demo
```js

import React from 'react'
import { Button, Text, H3 } from 'tea-component'
// 无权限组件
import Permission from 'oit-permission'
// 无权限组件（样式）
import 'oit-permission/dist/index.css'

function index() {
  return (
    <Permission
      thumb={require('oit-permission/dist/f0984492bd5f035d.svg')}
      title={<H3>暂无权限，申请后即可使用数据管理与合规治理服务。</H3>}
      description={
        <Text theme="label">
          数据管理与合规治理服务，能帮助使用者对元数据、数据日志以及数据权限审批进行统一管理，为游戏产品提供数据合规处理相关能力。
        </Text>
      }
      style={{ width: '550px' }}
      operation={<div><Button type="primary">提交申请</Button></div>}
    />
  )
}

export default index
```

## 参数说明

| 属性        | 说明                                                         | 类型                | 默认值  |
| ----------- | ------------------------------------------------------------ | ------------------- | ------- |
| type        | 类型：整个子系统无权限 default、子系统某个模块无权限 content | string              | default |
| title       | 标题                                                         | React.ReactNode     | -       |
| description | 描述                                                         | React.ReactNode     | -       |
| thumb       | 缩略图                                                       | string              | -       |
| operation   | 操作按钮                                                     | React.ReactNode     | -       |
| className   | 自定义类名                                                   | string              | -       |
| style       | 自定义样式                                                   | React.CSSProperties | -       |

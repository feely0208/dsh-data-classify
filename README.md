# @deepwhale-cn/dsh-data-classify

**数据分类分级** —— 查数据有没有分级标注与资产清单。

## 不装它会怎样

你的数据字典长这样：

```json
"fields": {
  "idcard": { "type": "string", "public": true },
  "phone":  { "type": "string", "public": true },
  "salary": { "type": "string", "public": true }
}
```

**身份证、手机号、薪资全标成 public。**

> **《数据安全法》第二十一条**
> 国家建立数据分类分级保护制度，根据数据**一旦遭到篡改、破坏、泄露
> 或者非法获取、非法利用**对国家安全、公共利益或者个人、组织合法权益
> 造成的**危害程度**，对数据实行分类分级保护。

**没有分级，就无法对不同的数据施加不同的保护强度** —— 加密、访问控制、
留存期限、出境评估，全都建立在「这是几级数据」之上。

## 关键词
**关键词**：数据分类分级 · 数据分级 · 数据密级 · 数据资产清单 · 数据台账 · 数据字典 · 数据安全法
**Keywords**: data classification · data grading · data inventory · data map · data security law

## 它查什么

| 级别 | 内容 |
|---|---|
| 🔴 高 | 出现敏感数据但**找不到分级标注** |
| 🟡 中 | 找不到分级制度文档 · 找不到数据资产清单 |
| 🟡 中 | 所有数据都标成**公开级** |

## 「全是公开」为什么值得报

它通常不是「我们真的只有公开数据」，而是**分级工作没做完**（先标了个默认值）。

**分类分级的价值在于差异** —— 只有一级等于没有分级。

## 安装

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-data-classify
# 或纯 CLI
npx @deepwhale-cn/dsh-data-classify
```

![dsh-data-classify 的检查报告示例](https://raw.githubusercontent.com/feely0208/dsh-data-classify/main/docs/report.png)

## 用法

```bash
dsh-data-classify --demo
dsh-data-classify --list-rules
dsh-data-classify --html r.html
```

## 边界

- **不判断「该定几级」** —— 分级标准由行业和组织决定，本工具不替你定。
- **分级可能存在于仓库外**（数据治理平台、内部文档）—— 报出来是提示你确认。
- **敏感数据靠字段名识别** —— 自定义命名会漏。
- **`CLASSIFY-ALL-PUBLIC` 是启发式** —— 只有「公开」一级同时出现在多处时才值得怀疑。
- 与 [dsh-pipia](https://github.com/feely0208/dsh-pipia) 分工：
  那个查**评估流程**，这个查**数据本身有没有分级**。

本插件是一个工具。使用者必须遵守所在地区法律法规，**对使用本项目造成的任何后果自行承担责任。**

## License

MIT © 深鲸 DeepWhale

# 基础平台内部分支管理规范，请务必按此规范进行开发

<a name="N9i3N"></a>

## GitFlow 流程规范

<a name="91be7c16"></a>

###### 开发分支（div）‌

dev 分支是仓库的开发分支，这个分支包含最近发布到开发环境的代码。
<a name="l7YDS"></a>

###### 测试分支（test）‌

test 分支是仓库的测试分支，这个分支包含最近发布到测试环境的代码， 这个分支需从 dev 分支合并。
<a name="fCijc"></a>

###### 生产分支（master）‌

master 分支是仓库的生产分支，这个分支包含最近发布到生产环境的代码， 这个分支需从 test 分支合并，禁止在这个分支直接修改 ‌。

## 使用

<a name="O4O6V"></a>

#### 新功能开发

- 目前 gitLab 默认仓库为 master 分支，做新功能的时从 master 拉取分支：

       feature-'作者'-'功能概括名'-'时间'（feature-liyuming-weather-20223/02/16）

- 自测无误后提交 mr 到 master，稳定后删除自己的 feature 分支;
  <a name="bf65c"></a>

#### 线上问题修复

- 修复线上环境上的问题从 glink-master 拉取分支:

       hotfix-'作者'-'功能概括名'-'时间'（hotfix-liyuming-weather-20223/02/16）

- 自测无误后提交 mr 到 master，然后稳定后删除自己的 hotfix 分支;

<a name="x4wX7"></a>

## 提交规范

<a name="Z8mgi"></a>

### （1）type

    提交 commit 的类型，包括以下几种：
    feat: 新功能
    fix: 修复问题
    docs: 修改文档
    style: 修改代码格式，不影响代码逻辑
    refactor: 重构代码，理论上不影响现有功能
    perf: 提升性能
    test: 增加修改测试用例
    chore: 修改工具相关（包括但不限于文档、代码生成等）
    deps: 升级依赖

<a name="M9dXV"></a>

### （2）scope

    修改文件的范围（包括但不限于 doc, middleware, proxy, core, config）

<a name="nwOXH"></a>

### （3）subject

    用一句话清楚的描述这次提交做了什么

<a name="EsC83"></a>

### （4）body

    补充 subject，适当增加原因、目的等相关因素，也可不写。

<a name="FqN6C"></a>

### （5）footer

    当有非兼容修改时可在这里描述清楚
    关联相关 issue，如 Closes #1, Closes #2, #3

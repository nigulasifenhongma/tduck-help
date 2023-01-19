# Uniapp使用说明

::: tip 背景说明
TDUCK-Uniapp是一款使用uniapp框架，支持多端运行，打包多端小程序的程序；能够同时支持Android、iOS 打包成APP；在实际使用业务中，实现多终端管理/填报表单数据；更便捷的管理表单、审核流程；

- 账号登录
- 表单流程审核
- 基础表单创建
- 同步PC表单管理
- 协作表单
- 账号管理
- 修改密码
- 消息中心
- 其他功能
  :::
  [Pro和Uniapp有何区别？](https://www.yuque.com/tduck/home/rplhx0?view=doc_embed)
  <a name="JzKNT"></a>

## 最佳实践

![image.png](https://oss.tduckcloud.com/1666431155878-a4813cfe-6495-4e30-b68e-8ce1c67e63dc.jpeg)<br />**请使用微信扫码查看填写页面**<br />如需体验全部功能，请返回首页使用演示账号登录

<a name="R5ygX"></a>

## 从首页开始

![image.png](https://oss.tduckcloud.com/1667530002833-92c1f1a6-1f7b-47a0-9cb9-b5aed5e948a0.png)

## 使用说明

## 1.登录

移动端登录账号同pro账号，使用test/12345678演示账号登录<br />![image.png](https://oss.tduckcloud.com/1658549053598-911e5d67-5040-4b35-8045-c839e117c3fa.png)

## 2.流程表单


### 查看详情

登录成功后，默认展示流程表单菜单，此处将会展示登录账号待办的流程表单，并且展示审核状态。<br />可以点击顶部对应状态栏位查看不同类型的表单详情。<br />![image.png](https://oss.tduckcloud.com/1658549496835-01085839-7fca-4da1-b850-8c172ecfaf19.png)

### 同意流程

登录后点击表单详情，点击“同意”按钮，输入同意意见，点击确定<br />![image.png](https://oss.tduckcloud.com/1658549683278-c2d92041-8c33-459f-a20c-75891a8604ca.png)
<a name="XNBzu"></a>

### 拒绝流程

登录后点击表单详情，点击“拒绝”按钮，输入拒绝意见，点击确定<br />![image.png](https://oss.tduckcloud.com/1658550098252-7165e32f-264f-4b42-815f-1fa4cfa9747a.png)
<a name="OIVZE"></a>

### 退回流程

登录后点击表单详情，点击“退回”，选择需要退回的节点，点击确定即可完成<br />![image.png](https://oss.tduckcloud.com/1658550122807-17ee4499-e014-42c0-8052-f2d81c0cae8f.png)
<a name="AJtca"></a>

### 流程流转信息

选择流程流转信息，点击即可查看该流程流转的路径以及每一位审批人是谁、审批时间、审批完成（办理时间）时间、下一位审核人等信息。<br />![image.png](https://oss.tduckcloud.com/1658550259891-05bee46c-e750-4790-a84d-58040a465470.png)
<a name="Rg3Nx"></a>

## 3.普通表单

<a name="sfDGN"></a>

### 查看普通表单

点击底部“表单”按钮，即可查询该账号下所有的表单文件夹、表单文件，并且会根据表单状态展示不同的状态颜色，绿色为已发布，灰色为未发布，红色为已停止。搜索框可以通过搜索表单文件夹、表单名称进行模糊搜索。减少下拉次数，快速定位需要管理的表单文件。<br />![image.png](https://oss.tduckcloud.com/1658550374651-886fd97e-8ef2-4326-8b7e-47af444a37a3.png)
<a name="o1jse"></a>

### 协作表单

选择表单菜单，点击头部协作表单类型，即可查看其他用户分享给该账号的协作表单详情，协作表单可以支持该表单的全部权限，开通协作表单时需注意权限的范围管控。<br />![image.png](https://oss.tduckcloud.com/1658550637889-03657dbd-8cf5-41e3-96e0-aad4b4119374.png)
<a name="TBTFw"></a>

### 查看表单

表单菜单中，点击查看按钮（如图），即可进入表单查看设置；进入后会生成表单二维码，分享该二维码或分享小程序卡片，被分享者可直接通过小程序访问表单；如果通过复制链接，则被分享者会通过H5链接进入小程序。点击直接打开则将在小程序中直接打开表单填写页。<br />![image.png](https://oss.tduckcloud.com/1658550695319-e23e713e-e9c9-4eec-aae4-2e7f8d332a50.png)
<a name="raqGH"></a>

### 查看数据

点击表单数据，进入表单数据查看页，即可查看回收的数据详情；并且可以支持数据的修改，删除，刷新等操作<br />![image.png](https://oss.tduckcloud.com/1658550968542-e0cbd447-072f-41a6-b6aa-26b9bed6a0c0.png)
<a name="k28GV"></a>

### 管理表单

点击表单中的“更多”按钮，即可进行表单的管理操作，例如：发布、预览、暂停、删除等操作。<br />![image.png](https://oss.tduckcloud.com/1658551038039-0e749225-8585-48b5-b96d-03b2dec951e2.png)
<a name="oGcXt"></a>

## 4.新建表单

<a name="OHzdk"></a>

### 新建表单

点击“我的”、“新建表单”按钮，即可进入新建流程<br />![image.png](https://oss.tduckcloud.com/1658551136553-e5ee0245-66b1-456c-ad65-ad9342c39b99.png)

填写表单标题，表单描述<br />![image.png](https://oss.tduckcloud.com/1658551165191-afe5fed8-d1cb-4360-8142-e15deda7ff6f.png)
<a name="hXdJ9"></a>

### 添加题目

创建表单后，需要给表单添加题目，移动端支持基础题型的创建，可以快速创建<br />![image.png](https://oss.tduckcloud.com/1658551253865-27fc5d28-afbc-46b6-a960-a0a4131be285.png)
<a name="Qv33T"></a>

### 发布表单

创建完表单和组建后，需要将表单进行发布，点击底部发布按钮即可完成<br />![image.png](https://oss.tduckcloud.com/1658551352651-db3b97c8-209e-446e-8534-4e4a1b39845f.png)
<a name="AaCAV"></a>

## 5.消息通知

<a name="BD1WO"></a>

### 查看消息

点击“我的”，“消息中心”可以查看管理员发布的消息、流程流转的消息记录，输入消息标题也可进行查询搜索。<br />![image.png](https://oss.tduckcloud.com/1658551447585-6b72a34f-94c0-4a52-8582-588ae2a46e88.png)
<a name="XCs7i"></a>

## 6.个人信息

<a name="ZCabV"></a>

### 修改个人信息

点击“我的”，“个人信息”即可查看当前账号的个人信息，并且可以支持修改<br />![image.png](https://oss.tduckcloud.com/1658551511891-ba86ca8b-a82c-451a-bf82-75f002ae8e42.png)
<a name="mttP2"></a>

## 7.修改密码

<a name="M7P6G"></a>

### 修改密码

点击“我的”，“修改密码”输入旧密码，以及新密码，点击提交按钮即可完成修改<br />![image.png](https://oss.tduckcloud.com/1658551581365-bc91bb3b-20b6-4e8b-bcd7-b0edd82d94a8.png)

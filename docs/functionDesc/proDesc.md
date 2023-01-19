# pro使用说明

<a name="s8FrQ"></a>

## 账号登录

浏览器访问官网地址：[https://www.tduckcloud.com/](https://www.tduckcloud.com/)![](https://oss.tduckcloud.com/1642557738156-9391daf4-ed3c-4bf3-a78e-c3f4e4ca266d.png)官网包含Tdcuk开源版（v2）、TduckPro版本，点击按钮“Pro体验”进入体验版本。测试账号：test，密码：12345678![](https://oss.tduckcloud.com/1642557741016-2ed5290e-e108-407d-b12c-b269d183ec0d.png)输入密码后点击登录，并完成机器验证（滑动到指定空位)，即可完成登录。
<a name="XexWf"></a>

## 表单创建

使用测试账号登录成功后，点击左侧“企业表单”>“我的表单”![](https://oss.tduckcloud.com/1642557741768-01c2d88e-b969-47a3-b949-3f6acec7d273.png)点击“创建”按钮，进入新表单编辑界面![](https://oss.tduckcloud.com/1642557742233-3ed83c14-d2e9-4061-9cb4-3f4622a6302d.png)输入表单名称、表单描述（非必填），点击确认即可完成![](https://oss.tduckcloud.com/1642557742726-99cf9985-e03d-4223-9a7a-368b2c59266a.png)进入表单编辑页面，根据您需要创建的题型拖动左侧已经定义好的组件
<a name="COIHQ"></a>

## 流程表单创建

![](https://oss.tduckcloud.com/1642557743130-3d16f787-52af-4e06-99bf-0f8c447fc600.png)点击创建表单，选择使用“流程表单”![](https://oss.tduckcloud.com/1642557743415-e4da9943-f556-44d8-96fd-57002d7bd1be.png)选择拖入的组件，右侧支持修改组件名称，组件提示语![](https://oss.tduckcloud.com/1642557744074-a63bca91-9819-4d6c-ad97-fa24d8b5cba8.png)
<a name="fsZ7Z"></a>

## 流程定义

![](https://oss.tduckcloud.com/1642557747647-e735d196-328b-4afa-b92a-e1a0ee70bfda.png)
<a name="PEH5Z"></a>

## 表单属性功能描述：

- 标题：支持编辑控件的名称，常用于设置问题
- 占位提示：用于文本框提示
- 表单栅格：设置表单横向宽度（非特殊情况建议保持不变）
- 默认值：用于设置此表单组件包含的默认值
- 显示标签：控制是否显示组件标题（问题名称）
- 能否清空：控制是否能够清空组件内容
- 是否只读：控制该组件发布后是否能够支持用户填写
- 是否必填：控制此组件内容是否允许为空
- 前图标/后图标：设置输入框前/后显示的icon图标
- 最多输入X字符：设置该组件最多输入xx个字符
- 输入统计：二开拓展功能-可忽略
- 类型：设置该组件判断的反馈内容格式，如不满足则不能提交
- 静态数据：自定义设置选择框内容
- 动态数据：支持通过动态获取其他API接口的内容（可对接业务系统）
- 添加正则：支持自行设置正则表达式，完成反馈内容的高级校验

例如：创建“员工信息收集表”，可将该表单保存为模板或进行预览![](https://oss.tduckcloud.com/1642557744833-b811cf91-7e0a-4136-8114-29a3da57c54b.png)点击保存模板时，需要传入模板图片、模板名称、描述、类型（可维护）等信息![](https://oss.tduckcloud.com/1642557745391-c269ac52-b4e0-47a2-aa6a-b97cc0fd5cd8.png)
<a name="MeKEm"></a>

### 级联选择

批量编辑功能详解![image.png](https://oss.tduckcloud.com/1654008682928-32e6e40a-e1c0-4aa5-812d-61fad8f98b51.png#clientId=ueb11dcf1-03bc-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=u9fcc752a&name=image.png)级联选择功能目前能支持批量编辑，最多支持4级，示例数据如下：

```yaml
湖南省
湖南省/长沙市
湖南省/长沙市/开福区
湖南省/长沙市/开福区/湘江北路
浙江省
浙江省/嘉兴市
浙江省/嘉兴市/平湖区
```

<a name="VJGQu"></a>

## 显示逻辑

显示逻辑，能够支持用户在完成某项选择后（仅限有选择性场景的表单生效），显示另外一个有逻辑关系的表单组件![](https://oss.tduckcloud.com/1642557745854-59c4bb5b-0fa9-4200-9df3-b6098da822f0.png)例如使用员工信息表，第一步选择需要隐藏的问题组件![](https://oss.tduckcloud.com/1642557746228-6f4256c4-c185-428f-8e57-7cd9d4e684ed.png)![](https://oss.tduckcloud.com/1642557746529-b7723d87-aca0-4d4d-bd02-9d0e66b73c18.png)![](https://oss.tduckcloud.com/1642557746863-5ac1f129-da23-40fd-99b0-75ad3a1457af.png)此时，该表单显示逻辑为：当用户选择远工类型为临时，则显示毕业院校组件。其他逻辑相同，一次类推即可；同一个表单可设置多个显示逻辑规则（可以自己建个尝试）
<a name="FjJJ6"></a>

## 外观设置

点击头部“外观”菜单按钮进入外观编辑![](https://oss.tduckcloud.com/1642557747308-724a874c-013f-48f6-8e92-91473ead8dfb.png)支持手机/电脑方式预览如果创建的表单为流程表单，则需要定义流程，定义好后点击**“启用”**![](https://oss.tduckcloud.com/1642557747922-ad7e1332-1f11-4566-b30d-0eeb5aeb2705.png)选择左侧相关主题颜色，则会同步改变表单的头图内容以及其他风格；外观主题可在“主题设置”进行自定义管理![](https://oss.tduckcloud.com/1642557749122-e204cdb5-3511-4fe8-a629-74b40cfb298a.png)支持设置表单自定义logo、表单头图、表单背景颜色/背景图片、按钮文字、显示标题、显示描述、显示序号![](https://oss.tduckcloud.com/1642557749551-64594ac8-a263-4d03-ae31-46dbecb05e4f.png)
<a name="xZMs5"></a>

## 考试表单创建

<a name="PNY02"></a>

### 新建考试

点击企业表单-新建表单，选择考试，输入描述，点击保存![image.png](https://oss.tduckcloud.com/1651237074130-90c23ad6-9d35-4bd7-8b20-eb64d3916b68.png#clientId=u961b4ed8-77cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=ud8559b07&name=image.png)


<a name="Gh7Iy"></a>

## 投票设置

选用可以支持选择类的组件，打开显示投票结果![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1651241090544-f6f0baa0-f094-47ae-a3e8-28e6c4f2f616.png#clientId=u961b4ed8-77cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=u596e8a7f&name=image.png&originHeight=937&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=115845&status=done&style=none&taskId=ud12b8553-ee61-4746-95ed-e21de59203d&title=&width=1920)表单发布之后，选择相关的投票项目，则可以进行显示![image.png](https://oss.tduckcloud.com/1651241150527-1574d1c3-c6ed-41e6-b833-6faaf3d801dd.png#clientId=u961b4ed8-77cd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=ue24f9cc5&name=image-20230119091711357.png)
<a name="IO7ID"></a>

## 表单设置

表单编辑菜单中，点击“设置”即可进入回收设置![](https://oss.tduckcloud.com/1642557750047-abb425fb-f288-4e83-a87f-c036a3d5f172.png)点击“提交设置”支持设定提交完成后提示图片，提交后提示的文字，以及提交后需要进行跳转的网页地址![](https://oss.tduckcloud.com/1642557750372-04bf3f63-677e-48bf-a5ae-f4da0b7d072d.png)点击“回收设置”支持设置仅在微信中填写![](https://oss.tduckcloud.com/1642557750685-1bbc932f-a8e0-4375-adbb-7209cded691b.png)定时收集表单设置，支持设置开始收集时间、结束收集时间，并支持自定义“未启用提示语/表单截止后的提醒语”![](https://oss.tduckcloud.com/1642557751118-fa94ebcd-65ee-4ce7-aad2-28afe855e667.png)定时定量收集表单，支持设置开始/结束收集时间，支持设置未启用/已结束的提示语，并支持能够设置表单反馈的收集数量和提示语![](https://oss.tduckcloud.com/1642557751694-5e9b4183-e196-416f-8226-9be48da566f7.png)开启“微信中填写”必须设置微信公众号参数（详见application-xxx.yml配置文件），支持设置每个微信只能填写1次，每人每天填写1次，以及提示文案；开启“记录微信个人信息”时会弹窗要求用户进行授权（此功能会受腾讯新用户隐私规则限制）![](https://oss.tduckcloud.com/1642557752167-e55390bc-51a8-42fd-bdb4-341c0022582e.png)支持设置回收提醒，当用户填写后发送邮件/微信公众号提醒信息到指定用户，在微信公众号接收通知时必须要关注公众号并且完成通知订阅![](https://oss.tduckcloud.com/1642557752533-439a96e2-cb8a-4d99-a9f4-68cc61333a0f.png)支持设置分享样式，需要配置微信公众号后台中的js安全域名，才能生成预览![](https://oss.tduckcloud.com/1642557753193-5d5bbf37-78dd-4210-addc-b94390d8a7f3.png)
<a name="vcmFp"></a>

## 指定成员发布/公开发布

<a name="duPJB"></a>

### 指定成员发布

点击“发布”进入发布设置![](https://oss.tduckcloud.com/1642557753561-8b3e73c3-2014-400e-a134-94817bbf2cc5.png)
<a name="mK0Wl"></a>

### 创建权限组

点击“指定成员发布”添加权限组，输入权限组名称，以及备注信息![](https://oss.tduckcloud.com/1642557753896-2f7ff275-59a0-4df4-9871-639e4580af55.png)点击“按钮权限”此处勾选的按钮为该权限组内成员登录后台，在数据栏目能够操作的按钮![](https://oss.tduckcloud.com/1642557754414-76d5e70f-ea0d-41d8-a856-1298f45bb76c.png)点击字段权限，支持设置字段权限，控制该权限组的用户能否查看/编辑表单相关组件![](https://oss.tduckcloud.com/1642557754701-d05f5085-393a-4b3d-975c-a126aa0670c6.png)点击数据权限，支持设置该权限组仅能查看到相关值的反馈数据，如图：按照此配置只能查看远工类型等于临时的反馈数据，以此类推。![](https://oss.tduckcloud.com/1642557755276-c2190899-dfc7-4516-85a4-5f63f86c0945.png)
<a name="Qpbfg"></a>

### 分配权限

点击确定后，点击分配权限，设置生效的用户组![](https://oss.tduckcloud.com/1642557755855-cca7906b-b9a7-4f00-874e-6d444c19fe7d.png)![](https://oss.tduckcloud.com/1642557756320-6b53c70b-7a83-4b69-915c-99241c14cce2.png)![](https://oss.tduckcloud.com/1642557756703-2955ba91-d2d0-4731-933d-7b0805faf10c.png)
<a name="f6iD6"></a>

### 成员登录管理表单

完成设置后，点击生成的链接，使用指定权限组的登录后即可进行填写或左上角选择权限组![](https://oss.tduckcloud.com/1642557757066-bdfa3039-98f6-41f4-9dcb-4335124eb5d9.png)
<a name="O1PrO"></a>

### 公开发布

公开发布，点开关，复制链接即可![](https://oss.tduckcloud.com/1642557757788-195da18f-b5f9-4a50-9321-99273cd9550b.png)
<a name="igODf"></a>

## 公开查询

<a name="YM0R9"></a>

### 开启公开查询

点击如图按钮，开启公开查询![image.png](https://oss.tduckcloud.com/1648731278984-23b11085-2f61-4959-9706-d3cdf2a73d33.png#clientId=u9dc48816-ab32-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=uf938283f&name=image.png)
<a name="C6fcc"></a>

### 设置查询条件

点击下拉框选择需要设置查的询条件和展示字段![image.png](https://oss.tduckcloud.com/1648731320692-7bb19a0e-8c1f-4744-9ae9-786b9f1bdd07.png#clientId=u9dc48816-ab32-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=u50d6736c&name=image.png)
<a name="wQGj9"></a>

### 开始公开查询

打开公开查询链接，输入查询条件即可完成查询（多用于信息提交后的公开数据查询）![image.png](https://oss.tduckcloud.com/1648731910495-1b542608-f9d1-4281-8c88-d44f970af0ce.png#clientId=u9dc48816-ab32-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=478&id=u4f2c7c31&name=image.png)
<a name="dtIhK"></a>

## 回复表单

<a name="z5wsm"></a>

### 开启回复公开查询

![image.png](https://oss.tduckcloud.com/1648732317977-c869e7bf-6989-47b4-a269-88466f06c3ac.png#clientId=u9dc48816-ab32-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=484&id=u3aaed948&name=image.png)
<a name="S4bbd"></a>

### 表单管理员回复

点击数据收集列表，选择某行数据，点击回复按钮![image.png](https://oss.tduckcloud.com/1648732422379-26af78f8-b030-4cdc-8b3e-d42b323879c0.png#clientId=u9dc48816-ab32-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=u260c45ae&name=image.png)输入回复内容，点击回复![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1648732514614-979709fc-5a9c-4b73-894f-cf919dbc717c.png#clientId=u9dc48816-ab32-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=udc8c79e8&name=image.png&originHeight=937&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58657&status=done&style=none&taskId=ue3a40454-080f-48ab-8214-ef8429b27ef&title=&width=1920)
<a name="lfdMK"></a>

### 用户查询回复内容

在公开查询界面点击回复按钮![image.png](https://oss.tduckcloud.com/1648732588541-18ecb400-e84c-4ad6-b373-0f7c6a763724.png#clientId=u9dc48816-ab32-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=483&id=ud8f6bf88&name=image.png)![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1648732719436-2dd54e4a-9a3f-4663-b342-6b384b169c47.png#clientId=u9dc48816-ab32-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=937&id=u5e993735&name=image.png&originHeight=937&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=40398&status=done&style=none&taskId=u358bb91e-dbf2-4090-91d1-3d53ea3937b&title=&width=1920)
<a name="jDwer"></a>

## 反馈数据

<a name="SLZhD"></a>

### 查看数据

点击数据，进入数据查看，支持在后台进行数据添加，如图点击添加![](https://oss.tduckcloud.com/1642557758129-b8ef398f-e107-47f4-a37f-e7f8882285b8.png)
<a name="EFu3M"></a>

### 高级搜索

点击查询进入结构化筛选，支持查询每一个组件的值![](https://oss.tduckcloud.com/1642557758519-b6ff7f64-7ed7-48ea-8c8e-ddc4bb6bc4c9.png)点击某行数据，可进行修改![](https://oss.tduckcloud.com/1642557759034-58589309-b081-47f8-a5cd-79665d24c279.png)
<a name="IB9JA"></a>

### 数据导入

点击点入，支持使用Excel批量导入数据，可下载Excel模板![](https://oss.tduckcloud.com/1642557759647-f45c9d82-375b-42e4-979a-52b14a4a8f13.png)
<a name="YaPy4"></a>

### 附件导出

点击导出附件，待任务处理完成后，支持导出表单收集中的附件![](https://oss.tduckcloud.com/1642557760092-24720250-ece4-4016-b84e-ad4d0d1fa9a5.png)
<a name="bWt9V"></a>

### 表格导出

点击导出图标，支持自定义文件名字、导出字段、数据范围、文件类型![](https://oss.tduckcloud.com/1642557760557-97505ade-620d-4b1e-8f87-1f3029e91906.png)
<a name="uyJBv"></a>

## 图表统计

点击统计支持查看回收概况，图表统计目前支持选择题型的统计![](https://oss.tduckcloud.com/1642557761128-d36fbe7a-b310-4c9d-8e63-f9cf8ba45ad0.png)
<a name="sgMY0"></a>

## 主题管理

点击主题模板，支持设置模板分类![](https://oss.tduckcloud.com/1642557761708-f4d4786f-5dd5-453c-8280-76b1e6eaf8f8.png)点击主题列表，支持新增主题模板，该模板将在表单编辑-外观中展示![](https://oss.tduckcloud.com/1642557762180-d656c18a-fdf5-47a1-99cb-5089bcdb12f7.png)添加主题主题支持自定义头部图像和颜色![](https://oss.tduckcloud.com/1642557762630-4b1c47fa-4a5c-44d0-9459-581153dc2d43.png)
<a name="ls24t"></a>

## 系统管理

<a name="WvAY9"></a>

### 用户管理

用户管理支持添加用户，修改组织机构以及控制用户状态![](https://oss.tduckcloud.com/1642557763221-c0cb5538-23b3-48b7-bf2d-af050fcb6826.png)
<a name="rYKep"></a>

### 角色管理

点击角色管理，支持新增修改删除角色，并能够设置角色的数据权限，控制用户数据![](https://oss.tduckcloud.com/1642557763686-f0893975-4cde-4aa8-99a2-611a3e6a0e0f.png)
<a name="yleOw"></a>

### 部门管理

支持自定义组织架构![](https://oss.tduckcloud.com/1642557764389-97617bca-e41a-42d4-b3f5-09388334d440.png)
<a name="ak8yN"></a>

### 待办事项

![](https://oss.tduckcloud.com/1642557764786-3ccfc8f9-1995-4ef7-8433-b81b922625ff.png)![](https://oss.tduckcloud.com/1642557765256-c05cbec0-60d5-4ff3-8d76-c09d75fbcb96.png)选择待办事项，点击处理，处理界面支持流程通过/驳回等操作
<a name="OKEYR"></a>

## 我的流程

![](https://oss.tduckcloud.com/1642557765981-8dee1f02-c7c0-4b45-9e24-b33b490db3cf.png)

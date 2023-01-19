# 如何使用函数计算

<a name="VGZ8m"></a>

# 效果演示

函数计算组件可以根据表单中创建的字段值，通过excel一般都公式自动计算出来某个数值、逻辑判断，从而提升已填写效率以及数据准确性；公式大全：[Excel 函数](https://support.microsoft.com/zh-cn/office/excel-%E5%87%BD%E6%95%B0-%E6%8C%89%E7%B1%BB%E5%88%AB%E5%88%97%E5%87%BA-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb)

[视频教程 >> 点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV16B4y157EA)

## 函数计算常用公式：

<a name="g1yPh"></a>

### 1.根据身份证号码计算年龄

> **YEAR**(**TODAY**())-**MID**(**数据值**,7,4)

![Kapture 2022-08-12 at 19.51.07.gif](https://oss.tduckcloud.com/1660305137457-3dcf301e-0417-4096-936f-e8ddc1827581.gif)
<a name="yoKPj"></a>

### 2.根据身份证计算出生日期

> **CONCATENATE**(**MID**(**数据值**,7,4),"/",**MID**(**数据值**,11,2),"/",**MID**(**数据值**,13,2))

![Kapture 2022-08-12 at 20.02.32.gif](https://oss.tduckcloud.com/1660305781159-6d1664f7-086d-4cf4-ac40-50527f3c9ecb.gif)


### 3.根据身高体重计算BMI值

> **体重值**/**POWER**(**身高值**/100, 2)

![Kapture 2022-08-12 at 20.08.18.gif](https://oss.tduckcloud.com/1660306122185-7c485f19-14ad-4128-849a-a791de88529a.gif)
<a name="J7JvC"></a>

### 4.计算距离未来某个日期还有几个工作日

> ** NETWORKDAYS**(** TODAY**(),**时间日期**)

<a name="JAUq7"></a>

### ![Kapture 2022-08-13 at 14.28.03.gif](https://oss.tduckcloud.com/1660372158133-857067bd-2ed2-4037-97af-f0fbec156610.gif)5.根据选项计算分数总和

> **SUM**(选项一,选项二)

![Kapture 2022-10-28 at 16.33.35.gif](https://oss.tduckcloud.com/1666946039943-9fca95ef-8489-4a5b-be27-c96e4244096f.gif)

**更多使用场景欢迎补充！😁**

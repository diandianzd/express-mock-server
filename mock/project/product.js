const Mock = require("mockjs");
module.exports = [
  {
    url: "/product/myBalance/getDetail",
    type: "get",
    response: (_) => {
      return {
        code: "1",
        content: {
          balance: 0,
          cardAmount: 0,
          couponAmount: 0,
          point: 3000,
        },
        message: "Operation is Successful",
        success: true,
      };
    },
  },
  {
    url: "/product/product/productCar/getProductCarList",
    type: "get",
    response: (_) => {
      return {
        code: "1",
        content: {
          productCarOrgList: [
            {
              created: "2021-04-23 11:51:21",
              distributionWayList: ["1", "3"],
              isInDelivery: "1",
              merchantId: "1347730935485042689",
              orgId: "92",
              orgName: "Jeffrey test",
              products: [
                {
                  compareAtPrice: 0.0,
                  cost: "0.02",
                  created: "2021-04-23 11:51:21",
                  deliveryStatus: 1,
                  distributionWayList: ["1"],
                  id: "1385441136027635714",
                  inventoryQuantity: "999",
                  num: 1,
                  optionValue: '{"尺寸": "2米", "颜色": "白"}',
                  orgName: "Jeffrey test",
                  price: "0.02",
                  productReleaseId: "1347803606587543553",
                  productReleaseImg:
                    "/ht-fine-produt/20210109/bg-1610175638673-rc-upload-1610175456448-9.jpeg",
                  productReleaseTitle: "苹果taye-c高仿数据线",
                  productVariantReleaseId: "1347803607367684097",
                  type: 1,
                },
                {
                  compareAtPrice: 0.0,
                  cost: "1000.00",
                  created: "2021-04-23 11:24:05",
                  deliveryStatus: 1,
                  distributionWayList: ["1", "3"],
                  id: "1385434275014512641",
                  inventoryQuantity: "999",
                  num: 3,
                  optionValue: '{"尺寸": "4.7", "颜色": "红色"}',
                  orgName: "Jeffrey test",
                  price: "1000.00",
                  productReleaseId: "1347805470498492417",
                  productReleaseImg:
                    "/ht-fine-produt/20210109/bg-1610175165105-rc-upload-1610173091875-6.jpeg",
                  productReleaseTitle: "iphone8",
                  productVariantReleaseId: "1347805470674653185",
                  type: 1,
                },
              ],
              type: "1",
            },
          ],
          stockLimitList: [],
        },
        message: "Operation is Successful",
        success: true,
      };
    },
  },
];

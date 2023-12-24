export const handler = async (event) => {
  
    var cid =  event['queryStringParameters']['customerId']
    
    console.log("function start!!!!");
    console.log("顧客IDは（" + cid + "）で呼ばれました。");
    
    var notifications = [
        {
            "notificationId": "0002",
            "date": "2023/11/21",
            "title": "トランクルーム CUBE 秋葉原店 2024/01 ご請求確定のお知らせ",
            "content": "顧客IDは（" + cid + "）で呼ばれました。",
            "hasOpened": true
        },
        {
            "notificationId": "0001",
            "date": "2023/11/20",
            "title": "トランクルーム CUBE 秋葉原店 ご利用開始 顧客IDは（" + cid + "）で呼ばれました。",
            "content": "...",
            "hasOpened": true
        },
    ];
  
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify(notifications),
    };
    return response;
  };
  
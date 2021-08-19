

const REALITY_URL = '';     //鐪熷疄鍩熷悕鍦板潃
 
 
 
let GetTaskServerIP = 'http://47.115.28.209:3668'   //鐙珛鑾峰彇浠诲姟鍒楄〃锛屽簾寮�



 
let DonTaskServerIP = 'http://103.206.122.179:3663/'   //鎻愪氦浠诲姟鐨勬帴鍙�
 
let NginxApi = 'http://43.255.31.193:3668'   //璐熻浇鍧囪　API
let IMG_URL = 'http://103.206.122.244:86'     //缁熶竴鍥剧墖鍩熷悕 

 let BASE_URL =['http://103.206.122.179:8663'] 
let BASE_URL1 = 'http://43.255.31.193:3661'		//getOrder 鎺ヤ换鍔＄壒娈婅姹傚湴鍧€,涓撶敤鎺ュ崟鎺ュ彛
let IMG_UPLOAD = 'http://103.112.31.152:8665/'      //涓婁紶鍥剧墖浠ュ強鍥剧墖璇嗗埆鍦板潃,涓撶敤浼犲浘鎺ュ彛
let IS_NEED_PASS = true 							//鏄惁鍚姩瀵嗙爜鐧诲綍



const CDN_IMG = 'http://43.255.31.193:9660/'     //cdn缃戠粶鍥剧墖鍔犻€熷湴鍧€ 
const CODE_URL = 'http://154.204.42.237:9660/'  //浜岀淮鐮佸浘鐗囧煙鍚� 
 
const URL = {
  isNeedPass: IS_NEED_PASS,
  REALITY: REALITY_URL,
  BASE: BASE_URL,
  BASE1: BASE_URL1,
  GetOrderLZP: 'http://103.206.122.179:3662',
  IMG_URL,
  IMG_UPLOAD,
  CDN_IMG,
  CODE_URL,
  NginxApi,
  GetTaskServerIP,
  DonTaskServerIP,
}

window.JINGPING_URL = URL
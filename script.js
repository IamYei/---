const searchBox = document.getElementById('search-box');
const contactList = document.getElementById('contact-list');
const tabs = document.querySelectorAll('.tab');
const tabIndicator = document.querySelector('.tab-indicator');
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const closeModal = document.getElementById('close-modal');
const dontShowToday = document.getElementById('dont-show-today');

// 预设的联系人数据
const contacts = {
    preset: [
        { name: '不归', phone: '2324525202', status: '', qianming: '我爱你', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2324525202&spec=640&img_type=jpg', icon: 'images/IMG_9267.PNG' },
		{ name: '屿迁', phone: '321338240', status: '', qianming: '', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1643496673&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '屁屁', phone: '3538064796', status: '', qianming: '进预设看空间置顶＆相册+带截图找助手', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3538064796&spec=640&img_type=jpg', icon: 'images/vs.webp' },

		{ name: '77', phone: '2806924325', status: '', qianming: '非入驻用户', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2806924325&spec=640&img_type=jpg', icon: 'images/am.webp' },
        { name: '雨季恋', phone: '2739704631', status: '', qianming: '', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2739704651&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: '祁安', phone: '3523692951', status: '', qianming: '都给我打钱', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3523692951&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '迟子CHIZ', phone: '2826978858', status: '', qianming: '', avatar: 'touxiang/chizi.png', icon: 'images/am.webp' },
		{ name: '小埋', phone: '227425229', status: '', qianming: '抖音XiaoMai.ovo  预设预览看空间相册', avatar: 'touxiang/xiaomai.jpg', icon: 'images/am.webp' },
		{ name: '付识', phone: '1368767750', status: '', qianming: '给我打钱', avatar: 'touxiang/fushi.jpg', icon: 'images/am.webp' },
		{ name: '内德', phone: '212522032', status: '', qianming: '白菜的小众预设', avatar: 'touxiang/neide.jpg', icon: 'images/vs.webp' },
		{ name: '小栀', phone: '3425719240', status: '', qianming: '', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3425719240&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '花蚀/一时栖', phone: '2872056855', status: '', qianming: '德国 柏林', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2872056855&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '小明', phone: '2847346751', status: '', qianming: '做你们的OK绷', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2847346751&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '雾妄', phone: '1640135388', status: '', qianming: '我是雾妄', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1640135388&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '小青', phone: '3042765863', status: '', qianming: '教室到琴房的距离', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3042765863&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: '熙晨', phone: '1957035342', status: '', qianming: '我要圈钱嘻嘻', avatar: 'touxiang/xichen.png', icon: 'images/am.webp' },
		{ name: '平安', phone: '1977598359', status: '', qianming: ' ', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1977598359&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '烂耳', phone: '3647475862', status: '', qianming: '先看清我，再喜欢我。', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3647475862&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '佐時', phone: '1905473949', status: '', qianming: '业务问题8小h不回重➕。', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1905473949&spec=640&img_type=jpg', icon: 'images/am.webp'},
	        { name: '严辰', phone: '3815578127', status: '', qianming: '感谢单主爸爸', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3815578127&spec=640&img_type=jpg', icon: 'images/am.webp' },
	        { name: '雨墨', phone: '1901725419', status: '', qianming: '请看相册感谢', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1901725419&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: '舟砚听', phone: '1991565083', status: '', qianming: '加了lx说话喵', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1991565083&spec=640&img_type=jpg', icon: 'images/am.webp' },
        { name: '小伍', phone: '2189288639', status: '', qianming: '没回就是不在业务详细和skm在空间置顶', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2189288639&spec=640&img_type=jpg', icon: 'images/vs.webp' },
        { name: '汀', phone: '3550788151', status: '', qianming: '风格拉镜预设 人好说话！', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3550788151&spec=640&img_type=jpg', icon: 'images/vs.webp' },
        { name: '雨悸', phone: '3061128961', status: '', qianming: '预览看相册 一般在线', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3061128961&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '小玟', phone: '3590704419', status: '', qianming: '只想搞钱', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3590704419&spec=640&img_type=jpg', icon: 'images/am.webp' },
{ name: '小媛', phone: '3551266261', status: '', qianming: '我想要钱', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3551266261&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: 'u郁小嘉', phone: '1208534657', status: '', qianming: 'skm和预览在QQ空间', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1208534657&spec=640&img_type=jpg', icon: 'images/am.webp' },
{ name: '余烬', phone: '3416555947', status: '', qianming: '好说话 拒🕊️ 人在秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3416555947&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '向日葵', phone: '289204287', status: '', qianming: '出售ae教程 工程及调色预设 加好友备注来意', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=289204287&spec=640&img_type=jpg', icon: 'images/ae.svg' },
{ name: '小婷', phone: '2776136958', status: '', qianming: '想要钱', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2776136958&spec=640&img_type=jpg', icon: 'images/vs.webp' },
 { name: '9', phone: '1620973705', status: '', qianming: '买画质码dd', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1620973705&spec=640&img_type=jpg', icon: 'images/vs.webp' },
  { name: '溯溪', phone: '435657794', status: '', qianming: '预览请看相册 没回可以多发几条 人很好说话嘟', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=435657794&spec=640&img_type=jpg', icon: 'images/am.webp' },
  { name: '琼羽', phone: '103137393', status: '', qianming: '预览和注意事项私我 有事麻烦多催', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=103137393&spec=640&img_type=jpg', icon: 'images/vc.webp' },
  { name: '五四', phone: '1840622714', status: '', qianming: '只节假日在线，支持24小时没回d', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1840622714&spec=640&img_type=jpg', icon: 'images/vs.webp' },
   { name: '林清玄', phone: '3024756254', status: '', qianming: '猫', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3024756254&spec=640&img_type=jpg', icon: 'images/vs.webp' },
         { name: '小珺', phone: '1316608898 单次后期群：887391379', status: '', qianming: '主营ae后期/ae调色预设/素材 没回加🛰️：GuiJunOuO  人在秒回 预览在相册或211495384 ', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1316608898&spec=640&img_type=jpg', icon: 'images/ae.svg' },
{ name: '小妤', phone: '3541694328', status: '', qianming: '业务看空间相册，私信找我，很好说话的', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3541694328&spec=640&img_type=jpg', icon: 'images/am.webp' },  
	{ name: '故卿', phone: '3320882217', status: '', qianming: '24h在线 人很好说话 人在秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin= 3320882217&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '思谂', phone: '1196983276', status: '', qianming: '预览看相册，人好说话，非上学期间人在秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1196983276&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '思语', phone: '565600236', status: '', qianming: '我是人机 王者百星 前s8佣兵 cpdd', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=565600236&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '沈南之', phone: '241425569', status: '', qianming: '预览可看空间 态度好 不会套的可教', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=241425569&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '断句', phone: '3478944478', status: '', qianming: '预览私信 人好说话 看到秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3478944478&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '银冰', phone: '3646747252', status: '', qianming: '预设看相册保质量的', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3646747252&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '单曲', phone: '2604149787', status: '', qianming: '预设预览/价格表空间相册 人在秒回 备注来意 无来意婉拒', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2604149787&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '千代澈子', phone: '1270680696', status: '', qianming: '预览看相册 很好说话 在线秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1270680696&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '沈苡', phone: '2516931088', status: '', qianming: '预设看空间', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2516931088&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '显欲', phone: '2144373396', status: '', qianming: '业务预览相册 有需要进业务群878621895别私', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2144373396&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '泠香', phone: '957815728', status: '', qianming: '平时不秒回 加好友之后记得备注业务 代剪只接实战代 预设是牌子主页预设 价格私', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=957815728&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '小恩', phone: '2535341950', status: '', qianming: '浏览skm相册 直接付款发截图说进哪个群', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2535341950&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '兔子', phone: '2639100807', status: '', qianming: '🆚优质预设/代剪预览抖音搜索usAK1', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2639100807&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '柠柠', phone: '2268774325', status: '', qianming: '12h未回d 好说话 预览空间相册', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2268774325&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '小柏', phone: '2821686266', status: '', qianming: '预设预览在相册 代剪周末清，6小时以内出', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2821686266&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '别名海', phone: '703622848', status: '', qianming: '温柔转瞬即逝', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=703622848&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '仙桃', phone: '2056036178', status: '', qianming: '预览有100＋的单主返图 你的态度=我的态度 在线秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2056036178&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '小瀚', phone: '1263246220', status: '', qianming: '业务请看空间置顶说说', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1263246220&spec=640&img_type=jpg', icon: 'images/am.webp' },


	{ name: '久', phone: '3010507181', status: '', qianming: '无偿群可加我拉你进', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3010507181&spec=640&img_type=jpg', icon: 'images/am.webp' },       
 	{ name: '漓筱', phone: '1827611191', status: '', qianming: '工作日概率在线 休息日7.00-19.00在线', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1827611191&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '驰寂', phone: '3521793642', status: '', qianming: '加了说明原因', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3521793642&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '小驰', phone: '2981243494', status: '', qianming: '收款码空间 吞漏多d', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2981243494&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '感觉', phone: '3271170960', status: '', qianming: '工作日不在 进预设看空间 4h没回d skm相册', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3271170960&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: 'Dili', phone: '2025335244', status: '', qianming: '.', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2025335244&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: 'cc/水水', phone: '2494306244', status: '', qianming: '人在秒回 预览读kj相册/ 务必了解置顶明细', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2494306244&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '星河', phone: '912131133', status: '', qianming: '价格白菜 am预设浏览在空间相册', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=912131133&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '凉子', phone: '3398851134', status: '', qianming: '价格白菜 am预设浏览在空间相册', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3398851134&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '江棂蝶', phone: '3249125785', status: '', qianming: '预设和素材预览都在空间，预设1人3🥕 素材1人4🥕', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3249125785&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '小哀', phone: '3012499688', status: '', qianming: '预设群预览看相册，好说话，请放大心', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3012499688&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '沁宁', phone: '3349455896', status: '', qianming: '预览相册 在线秒回 人少自动加急', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3349455896&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: 'u郁小嘉', phone: '1208534657', status: '', qianming: '预设和skm都在群空间', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1208534657&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '十七', phone: '3123139983', status: '', qianming: '人在秒回 态度好 只接实战 风格 牌子同款', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3123139983&spec=640&img_type=jpg', icon: 'images/vs.webp' },
   ],
    later: [
               { name: '不归', phone: '2324525204', status: '',  avatar: 'touxiang/avatar.jpg', icon: 'images/IMG_9267.PNG' },
		{ name: '屿迁', phone: '321338240', status: '', qianming: '', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1643496673&spec=640&img_type=jpg', icon: 'images/ae.svg' },
		{ name: '安困', phone: '3222763127 业务群：531041353', status: '', qianming: '加上别不说话直接说来意 单次后期进群 私信不回 事妈🕊️勿扰', avatar: 'touxiang/ankun.png', icon: 'images/ae.svg' },
		{ name: '雨季恋', phone: '2739704631', status: '', qianming: '', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2739704651&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: '阿浅', phone: '1552738647 业务群：490159827', status: '', qianming: '主营aecc售卖和后期 单次后期进群 事妈鸽子勿扰', avatar: 'touxiang/aqian.jpg', icon: 'images/ae.svg' },
		{ name: '祁霜', phone: '2862601696', status: '', qianming: 'ae后期在线秒出 ', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2862601696&spec=640&img_type=jpg', icon: 'images/ae.svg' },
		{ name: '初晴', phone: '3810881489', status: '', qianming: '妹子们求支持', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3810881489&spec=640&img_type=jpg', icon: 'images/nv.webp' },
		{ name: '龙崎', phone: '3565795175', status: '', qianming: '非入驻用户', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3565795175&spec=640&img_type=jpg', icon: 'images/ae.svg' },
	        { name: '花蚀/一时栖', phone: '2872056855', status: '', qianming: '德国 柏林', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2872056855&spec=640&img_type=jpg', icon: 'images/nv.webp' },
		{ name: '白粥', phone: '3558834527', status: '', qianming: '非入驻用户', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3558834527&spec=640&img_type=jpg', icon: 'images/ae.svg' },
		 { name: '小伍', phone: '2189288639', status: '', qianming: '没回就是不在业务详细和skm在空间置顶', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2189288639&spec=640&img_type=jpg', icon: 'images/ae.svg' },
         { name: '谢听', phone: '3098229072', status: '', qianming: '人在秒出 很好说话 预览空间', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3098229072&spec=640&img_type=jpg', icon: 'images/ae.svg' },
        { name: '蓝蓝', phone: '2738501160', status: '', qianming: '预览看空间相册 欢迎光临', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2738501160&spec=640&img_type=jpg', icon: 'images/vs.webp' },
        { name: '罗曼', phone: '330586880', status: '', qianming: '后期人在秒出单次2不收永ts100➕', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=330586880&spec=640&img_type=jpg', icon: 'images/ae.svg' },
        { name: '小珺', phone: '1316608898 单次后期群：887391379', status: '', qianming: '主营ae后期/ae调色预设/素材 没回加🛰️：GuiJunOuO  人在秒回 预览在相册或211495384 ', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1316608898&spec=640&img_type=jpg', icon: 'images/ae.svg' },
   { name: '向日葵', phone: '289204287', status: '', qianming: '出售ae教程 工程及调色预设 加好友备注来意', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=289204287&spec=640&img_type=jpg', icon: 'images/ae.svg' },
 { name: '小汝', phone: '3317543221', status: '', qianming: '汝后期 2h每回重d 工作时间：早8-晚2', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3317543221&spec=640&img_type=jpg', icon: 'images/ae.svg' },
{ name: '小沐', phone: '235206958', status: '', qianming: '很好说话 人在秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=235206958&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '阿延', phone: '2549728399', status: '', qianming: '预览可以看相册！性格很好', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2549728399&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '小灵', phone: '2549617448', status: '', qianming: '人全天几乎都在 好说话', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2549617448&spec=640&img_type=jpg', icon: 'images/nv.webp' },  
 { name: '小璃', phone: '2661085320', status: '', qianming: '后期无偿，不定时晚上加', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2661085320&spec=640&img_type=jpg', icon: 'images/ae.svg' } ,
 { "name": "故卿", "phone": "3320882217", "status": "", "qianming": "24h在线 人很好说话 人在秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=3320882217&spec=640&img_type=jpg", "icon": "images/ae.svg" },
    { "name": "思语", "phone": "565600236", "status": "", "qianming": "我是人机 王者百星 前s8佣兵 cpdd", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=565600236&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "俞球", "phone": "1544069801", "status": "", "qianming": "后期人在就加，12h不回默认不在", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=1544069801&spec=640&img_type=jpg", "icon": "images/ae.svg" },
    { "name": "小琪回头我在/小敏", "phone": "241585787", "status": "", "qianming": "发誓要赚一百万", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=241585787&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "仇音", "phone": "3764713675", "status": "", "qianming": "预览相册欢迎宝宝", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=3764713675&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "陈亿", "phone": "2900096157", "status": "", "qianming": "ae后期人在秒出", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2900096157&spec=640&img_type=jpg", "icon": "images/ae.svg" },
    { "name": "阿屿", "phone": "2684527688", "status": "", "qianming": "代剪质量看空间 人在秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2684527688&spec=640&img_type=jpg", "icon": "images/nv.webp" },
	{ name: '决缘', phone: '2682059231', status: '', qianming: '预览相册', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2682059231&spec=640&img_type=jpg', icon: 'images/ae.svg' },

	{ name: 'yy', phone: '486965758', status: '', qianming: 'ts多多 预览群相册 人在速出！', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=486965758&spec=640&img_type=jpg', icon: 'images/ae.svg' },

	{ name: '秋时', phone: '536998051', status: '', qianming: '代剪定制预设dd 鸽子勿扰', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=536998051&spec=640&img_type=jpg', icon: 'images/ae.svg' },

	{ name: '十七', phone: '3123139983', status: '', qianming: '人在秒回 态度好 只接实战 风格 牌子同款', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3123139983&spec=640&img_type=jpg', icon: 'images/vs.webp' },


    ],
 
    edit: [
       { name: '不归', phone: '2324525204', status: '', avatar: 'touxiang/avatar.jpg', icon: 'images/IMG_9267.PNG' },
         { name: '蛇系', phone: '2872063280', status: '', qianming: 'vs代剪找我代剪送片送自录',  avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2872063280&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: '泣', phone: '3323440060', status: '',  qianming: '励志圈钱',  avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3323440060&spec=640&img_type=jpg', icon: 'images/vs.webp' },
	    { name: '陆续', phone: '735762423', status: '',  qianming: '纯凑热闹',  avatar: 'touxiang/chuncourenao.jpg', icon: 'images/am.webp' },
		{ name: '季冬谣', phone: '2435393267', status: '',  qianming: '主剪王者第五 动漫也接 节假日外不接',  avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2435393267&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '雨季恋', phone: '2739704631', status: '', qianming: '', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2739704651&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: '小栀', phone: '3425719240', status: '', qianming: '', avatar: 'touxiang/xiaozhi.jpg', icon: 'images/am.webp' },
		{ name: '花蚀/一时栖', phone: '2872056855', status: '', qianming: '德国 柏林', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2872056855&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '写篇诗', phone: 'likesleep93', status: '', qianming: ' 加上直奔主题 最快1小时内出单', avatar: 'touxiang/xiepianshi.jpg', icon: 'images/am.webp' },
		{ name: '小依', phone: '1182896808', status: '', qianming: '祝好', avatar: 'touxiang/xiaoyi.png', icon: 'images/vs.webp' },
		{ name: '再等冬天', phone: '2801637356', status: '', qianming: '非入驻用户', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2801637356&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: 'u郁小嘉', phone: '1208534657', status: '', qianming: '非入驻用户', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1208534657&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '哎，富贵', phone: '3521007131', status: '', qianming: '非入驻用户', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3521007131&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: '夏与誠', phone: '2249867794', status: '', qianming: '非入驻用户', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2249867794&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		
		{ name: '小青', phone: '3042765863', status: '', qianming: '教室到琴房的距离', avatar: 'touxiang/xiaoqing.png', icon: 'images/vs.webp' },
		{ name: '猫炭/毛毯', phone: '3345658781', status: '', qianming: '圈如钱', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3345658781&spec=640&img_type=jpg', icon: 'images/vs.webp' },
		{ name: '熙晨', phone: '1957035342', status: '', qianming: '我要圈钱嘻嘻', avatar: 'touxiang/xichen.png', icon: 'images/am.webp' }, 
		{ name: '平安', phone: '1977598359', status: '', qianming: ' ', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1977598359&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: '铃木', phone: '3054791770', status: '', qianming: ' ', avatar: 'touxiang/lingmu.png', icon: 'images/vs.webp' },
		{ name: '烂耳', phone: '3647475862', status: '', qianming: '先看清我，再喜欢我。', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3647475862&spec=640&img_type=jpg', icon: 'images/am.webp' },
		{ name: 'K', phone: '2103375014', status: '', qianming: '态度好 全能 保质量宝宝', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2103375014&spec=640&img_type=jpg', icon: 'images/vs.webp' },
	        { name: '花蚀/一时栖', phone: '2872056855', status: '', qianming: '德国 柏林', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2872056855&spec=640&img_type=jpg', icon: 'images/am.webp' },
               
        { name: '繁绪', phone: '3357006446 ', status: '', qianming: '摆烂', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3357006446&spec=640&img_type=jpg', icon: 'images/vs.webp' },
        { name: '雨墨', phone: '1901725419', status: '', qianming: '请看相册感谢', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1901725419&spec=640&img_type=jpg', icon: 'images/vs.webp' },
                { name: '妁', phone: '2029113629', status: '', qianming: 'vs排版/画质都有均可查询', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2029113629&spec=640&img_type=jpg', icon: 'images/vs.webp' },
                { name: '雲伊', phone: '3669638730', status: '', qianming: '加好友之后先看朋友圈，同款直接发截图，虚拟交易概不退款', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3669638730&spec=640&img_type=jpg', icon: 'images/vs.webp' },
         	{ name: '舟砚听', phone: '1991565083', status: '', qianming: '加了lx说话喵', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1991565083&spec=640&img_type=jpg', icon: 'images/am.webp' },
            { name: '谢听', phone: '3098229072', status: '', qianming: '人在秒出 很好说话 预览空间', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3098229072&spec=640&img_type=jpg', icon: 'images/vs.webp' },
      { name: '蓝蓝', phone: '2738501160', status: '', qianming: '预览看空间相册 欢迎光临', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2738501160&spec=640&img_type=jpg', icon: 'images/vs.webp' },
      { name: '戚子', phone: '3325837342', status: '', qianming: '🥬速出代剪欢迎来月 人在秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3325837342&spec=640&img_type=jpg', icon: 'images/vs.webp' },
      { name: '弥音', phone: '236595954', status: '', qianming: '预览看相册 人在秒回/2h没回d 单子两周一清', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=236595954&spec=640&img_type=jpg', icon: 'images/vc.webp' },
      { name: '十四', phone: '2241537217', status: '', qianming: '预览相册主接风格', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2241537217&spec=640&img_type=jpg', icon: 'images/vs.webp' },
        { name: '小珺', phone: '1316608898 单次后期群：887391379', status: '', qianming: '主营ae后期/ae调色预设/素材 没回加🛰️：GuiJunOuO  人在秒回 预览在相册或211495384 ', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1316608898&spec=640&img_type=jpg', icon: 'images/vs.webp' },
      { name: '雨悸', phone: '3061128961', status: '', qianming: '预览看相册 一般在线', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3061128961&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '小玟', phone: '3590704419', status: '', qianming: '只想搞钱', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3590704419&spec=640&img_type=jpg', icon: 'images/vs.webp' }, 
 { name: '小媛', phone: '3551266261', status: '', qianming: '我想要钱', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3551266261&spec=640&img_type=jpg', icon: 'images/vs.webp' },
 { name: '余烬', phone: '3416555947', status: '', qianming: '好说话 拒🕊️ 人在秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3416555947&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '小楠', phone: '3258488840', status: '', qianming: '有要求一次性说完 好说话 非本人问题 不允更改', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3258488840&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '小婷', phone: '2776136958', status: '', qianming: '想要钱', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2776136958&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '林然', phone: '3278006934', status: '', qianming: '接光遇/王者代剪、调色', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3278006934&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '墨析', phone: '1270186167', status: '', qianming: '大众风格牌子都接 在线秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1270186167&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '时绪（yoki）', phone: '2673157889', status: '', qianming: '浏览看相册 人在秒回 更多看空间', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2673157889&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '京纡', phone: '3604763770', status: '', qianming: '价格阅览看相册 开学工作日不接单 24h内出', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3604763770&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '溯溪', phone: '435657794', status: '', qianming: '预览请看相册 没回可以多发几条 人很好说话嘟', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=435657794&spec=640&img_type=jpg', icon: 'images/am.webp' },
{ name: 'Hiiragi/柊', phone: '3557255704（助手号）2736014445（本人）', status: '', qianming: '入素材群找助手 代剪找本人 都很好说话 没回就是在睡觉 超36h没回请重发', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3557255704&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '9', phone: '1620973705', status: '', qianming: '买画质码dd', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1620973705&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '小沐', phone: '235206958', status: '', qianming: '很好说话 人在秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=235206958&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '阿延', phone: '2549728399', status: '', qianming: '预览可以看相册！性格很好', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2549728399&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '小灵', phone: '2549617448', status: '', qianming: '人全天几乎都在 好说话', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2549617448&spec=640&img_type=jpg', icon: 'images/am.webp' },
{ name: '冷水鱼', phone: '2657808408', status: '', qianming: '预览相册 脾气好 看到就回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2657808408&spec=640&img_type=jpg', icon: 'images/vs.webp' },
    { name: '十七初', phone: '2407915295', status: '', qianming: '人好说话 出单很慢 预览戳我', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2407915295&spec=640&img_type=jpg', icon: 'images/vs.webp' },
    { name: '喻眠', phone: '2076561686', status: '', qianming: '耽，第五，王者风格都会，包素材包后期，24h在线', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2076561686&spec=640&img_type=jpg', icon: 'images/vs.webp' },
    { name: '闻昭', phone: '2137852528', status: '', qianming: '预览看相册 在线秒回', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2137852528&spec=640&img_type=jpg', icon: 'images/vs.webp' },
    { name: '土鳖', phone: '2598921677', status: '', qianming: '预览看相册 你的态度=我的态度 假期一直在', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2598921677&spec=640&img_type=jpg', icon: 'images/am.webp' },
    { name: '林清玄', phone: '3024756254', status: '', qianming: '猫', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3024756254&spec=640&img_type=jpg', icon: 'images/vs.webp' },
{ name: '小妤', phone: '3541694328', status: '', qianming: '业务看空间相册，私信找我，很好说话的', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3541694328&spec=640&img_type=jpg', icon: 'images/am.webp' },  
    { "name": "思语", "phone": "565600236", "status": "", "qianming": "我是人机 王者百星 前s8佣兵 cpdd", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=565600236&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "六鱼", "phone": "3526761636", "status": "", "qianming": "暑假都在 质量看相册", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=3526761636&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "断句", "phone": "3478944478", "status": "", "qianming": "预览私信 人好说话 看到秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=3478944478&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "白筱", "phone": "2141731272", "status": "", "qianming": "质量看相册预览  有点自来熟、好说话  大部分时间都在线、随叫随到噢", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2141731272&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "银冰", "phone": "3646747252", "status": "", "qianming": "预设看相册保质量的", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=3646747252&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "单曲", "phone": "2604149787", "status": "", "qianming": "预设预览/价格表空间相册 人在秒回 备注来意 无来意婉拒", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2604149787&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "千代澈子", "phone": "1270680696", "status": "", "qianming": "预览看相册 很好说话 在线秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=1270680696&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "川决", "phone": "1047485946", "status": "", "qianming": "基本秒回 出单时间快12h内出", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=1047485946&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "小机", "phone": "1729658262", "status": "", "qianming": "假期一直在线", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=1729658262&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "小琪回头我在/小敏", "phone": "241585787", "status": "", "qianming": "发誓要赚一百万", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=241585787&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "小羽", "phone": "753383952", "status": "", "qianming": "很好说话 人在会秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=753383952&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "泠香", "phone": "957815728", "status": "", "qianming": "平时不秒回 加好友之后记得备注业务 代剪只接实战代 预设是牌子主页预设 价格私", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=957815728&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "历史系", "phone": "2559979833", "status": "", "qianming": "业务出很快！主水印牌子风格", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2559979833&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "小文", "phone": "2238821153", "status": "", "qianming": "前面加H为微信，人在秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2238821153&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "小笛", "phone": "2923657860", "status": "", "qianming": "预览空间 不接大众 只接风格和dj", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2923657860&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "兔子", "phone": "2639100807", "status": "", "qianming": "🆚优质预设/代剪预览抖音搜索usAK1", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2639100807&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "小琪", "phone": "2724490974", "status": "", "qianming": "预览相册 人在秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2724490974&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "许之允", "phone": "435657794", "status": "", "qianming": "预览请看相册 没回可以多发几条 人很好说话嘟", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=435657794&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "小凛", "phone": "2365822300", "status": "", "qianming": "全能代剪 加q看预览 脾气好好说话 不拖单 基本当天出", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2365822300&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "仇音", "phone": "3764713675", "status": "", "qianming": "预览相册欢迎宝宝", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=3764713675&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "雅婷", "phone": "172002201", "status": "", "qianming": "预览看空间相册/价格白菜", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=172002201&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "小柏", "phone": "2821686266", "status": "", "qianming": "预设预览在相册 代剪周末清，6小时以内出", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2821686266&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "小帅", "phone": "1550997095", "status": "", "qianming": "skm在空间相册代剪可催6小时内出", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=1550997095&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "林优", "phone": "2801595719", "status": "", "qianming": "代剪送水印", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2801595719&spec=640&img_type=jpg", "icon": "images/vs.webp"},
    { "name": "小仪", "phone": "2167858144", "status": "", "qianming": "接大众/风格 好说话 人在秒回ovo", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2167858144&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "别名海", "phone": "703622848", "status": "", "qianming": "温柔转瞬即逝", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=703622848&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "凌妤", "phone": "2812105952", "status": "", "qianming": "在线秒回 预览在动态营业", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2812105952&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "仙桃", "phone": "2056036178", "status": "", "qianming": "预览有100＋的单主返图 你的态度=我的态度 在线秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2056036178&spec=640&img_type=jpg", "icon": "images/am.webp" },
    { "name": "诉语", "phone": "732768240", "status": "", "qianming": "skm在相册 预览私信", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=732768240&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "老子踏马小婷", "phone": "3310692388", "status": "", "qianming": "加上别不说话 人在秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=3310692388&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "祁之", "phone": "289631233", "status": "", "qianming": "无", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=289631233&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "阿屿", "phone": "2684527688", "status": "", "qianming": "代剪质量看空间 人在秒回", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=2684527688&spec=640&img_type=jpg", "icon": "images/vs.webp" },
    { "name": "小妮", "phone": "1379249814", "status": "", "qianming": "无", "avatar": "http://q.qlogo.cn/headimg_dl?dst_uin=1379249814&spec=640&img_type=jpg", "icon": "images/vs.webp" },
	{ name: '决缘', phone: '2682059231', status: '', qianming: '预览相册', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2682059231&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '漓筱', phone: '1827611191', status: '', qianming: '工作日概率在线 休息日7.00-19.00在线', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1827611191&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '许瑞', phone: '3072725816', status: '', qianming: '质量在相册脾气好 人在秒回禁催单', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3072725816&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '驰寂', phone: '3521793642', status: '', qianming: '加了说明原因', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3521793642&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '泡菜鱼', phone: '3093236505', status: '', qianming: '🥬价 质量相册可查 好说话没事就秒', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3093236505&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '莫鱼', phone: '3050422094', status: '', qianming: '预览私/价格0.5r/s 擅长剪原神', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3050422094&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '沉诩/小旭', phone: '2231006648', status: '', qianming: '代剪接：热门同款预设  风格  牌子 dj  大众', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2231006648&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '祁清', phone: '2561290239', status: '', qianming: '仅寒暑假接，预览私我，不吃人', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2561290239&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '小哀', phone: '3012499688', status: '', qianming: '预设群预览看相册，好说话，请放大心', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3012499688&spec=640&img_type=jpg', icon: 'images/am.webp' },

	{ name: '秋时', phone: '536998051', status: '', qianming: '代剪定制预设dd 鸽子勿扰', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=536998051&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '沁宁', phone: '3349455896', status: '', qianming: '预览相册 在线秒回 人少自动加急', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3349455896&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '十七', phone: '3123139983', status: '', qianming: '人在秒回 态度好 只接实战 风格 牌子同款', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3123139983&spec=640&img_type=jpg', icon: 'images/vs.webp' },

	{ name: '初雪', phone: '3144697575', status: '', qianming: '正常情况下48h内出单 保质量 要看预览的私信', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3144697575&spec=640&img_type=jpg', icon: 'images/am.webp' },



         // 代剪联系人
    ],
 
    sucai: [
       { name: '不归', phone: '2324525204', status: '', avatar: 'touxiang/avatar.jpg', icon: 'images/IMG_9267.PNG' },
       { name: '阿延', phone: '2549728399', status: '', qianming: '预览可以看相册！性格很好', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2549728399&spec=640&img_type=jpg', icon: 'images/dwrg.png' },
          { name: '小珺', phone: '1316608898 单次后期群：887391379', status: '', qianming: '主营ae后期/ae调色预设/素材 没回加🛰️：GuiJunOuO  人在秒回 预览在相册或211495384 ', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1316608898&spec=640&img_type=jpg', icon: 'images/dwrg.png' },
	{ name: '岑与', phone: '2398380875', status: '', qianming: '素材无偿 预览私信', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2398380875&spec=640&img_type=jpg', icon: 'images/wzry.png' },

	{ name: 'Dili', phone: '2025335244', status: '', qianming: '.', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2025335244&spec=640&img_type=jpg', icon: 'images/dwrg.png' },

	{ name: '江棂蝶', phone: '3249125785', status: '', qianming: '预设和素材预览都在空间，预设1人3🥕 素材1人4🥕', avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3249125785&spec=640&img_type=jpg', icon: 'images/wzry.png' },
  
    ]
};

// 当前标签
let currentTab = 'preset';

// 初始化页面时显示所有联系人
window.onload = () => {
    renderContacts(contacts[currentTab]);
    positionTabIndicator();
};

// 渲染联系人列表
function renderContacts(contactsToRender) {
    contactList.innerHTML = '';
    contactsToRender.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item flex items-center p-4 border-b border-gray-300 cursor-pointer transition-colors duration-300 hover:bg-gray-100';
        contactItem.innerHTML = `
            <img src="${contact.avatar}" alt="头像" class="avatar w-10 h-10 rounded-full mr-4">
            <div class="name flex-1">${contact.name}</div>
            ${contact.icon ? `<img src="${contact.icon}" alt="图标" class="w-6 h-6 mr-4">` : ''}
            <div class="arrow text-xl">➡️</div>
        `;
        contactItem.addEventListener('click', () => {
            window.location.href = 'contact-details.html';
            sessionStorage.setItem('contact', JSON.stringify(contact));
        });
        contactList.appendChild(contactItem);
    });
}

// 搜索框输入事件
searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    const filteredContacts = contacts[currentTab].filter(contact =>
        contact.name.toLowerCase().includes(query)
    );
    renderContacts(filteredContacts);
    if (query === '') {
        renderContacts(contacts[currentTab]);
    }
});

// 标签切换事件
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
        currentTab = tab.id.replace('-tab', '');
        renderContacts(contacts[currentTab]);
        positionTabIndicator();
    });
});

// 设置标签指示器位置
function positionTabIndicator() {
    const activeTab = document.querySelector('.tab.active');
    tabIndicator.style.left = `${activeTab.offsetLeft + (activeTab.offsetWidth / 2) - 1}px`;
}

// 显示弹窗
function showModal() {
    modal.classList.remove('hidden');
    modalBackdrop.classList.remove('hidden');
}

// 关闭弹窗
function hideModal() {
    modal.classList.add('hidden');
    modalBackdrop.classList.add('hidden');
}

// 弹窗关闭按钮点击事件
closeModal.addEventListener('click', hideModal);
modalBackdrop.addEventListener('click', hideModal);

// 显示弹窗逻辑
window.addEventListener('load', () => {
    const dontShowTodayValue = localStorage.getItem('dontShowToday');
    const today = new Date().toLocaleDateString();
    if (dontShowTodayValue !== today) {
        showModal();
    }
});

// 设置“今日内不再显示该弹窗”
dontShowToday.addEventListener('change', (event) => {
    if (event.target.checked) {
        const today = new Date().toLocaleDateString();
        localStorage.setItem('dontShowToday', today);
    } else {
        localStorage.removeItem('dontShowToday');
    }
});
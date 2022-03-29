module.exports = {
	PID: 'A00', // 艺术馆

	NAV_COLOR: '#ffffff',
	NAV_BG: '#46624c',

	MEET_NAME: '预约',

	MENU_ITEM: ['首页', '预约日历', '我的'], // 第1,4,5菜单
 
	NEWS_CATE: '1=本馆资讯|leftbig,2=本馆概况|leftbig,3=馆藏精品|leftbig,4=展览展示|leftbig',
	MEET_TYPE: '1=入馆预约|leftbig2,2=活动讲座预约|leftbig3',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}
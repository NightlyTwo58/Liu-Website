import type { Field } from 'tinacms';

const englishTypes = [
	{ label: 'Research overview', value: 'research' },
	{ label: 'Selected papers', value: 'papers' },
	{ label: 'Selected courses', value: 'courses' },
	{ label: 'Student inquiries', value: 'students' },
	{ label: 'Updates and news', value: 'updates' },
	{ label: 'General text and links', value: 'text' },
];

const chineseTypes = [
	{ label: '研究概述', value: 'research' },
	{ label: '精选论文', value: 'papers' },
	{ label: '精选课程', value: 'courses' },
	{ label: '学生咨询', value: 'students' },
	{ label: '近期动态', value: 'updates' },
	{ label: '文字与链接', value: 'text' },
];

function aboutSectionsField(name: string, label: string, chinese = false): Field {
	return {
		name,
		label,
		type: 'object',
		list: true,
		description: chinese
			? '可添加、删除或拖动排序；每个区块内的条目也可独立增删。'
			: 'Add, remove, or reorder sections. Add or remove entries inside each section.',
		ui: { itemProps: (item) => ({ label: item.heading || item.sectionType || label }) },
		fields: [
			{
				name: 'sectionType',
				label: chinese ? '区块类型' : 'Section type',
				type: 'string',
				options: chinese ? chineseTypes : englishTypes,
				required: true,
			},
			{ name: 'heading', label: chinese ? '区块标题' : 'Section heading', type: 'string' },
			{
				name: 'paragraph',
				label: chinese ? '区块正文' : 'Section paragraph',
				type: 'string',
				ui: { component: 'textarea' },
			},
			{
				name: 'items',
				label: chinese ? '区块条目' : 'Section entries',
				type: 'object',
				list: true,
				ui: { itemProps: (item) => ({ label: item.title || item.meta || (chinese ? '新条目' : 'New entry') }) },
				fields: [
					{ name: 'title', label: chinese ? '条目标题' : 'Entry title', type: 'string' },
					{ name: 'meta', label: chinese ? '年份、期刊或说明' : 'Year, journal, or short label', type: 'string' },
					{ name: 'detail', label: chinese ? '条目说明' : 'Entry description', type: 'string', ui: { component: 'textarea' } },
					{ name: 'linkText', label: chinese ? '链接文字' : 'Link text', type: 'string' },
					{ name: 'link', label: chinese ? '链接地址' : 'Link URL', type: 'string' },
				],
			},
		],
	};
}

export const aboutSectionsFieldEn = aboutSectionsField('homeSections', 'About page sections (English)');
export const aboutSectionsFieldZh = aboutSectionsField('homeSectionsZh', '关于页面区块（中文）', true);

import type { Collection } from 'tinacms';
import { heroBlockSchema } from '../../src/components/blocks/hero.template';
import { featuresBlockSchema } from '../../src/components/blocks/features.template';
import { statsBlockSchema } from '../../src/components/blocks/stats.template';
import { ctaBlockSchema } from '../../src/components/blocks/cta.template';
import { testimonialBlockSchema } from '../../src/components/blocks/testimonial.template';
import { calloutBlockSchema } from '../../src/components/blocks/callout.template';
import { contentBlockSchema } from '../../src/components/blocks/content.template';
import { videoBlockSchema } from '../../src/components/blocks/video.template';
import { splitBlockSchema } from '../../src/components/blocks/split.template';

export const PageCollection: Collection = {
	name: 'page',
	label: 'Pages',
	path: 'src/content/page',
	format: 'mdx',
	ui: {
		router: ({ document }) => `/${document._sys.filename}`,
	},
	fields: [
		{
			name: 'seoTitle',
			label: 'Meta Title (SEO)',
			type: 'string',
			isTitle: true,
			required: true,
			description:
				"Shown in the browser tab and search results — not on the page itself. To change the heading visitors see at the top of the page, edit the Headline of the page's Hero block (if it has one) in Page Sections below.",
		},
		{
			name: 'pageType', label: 'Page Type', type: 'string',
			options: ['homepage', 'listing', 'cv'].map((value) => ({ label: value, value })),
		},
		{ name: 'title', label: 'Page Heading', type: 'string' },
		{ name: 'eyebrow', label: 'Section Label', type: 'string' },
		{ name: 'intro', label: 'Introduction', type: 'string', ui: { component: 'textarea' } },
		{
			name: 'profile', label: 'Homepage Profile', type: 'object',
			fields: [
				{ name: 'name', label: 'Professor Name', type: 'string' },
				{ name: 'department', label: 'Department and University', type: 'string' },
				{ name: 'role', label: 'Title / Appointment', type: 'string' },
				{ name: 'bio', label: 'Short Biography', type: 'string', ui: { component: 'textarea' } },
				{ name: 'portrait', label: 'Portrait', type: 'image' },
				{ name: 'email', label: 'Email', type: 'string' },
				{ name: 'office', label: 'Office', type: 'string' },
				{ name: 'hours', label: 'Office Hours', type: 'string' },
				{ name: 'phone', label: 'Phone', type: 'string' },
				{ name: 'address', label: 'Mailing Address', type: 'string', ui: { component: 'textarea' } },
				{ name: 'distinguishedTitle', label: 'Distinguished appointment', type: 'string' },
				{ name: 'institutionLine', label: 'School and college', type: 'string' },
				{ name: 'biography', label: 'Full biography', type: 'string', ui: { component: 'textarea' } },
				{ name: 'orcid', label: 'Verified ORCID URL', type: 'string' },
				{ name: 'profileLinks', label: 'Profile links', type: 'object', list: true, fields: [ { name: 'label', label: 'Label', type: 'string' }, { name: 'url', label: 'URL', type: 'string' } ] },
				{ name: 'roles', label: 'Current roles', type: 'string', list: true },
			],
		},
		{ name: 'researchSummary', label: 'Research Summary', type: 'string', ui: { component: 'textarea' } },
		{
			name: 'researchThemes', label: 'Research Themes', type: 'object', list: true,
			fields: [
				{ name: 'label', label: 'Label', type: 'string' },
				{ name: 'title', label: 'Theme', type: 'string' },
				{ name: 'detail', label: 'Description', type: 'string', ui: { component: 'textarea' } },
			],
		},
		{
			name: 'updates', label: 'Updates & Travel', type: 'object', list: true,
			description: 'Short dated announcements, including upcoming conference travel. Shown on About pages.',
			fields: [ { name: 'date', label: 'Date', type: 'string' }, { name: 'text', label: 'Update', type: 'string' } ],
		},
		{ name: 'cvPdf', label: 'CV PDF URL', type: 'string' },
		{ name: 'cvUpdated', label: 'CV Updated', type: 'string' },
		{ name: 'statementTitle', label: 'Statement Title', type: 'string' },
		{ name: 'statementText', label: 'Statement Summary', type: 'string', ui: { component: 'textarea' } },
		{ name: 'statementUrl', label: 'Statement URL', type: 'string' },
		{
			name: 'items', label: 'Page Items', type: 'object', list: true,
			fields: [
				{ name: 'label', label: 'Label', type: 'string' },
				{ name: 'title', label: 'Title', type: 'string' },
				{ name: 'detail', label: 'Description', type: 'string', ui: { component: 'textarea' } },
				{ name: 'linkText', label: 'Link Label', type: 'string' },
				{ name: 'link', label: 'Link URL', type: 'string' },
			],
		},
		{
			type: 'object',
			list: true,
			name: 'blocks',
			label: 'Page Sections',
			description:
				"The visible content of the page. When the page starts with a Hero block, its Headline is the main on-page heading — edit that to change what visitors see at the top.",
			ui: { visualSelector: true },
			templates: [
				heroBlockSchema,
				calloutBlockSchema,
				featuresBlockSchema,
				statsBlockSchema,
				ctaBlockSchema,
				contentBlockSchema,
				testimonialBlockSchema,
				videoBlockSchema,
				splitBlockSchema,
			],
		},
	],
};

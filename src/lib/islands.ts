/**
 * Island registry — single source of truth for every editable region the
 * bridge can refresh. Each entry maps a URL slug under `/tina-island/...`
 * to a fetcher + component + wrapper. Adding a new editable region = adding
 * one entry here; the dynamic `[name].ts` route picks it up automatically.
 */
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';

import type { BlogQuery, ConfigQuery, PageQuery, PersonQuery, PublicationQuery } from '../../tina/__generated__/types';
import type { CmsBlog, CmsConfig, CmsPage, CmsPerson, CmsPublication } from './data';
import PageBody from '../components/islands/PageBody.astro';
import BlogBody from '../components/islands/BlogBody.astro';
import PersonBody from '../components/islands/PersonBody.astro';
import PublicationBody from '../components/islands/PublicationBody.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { getBlog, getConfig, getPage, getPerson, getPublication } from './data';

export const islands: IslandRegistry = {
	page: {
		fetch: (_request, params) => getPage(params.get('slug') ?? 'home'),
		component: PageBody,
		wrapper: { tag: 'div' },
		propsFromData: (data) => ({
			data: (data as QueryResult<PageQuery>).data?.page as CmsPage | undefined,
		}),
	},
	blog: {
		fetch: (_request, params) => getBlog(params.get('slug') ?? ''),
		component: BlogBody,
		wrapper: { tag: 'article' },
		propsFromData: (data) => ({
			data: (data as QueryResult<BlogQuery>).data?.blog as CmsBlog | undefined,
		}),
	},
	person: {
		fetch: (_request, params) => getPerson(params.get('slug') ?? ''),
		component: PersonBody,
		wrapper: { tag: 'article' },
		propsFromData: (data) => ({ data: (data as QueryResult<PersonQuery>).data?.person as CmsPerson | undefined }),
	},
	publication: {
		fetch: (_request, params) => getPublication(params.get('slug') ?? ''),
		component: PublicationBody,
		wrapper: { tag: 'article' },
		propsFromData: (data) => ({ data: (data as QueryResult<PublicationQuery>).data?.publication as CmsPublication | undefined }),
	},
	global: {
		fetch: () => getConfig(),
		component: Header,
		wrapper: { tag: 'div' },
		propsFromData: (data) => ({
			config: (data as QueryResult<ConfigQuery>).data?.config as CmsConfig | undefined,
		}),
	},
	'global-footer': {
		fetch: () => getConfig(),
		component: Footer,
		wrapper: { tag: 'div' },
		propsFromData: (data) => ({
			config: (data as QueryResult<ConfigQuery>).data?.config as CmsConfig | undefined,
		}),
	},
};

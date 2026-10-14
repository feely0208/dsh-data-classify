import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'data-classify',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/data-classify.md',
  binFile: 'bin/cli.mjs',
  description: '查数据有没有分级标注与清单 —— 数据安全法 21 条要求建立分类分级制度',
  whenToUse: 'TODO：写清什么时候该用（用户会说的话也列上）',
});

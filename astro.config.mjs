// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import swup from '@swup/astro';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        swup({
            theme: false, //デフォルトで用意されている遷移アニメーションは使用しない
            smoothScrolling: false, //スムーズスクロール無効化
            updateBodyClass: true, //ページ遷移時にbody要素のクラス名を更新する
            reloadScripts: false //遷移後にスクリプトを再読み込みさせない
        })],
});
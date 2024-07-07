import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';
import Head from 'next/head';
import rehber from 'images/rehber.png';

const config: DocsThemeConfig = {
  logo: <Image src={rehber} alt="" />,

  docsRepositoryBase: 'https://github.com/shuding/-docs-template',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://tr.ve3.plus/" target="_blank">
          VE3.Plus
        </a>
      </span>
    )
  },
  toc: {
    title: "İçindekiler",
    // Diğer TOC bileşeni özellikleri...
  },
  editLink: {
    component: null,
    // Diğer TOC bileşeni özellikleri...
  },
  feedback: {
    content: "Bir sorun mu var? Bizimle paylaş",
    useLink: () => "https://forum.ve3.plus/t/q-a"
    // Diğer TOC bileşeni özellikleri...
  },
  search: {
    placeholder: "Rehber'de Ara"
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Rehber | VE3.Plus'
    }
  },
  gitTimestamp: null,

  primaryHue: 170,

  head: (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Rehber | VE3.Plus" />
        <meta property="og:description" content="Rakipsiz video düzenleme otomasyonu VE3.Plus için oluşturulmuş kullanıcı rehberi." />
      </Head>
    </>
  )
}

export default config;

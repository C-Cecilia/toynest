export const IMGS = {
  heroBg:    '/imgs/home-bg.jpg',
  storyBg:   '/imgs/home-bg2.jpg',
  childImg:  '/imgs/child.jpeg',
  plushToy:  '/imgs/plush-toy.png',
  woodenToy: '/imgs/wooden-toy.png',
  ig: [
    '/imgs/instagram-01.jpg',
    '/imgs/instagram-02.jpg',
    '/imgs/instagram-03.jpg',
    '/imgs/instagram-04.jpg',
    '/imgs/instagram-05.jpg',
    '/imgs/instagram-06.jpg',
  ],
  icons: {
    twitter:    '/imgs/icon/twitter-icon-white.svg',
    facebook:   '/imgs/icon/facebook-icon-white.svg',
    instagram:  '/imgs/icon/instagram-icon-white.svg',
    pinterest:  '/imgs/icon/pinterest-icon-white.svg',
    youtube:    '/imgs/icon/youtube-icon.svg',
    cart:       '/imgs/icon/cart-icon.svg',
    paperplane: '/imgs/icon/paperplane-icon-white.svg',
    arrowRight: '/imgs/icon/arrow-right-mini-icon.svg',
  },
}

// ─── 导航链接 ────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Catalog',   path: '/catalog'  },
  { label: 'Delivery',  path: '/delivery' },
  { label: 'About',     path: '/about'    },
  { label: 'Contacts',  path: '/contacts' },
  { label: 'Admin',  path: '/admin' }
]

// ─── 页脚导航 ─────────────────────────────────────────────────────────────────
export const FOOTER_LINKS = [
  { label: 'Home',      path: '/'         },
  { label: 'Catalog',   path: '/catalog'  },
  { label: 'Delivery',  path: '/delivery' },
  { label: 'About',     path: '/about'    },
  { label: 'Contacts',  path: '/contacts' },
]

// ─── 社交图标列表 ─────────────────────────────────────────────────────────────
export const SOCIAL_ICONS = [
  { src: IMGS.icons.twitter,   label: 'Twitter'   },
  { src: IMGS.icons.facebook,  label: 'Facebook'  },
  { src: IMGS.icons.instagram, label: 'Instagram' },
  { src: IMGS.icons.pinterest, label: 'Pinterest' },
  { src: IMGS.icons.youtube,   label: 'YouTube'   },
]

// ─── 联系信息 ─────────────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  phone: '+1 213 974-5681',
  email: 'ToyNest@Gmail.com',
}

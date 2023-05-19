const routes = [
  // ui-guide
  {
    path: '/',
    name: '/',
    component: () => import('@/views/uiGuide/GuideIndex.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide-index',
    name: '/guide-index',
    component: () => import('@/views/uiGuide/GuideIndex.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide/component',
    name: '/guide/component',
    component: () => import('@/views/uiGuide/GuideComponent.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide/layout-001',
    name: '/guide/layout-001',
    component: () => import('@/views/uiGuide/GuideLayout001.vue'),
  },
  {
    path: '/guide/layout-002',
    name: '/guide/layout-002',
    component: () => import('@/views/uiGuide/GuideLayout002.vue'),
  },
  {
    path: '/guide/alert-001',
    name: '/guide/alert-001',
    component: () => import('@/views/uiGuide/GuideAlert001.vue'),
  },
  {
    path: '/guide/alert-002',
    name: '/guide/alert-002',
    component: () => import('@/views/uiGuide/GuideAlert002.vue'),
  },
  {
    path: '/guide/alert-003',
    name: '/guide/alert-003',
    component: () => import('@/views/uiGuide/GuideAlert003.vue'),
  },
  {
    path: '/guide/alert-004',
    name: '/guide/alert-004',
    component: () => import('@/views/uiGuide/GuideAlert004.vue'),
  },
  {
    path: '/guide/loading-001',
    name: '/guide/loading-001',
    component: () => import('@/views/uiGuide/GuideLoading001.vue'),
  },
  {
    path: '/guide/clause-detail-001',
    name: '/guide/clause-detail-001',
    component: () => import('@/views/uiGuide/GuideClauseDetail001.vue'),
  },
  {
    path: '/guide/search-workplace-001',
    name: '/guide/search-workplace-001',
    component: () => import('@/views/uiGuide/GuideSearchWorkplace001.vue'),
  },
  {
    path: '/guide/search-address-001',
    name: '/guide/search-address-001',
    component: () => import('@/views/uiGuide/GuideSearchAddress001.vue'),
  },
  {
    path: '/guide/loan-calculator-001',
    name: '/guide/loan-calculator-001',
    component: () => import('@/views/uiGuide/GuideLoanCalculator001.vue'),
  },
  {
    path: '/guide/guide-001',
    name: '/guide/guide-001',
    component: () => import('@/views/uiGuide/GuideGuide001.vue'),
  },
  {
    path: '/guide/customer-certificate-001',
    name: '/guide/customer-certificate-001',
    component: () => import('@/views/uiGuide/GuideCustomerCertificate001.vue'),
  },
  {
    path: '/guide/sign-login-001',
    name: '/guide/sign-login-001',
    component: () => import('@/views/uiGuide/GuideSignLogin001.vue'),
  },

  // main
  {
    path: '/main/home',
    name: '/main/home',
    component: () => import('@/views/main/MainHome.vue'),
  },

  // identification
  {
    path: '/identification/Common_P00_p003',
    name: '/identification/Common_P00_p003',
    component: () => import('@/views/identification/Common_P00_p003.vue'),
  },

  // redirect
  {
    path: '/redirect/Common_P00_p012',
    name: '/redirect/Common_P00_p012',
    component: () => import('@/views/redirect/Common_P00_p012.vue'),
  },

  // error
  {
    path: '/error/Common_P00_p013',
    name: '/error/Common_P00_p013',
    component: () => import('@/views/error/Common_P00_p013.vue'),
  },

  // customer
  {
    path: '/customer/Customer_P03_p001',
    name: '/customer/Customer_P03_p001',
    component: () => import('@/views/customer/Customer_P03_p001.vue'),
  },
  {
    path: '/customer/Customer_P03_p002',
    name: '/customer/Customer_P03_p002',
    component: () => import('@/views/customer/Customer_P03_p002.vue'),
  },
  {
    path: '/customer/Customer_P04_p001',
    name: '/customer/Customer_P04_p001',
    component: () => import('@/views/customer/Customer_P04_p001.vue'),
  },
  {
    path: '/customer/Customer_P04_p002',
    name: '/customer/Customer_P04_p002',
    component: () => import('@/views/customer/Customer_P04_p002.vue'),
  },
  {
    path: '/customer/Customer_P11_p001',
    name: '/customer/Customer_P11_p001',
    component: () => import('@/views/customer/Customer_P11_p001.vue'),
  },

  // additionalService
  {
    path: '/additional-service/Etc_P01_p001',
    name: '/additional-service/Etc_P01_p001',
    component: () => import('@/views/additionalService/Etc_P01_p001.vue'),
  },
  {
    path: '/additional-service/Etc_P01_p002',
    name: '/additional-service/Etc_P01_p002',
    component: () => import('@/views/additionalService/Etc_P01_p002.vue'),
  },

  // sign
  {
    path: '/sign/Member_P01_p001',
    name: '/sign/Member_P01_p001',
    component: () => import('@/views/sign/Member_P01_p001.vue'),
  },
  {
    path: '/sign/Member_P01_p002',
    name: '/sign/Member_P01_p002',
    component: () => import('@/views/sign/Member_P01_p002.vue'),
  },
  {
    path: '/sign/Member_P03_p001',
    name: '/sign/Member_P03_p001',
    component: () => import('@/views/sign/Member_P03_p001.vue'),
  },
  {
    path: '/sign/Member_P03_p002',
    name: '/sign/Member_P03_p002',
    component: () => import('@/views/sign/Member_P03_p002.vue'),
  },
  {
    path: '/sign/Member_P03_p003',
    name: '/sign/Member_P03_p003',
    component: () => import('@/views/sign/Member_P03_p003.vue'),
  },
  {
    path: '/sign/Member_P04_p001',
    name: '/sign/Member_P04_p001',
    component: () => import('@/views/sign/Member_P04_p001.vue'),
  },
  {
    path: '/sign/Member_P04_p002',
    name: '/sign/Member_P04_p002',
    component: () => import('@/views/sign/Member_P04_p002.vue'),
  },
  {
    path: '/sign/Member_P04_p003',
    name: '/sign/Member_P04_p003',
    component: () => import('@/views/sign/Member_P04_p003.vue'),
  },
  {
    path: '/sign/Member_P05_p001',
    name: '/sign/Member_P05_p001',
    component: () => import('@/views/sign/Member_P05_p001.vue'),
  },
  {
    path: '/sign/Member_P05_p002',
    name: '/sign/Member_P05_p002',
    component: () => import('@/views/sign/Member_P05_p002.vue'),
  },
  {
    path: '/sign/Member_P05_p005',
    name: '/sign/Member_P05_p005',
    component: () => import('@/views/sign/Member_P05_p005.vue'),
  },
  {
    path: '/sign/Member_P05_p006',
    name: '/sign/Member_P05_p006',
    component: () => import('@/views/sign/Member_P05_p006.vue'),
  },
];

export default routes;

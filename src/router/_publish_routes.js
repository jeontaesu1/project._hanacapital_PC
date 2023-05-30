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
    path: '/guide/clause-001',
    name: '/guide/clause-001',
    component: () => import('@/views/uiGuide/GuideClause001.vue'),
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
    path: '/guide/customer-001',
    name: '/guide/customer-001',
    component: () => import('@/views/uiGuide/GuideCustomer001.vue'),
  },
  {
    path: '/guide/sign-001',
    name: '/guide/sign-001',
    component: () => import('@/views/uiGuide/GuideSign001.vue'),
  },
  {
    path: '/guide/personal-loan-001',
    name: '/guide/personal-loan-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoan001.vue'),
  },
  {
    path: '/guide/personal-loan-002',
    name: '/guide/personal-loan-002',
    component: () => import('@/views/uiGuide/GuidePersonalLoan002.vue'),
  },
  {
    path: '/guide/personal-loan-003',
    name: '/guide/personal-loan-003',
    component: () => import('@/views/uiGuide/GuidePersonalLoan003.vue'),
  },
  {
    path: '/guide/personal-loan-004',
    name: '/guide/personal-loan-004',
    component: () => import('@/views/uiGuide/GuidePersonalLoan004.vue'),
  },
  {
    path: '/guide/personal-loan-005',
    name: '/guide/personal-loan-005',
    component: () => import('@/views/uiGuide/GuidePersonalLoan005.vue'),
  },
  {
    path: '/guide/personal-loan-006',
    name: '/guide/personal-loan-006',
    component: () => import('@/views/uiGuide/GuidePersonalLoan006.vue'),
  },
  {
    path: '/guide/online-branch-001',
    name: '/guide/online-branch-001',
    component: () => import('@/views/uiGuide/GuideOnlineBranch001.vue'),
  },
  {
    path: '/guide/online-branch-002',
    name: '/guide/online-branch-002',
    component: () => import('@/views/uiGuide/GuideOnlineBranch002.vue'),
  },
  {
    path: '/guide/additional-service-001',
    name: '/guide/additional-service-001',
    component: () => import('@/views/uiGuide/GuideAdditionalService001.vue'),
  },
  {
    path: '/guide/inventory-finance-001',
    name: '/guide/inventory-finance-001',
    component: () => import('@/views/uiGuide/GuideInventoryFinance001.vue'),
  },
  {
    path: '/guide/inventory-finance-002',
    name: '/guide/inventory-finance-002',
    component: () => import('@/views/uiGuide/GuideInventoryFinance002.vue'),
  },
  {
    path: '/guide/lm-blog-001',
    name: '/guide/lm-blog-001',
    component: () => import('@/views/uiGuide/GuideLmBlog001.vue'),
  },
  {
    path: '/guide/lm-blog-002',
    name: '/guide/lm-blog-002',
    component: () => import('@/views/uiGuide/GuideLmBlog002.vue'),
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
  {
    path: '/customer/Customer_P01_p001',
    name: '/customer/Customer_P01_p001',
    component: () => import('@/views/customer/Customer_P01_p001.vue'),
  },
  {
    path: '/customer/Customer_P02_p001',
    name: '/customer/Customer_P02_p001',
    component: () => import('@/views/customer/Customer_P02_p001.vue'),
  },
  {
    path: '/customer/Customer_P02_p002',
    name: '/customer/Customer_P02_p002',
    component: () => import('@/views/customer/Customer_P02_p002.vue'),
  },
  {
    path: '/customer/Customer_P02_p003',
    name: '/customer/Customer_P02_p003',
    component: () => import('@/views/customer/Customer_P02_p003.vue'),
  },

  // additional-service
  {
    path: '/additional-service/My_P02_p001',
    name: '/additional-service/My_P02_p001',
    component: () => import('@/views/additionalService/My_P02_p001.vue'),
  },
  {
    path: '/additional-service/My_P02_p002',
    name: '/additional-service/My_P02_p002',
    component: () => import('@/views/additionalService/My_P02_p002.vue'),
  },
  {
    path: '/additional-service/My_P05_p011',
    name: '/additional-service/My_P05_p011',
    component: () => import('@/views/additionalService/My_P05_p011.vue'),
  },
  {
    path: '/additional-service/My_P05_p012',
    name: '/additional-service/My_P05_p012',
    component: () => import('@/views/additionalService/My_P05_p012.vue'),
  },
  {
    path: '/additional-service/My_P05_p013',
    name: '/additional-service/My_P05_p013',
    component: () => import('@/views/additionalService/My_P05_p013.vue'),
  },
  {
    path: '/additional-service/My_P06_p011',
    name: '/additional-service/My_P06_p011',
    component: () => import('@/views/additionalService/My_P06_p011.vue'),
  },
  {
    path: '/additional-service/My_P06_p012',
    name: '/additional-service/My_P06_p012',
    component: () => import('@/views/additionalService/My_P06_p012.vue'),
  },
  {
    path: '/additional-service/My_P06_p013',
    name: '/additional-service/My_P06_p013',
    component: () => import('@/views/additionalService/My_P06_p013.vue'),
  },
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

  // inventory-finance
  {
    path: '/inventory-finance/IF_P02_p001',
    name: '/inventory-finance/IF_P02_p001',
    component: () => import('@/views/inventoryFinance/IF_P02_p001.vue'),
  },
  {
    path: '/inventory-finance/IF_P02_p002',
    name: '/inventory-finance/IF_P02_p002',
    component: () => import('@/views/inventoryFinance/IF_P02_p002.vue'),
  },
  {
    path: '/inventory-finance/IF_P02_p004',
    name: '/inventory-finance/IF_P02_p004',
    component: () => import('@/views/inventoryFinance/IF_P02_p004.vue'),
  },
  {
    path: '/inventory-finance/IF_P02_p005',
    name: '/inventory-finance/IF_P02_p005',
    component: () => import('@/views/inventoryFinance/IF_P02_p005.vue'),
  },
  {
    path: '/inventory-finance/IF_P03_p001',
    name: '/inventory-finance/IF_P03_p001',
    component: () => import('@/views/inventoryFinance/IF_P03_p001.vue'),
  },
  {
    path: '/inventory-finance/IF_P03_p002',
    name: '/inventory-finance/IF_P03_p002',
    component: () => import('@/views/inventoryFinance/IF_P03_p002.vue'),
  },
  {
    path: '/inventory-finance/IF_P03_p003',
    name: '/inventory-finance/IF_P03_p003',
    component: () => import('@/views/inventoryFinance/IF_P03_p003.vue'),
  },
  {
    path: '/inventory-finance/IF_P03_p008',
    name: '/inventory-finance/IF_P03_p008',
    component: () => import('@/views/inventoryFinance/IF_P03_p008.vue'),
  },
  {
    path: '/inventory-finance/IF_P04_p001',
    name: '/inventory-finance/IF_P04_p001',
    component: () => import('@/views/inventoryFinance/IF_P04_p001.vue'),
  },
  {
    path: '/inventory-finance/IF_P04_p002',
    name: '/inventory-finance/IF_P04_p002',
    component: () => import('@/views/inventoryFinance/IF_P04_p002.vue'),
  },
  {
    path: '/inventory-finance/IF_P04_p003',
    name: '/inventory-finance/IF_P04_p003',
    component: () => import('@/views/inventoryFinance/IF_P04_p003.vue'),
  },

  // lm-blog
  {
    path: '/lm-blog/LM_P01_p001',
    name: '/lm-blog/LM_P01_p001',
    component: () => import('@/views/lmBlog/LM_P01_p001.vue'),
  },
  {
    path: '/lm-blog/LM_P01_p002',
    name: '/lm-blog/LM_P01_p002',
    component: () => import('@/views/lmBlog/LM_P01_p002.vue'),
  },
  {
    path: '/lm-blog/LM_P02_p001',
    name: '/lm-blog/LM_P02_p001',
    component: () => import('@/views/lmBlog/LM_P02_p001.vue'),
  },
  {
    path: '/lm-blog/LM_P03_p001',
    name: '/lm-blog/LM_P03_p001',
    component: () => import('@/views/lmBlog/LM_P03_p001.vue'),
  },
  {
    path: '/lm-blog/LM_P04_p001',
    name: '/lm-blog/LM_P04_p001',
    component: () => import('@/views/lmBlog/LM_P04_p001.vue'),
  },
  {
    path: '/lm-blog/LM_P05_p001',
    name: '/lm-blog/LM_P05_p001',
    component: () => import('@/views/lmBlog/LM_P05_p001.vue'),
  },

  // online-branch
  {
    path: '/online-branch/MI_P00_p002',
    name: '/online-branch/MI_P00_p002',
    component: () => import('@/views/onlineBranch/MI_P00_p002.vue'),
  },
  {
    path: '/online-branch/MI_P00_p003',
    name: '/online-branch/MI_P00_p003',
    component: () => import('@/views/onlineBranch/MI_P00_p003.vue'),
  },
  {
    path: '/online-branch/MI_P00_p004',
    name: '/online-branch/MI_P00_p004',
    component: () => import('@/views/onlineBranch/MI_P00_p004.vue'),
  },
  {
    path: '/online-branch/MI_P00_p005',
    name: '/online-branch/MI_P00_p005',
    component: () => import('@/views/onlineBranch/MI_P00_p005.vue'),
  },
  {
    path: '/online-branch/MI_P00_p006',
    name: '/online-branch/MI_P00_p006',
    component: () => import('@/views/onlineBranch/MI_P00_p006.vue'),
  },
  {
    path: '/online-branch/MI_P00_p007',
    name: '/online-branch/MI_P00_p007',
    component: () => import('@/views/onlineBranch/MI_P00_p007.vue'),
  },
  {
    path: '/online-branch/MI_P00_p008',
    name: '/online-branch/MI_P00_p008',
    component: () => import('@/views/onlineBranch/MI_P00_p008.vue'),
  },
  {
    path: '/online-branch/MI_P00_p009',
    name: '/online-branch/MI_P00_p009',
    component: () => import('@/views/onlineBranch/MI_P00_p009.vue'),
  },
  {
    path: '/online-branch/MI_P00_p010',
    name: '/online-branch/MI_P00_p010',
    component: () => import('@/views/onlineBranch/MI_P00_p010.vue'),
  },
  {
    path: '/online-branch/MI_P00_p011',
    name: '/online-branch/MI_P00_p011',
    component: () => import('@/views/onlineBranch/MI_P00_p011.vue'),
  },
  {
    path: '/online-branch/MI_P00_p012',
    name: '/online-branch/MI_P00_p012',
    component: () => import('@/views/onlineBranch/MI_P00_p012.vue'),
  },
  {
    path: '/online-branch/My_p04_p001',
    name: '/online-branch/My_p04_p001',
    component: () => import('@/views/onlineBranch/My_p04_p001.vue'),
  },
  {
    path: '/online-branch/My_p04_p002',
    name: '/online-branch/My_p04_p002',
    component: () => import('@/views/onlineBranch/My_p04_p002.vue'),
  },
  {
    path: '/online-branch/My_p04_p003',
    name: '/online-branch/My_p04_p003',
    component: () => import('@/views/onlineBranch/My_p04_p003.vue'),
  },
  {
    path: '/online-branch/MI_P00_p013',
    name: '/online-branch/MI_P00_p013',
    component: () => import('@/views/onlineBranch/MI_P00_p013.vue'),
  },
  {
    path: '/online-branch/MI_P00_p014',
    name: '/online-branch/MI_P00_p014',
    component: () => import('@/views/onlineBranch/MI_P00_p014.vue'),
  },
  {
    path: '/online-branch/MI_P00_p015',
    name: '/online-branch/MI_P00_p015',
    component: () => import('@/views/onlineBranch/MI_P00_p015.vue'),
  },
  {
    path: '/online-branch/MI_P00_p016',
    name: '/online-branch/MI_P00_p016',
    component: () => import('@/views/onlineBranch/MI_P00_p016.vue'),
  },
  {
    path: '/online-branch/My_p05_p001',
    name: '/online-branch/My_p05_p001',
    component: () => import('@/views/onlineBranch/My_p05_p001.vue'),
  },
  {
    path: '/online-branch/My_p05_p002',
    name: '/online-branch/My_p05_p002',
    component: () => import('@/views/onlineBranch/My_p05_p002.vue'),
  },
  {
    path: '/online-branch/My_p05_p003',
    name: '/online-branch/My_p05_p003',
    component: () => import('@/views/onlineBranch/My_p05_p003.vue'),
  },
  {
    path: '/online-branch/My_p05_p004',
    name: '/online-branch/My_p05_p004',
    component: () => import('@/views/onlineBranch/My_p05_p004.vue'),
  },
  {
    path: '/online-branch/My_p05_p005',
    name: '/online-branch/My_p05_p005',
    component: () => import('@/views/onlineBranch/My_p05_p005.vue'),
  },
  {
    path: '/online-branch/My_p06_p001',
    name: '/online-branch/My_p06_p001',
    component: () => import('@/views/onlineBranch/My_p06_p001.vue'),
  },
  {
    path: '/online-branch/My_p06_p002',
    name: '/online-branch/My_p06_p002',
    component: () => import('@/views/onlineBranch/My_p06_p002.vue'),
  },
  {
    path: '/online-branch/My_p06_p004',
    name: '/online-branch/My_p06_p004',
    component: () => import('@/views/onlineBranch/My_p06_p004.vue'),
  },
  {
    path: '/online-branch/My_P08_p001',
    name: '/online-branch/My_P08_p001',
    component: () => import('@/views/onlineBranch/My_P08_p001.vue'),
  },
  {
    path: '/online-branch/My_P08_p003',
    name: '/online-branch/My_P08_p003',
    component: () => import('@/views/onlineBranch/My_P08_p003.vue'),
  },

  // personal-loan
  {
    path: '/personal-loan/PF_P01_p002',
    name: '/personal-loan/PF_P01_p002',
    component: () => import('@/views/personalLoan/PF_P01_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p003',
    name: '/personal-loan/PF_P01_p003',
    component: () => import('@/views/personalLoan/PF_P01_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p004',
    name: '/personal-loan/PF_P01_p004',
    component: () => import('@/views/personalLoan/PF_P01_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p007',
    name: '/personal-loan/PF_P01_p007',
    component: () => import('@/views/personalLoan/PF_P01_p007.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p008',
    name: '/personal-loan/PF_P01_p008',
    component: () => import('@/views/personalLoan/PF_P01_p008.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p005',
    name: '/personal-loan/PF_P01_p005',
    component: () => import('@/views/personalLoan/PF_P01_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p006_001',
    name: '/personal-loan/PF_P01_p006_001',
    component: () => import('@/views/personalLoan/PF_P01_p006_001.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p006_002',
    name: '/personal-loan/PF_P01_p006_002',
    component: () => import('@/views/personalLoan/PF_P01_p006_002.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p006_003',
    name: '/personal-loan/PF_P01_p006_003',
    component: () => import('@/views/personalLoan/PF_P01_p006_003.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p009_001',
    name: '/personal-loan/PF_P01_p009_001',
    component: () => import('@/views/personalLoan/PF_P01_p009_001.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p009_002',
    name: '/personal-loan/PF_P01_p009_002',
    component: () => import('@/views/personalLoan/PF_P01_p009_002.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p009_003',
    name: '/personal-loan/PF_P01_p009_003',
    component: () => import('@/views/personalLoan/PF_P01_p009_003.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p010',
    name: '/personal-loan/PF_P01_p010',
    component: () => import('@/views/personalLoan/PF_P01_p010.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p002',
    name: '/personal-loan/PF_P02_p002',
    component: () => import('@/views/personalLoan/PF_P02_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p003',
    name: '/personal-loan/PF_P02_p003',
    component: () => import('@/views/personalLoan/PF_P02_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p004',
    name: '/personal-loan/PF_P02_p004',
    component: () => import('@/views/personalLoan/PF_P02_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p005',
    name: '/personal-loan/PF_P02_p005',
    component: () => import('@/views/personalLoan/PF_P02_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p006_001',
    name: '/personal-loan/PF_P02_p006_001',
    component: () => import('@/views/personalLoan/PF_P02_p006_001.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p006_002',
    name: '/personal-loan/PF_P02_p006_002',
    component: () => import('@/views/personalLoan/PF_P02_p006_002.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p006_003',
    name: '/personal-loan/PF_P02_p006_003',
    component: () => import('@/views/personalLoan/PF_P02_p006_003.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p002',
    name: '/personal-loan/PF_P04_p002',
    component: () => import('@/views/personalLoan/PF_P04_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p003',
    name: '/personal-loan/PF_P04_p003',
    component: () => import('@/views/personalLoan/PF_P04_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p004',
    name: '/personal-loan/PF_P04_p004',
    component: () => import('@/views/personalLoan/PF_P04_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p005',
    name: '/personal-loan/PF_P04_p005',
    component: () => import('@/views/personalLoan/PF_P04_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p006',
    name: '/personal-loan/PF_P04_p006',
    component: () => import('@/views/personalLoan/PF_P04_p006.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p002',
    name: '/personal-loan/PF_P05_p002',
    component: () => import('@/views/personalLoan/PF_P05_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p003',
    name: '/personal-loan/PF_P05_p003',
    component: () => import('@/views/personalLoan/PF_P05_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p004',
    name: '/personal-loan/PF_P05_p004',
    component: () => import('@/views/personalLoan/PF_P05_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p005',
    name: '/personal-loan/PF_P05_p005',
    component: () => import('@/views/personalLoan/PF_P05_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p006_001',
    name: '/personal-loan/PF_P05_p006_001',
    component: () => import('@/views/personalLoan/PF_P05_p006_001.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p006_002',
    name: '/personal-loan/PF_P05_p006_002',
    component: () => import('@/views/personalLoan/PF_P05_p006_002.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p006_003',
    name: '/personal-loan/PF_P05_p006_003',
    component: () => import('@/views/personalLoan/PF_P05_p006_003.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p001',
    name: '/personal-loan/PF_P07_p001',
    component: () => import('@/views/personalLoan/PF_P07_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p002',
    name: '/personal-loan/PF_P07_p002',
    component: () => import('@/views/personalLoan/PF_P07_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p003',
    name: '/personal-loan/PF_P07_p003',
    component: () => import('@/views/personalLoan/PF_P07_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p004',
    name: '/personal-loan/PF_P07_p004',
    component: () => import('@/views/personalLoan/PF_P07_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p005',
    name: '/personal-loan/PF_P07_p005',
    component: () => import('@/views/personalLoan/PF_P07_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p006',
    name: '/personal-loan/PF_P07_p006',
    component: () => import('@/views/personalLoan/PF_P07_p006.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p007',
    name: '/personal-loan/PF_P07_p007',
    component: () => import('@/views/personalLoan/PF_P07_p007.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p008',
    name: '/personal-loan/PF_P07_p008',
    component: () => import('@/views/personalLoan/PF_P07_p008.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p009',
    name: '/personal-loan/PF_P07_p009',
    component: () => import('@/views/personalLoan/PF_P07_p009.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p010',
    name: '/personal-loan/PF_P07_p010',
    component: () => import('@/views/personalLoan/PF_P07_p010.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p011',
    name: '/personal-loan/PF_P07_p011',
    component: () => import('@/views/personalLoan/PF_P07_p011.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p012',
    name: '/personal-loan/PF_P07_p012',
    component: () => import('@/views/personalLoan/PF_P07_p012.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p013',
    name: '/personal-loan/PF_P07_p013',
    component: () => import('@/views/personalLoan/PF_P07_p013.vue'),
  },
  {
    path: '/personal-loan/PF_P09_p002',
    name: '/personal-loan/PF_P09_p002',
    component: () => import('@/views/personalLoan/PF_P09_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P09_p003',
    name: '/personal-loan/PF_P09_p003',
    component: () => import('@/views/personalLoan/PF_P09_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P09_p004',
    name: '/personal-loan/PF_P09_p004',
    component: () => import('@/views/personalLoan/PF_P09_p004.vue'),
  },
];

export default routes;

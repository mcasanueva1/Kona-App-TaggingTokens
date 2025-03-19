let taggingTokens = [
  {
    "name": "{{standaloneModal1}}",
    "tags": "[id:standaloneModal1][type:modal][standalone]",
    "categories": ["standaloneModal"]
  },
  {
    "name": "{{standaloneModal1Content}}",
    "tags": "[id:standaloneModal1Content][type:standaloneModalContent][modal:standaloneModal1]",
    "categories": ["standaloneModal"]
  },
  {
    "name": "{{utilMenu}}",
    "tags": "[id:utilMenu][type:utilMenu][common]",
    "categories": ["utilMenu"]
  },
  {
    "name": "{{utilMenuRightMain}}",
    "tags": "[id:utilMenuMainRight][type:utilMenuGroup][rightGroup][mainSlide][menu:utilMenu]",
    "categories": ["utilMenu"]
  },
  {
    "name": "{{utilMenuCenterMain}}",
    "tags": "[id:utilMenuMainCenter][type:utilMenuGroup][centerGroup][mainSlide][menu:utilMenu]",
    "categories": ["utilMenu"]
  },
  {
    "name": "{{utilMenuRightStandalone}}",
    "tags": "[id:utilMenuStandaloneRight][type:utilMenuGroup][rightGroup][standaloneModal][menu:utilMenu]",
    "categories": ["utilMenu"]
  },
  {
    "name": "{{utilMenuCenterStandalone}}",
    "tags": "[id:utilMenuStandaloneCenter][type:utilMenuGroup][centerGroup][standaloneModal][menu:utilMenu]",
    "categories": ["utilMenu"]
  },
  {
    "name": "{{utilISIOff}}",
    "tags": "[id:utilISIBtn][utilMenuButton][state:off]",
    "categories": ["utilMenu", "ISI"]
  },
  {
    "name": "{{utilISIOn}}",
    "tags": "[id:utilISIBtn][utilMenuButton][state:on]",
    "categories": ["utilMenu", "ISI"]
  },
  {
    "name": "{{utilEmailCartOff}}",
    "tags": "[id:utilEmailCartBtn][type:modalDualButton][modal:emailCart][utilMenuButton][state:off]",
    "categories": ["utilMenu", "emailCart"]
  },
  {
    "name": "{{utilEmailCartOn}}",
    "tags": "[id:utilEmailCartBtn][type:modalDualButton][modal:emailCart][utilMenuButton][state:on]",
    "categories": ["utilMenu", "emailCart"]
  },
  {
    "name": "{{utilRefsOff}}",
    "tags": "[id:utilRefsBtn][type:modalDualButton][modal:references][utilMenuButton][state:off]",
    "categories": ["utilMenu", "references"]
  },
  {
    "name": "{{utilRefsOn}}",
    "tags": "[id:utilRefsBtn][type:modalDualButton][modal:references][utilMenuButton][state:off]",
    "categories": ["utilMenu", "references"]
  },
  {
    "name": "{{utilSitemapOff}}",
    "tags": "[id:utilSMBtn][type:modalDualButton][modal:sitemap][utilMenuButton][state:off]",
    "categories": ["utilMenu", "sitemap"]
  },
  {
    "name": "{{utilSitemapOn}}",
    "tags": "[id:utilSMBtn][type:modalDualButton][modal:sitemap][utilMenuButton][state:off]",
    "categories": ["utilMenu", "sitemap"]
  },
  {
    "name": "{{utilResourcesOff}}",
    "tags": "[id:utilResourcesBtn][type:modalDualButton][modal:resources][utilMenuButton][state:off]",
    "categories": ["utilMenu", "resources"]
  },
  {
    "name": "{{utilResourcesOn}}",
    "tags": "[id:utilResourcesBtn][type:modalDualButton][modal:resources][utilMenuButton][state:on]",
    "categories": ["utilMenu", "resources"]
  },
  {
    "name": "{{utilQuickLinksOff}}",
    "tags": "[id:quickLinksBtn][type:modalDualButton][modal:quickLinks][utilMenuButton][state:off]",
    "categories": ["utilMenu", "quickLinks"]
  },
  {
    "name": "{{utilQuickLinksOn}}",
    "tags": "[id:quickLinksBtn][type:modalDualButton][modal:quickLinks][utilMenuButton][state:on]",
    "categories": ["utilMenu", "quickLinks"]
  },
  {
    "name": "{{utilFavsOff}}",
    "tags": "[id:utilFavsBtn][type:modalDualButton][modal:favsSlides][utilMenuButton][state:off]",
    "categories": ["utilMenu", "favsSlides"]
  },
  {
    "name": "{{utilFavsOn}}",
    "tags": "[id:utilFavsBtn][type:modalDualButton][modal:favsSlides][utilMenuButton][state:on]",
    "categories": ["utilMenu", "favsSlides"]
  },
  {
    "name": "{{utilSepOff}}",
    "tags": "[id:utilSep][type:utilMenuSeparator][state:off]",
    "categories": ["utilMenu", "separator"]
  },
  {
    "name": "{{utilSepOn}}",
    "tags": "[id:utilSep][type:utilMenuSeparator][state:on]",
    "categories": ["utilMenu", "separator"]
  },
  {
    "name": "{{utilPreCallOff}}",
    "tags": "[id:utilPreCallBtn][type:modalDualButton][modal:preCall][utilMenuButton][state:off]",
    "categories": ["utilMenu", "preCall"]
  },
  {
    "name": "{{utilPreCallOn}}",
    "tags": "[id:utilPreCallBtn][type:modalDualButton][modal:preCall][utilMenuButton][state:on]",
    "categories": ["utilMenu", "preCall"]
  },
  {
    "name": "{{mainMenuGroup}}",
    "tags": "[id:mainMenuGroup][type:menuGroup]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{homeMainMenu}}",
    "tags": "[id:homeMainMenu][type:menu]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{homeBtnOn}}",
    "tags": "[id:homeBtn][type:menuButton][menu:homeMainMenu][state:on]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{homeBtnOff}}",
    "tags": "[id:homeBtn][type:menuButton][menu:homeMainMenu][state:off]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenu}}",
    "tags": "[id:mainMenu][type:menu]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenuButton01On}}",
    "tags": "[id:mainMenuButton01][type:menuButton][menu:mainMenu][state:on]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenuButton01Off}}",
    "tags": "[id:mainMenuButton01][type:menuButton][menu:mainMenu][state:off]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenuButton02On}}",
    "tags": "[id:mainMenuButton02][type:menuButton][menu:mainMenu][state:on]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenuButton02Off}}",
    "tags": "[id:mainMenuButton02][type:menuButton][menu:mainMenu][state:off]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{tab1}}",
    "tags": "[id:tab1][type:tab]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Buttons}}",
    "tags": "[id:tab1Buttons][type:tabButtons][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{tabBtn1On}}",
    "tags": "[id:tabBtn1][type:tabButton][tab:tab1][group:group1][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tabBtn1Off}}",
    "tags": "[id:tabBtn1][type:tabButton][tab:tab1][group:group1][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tabBtn2On}}",
    "tags": "[id:tabBtn2][type:tabButton][tab:tab1][group:group2][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tabBtn2Off}}",
    "tags": "[id:tabBtn2][type:tabButton][tab:tab1][group:group2][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Contents}}",
    "tags": "[id:tab1Contents][type:tabContents][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Content1}}",
    "tags": "[id:tab1Content1][type:tabContent][group:group1][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Content2}}",
    "tags": "[id:tab1Content2][type:tabContent][group:group2][tab:tab1]",
    "categories": ["tab"]
  }
]
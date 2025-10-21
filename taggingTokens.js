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
    "name": "{{utilSugOff}}",
    "tags": "[id:utilSugBtn][type:modalDualButton][modal:sugSlides][utilMenuButton][state:off]",
    "categories": ["utilMenu", "sugSlides"]
  },
  {
    "name": "{{utilSugOn}}",
    "tags": "[id:utilSugBtn][type:modalDualButton][modal:sugSlides][utilMenuButton][state:on]",
    "categories": ["utilMenu", "sugSlides"]
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
    "name": "{{utilPreCallDisabled}}",
    "tags": "[id:utilPreCallBtn][type:modalDualButton][modal:preCall][utilMenuButton][state:disabled]",
    "categories": ["utilMenu", "preCall"]
  },
  {
    "name": "{{mainMenuGroup}}",
    "tags": "[id:mainMenuGroup][common]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{homeMenu}}",
    "tags": "[id:homeMenu][type:menu]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{homeBtnOn}}",
    "tags": "[id:homeBtn][type:menuButton][menu:homeMenu][state:on]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{homeBtnOff}}",
    "tags": "[id:homeBtn][type:menuButton][menu:homeMenu][state:off]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenu}}",
    "tags": "[id:mainMenu][type:menu]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenuBtn01On}}",
    "tags": "[id:mainMenuBtn01][type:menuButton][menu:mainMenu][state:on]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenuBtn01Off}}",
    "tags": "[id:mainMenuBtn01][type:menuButton][menu:mainMenu][state:off]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenuBtn02On}}",
    "tags": "[id:mainMenuBtn02][type:menuButton][menu:mainMenu][state:on]",
    "categories": ["mainMenu"]
  },
  {
    "name": "{{mainMenuBtn02Off}}",
    "tags": "[id:mainMenuBtn02][type:menuButton][menu:mainMenu][state:off]",
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
    "name": "{{tab1Btn1On}}",
    "tags": "[id:tab1Btn1][type:tabButton][tab:tab1][group:group1][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn1Off}}",
    "tags": "[id:tab1Btn1][type:tabButton][tab:tab1][group:group1][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn2On}}",
    "tags": "[id:tab1Btn2][type:tabButton][tab:tab1][group:group2][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn2Off}}",
    "tags": "[id:tab1Btn2][type:tabButton][tab:tab1][group:group2][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn3On}}",
    "tags": "[id:tab1Btn3][type:tabButton][tab:tab1][group:group3][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn3Off}}",
    "tags": "[id:tab1Btn3][type:tabButton][tab:tab1][group:group3][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn4On}}",
    "tags": "[id:tab1Btn4][type:tabButton][tab:tab1][group:group4][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn4Off}}",
    "tags": "[id:tab1Btn4][type:tabButton][tab:tab1][group:group4][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn5On}}",
    "tags": "[id:tab1Btn5][type:tabButton][tab:tab1][group:group5][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn5Off}}",
    "tags": "[id:tab1Btn5][type:tabButton][tab:tab1][group:group5][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn6On}}",
    "tags": "[id:tab1Btn6][type:tabButton][tab:tab1][group:group6][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn6Off}}",
    "tags": "[id:tab1Btn6][type:tabButton][tab:tab1][group:group6][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn7On}}",
    "tags": "[id:tab1Btn7][type:tabButton][tab:tab1][group:group7][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn7Off}}",
    "tags": "[id:tab1Btn7][type:tabButton][tab:tab1][group:group7][state:off]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn8On}}",
    "tags": "[id:tab1Btn8][type:tabButton][tab:tab1][group:group8][state:on]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Btn8Off}}",
    "tags": "[id:tab1Btn8][type:tabButton][tab:tab1][group:group8][state:off]",
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
  },
  {
    "name": "{{tab1Content3}}",
    "tags": "[id:tab1Content3][type:tabContent][group:group3][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Content4}}",
    "tags": "[id:tab1Content4][type:tabContent][group:group4][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Content5}}",
    "tags": "[id:tab1Content5][type:tabContent][group:group5][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Content6}}",
    "tags": "[id:tab1Content6][type:tabContent][group:group6][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Content7}}",
    "tags": "[id:tab1Content7][type:tabContent][group:group7][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{tab1Content8}}",
    "tags": "[id:tab1Content8][type:tabContent][group:group8][tab:tab1]",
    "categories": ["tab"]
  },
  {
    "name": "{{nextArrow}}",
    "tags": "[id:nextArrow][type:nextArrow][common]",
    "categories": ["arrows"]
  },
  {
    "name": "{{prevArrow}}",
    "tags": "[id:prevArrow][type:prevArrow][common]",
    "categories": ["arrows"]
  },
  {
    "name": "{{referencesModal}}",
    "tags": "[id:references][type:modal][backModal:commonBackModal][common]",
    "categories": ["references"]
  },
  {
    "name": "{{referencesModalContent}}",
    "tags": "[id:referencesModalContent][type:modalContent][modal:referencesModal]",
    "categories": ["references"]
  },
  {
    "name": "{{commonBackModal}}",
    "tags": "[id:commonBackModal][type:backModal][common]",
    "categories": ["backModal"]
  },
  {
    "name": "{{slideReferences}}",
    "tags": "[id:slideReferences][type:slideReferences]",
    "categories": ["references"]
  },
  {
    "name": "{{allReferences}}",
    "tags": "[id:allReferences][type:allReferences]",
    "categories": ["references"]
  },
  {
    "name": "{{emailCartModal}}",
    "tags": "[id:emailCartModal][type:modal][backModal:commonBackModal][common]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartModalContent}}",
    "tags": "[id:emailCartModalContent][type:modalContent][modal:emailCartModal]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb01On}}",
    "tags": "[id:emailCartThumb01][type:fragment][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb01Off}}",
    "tags": "[id:emailCartThumb01][type:fragment][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb02On}}",
    "tags": "[id:emailCartThumb02][type:fragment][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb02Off}}",
    "tags": "[id:emailCartThumb02][type:fragment][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb03On}}",
    "tags": "[id:emailCartThumb03][type:fragment][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb03Off}}",
    "tags": "[id:emailCartThumb03][type:fragment][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb04On}}",
    "tags": "[id:emailCartThumb04][type:fragment][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb04Off}}",
    "tags": "[id:emailCartThumb04][type:fragment][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb05On}}",
    "tags": "[id:emailCartThumb05][type:fragment][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb05Off}}",
    "tags": "[id:emailCartThumb05][type:fragment][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb06On}}",
    "tags": "[id:emailCartThumb06][type:fragment][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb06Off}}",
    "tags": "[id:emailCartThumb06][type:fragment][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb07On}}",
    "tags": "[id:emailCartThumb07][type:fragment][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb07Off}}",
    "tags": "[id:emailCartThumb07][type:fragment][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb08On}}",
    "tags": "[id:emailCartThumb08][type:fragment][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartThumb08Off}}",
    "tags": "[id:emailCartThumb08][type:fragment][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp01On}}",
    "tags": "[id:emailCartThumb01][type:template][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp01Off}}",
    "tags": "[id:emailCartThumb01][type:template][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp02On}}",
    "tags": "[id:emailCartThumb02][type:template][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp02Off}}",
    "tags": "[id:emailCartThumb02][type:template][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp03On}}",
    "tags": "[id:emailCartThumb03][type:template][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp03Off}}",
    "tags": "[id:emailCartThumb03][type:template][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp04On}}",
    "tags": "[id:emailCartThumb04][type:template][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp04Off}}",
    "tags": "[id:emailCartThumb04][type:template][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp05On}}",
    "tags": "[id:emailCartThumb05][type:template][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp05Off}}",
    "tags": "[id:emailCartThumb05][type:template][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp06On}}",
    "tags": "[id:emailCartThumb06][type:template][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp06Off}}",
    "tags": "[id:emailCartThumb06][type:template][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp07On}}",
    "tags": "[id:emailCartThumb07][type:template][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp07Off}}",
    "tags": "[id:emailCartThumb07][type:template][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp08On}}",
    "tags": "[id:emailCartThumb08][type:template][state:on]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartTemp08Off}}",
    "tags": "[id:emailCartThumb08][type:template][state:off]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartCancelBtnOn}}",
    "tags": "[id:emailCartCancelBtn][type:emailCartCancelButton][state:on][common]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartCancelBtnOff}}",
    "tags": "[id:emailCartCancelBtn][type:emailCartCancelButton][state:off][common]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartDoneBtnOn}}",
    "tags": "[id:emailCartDoneBtn][type:emailCartDoneButton][state:on][common]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartDoneBtnOff}}",
    "tags": "[id:emailCartDoneBtn][type:emailCartDoneButton][state:off][common]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartSendBtnOn}}",
    "tags": "[id:emailCartSendBtn][type:emailCartSendButton][state:on][common]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{emailCartSendBtnOff}}",
    "tags": "[id:emailCartSendBtn][type:emailCartSendButton][state:off][common]",
    "categories": ["emailCart"]
  },
  {
    "name": "{{sitemapModal}}",
    "tags": "[id:sitemap][type:modal][backModal:commonBackModal][common]",
    "categories": ["sitemap"]
  },
  {
    "name": "{{sitemapModalContent}}",
    "tags": "[id:sitemapContent][type:modalContent][modal:sitemapModal]",
    "categories": ["sitemap"]
  },
  {
    "name": "{{resourcesModal}}",
    "tags": "[id:resources][type:modal][backModal:commonBackModal][common]",
    "categories": ["resources"]
  },
  {
    "name": "{{resourcesModalContent}}",
    "tags": "[id:resourcesContent][type:modalContent][modal:resourcesModal]",
    "categories": ["resources"]
  },
  {
    "name": "{{quickLinksModal}}",
    "tags": "[id:quickLinks][type:modal][backModal:commonBackModal][common]",
    "categories": ["quickLinks"]
  },
  {
    "name": "{{quickLinksModalContent}}",
    "tags": "[id:quickLinksContent][type:modalContent][modal:quickLinksModal]",
    "categories": ["quickLinks"]
  },
  {
    "name": "{{sugSlidesModal}}",
    "tags": "[id:sugSlides][type:modal][backModal:commonBackModal][common]",
    "categories": ["sugSlides"]
  },
  {
    "name": "{{sugSlidesModalContent}}",
    "tags": "[id:sugSlidesContent][type:modalContent][modal:sugSlidesModal]",
    "categories": ["sugSlides"]
  },
  {
    "name": "{{preCallModal}}",
    "tags": "[id:preCall][interactionSummary][type:modal][backModal:commonBackModal][common]",
    "categories": ["preCall"]
  },
  {
    "name": "{{preCallModalContent}}",
    "tags": "[id:preCallModalContent][type:modalContent][modal:preCall]",
    "categories": ["preCall"]
  }
]
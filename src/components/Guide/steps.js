import i18n from '@/i18n'

const steps = () => {
  return [
    {
      element: '#guide-start',
      popover: {
        title: i18n.global.t('msg.guide.guideTitle'),
        description: i18n.global.t('msg.guide.guideDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-hamburger',
      popover: {
        title: i18n.global.t('msg.guide.hamburgerTitle'),
        description: i18n.global.t('msg.guide.hamburgerDesc')
      }
    },
    {
      element: '#guide-breadcrumb',
      popover: {
        title: i18n.global.t('msg.guide.breadcrumbTitle'),
        description: i18n.global.t('msg.guide.breadcrumbDesc')
      }
    },
    {
      element: '#guide-search',
      popover: {
        title: i18n.global.t('msg.guide.searchTitle'),
        description: i18n.global.t('msg.guide.searchDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-full',
      popover: {
        title: i18n.global.t('msg.guide.fullTitle'),
        description: i18n.global.t('msg.guide.fullDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-theme',
      popover: {
        title: i18n.global.t('msg.guide.themeTitle'),
        description: i18n.global.t('msg.guide.themeDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-lang',
      popover: {
        title: i18n.global.t('msg.guide.langTitle'),
        description: i18n.global.t('msg.guide.langDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-tags',
      popover: {
        title: i18n.global.t('msg.guide.tagTitle'),
        description: i18n.global.t('msg.guide.tagDesc')
      }
    },
    {
      element: '#guide-sidebar',
      popover: {
        title: i18n.global.t('msg.guide.sidebarTitle'),
        description: i18n.global.t('msg.guide.sidebarDesc'),
        position: 'right-center'
      }
    }
  ]
}
export default steps

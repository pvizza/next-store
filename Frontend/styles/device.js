export const Size = {
  mobileSmall : '375px',
  mobile: '767px',
  laptop: '1360px',
  tablet: '960px',
  desktop: '1920px'

}

export const screen = {
  mobileSmall : 375,
  mobile: 767,
  laptop: 1360,
  tablet: 960,
  desktop: 1920
}

export const devices = {
  mobileSmall: `(max-width: ${Size.mobileSmall})`,
  mobile: `(max-width: ${Size.mobile})`,
  laptop: `(max-width: ${Size.laptop})`,
  tablet: `(max-width: ${Size.tablet})`,
  desktop: `(max-width: ${Size.desktop})`
} 
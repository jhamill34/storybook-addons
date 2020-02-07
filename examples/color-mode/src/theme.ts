import { ColorMode, Theme } from 'theme-ui'

export const colorBrand = '#DC1F26' // Red
export const colorBrandDark = '#9E161A'
export const colorPrimary = '#006AE8' // Blue
export const colorSecondary = '#424141' // Grey
export const colorTertiary = '#EB8200' // Orange
export const colorDark = '#1E1E1E' // Black
export const colorLight = '#FFFFFF' // White
export const colorMuted = '#979797' // Light grey

/**
 * Colours
 */
export const colors: ColorMode = {
  text: colorDark,
  background: colorLight,
  primary: colorPrimary,
  secondary: colorSecondary,
  tertiary: colorTertiary,
  accent: colorBrand,
  muted: colorMuted,
  darkBrand: colorBrandDark,

  modes: {
    dark: {
      text: colorLight,
      background: colorDark,
      primary: colorPrimary,
      secondary: colorSecondary,
      tertiary: colorTertiary,
      accent: colorBrand,
    },
  },
}

export const theme: Theme = {
  colors,
}

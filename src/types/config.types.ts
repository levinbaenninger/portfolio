import type {
  BorderStyle,
  ChartMode,
  ChartVariant,
  NeutralColor,
  ScalingSize,
  Schemes,
  SolidStyle,
  SolidType,
  SurfaceStyle,
  Theme,
  TransitionStyle,
} from "@once-ui-system/core";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";

/**
 * Display configuration for UI elements.
 */
export interface DisplayConfig {
  location: boolean;
  themeSwitcher: boolean;
  time: boolean;
}

/**
 * Route configuration for enabled/disabled routes.
 */
export type RoutesConfig = Record<`/${string}`, boolean>;

/**
 * Protected route configuration.
 */
export type ProtectedRoutesConfig = Record<`/${string}`, boolean>;

/**
 * Font configuration for each variant.
 */
export interface FontsConfig {
  body: NextFontWithVariable;
  code: NextFontWithVariable;
  heading: NextFontWithVariable;
  label: NextFontWithVariable;
}

/**
 * Style customization for main layout.
 */
export interface StyleConfig {
  accent: Schemes;
  border: BorderStyle;
  brand: Schemes;
  neutral: NeutralColor;
  scaling: ScalingSize;
  solid: SolidType;
  solidStyle: SolidStyle;
  surface: SurfaceStyle;
  theme: Theme;
  transition: TransitionStyle;
}

/**
 * Data style configuration for charts.
 */
export interface DataStyleConfig {
  axis: {
    stroke: string;
  };
  height: number;
  mode: ChartMode;
  tick: {
    fill: string;
    fontSize: number;
    line: boolean;
  };
  variant: ChartVariant;
}

/**
 * Effects configuration for UI visuals.
 */
export interface EffectsConfig {
  dots: {
    display: boolean;
    opacity: number;
    size: string;
    color: string;
  };
  gradient: {
    display: boolean;
    opacity: number;
    x: number;
    y: number;
    width: number;
    height: number;
    tilt: number;
    colorStart: string;
    colorEnd: string;
  };
  grid: {
    display: boolean;
    opacity: number;
    color: string;
    width: string;
    height: string;
  };
  lines: {
    display: boolean;
    opacity: number;
    color: string;
    size: string;
    thickness: number;
    angle: number;
  };
  mask: {
    cursor: boolean;
    x: number;
    y: number;
    radius: number;
  };
}

/**
 * Mailchimp configuration for newsletter forms.
 */
export interface MailchimpConfig {
  action: string;
  effects: EffectsConfig;
}

/**
 * Schema data for SEO/meta tags.
 */
export interface SchemaConfig {
  description: string;
  email: string;
  logo: string;
  name: string;
  type: string;
}

/**
 * Social links for organization.
 */
export interface SameAsConfig {
  discord: string;
  linkedin: string;
  threads: string;
}

/**
 * Top-level config types for once-ui.config.js
 */
export interface OnceUIConfig {
  baseURL: string;
  dataStyle: DataStyleConfig;
  display: DisplayConfig;
  effects: EffectsConfig;
  fonts: FontsConfig;
  mailchimp: MailchimpConfig;
  protectedRoutes: ProtectedRoutesConfig;
  routes: RoutesConfig;
  sameAs: SameAsConfig;
  schema: SchemaConfig;
  style: StyleConfig;
}

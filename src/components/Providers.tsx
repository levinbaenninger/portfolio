"use client";

import {
  type BorderStyle,
  type ChartMode,
  type ChartVariant,
  DataThemeProvider,
  IconProvider,
  LayoutProvider,
  type NeutralColor,
  type ScalingSize,
  type Schemes,
  type SolidStyle,
  type SolidType,
  type SurfaceStyle,
  ThemeProvider,
  ToastProvider,
  type TransitionStyle,
} from "@once-ui-system/core";
import { dataStyle, style } from "../resources";
import { iconLibrary } from "../resources/icons";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider
        accent={style.accent as Schemes}
        border={style.border as BorderStyle}
        brand={style.brand as Schemes}
        neutral={style.neutral as NeutralColor}
        scaling={style.scaling as ScalingSize}
        solid={style.solid as SolidType}
        solidStyle={style.solidStyle as SolidStyle}
        surface={style.surface as SurfaceStyle}
        transition={style.transition as TransitionStyle}
      >
        <DataThemeProvider
          axis={{
            stroke: dataStyle.axis.stroke,
          }}
          height={dataStyle.height}
          mode={dataStyle.mode as ChartMode}
          tick={{
            fill: dataStyle.tick.fill,
            fontSize: dataStyle.tick.fontSize,
            line: dataStyle.tick.line,
          }}
          variant={dataStyle.variant as ChartVariant}
        >
          <ToastProvider>
            <IconProvider icons={iconLibrary}>{children}</IconProvider>
          </ToastProvider>
        </DataThemeProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}

import { optimize } from 'svgo';

export function optimizeSvg(svg: string) {
  return optimize(svg, {
    plugins: [
      {
        name: 'preset-default',

        params: {
          overrides: {
            inlineStyles: {
              onlyMatchedOnce: false,
            },
          },
        },
      },
      'removeDimensions',
      'removeViewBox',
      'removeComments',
      'removeTitle',
    ],
  }).data;
}

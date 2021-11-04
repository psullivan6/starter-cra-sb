const viewports = {
  largeDesktopFS: {
    name: 'Large Desktop (Fullscreen)',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  mediumDesktopFS: {
    name: 'Medium Desktop (Fullscreen)',
    styles: {
      width: '1680px',
      height: '1050px',
    },
  },
  largeDesktop: {
    name: 'Large Desktop',
    styles: {
      width: '1920px',
      height: '1019px',
    },
  },
  mediumDesktop: {
    name: 'Medium Desktop',
    styles: {
      width: '1680px',
      height: '989px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports,
  },
};

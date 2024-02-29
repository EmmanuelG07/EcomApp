type Fonts = {
  regular: FontObj;
  medium: FontObj;
  italic: FontObj;
  boldItalic: FontObj;
  bold: FontObj;
};

type FontObj = {
  fontFamily: string;
};

export const fonts: Fonts = {
  regular: {
    fontFamily: 'Roboto-Regular',
  },
  italic: {
    fontFamily: 'Roboto-Italic',
  },
  medium: {
    fontFamily: 'Roboto-Medium',
  },

  bold: {
    fontFamily: 'Roboto-Bold',
  },
  boldItalic: {
    fontFamily: 'Roboto-BoldItalic',
  },
};

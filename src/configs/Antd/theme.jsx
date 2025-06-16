const configAntd = {
  token: {
    colorSuccess: "#22c55e",
    colorWarning: "#ff7849",
    colorError: "#ff5630",
    colorInfo: "#00b8d9",
    colorPrimary: "#45612D",
    colorLink: "#45612D",
    colorTextLabel: "#45612D",
    wireframe: false,
    borderRadiusSM: 2,
    borderRadius: 4,
    borderRadiusLG: 8,
    motion: true,
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.3s",
  },
  components: {
    Radio: {
      colorTextLabel: "#45612D",
    },
    Breadcrumb: {
      fontSize: 12,
      separatorMargin: 4,
    },
    Table: {
      borderRadius: 8,
    },
    Modal: {
      borderRadius: 8,
      motionDurationMid: "0.2s", // Align with token
      motionDurationSlow: "0.3s", // Align with token
    },
    Card: {
      borderRadius: 8,
    },
    Menu: {
      fontSize: 14,
      colorFillAlter: "transparent",
      itemColor: "rgb(145, 158, 171)",
      motionDurationMid: "0.2s", // Align with token
      motionDurationSlow: "0.3s", // Align with token
    },
    Tabs: {
      itemColor: "#44602C",
      itemSelectedColor: "#44602C",
      itemHoverColor: "#44602C",
      titleFontSize: 18,
      horizontalMargin: "0",
    },
    List: {
      itemPaddingLG: 12,
      fontSize: 20,
      borderRadius: 8,
      colorBorder: "#44602C",
      colorText: undefined,
    },
    Button: {
      controlTmpOutline: "transparent",
      motion: true,
      primaryShadow: "transparent",
    },
    Segmented: {
      itemSelectedBg: "#45612D",
      itemSelectedColor: "#ffffff",
      itemHoverColor: "#45612D",
    },
  },
};

export default configAntd;

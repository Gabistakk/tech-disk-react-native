import { useFonts } from "expo-font";

export function interFont() {
  return useFonts({
    InterBlack: require("./static/Inter-Black.ttf"),
    InterBold: require("./static/Inter-Bold.ttf"),
    InterExtraBold: require("./static/Inter-ExtraBold.ttf"),
    InterExtraLight: require("./static/Inter-ExtraLight.ttf"),
    InterLight: require("./static/Inter-Light.ttf"),
    InterMedium: require("./static/Inter-Medium.ttf"),
    InterRegular: require("./static/Inter-Regular.ttf"),
    InterSemiBold: require("./static/Inter-SemiBold.ttf"),
    InterThin: require("./static/Inter-Thin.ttf"),
  });
}

export function epilogueFont() {
  return useFonts({
    EpilogueBlack: require("./static/Epilogue-Black.ttf"),
    EpilogueBold: require("./static/Epilogue-Bold.ttf"),
    EpilogueExtraBold: require("./static/Epilogue-ExtraBold.ttf"),
    EpilogueExtraLight: require("./static/Epilogue-ExtraLight.ttf"),
    EpilogueLight: require("./static/Epilogue-Light.ttf"),
    EpilogueMedium: require("./static/Epilogue-Medium.ttf"),
    EpilogueRegular: require("./static/Epilogue-Regular.ttf"),
    EpilogueSemiBold: require("./static/Epilogue-SemiBold.ttf"),
    EpilogueThin: require("./static/Epilogue-Thin.ttf"),
  });
}

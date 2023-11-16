import React from "react";
import { Text, View } from "react-native";
import Tag from "../assets/svg/crudServices/tag";

function Chip({ text='não encontrado' }) {
  return (
    <View className="relative flex justify-center items-center mb-2">
      <Tag className="absolute" />
      <Text
        className="absolute -translate-y-1 text-center text-ellipsis overflow-hidden max-h-12 w-28"
        style={{ fontFamily: "InterMedium", fontSize: 16, color: "#667085" }}
      >
        {text}
      </Text>
    </View>
  );
}

export default Chip;

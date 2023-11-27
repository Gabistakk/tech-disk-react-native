import React from "react";
import { Text, View } from "react-native";
import TagServices from "../../assets/svg/crudServices/tagServices";

function TasksChip({ text='não encontrado' }) {
  return (
    <View className="relative flex justify-center items-center mb-2 mt-2">
      <TagServices className="absolute" />
      <Text
        className="absolute text-center text-ellipsis overflow-hidden max-h-12 w-28"
        style={{ fontFamily: "InterMedium", fontSize: 16, color: "#667085" }}
      >
        {text}
      </Text>
    </View>
  );
}

export default TasksChip;

import { View, Text, Image } from "react-native";
import { TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
const index = () => {
  const changePg = () => {
    router.push("/main/spalsh");
  };
  const changePg1 = () => {
    router.push("/auth/login");
  };
  return (
    <View className="min-h-screen flex justify-center items-center w-[90%] mx-auto ">
      <View className=" flex justify-center items-center ">
        <Image
          className="w-[280px] text-center mx-auto h-[320px]"
          source={require("../../../assets/images/food2.png")}
        />
      </View>
      <View className="flex gap-7 mt-[50px]">
        <View className="">
          <Text className="mb-1 font-medium text-start text-[40px]">
                                                    Free Deliveries for ONE MONTH!!
          </Text>
          <Text className="font-light text-base text-slate-500">
                                                    Get your favorite meals delivered to your doorstep for free with our online food delivery app - enjoy a whole month of complimentary delivery!
          </Text>
        </View>
        <View className="flex justify-center items-center gap-[10px] flex-row">
          <TouchableOpacity
            onPress={changePg}
            className="flex-1 p-3 rounded-lg"
          >
            <Text className="text-black text-center font-light text-base">
              Skip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-cyan-400 p-3 rounded-lg">
            <Text className="text-white font-normal text-center text-base">
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function BusinnesListCard({ business }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        gap: 10,
      }}
      onPress={() => router.push(`/businessdetail/${business.id}`)}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: 150,
          height: 120,
          borderRadius: 10,
          resizeMode: "stretch",
        }}
      />
      <View style={{ flex: 1, gap: 5 }}>
        {/* flex: 1 membuat komponen ini memiliki sifat flexible, sehingga akan mengisi ruang yang tersedia  */}
        {/* dan beradaptasi dengan ukuran parentnya  */}
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          {business.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 15 }}
        >
          {business.address}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Image
            source={require("./../../assets/images/star.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ fontFamily: "outfit" }}>4.5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

import React from "react";
import styled from "styled-components/native";
import { View, Dimensions } from "react-native";

const GridView = ({ navigation, images, numColumns }) => {
  const gridPaddingSize = 8; // 그리드 전체의 패딩 크기
  const marginSize = 2; // 각 사진의 마진 크기
  const totalMargin = marginSize * 2 * numColumns; // 전체 마진의 크기 (좌우 마진)
  const size =
    (Dimensions.get("window").width - totalMargin - gridPaddingSize * 2) /
    numColumns; // 전체 너비에서 마진을 뺀 후 사진 크기 결정

  const Container = styled.View`
    padding: ${gridPaddingSize}px;
  `;

  // 이미지를 위한 스타일드 컴포넌트
  const ImageItem = styled.Image`
    width: ${size}px;
    height: ${size}px;
  `;

  // 이미지를 감싸는 컨테이너
  const ItemContainer = styled.TouchableOpacity`
    width: ${size}px;
    height: ${size}px;
    margin: ${marginSize}px;
  `;

  const onItemPress = ({ image }) => {
    navigation.navigate("DetailFeed", { imageId: image?.id });
  };

  // images 배열을 numColumns의 수에 따라 나누어줍니다.
  const rows = images.reduce((rowsAccumulator, currentItem, index) => {
    const rowIndex = Math.floor(index / numColumns);
    if (!rowsAccumulator[rowIndex]) {
      rowsAccumulator[rowIndex] = [];
    }
    rowsAccumulator[rowIndex].push(currentItem);
    return rowsAccumulator;
  }, []);

  return (
    <Container>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: "row" }}>
          {row.map((image, imageIndex) => (
            <ItemContainer key={imageIndex} onPress={() => onItemPress(image)}>
              <ImageItem source={image.uri ? { uri: image.uri } : image} />
            </ItemContainer>
          ))}
        </View>
      ))}
    </Container>
  );
};

export default GridView;

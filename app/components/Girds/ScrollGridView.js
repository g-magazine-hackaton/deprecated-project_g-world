/**
 * 사용 예제: <GridView images={yourImageArray} />
 */

import React from "react";
import styled from "styled-components/native";
import { FlatList, Dimensions } from "react-native";

const NUM_COLUMNS = 3; // 한 줄에 3개의 사진
const SIZE = Dimensions.get("window").width / NUM_COLUMNS; // 전체 너비를 3으로 나누어 사진 크기 결정

// 이미지를 위한 스타일드 컴포넌트
const ImageItem = styled.Image`
  width: ${SIZE}px;
  height: ${SIZE}px;
`;

// 이미지를 감싸는 컨테이너
const ItemContainer = styled.View`
  flex: 1;
  margin: 1px;
  height: ${SIZE}px;
`;

// 이미지 렌더링을 위한 함수
const renderItem = ({ item }) => {
  return (
    <ItemContainer>
      <ImageItem source={item} />
    </ItemContainer>
  );
};

// 그리드 뷰를 위한 컴포넌트
const GridView = ({ images }) => {
  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={NUM_COLUMNS}
    />
  );
};

export default GridView;

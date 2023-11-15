import axios from "axios";
import base64 from "base-64";

const ES_URL = "http://192.168.219.142:9200"; // Elasticsearch 인스턴스 URL

export const fetchDataFromES = async (method, path, body = {}) => {
  try {
    // 요청 옵션 설정
    const requestOptions = {
      method: method,
      url: `${ES_URL}/${path}`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Basic ${base64.encode(`${USERNAME}:${PASSWORD}`)}`,
      },
    };

    // GET 메소드가 아닌 경우에만 body(data) 추가
    if (method.toUpperCase() !== "GET") {
      requestOptions.data = body;
    }

    // 요청 실행
    const response = await axios(requestOptions);
    return response.data.hits.hits; // 실제 검색 결과를 반환합니다
  } catch (error) {
    throw error; // 오류를 다시 throw하여 호출자에게 전파합니다
  }
};

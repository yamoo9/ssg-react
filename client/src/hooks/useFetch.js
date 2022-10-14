import { useState, useEffect } from 'react';

// 비동기 통신 요청/응답 로직 재사용
// 상태 [로딩, 오류, 데이터] 반환
// React Hooks API
// React Hook은 특별한 함수 (규칙)

export const useFetch = (endpoint) => {
  // STATE
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [data, setData] = useState(null);

  // SIDE EFFECTS
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { loading, error, data, setData };
};

# G-world

지마켓 사내 해커톤을 위한 프로토타입 어플리케이션. React Native를 사용하여 iOS와 Android 양쪽 모두에서 동작하는 앱을 개발할 수 있습니다.

## 설치 방법

### 1. 저장소 복제

저장소를 로컬 시스템으로 복제합니다.

```bash
git clone https://github.com/woorim960/g-world
```

### 2. 필수 도구 설치

- **Node.js:** 애플리케이션 개발에 필요한 JavaScript 런타임입니다. [여기](https://nodejs.org/en/download)에서 다운로드할 수 있습니다.
- **Expo:** React Native 애플리케이션 개발을 위한 프레임워크입니다. Expo CLI를 설치합니다.
  ```bash
  npm install -g expo-cli
  ```
- **Docker & Docker Compose:** 애플리케이션 컨테이너화를 위한 도구입니다. 맥과 윈도우에서는 Docker Desktop을 설치하면 Docker Compose도 함께 설치됩니다.
  - Docker 설치: [여기](https://docs.docker.com/get-docker/)에서 설치할 수 있습니다.
  - Docker Compose 설치: [여기](https://docs.docker.com/compose/install/)에서 설치할 수 있습니다.

### 3. 의존성 설치

앱의 의존성을 설치합니다.

```bash
# 앱 폴더로 이동
cd g-world/app

# 의존성 설치
npm install
```

## 시작하기

### 1. ES와 Kibana 실행

Elasticsearch와 Kibana 서버를 Docker Compose를 사용하여 실행합니다.

```bash
# app 폴더에서 상위 디렉토리로 이동
cd ../

# 도커 컴포즈로 서버 실행
docker-compose up -d
```

### 2. Expo 서버 실행

Expo 서버를 시작합니다.

```bash
# Expo 서버 실행
npm start
```

### 3. QR 코드 스캔

- 터미널에 노출된 QR 코드를 모바일 폰으로 스캔합니다.
- 모바일 폰에 Expo 앱이 설치되어 있어야 합니다. (OS 별 앱스토어에서 다운로드 가능합니다.)

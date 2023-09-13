# 하나캐피탈 DT 리빌드 PC

해당 프로젝트는 **[VueJS 3](https://v3.vuejs.org/)** 라이브러리로 작업 된 프로젝트입니다.  
**[NodeJS](https://nodejs.org/ko/)** 설치 및 이용이 필수이며, package 관리는 **[yarn](https://yarnpkg.com/)** 을 이용중입니다.  



## 환경

- NodeJS **v18**
- yarn
- VSCode Editor
- VueJS 3
- SCSS



## VSCode 필요 플러그인
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)



## NAS 서버

[http://mwkorea.ipdisk.co.kr:8000/pub/hanacapital-dt-rebuild/pc/](http://mwkorea.ipdisk.co.kr:8000/pub/hanacapital-dt-rebuild/pc/)



## NAS DEV 서버

[http://mwkorea.ipdisk.co.kr:8000/pub/hanacapital-dt-rebuild/pc-dev/](http://mwkorea.ipdisk.co.kr:8000/pub/hanacapital-dt-rebuild/pc-dev/)



## 배포

깃헙 [Action 탭](https://github.com/mwkorea-frontend/hanacapital-DT-rebuild-PC/actions)에서 현황 확인 가능합니다.  
해당 배포 시스템에서 에러가 나면 실 개발 서버에서도 에러가 난다는 뜻이오니 에러가 나진 않은지 확인 꼭 해주세요.

- **[main]**  
***main*** 브랜치에 새로운 내용이 *push* 가 되면,  
*GIT Action* 을 이용해 자동으로 NAS 서버까지 빌드 및 배포를 진행합니다.  
별도로 빌드 및 FTP 접속, 전송을 하지 않아도 됩니다.  
***!! main 브랜치 관리에 유의 해주세요.***  
관련 소스 : /.github/workflows/deploy.yml

- **[dev]**  
***dev*** 브랜치에 새로운 내용이 *push* 가 되면,  
*GIT Action* 을 이용해 자동으로 NAS DEV 서버까지 빌드 및 배포를 진행합니다.  
별도로 빌드 및 FTP 접속, 전송을 하지 않아도 됩니다.  
에이전트 권효승 작업분량에 한에 퍼블 화면 확인용으로 이용됩니다.  
해당 분량의 검수 및 수정이 정식 배포 타이밍과 안맞을수 있어 별도로 관리합니다.  
관련 소스 : /.github/workflows/dev-deploy.yml



## 네이밍 및 인코딩

- 인코딩 : utf-8
- scss 클래스 네이밍 : BEM + Kebab Case
- javascript 변수 및 함수명 네이밍 : Camel Case
- vue 컴포넌트 네이밍 : Pascal Case



## 파일 및 폴더 네이밍
- **/public/**  
: Kebab Case  
: 정적 이미지 및 파일 모음

- **/public/legacy/**  
: 관리자에서 등록 되는 html 소스를 출력 해야할때 iframe(IframeContents 컴포넌트)을 이용하여 보여주고있습니다.  
AS-IS css, js 를 바라보는 소스라 뷰 프로젝트와 충돌 위험도가 있어 별도로 구성하였습니다.

- **/src/assets/images/**  
: Kebab Case  
: 이미지 모음

- **/src/assets/scss/components/import/**  
: Kebab Case  
: 여러 화면에서 사용하여 공통화가 필요한 스타일 모음.  
상위 클래스명과 파일명을 동일하게 관리.  
필요한 화면 scss에서 import 하여 사용.

- **/src/assets/scss/components/ui/**  
: */src/components/ui/* 와 파일명 규칙 동일 및 동일 구조

- **/src/assets/scss/layouts/**  
: */src/layouts/* 와 파일명 규칙 동일 및 동일 구조

- **/src/assets/scss/views/**  
: */src/views/* 와 파일명 규칙 동일 및 동일 구조

- **/src/assets/scss/common.scss**  
: 자주 쓰이는 소형 스타일들 모음

- **/src/assets/scss/function.scss**  
: 공통 scss 함수 모음

- **/src/assets/scss/mixins.scss**  
: 공통 scss mixin 모음

- **/src/assets/scss/variable.scss**  
: 공통 scss 변수 모음

- **/src/components/ui/**  
: 폴더는 Camel Case / vue 파일은 Pascal Case  
: 공통적으로 자주 쓰이는 컴포넌트 모음

- **/src/layouts/**  
: 폴더는 Camel Case / vue 파일은 Pascal Case  
: 레이아웃 관련 소스 모음

- **/src/views/**  
: 폴더는 Camel Case / vue 파일은 Pascal Case 혹은 화면 아이디  
: 실질적으로 화면단에 보이는 vue 파일 모음



## 명령어

예 :

    > yarn dev

- **dev :** 로컬 개발 서버 실행
- **dev-stage :** stage 환경으로 로컬 개발 서버 실행
- **build :** 실제 운영 서버에서 사용하는 소스 파일 생성
- **preview :** build 된 파일로 로컬 서버 실행
- **lint :** 소스 에러 체크
- **publish-build :** NAS 서버(퍼블 화면 확인용)에서 사용하는 소스 파일 생성
- **publish-dev-build :** NAS 서버(에이전트 권효승 작업분량 퍼블 화면 확인용)에서 사용하는 소스 파일 생성

<script>
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const datas = () => [
  /*
  {
    depth1: '',
    datas: [
      {
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/',
        status: 'ing', // ing, partend, end, moding, confirm
        create: '2023.03.24',
        log: [
          {
            // { date: '2023.03.24', text: '' },
          }
        ],
      },
    ],
  },
  */
  {
    depth1: '공통',
    datas: [
      {
        depth2: '로딩',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/loading-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 1',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 2',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '버튼 한개',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/alert-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '버튼 두개',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/alert-002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '타이틀만 있는 경우',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/alert-003',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '텍스트만 있는 경우',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/alert-004',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2:
          '본인인증\nCommon_P00_p003\nCommon_P00_p004\nCommon_P00_p006\nCommon_P00_p007\nCommon_P00_p008\nCommon_P00_p016',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/identification/Common_P00_p003',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '약관동의',
        depth3: '상세',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/clause-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '직장검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/search-workplace-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '주소검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/search-address-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '대출계산기',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/loan-calculator-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '안내팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/guide-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '앱 설치 안내\nCommon_P00_p012',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/redirect/Common_P00_p012',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '오류 안내\nCommon_P00_p013',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/error/Common_P00_p013',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
    ],
  },
  {
    depth1: '메인',
    datas: [
      {
        depth2: '홈\nMain_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/home',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: '회원관리',
    datas: [
      {
        depth2: '로그인\nMember_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P01_p001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '로그인\nMember_P01_p001',
        depth3: '비밀번호 변경안내\nMember_P01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P01_p002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '로그인\nMember_P01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '아이디 찾기\nMember_P03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P03_p001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '아이디 찾기\nMember_P03_p001',
        depth3: '성공\nMember_P03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P03_p002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '아이디 찾기\nMember_P03_p001',
        depth3: '실패\nMember_P03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P03_p003',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '비밀번호 찾기\nMember_P04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P04_p001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '비밀번호 찾기\nMember_P04_p001',
        depth3: '신규비밀번호 입력\nMember_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P04_p002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '비밀번호 찾기\nMember_P04_p001',
        depth3: '변경완료\nMember_P04_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P04_p003',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '회원가입\nMember_P05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P05_p001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '회원가입\nMember_P05_p001',
        depth3: '회원정보 입력\nMember_P05_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P05_p002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '회원가입\nMember_P05_p001',
        depth3: '가입완료\nMember_P05_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P05_p005',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '회원가입\nMember_P05_p001',
        depth3: '앱회원 회원가입\nMember_P05_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P05_p006',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
    ],
  },
  {
    depth1: '고객센터',
    datas: [
      {
        depth2: 'FAQ\nCustomer_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P01_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '고객상담',
        depth3: '본인인증\nCustomer_P02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P02_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '고객상담',
        depth3: '상담정보 입력\nCustomer_P02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P02_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '고객상담',
        depth3: '완료\nCustomer_P02_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P02_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '목록\nCustomer_P03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P03_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '상세\nCustomer_P03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P03_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '이벤트',
        depth3: '목록\nCustomer_P04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P04_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '이벤트',
        depth3: '상세\nCustomer_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P04_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '인증센터\nCustomer_P11_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P11_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '인증센터\nCustomer_P11_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/customer-001',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: '개인금융',
    datas: [
      {
        depth2: 'e하나신용대출',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '본인인증\nPF_P01_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '고객정보입력\nPF_P01_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P01_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p004',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P01_p004',
        depth5: '대출신청불가\nPF_P01_p007',
        depth6: '',
        path: '/personal-loan/PF_P01_p007',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P01_p004',
        depth5: '한도조회오류\nPF_P01_p008',
        depth6: '',
        path: '/personal-loan/PF_P01_p008',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '신청정보입력\nPF_P01_p005',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p005',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '대출신청완료\nPF_P01_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p006_001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 내\nPF_P01_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p006_002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 외\nPF_P01_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p006_003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '대출신청실패\nPF_P01_p009',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p009_001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '대출신청실패_Fraud 대상자\nPF_P01_p009',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p009_002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '대출신청실패_오류\nPF_P01_p009',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p009_003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '한도조회',
        depth4: '자동송금 비대상_신청완료\nPF_P01_p010',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p010',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '한도조회',
        depth4: '본인인증\nPF_P02_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '한도조회',
        depth4: '고객정보입력\nPF_P02_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P02_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p004',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '한도조회',
        depth4: '신청정보입력\nPF_P02_p005',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p005',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '한도조회',
        depth4: '대출신청완료\nPF_P02_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p006_001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 내\nPF_P02_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p006_002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 외\nPF_P02_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p006_003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출',
        depth3: '한도조회',
        depth4: '본인인증\nPF_P04_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출',
        depth3: '한도조회',
        depth4: '고객정보입력\nPF_P04_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P04_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p004',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출',
        depth3: '한도조회',
        depth4: '신청정보입력\nPF_P04_p005',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p005',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출',
        depth3: '한도조회',
        depth4: '대출신청완료\nPF_P04_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p006',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-004',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '한도조회',
        depth4: '본인인증\nPF_P05_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '한도조회',
        depth4: '고객정보입력\nPF_P05_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P05_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p004',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '한도조회',
        depth4: '신청정보입력\nPF_P05_p005',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p005',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '한도조회',
        depth4: '대출신청완료\nPF_P05_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p006_001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 내\nPF_P05_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p006_002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 외\nPF_P05_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p006_003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-005',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '계좌운영규칙 동의/증권사 선택\nPF_P07_p001',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '상품별 안내\nPF_P07_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '대출 전 주요 체크포인트 확인\nPF_P07_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '실명 및 본인인증\nPF_P07_p004',
        depth6: '',
        path: '/personal-loan/PF_P07_p004',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '대출정보 입력\nPF_P07_p005',
        depth6: '',
        path: '/personal-loan/PF_P07_p005',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '계약정보 확인\nPF_P07_p006',
        depth6: '',
        path: '/personal-loan/PF_P07_p006',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '적합성/적정성 원칙 확인\nPF_P07_p007',
        depth6: '',
        path: '/personal-loan/PF_P07_p007',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '대출약정\nPF_P07_p008',
        depth6: '',
        path: '/personal-loan/PF_P07_p008',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '대출입금\nPF_P07_p009',
        depth6: '',
        path: '/personal-loan/PF_P07_p009',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '대출신청',
        depth4: '대출신청완료\nPF_P07_p010',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p010',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '연장신청',
        depth4: '실명 및 본인인증\nPF_P07_p011',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p011',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '연장신청',
        depth4: '계약정보 확인\nPF_P07_p012',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p012',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '연장신청',
        depth4: '신청완료\nPF_P07_p013',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p013',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '사업자주택담보대출',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-006',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '사업자주택담보대출',
        depth3: '상담신청',
        depth4: '본인인증/약관동의\nPF_P09_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P09_p002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '사업자주택담보대출',
        depth3: '상담신청',
        depth4: '고객정보 입력\nPF_P09_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P09_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '사업자주택담보대출',
        depth3: '상담신청',
        depth4: '상담신청 완료\nPF_P09_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P09_p004',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
    ],
  },
  {
    depth1: '온라인지점',
    datas: [
      {
        depth2: '메인',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/online-branch-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/online-branch-002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '계약현황\nMI_P00_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '자동이체 계좌 변경\nMI_P00_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청구 방법/청구지 변경\nMI_P00_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p004',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청구 방법/청구지 변경\nMI_P00_p004',
        depth4: '본인인증\nMI_P00_p005',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p005',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청구 방법/청구지 변경\nMI_P00_p004',
        depth4: '변경완료\nMI_P00_p006',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p006',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: 'SMS안내 수신/변경\nMI_P00_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p007',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: 'SMS안내 수신/변경\nMI_P00_p007',
        depth4: '본인인증\nMI_P00_p008',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p008',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: 'SMS안내 수신/변경\nMI_P00_p007',
        depth4: '변경완료\nMI_P00_p009',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p009',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '중도상환신청\nMI_P00_p010',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p010',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '중도상환신청\nMI_P00_p010',
        depth4: '중도상환 조건 입력\nMI_P00_p011',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p011',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '중도상환신청\nMI_P00_p010',
        depth4: '신청 완료\nMI_P00_p012',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p012',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '근저당설정 조회/해지신청\nMy_p04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p04_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '근저당설정 조회/해지신청\nMy_p04_p001',
        depth4: '해지신청',
        depth5: '본인인증\nMy_p04_p002',
        depth6: '',
        path: '/online-branch/My_p04_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '근저당설정 조회/해지신청\nMy_p04_p001',
        depth4: '해지신청',
        depth5: '신청 완료\nMy_p04_p003',
        depth6: '',
        path: '/online-branch/My_p04_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '범칙금/자동차세 조회\nMI_P00_p013',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p013',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '지정운전자 등록\nMI_P00_p014',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p014',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '지정운전자 등록\nMI_P00_p014',
        depth4: '정보 입력\nMI_P00_p015',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p015',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '지정운전자 등록\nMI_P00_p014',
        depth4: '등록 완료\nMI_P00_p016',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p016',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '신청서 작성\nMy_p05_p002',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '서류등록\nMy_p05_p003',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '본인인증/약관동의\nMy_p05_p004',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p004',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '신청완료\nMy_p05_p005',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p005',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청약철회권신청\nMy_p06_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p06_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청약철회권신청\nMy_p06_p001',
        depth4: '신청서 작성\nMy_p06_p002',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p06_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청약철회권신청\nMy_p06_p001',
        depth4: '신청완료\nMy_p06_p004',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p06_p004',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리',
        depth4: '렌트\nMy_P08_p001',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_P08_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리',
        depth4: '리스\nMy_P08_p003',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_P08_p003',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: '부가서비스',
    datas: [
      {
        depth2: '진행상태조회',
        depth3: '약관동의/본인인증\nMy_P02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P02_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '진행상태조회',
        depth3: '조회 결과\nMy_P02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P02_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '서류등록',
        depth3: '약관동의/본인인증\nMy_P02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P05_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '서류등록',
        depth3: '서류등록\nMy_P02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P05_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '서류등록',
        depth3: '등록완료\nMy_P05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P05_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '온라인약정',
        depth3: '본인인증\nMy_P05_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P06_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '약정목록\nMy_P05_p003',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P06_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '약정목록\nMy_P05_p003',
        depth3: '약정안내\nMy_P06_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P06_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '약정목록\nMy_P05_p003',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/additional-service-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '상담등록\nEtc_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/Etc_P01_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '상담등록\nEtc_P01_p001',
        depth3: '등록완료\nEtc_P01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/Etc_P01_p002',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: '재고금융 (영업용)',
    datas: [
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/inventory-finance-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '신규대출신청',
        depth4: '상담신청\nIF_P02_p002',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '신규대출신청',
        depth4: '대출약정\nIF_P02_p004',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p004',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '신규대출신청',
        depth4: '약정완료\nIF_P02_p005',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p005',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/inventory-finance-002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '계약정보 선택\nIF_P03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P03_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '조건입력/선택\nIF_P03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P03_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '조회결과 및 신청\nIF_P03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P03_p003',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '신청완료\nIF_P03_p008',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P03_p008',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '만기연장\nIF_P04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P04_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '만기연장\nIF_P04_p001',
        depth3: '조건입력 및 내역확인\nIF_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P04_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '만기연장\nIF_P04_p001',
        depth3: '신청완료\nIF_P04_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P04_p003',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: 'LM 블로그 (영업용)',
    datas: [
      {
        depth2: '대출상담\nLM_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P01_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '대출상담\nLM_P01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/lm-blog-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '대출상담\nLM_P01_p001',
        depth3: '고객정보 입력\nLM_P01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P01_p002',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '빠른 대출상담신청 내역\nLM_P02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P02_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: 'SMS 상담요청 내역\nLM_P03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P03_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '접속통계\nLM_P04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P04_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '현황조회\nLM_P05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P05_p001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '현황조회\nLM_P05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/lm-blog-002',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
];

export default {
  setup() {
    const tableDatas = datas();

    const route = useRoute();

    const statusText = {
      pending: '보류',
      ing: '작업중',
      partend: '부분작업완료',
      end: '작업완료',
      moding: '수정중',
      confirm: '검수완료',
    };
    const dates = (() => {
      const array = [];

      const add = (date) => {
        if (
          typeof date === 'string' &&
          date.length &&
          array.indexOf(date) === -1
        ) {
          array.push(date);
        }
      };

      tableDatas.forEach((item) => {
        item.datas.forEach((data) => {
          add(data.create);

          data.log.sort((a, b) => {
            var dateA = a.date.toUpperCase();
            var dateB = b.date.toUpperCase();
            if (dateA < dateB) {
              return -1;
            }
            if (dateA > dateB) {
              return 1;
            }
            return 0;
          });

          data.log.forEach((log) => {
            add(log.date);
          });

          if (data.log.length) {
            data.update = data.log[data.log.length - 1].date;
          }
        });
      });

      array.sort();

      return array;
    })();
    const latestDate = dates[dates.length - 1];

    const renderVal = (datas, i, key, testKey) => {
      const val = datas[i][key];
      const testVal = testKey && datas[i][testKey];
      const prevIndex = i - 1;
      const result = val.replace(/\n/g, '<br>');

      if (!(prevIndex >= 0 && datas[prevIndex])) return result;

      const noRender = datas[prevIndex][key] === val;

      if (testVal) {
        if (testVal === datas[prevIndex][testKey] && noRender) {
          return '';
        } else {
          return result;
        }
      } else {
        if (noRender) {
          return '';
        } else {
          return result;
        }
      }
    };

    const printVal = (val) => {
      return val.replace(/\n/g, '<br>');
    };

    const bottomBar = ref(null);
    const fake = ref(null);

    const path = computed(() => {
      return route.path;
    });

    const update = () => {
      if (bottomBar.value && fake.value) {
        const height = bottomBar.value.offsetHeight;
        fake.value.style.height = `${height}px`;
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && bottomBar.value) {
        bottomBar.value.style.marginLeft = `-${html.scrollLeft}px`;
      }
    };

    const resize = () => {
      scroll();
      update();
    };

    const load = () => {
      resize();
    };

    onMounted(() => {
      update();

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
    });

    onUpdated(() => {
      update();
    });

    onUnmounted(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    return {
      bottomBar,
      fake,
      tableDatas,
      statusText,
      latestDate,
      path,
      renderVal,
      printVal,
    };
  },
};
</script>

<template>
  <div class="contIndex">
    <div class="index-wrap">
      <div class="index">
        <h1 class="index-title">하나캐피탈 - PC</h1>
        <div class="index-gnb">
          <div class="index-links">
            <div class="index-links__inner">
              <a
                :href="`${
                  path.match('guide-index') ? '..' : '.'
                }/guide/component`"
                target="_blank"
                class="index-button"
              >
                컴포넌트 가이드
              </a>
            </div>
          </div>
        </div>
        <div class="index-bottom" ref="bottomBar">
          <div class="index-links">
            <div class="index-links__inner">
              <a
                v-for="(item, i) in tableDatas"
                :key="i"
                :href="`#section${i}`"
                class="index-button"
              >
                {{ item.depth1 }}
              </a>
            </div>
          </div>
        </div>
        <div class="index-datas" id="indexTable">
          <div
            class="index-section"
            v-for="(item, i) in tableDatas"
            :key="i"
            :id="`section${i}`"
          >
            <h2 class="index-section__title">{{ item.depth1 }}</h2>
            <div class="index-table">
              <table>
                <colgroup>
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col />
                  <col width="100px" />
                  <col width="100px" />
                  <col width="110px" />
                  <col width="300px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>depth2</th>
                    <th>depth3</th>
                    <th>depth4</th>
                    <th>depth5</th>
                    <th>depth6</th>
                    <th>path</th>
                    <th>status</th>
                    <th>create</th>
                    <th>update</th>
                    <th>log</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in item.datas" :key="i">
                    <td v-html="renderVal(item.datas, i, 'depth2')"></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth3', 'depth2')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth4', 'depth3')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth5', 'depth4')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth6', 'depth5')"
                    ></td>
                    <td>
                      <a
                        :href="`${path.match('guide-index') ? '..' : '.'}${
                          data.path
                        }`"
                        target="_blank"
                      >
                        {{ data.path }}
                      </a>
                    </td>
                    <td>
                      <span
                        v-if="data.status.length"
                        :class="`index-status index-status--${data.status}`"
                      >
                        {{ statusText[data.status] }}
                      </span>
                    </td>
                    <td
                      :class="{
                        'is-emphasis': latestDate === data.create,
                      }"
                    >
                      {{ data.create }}
                    </td>
                    <td
                      :class="[
                        {
                          'is-emphasis': latestDate === data.update,
                        },
                      ]"
                    >
                      {{ data.update }}
                    </td>
                    <td>
                      <ul v-if="data.log.length" class="index-log">
                        <li
                          v-for="(log, i) in data.log"
                          :key="i"
                          :class="[
                            'index-log__item',
                            {
                              'is-emphasis': latestDate === log.date,
                            },
                          ]"
                        >
                          <div class="index-log__date">
                            <span>[{{ log.date }}]</span>
                          </div>
                          <div
                            class="index-log__text"
                            v-html="printVal(log.text)"
                          ></div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-fake-botttom" ref="fake"></div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideIndex.scss';
</style>

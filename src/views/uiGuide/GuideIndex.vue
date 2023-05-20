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
        path: '/guide/clause-detail-001',
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
        path: '/guide/sign-in-001',
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
        path: '/guide/customer-certificate-001',
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

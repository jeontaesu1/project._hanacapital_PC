<script>
// Customer_P13_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>이용 시 유의사항</PageTitle>
    </PageHead>

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">
          홈페이지 이용 시 유의사항
        </h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              주민등록번호나 생일, 전화번호 등 다른 사람이 쉽게 추측할 수 있는
              비밀번호를 사용하지 말아 주시기 바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비밀번호는 주기적으로 변경하여 사용하시고 같은 번호를 재사용하지
              않으며 비밀번호가 노출된 것으로 판단하는 경우 지체 없이 비밀번호를
              변경하시기 바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              홈페이지 이용에 필요한 정보는 수첩이나 지갑 등 타인에게 쉽게
              노출될 수 있는 매체에 기록하지 마시고 금융회사 직원을 포함한 다른
              사람들에게 알려주지 마시기 바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              PC방 등 공공장소에서 사용하는 PC에서는 이용을 가급적 사용을 자제해
              주시고 사용한 경우에는 관련 이용 정보를 삭제해 주시기 바라며 이용
              후에는 반드시 로그아웃하여 주시기 바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              홈페이지 접속 시 제공하는 보안프로그램은 반드시 설치하시기
              바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              공동인증서는 하드디스크에 저장하기보다는 USB, 스마트 카드 등
              이동식 저장장치에 안전하게 보관하여 사용하시기 바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              의심되는 이메일이나 게시판의 글은 열어보지 말고 첨부파일 등을
              실행하거나 설치하기전에 반드시 백신 등으로 검사하시기 바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              사용하는 PC에 바이러스 백신, 스파이웨어 제거 프로그램을 꼭
              설치하고 최신윈도우 보안패치를 적용하시기 바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              홈페이지 주소는 주소 창에서 직접 입력하거나 즐겨찾기를 이용하여
              주시기 바랍니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              전화나 문자 등의 광고를 통해 대출을 이유로 선입금을 요구하거나
              상식수준 이상의 대출조건을 제시하는 경우 먼저 사기로 의심하고
              거래하는 금융회사의콜센터 등에 직접 연락하거나 방문하여 대출
              취급여부를 직접 확인하시기 바랍니다.
            </div>
          </li>
        </ul>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">피싱 사이트 주의</h3>

        <section>
          <h3 class="text-body-1 row-margin-item-group font-weight-medium">
            피싱(Phishing) 이란?
          </h3>

          <p class="text-body-3 color-gray-tertiary">
            개인정보(Private data)와 낚시(Fishing)의 합성어로 불특정 다수에게
            메일을 발송하거나 인터넷 대출 광고 등을 통해 위장된 사이트로 접속을
            유인하거나 PC에 침투한바이러스에 의해 금융사이트 접속 시
            위장사이트로 자동 접속되게 한 후 개인정보 및 계좌번호, 각종 비밀번호
            등 금융정보를 입력하도록 유도하는 신종 사기수법 입니다.
          </p>
        </section>

        <section class="row-margin-contents-small">
          <h3 class="text-body-1 row-margin-item-group font-weight-medium">
            피싱 사기 피해 예방
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                이메일 또는 온라인 게시판에 링크된 금융회사 사이트는 이용하지
                마세요
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                전자금융 거래 시에는 평소에 사용하던 즐겨찾기나 검색사이트를
                이용하여 해당 금융기관에 접속하십시오.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                이메일에 발송자의 신원 및 연락처, 개인정보 사용목적을 명시하지
                않은 e메일은 다시 한번 확인하십시오!
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                정상적인 금융회사 홈페이지는 암호 프로그램 설치, 바이러스 검색
                등을 한 후 거래화면이 나타납니다.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융회사를 가장한 이메일 또는 홈페이지에서 개인 신상정보 및
                금융정보 등을요구하는 경우에는 해당 금융회사, 경찰 또는
                한국정보보호 진흥원에 신고 하십시오
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                바이러스 백신 등 보안프로그램을 설치하시고, 주기적으로 업데이트
                하십시오.
              </div>
            </li>
          </ul>
        </section>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">보이스 피싱 주의</h3>

        <section>
          <h3 class="text-body-1 row-margin-item-group font-weight-medium">
            보이스피싱이란?
          </h3>

          <p class="text-body-3 color-gray-tertiary">
            전화를 통해 불법적으로 개인 정보를 빼내서 범죄에 사용하는 범죄를
            뜻하며, 주로 사람들이 쉽게 믿을 수 있는 금융기관이나 공공기관을
            사칭해 주민등록번호, 신용카드번호, 은행계좌번호 등을 알아내고 현금을
            인출하거나 다른 용도로 사용하는 금융 사기입니다.
          </p>
        </section>

        <section class="row-margin-contents-small">
          <h3 class="text-body-1 row-margin-item-group font-weight-medium">
            보이스피싱 예방법
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                미니홈피, 블로그 등에 전화번호 등 자신 및 가족의 개인정보를
                게시하지 않습니다.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                종친회, 동창회, 동호회 사이트 등에 주소록 및 비상연락처 파일을
                게시하지 않습니다.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                자녀 등 가족에 대한 비상시 연락을 위해 친구나 교사 등의 연락처를
                확보합니다.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                전화를 이용하여 계좌번호, 카드번호, 주민번호 등 정보를 요구하는
                경우 일체 대응하지 마십시요.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                현금지급기(CD/ATM)를 이용해서 세금 또는 보험료 환급, 등록금 납부
                등을 해준다는 안내에 일체 대응하지 마세요.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                동창생 또는 종친회원이라고 하면서 입금을 요구하는 경우 반드시
                사실 관계를 재확인하시기 바랍니다.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                전화 사기범들이 사용하는 전화는 추적을 피하기 위해 발신자 표시가
                없거나 처음 보는 국제번호를 사용하니 발신자 전화번호를
                확인하세요.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                자동응답시스템(ARS)이나 문자메시지를 이용하여 계좌번호나
                카드번호 등을 입력하게 하는 사기 전화를 주의하세요.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                신용카드 및 계좌이체 내역 등을 바로 확인할 수 있도록 휴대폰
                문자서비스를 적극 이용하세요.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                전화나 문자로 계좌번호를 알려주면서 대출관련 수수료를 요구하면
                절대로 대응하지 말고 꼭 해당 고객센터 전화번호 확인 후(114안내
                등) 문의하세요.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                속아서 전화사기범들 계좌에 자금을 이체했거나, 개인정보를 알려준
                경우, 즉시은행 및 관계 기관(금융감독원 1332, 한국인터넷진흥원
                118)에 신고하세요.
              </div>
            </li>
          </ul>
        </section>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">피해 신고</h3>

        <section>
          <h3 class="text-body-1 row-margin-item-group font-weight-medium">
            수사기관에 신고 : 신고접수는 수사기관에서 담당하고 있으며 경찰서와
            검찰청을 통해 가능합니다.
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                경찰청 : (국번없이)1379, http://www.police.go.kr
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                검찰청 : (국번없이)1301, http://www.spo.go.kr
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-small">
          <h3 class="text-body-1 row-margin-item-group font-weight-medium">
            한국인터넷진흥원 e콜센터118 신고
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                e콜센터 118는 신속한 신고 접수 및 대처 요령에 대해 상담을 하고
                있습니다.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                e콜센터 118 : (국번없이) 118 또는 http://www.boho.or.kr
              </div>
            </li>
          </ul>
        </section>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P13_p001.scss';
</style>

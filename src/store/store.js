import { createStore } from 'redux';

/*
 * Action
 */

const INCREMENT = "INCREMENT";


const profileData = {
  homeData: {
    title: 'MarVeloper',
    description: 'Developer with Marketer.',
    description2: `나의 일이 세상에 긍정적인 영향을 주는 일이 되기를 바랍니다.
      세상을 이롭게하는 마케팅을 사랑했으나, 보다 근본적으로 세상을 이롭게할 수 있는 개발을 만났습니다.
      지금은 개발에 모든 에너지를 쏟고 있습니다. :)`
  },
  aboutData: {
    title: 'About Me',
    description: `성장에 가치를 두는 사람으로 밝고 맑은 것들을 좋아합니다.
      가치로운 일에는 멘땅의 헤딩도 서슴지 않아 사서고생이라는 호를 가지고 있습니다.
      행동력, 통찰력, 끈기력을 가지고 있으며, 지구력을 키워내는 중입니다.
      사용자가 서비스를 적극적으로 이용할 수 있는 서비스를 만들기 위해
      고민하는 개발자입니다.
      사용자 편의성을 높이는 UI/UX와 사용자가 입력한 데이터를 효과적으로
      수집할 수 있는 화면을 좋은 코드로 작성하기 위해 매일 2시간 이상 개발
      공부를 하고 있습니다.`,
    major: [
      {
        title: 'Front-end',
        icon: 'fab fa-js-square',
        description: ["HTML5", "CSS3", "Javascript"]
      },
      {
        title: 'Back-end',
        icon: 'fab fa-java',
        description: ["Java", "nodejs"]
      },
      {
        title: 'Marketing',
        icon: 'fab fa-google',
        description: ["google Analytics, Tag Manager"]
      },
      {
        title: 'Front-end',
        icon: 'fab fa-js-square',
        description: ["HTML5", "Javascript"]
      },
      {
        title: 'Back-end',
        icon: 'fab fa-java',
        description: ["Java", "nodejs"]
      }
    ]

  },
  speech: {
    testimonials: [
      {
        name: '정성희/happytalk',
        speech: `1년동안 함께 일한 디자이너입니다. 커뮤니케이션 능력이 뛰어난 마케터로 부분을 보기보다는 전체를 볼줄 아는 마케터입니다.
        책임감 있게 프로젝트를 리딩했으며 지구력까지 겸비하였기 때문에 지금 하고 있는 개발의 업무도 끈기있게 물고 늘어질것이라고 생각합니다.<br />
        좋은 인생선배, 개발선배를 만나 김서현의 능력을 더 발휘하였으면 좋겠습니다.`,
        img: '/imgs/jsh.jpeg'
      },
      {
        name: '최여정/megait 아카데미',
        speech: `일을 병행하면서 학습을 이어가는 것이 쉽지 않았을텐데, 단 한번의 결석도 없었습니다. 오히려 공부에 대한 아쉬움에 평일에도 퇴근 후 학원에 나와
        추가공부를 했습니다.
        그녀의 근면성실함과 학습에 대한 열정때문인지 그 어떤 학생보다 기억에 남고, 마음이 가는 학생이었습니다.
        그녀의 꿈에 조금이나마 도움이 되기를 바라는 마음으로 가르침을 이어간게 벌써 6개월이 되었네요.
        이해력도 빠르고 문제해결에 대한 집착이 남다른 서현씨!
        꼭 멋진 개발자로 거듭나기를 응원합니다!`,
        img: '/imgs/kyj.jpeg'
      }
    ]
  }
};

function data(state = profileData, action) {
  switch (action.type) {
    default:
      return state
  }
}


export const store = createStore(data, profileData);

import React from 'react';
import '../css/Testimonials.css';
import jsh from "../imgs/jsh.jpeg";
import kyj from "../imgs/kyj.jpeg";

function Testimonials() {

  const data = {
    testimonials: [
      {
        name: '정성희/happytalk',
        speech: `1년동안 함께 일한 디자이너입니다. 커뮤니케이션 능력이 뛰어난 마케터로 부분을 보기보다는 전체를 볼줄 아는 마케터입니다.
        책임감 있게 프로젝트를 리딩했으며 지구력까지 겸비하였기 때문에 지금 하고 있는 개발의 업무도 끈기있게 물고 늘어질것이라고 생각합니다.<br />
        좋은 인생선배, 개발선배를 만나 김서현의 능력을 더 발휘하였으면 좋겠습니다.`,
        img: jsh
      },
      {
        name: '최여정/megait 아카데미',
        speech: `일을 병행하면서 학습을 이어가는 것이 쉽지 않았을텐데, 단 한번의 결석도 없었습니다. 오히려 공부에 대한 아쉬움에 평일에도 퇴근 후 학원에 나와
        추가공부를 했습니다.
        그녀의 근면성실함과 학습에 대한 열정때문인지 그 어떤 학생보다 기억에 남고, 마음이 가는 학생이었습니다.
        그녀의 꿈에 조금이나마 도움이 되기를 바라는 마음으로 가르침을 이어간게 벌써 6개월이 되었네요.
        이해력도 빠르고 문제해결에 대한 집착이 남다른 서현씨!
        꼭 멋진 개발자로 거듭나기를 응원합니다!`,
        img: kyj
      }
    ]
  };

  const { testimonials } = data;

  return (
    <section id="testimonals" class="section">
      <div class="section__container">
        <h1>Testimonials</h1>
        <h3>See what they say about me</h3>
        <div class="testimonials">
          {testimonials.map(t => (
            <div class="testimonial">
              <img src={t.img} alt="profile" class="testimonial__avatar" />
              <div class="testimonial__speech-bubble">
                <p>{t.speech}</p>
                <p class="name">{t.name}</p>
              </div>
            </div>
          ))};
        </div>
      </div>
    </section>);
}

export default Testimonials;
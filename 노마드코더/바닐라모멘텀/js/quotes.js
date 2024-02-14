const quotes = [
  {
    quote: "행복은 우연이 아니라 선택이다.",
    author: "짐 론",
  },
  {
    quote: "할 수 없다고 생각하는 일을 해야 한다.",
    author: "엘리너 루즈벨트",
  },
  {
    quote: "큰 꿈을 꾸고 감히 실패하라.",
    author: "노먼 본",
  },
  {
    quote: "행복한 사람들은 행동을 계획하지만 결과를 계획하지 않는다.",
    author: "데니스 웨이틀리",
  },
  {
    quote: "행복은 찾는 것이 아니라 만드는 것이다.",
    author: "카밀라 아이링 킴볼",
  },
  {
    quote: "불가능은 오직 의지가 없는 사람에게만 존재한다.",
    author: "존 키츠",
  },
  {
    quote: "행복에 이르는 단 하나의 방법은 우리 의지의 힘을 넘어서는 일에 대한 걱정을 멈추는 것이다.",
    author: "에픽테토스",
  }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
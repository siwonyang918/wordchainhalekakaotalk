
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

function reply(text) {
  return {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: text
          }
        }
      ]
    }
  };
}

app.get("/", (req, res) => {
  res.send("끝말잇기 챗봇 서버가 실행 중입니다!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/kakao", (req, res) => {
  const text =
    req.body?.userRequest?.utterance?.trim() || "";

  let message;

  switch (text) {
    case "도움말":
    case "시작":
    case "끝말잇기":
      message =
        "🎮 끝말잇기 챗봇!\n\n" +
        "혼자 - 게임 시작\n" +
        "점수 - 점수 확인\n" +
        "랭킹 - 순위 확인\n" +
        "힌트 - 힌트 보기\n" +
        "포기 - 게임 종료";
      break;

    case "혼자":
      message =
        "🎮 게임을 시작할 준비가 됐어!\n" +
        "첫 단어는 사과야.\n" +
        "현재는 연결 테스트 버전이야.";
      break;

    case "점수":
      message = "점수 기능은 다음 단계에서 추가할게!";
      break;

    case "랭킹":
      message = "랭킹 기능은 다음 단계에서 추가할게!";
      break;

    case "힌트":
      message = "💡 힌트: 과일 이름을 생각해 봐!";
      break;

    case "포기":
      message = "게임을 종료했어. 다시 하려면 혼자를 입력해!";
      break;

    default:
      message =
        "입력한 말: " + text +
        "\n도움말을 입력해서 명령어를 확인해 봐!";
  }

  res.json(reply(message));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("서버 실행 중: " + PORT);
});
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

function reply(text) {
  return {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: text
          }
        }
      ]
    }
  };
}

app.get("/", (req, res) => {
  res.send("끝말잇기 챗봇 서버가 실행 중입니다!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/kakao", (req, res) => {
  const text =
    req.body?.userRequest?.utterance?.trim() || "";

  let message;

  switch (text) {
    case "도움말":
    case "시작":
    case "끝말잇기":
      message =
        "🎮 끝말잇기 챗봇!\n\n" +
        "혼자 - 게임 시작\n" +
        "점수 - 점수 확인\n" +
        "랭킹 - 순위 확인\n" +
        "힌트 - 힌트 보기\n" +
        "포기 - 게임 종료";
      break;

    case "혼자":
      message =
        "🎮 게임을 시작할 준비가 됐어!\n" +
        "첫 단어는 사과야.\n" +
        "현재는 연결 테스트 버전이야.";
      break;

    case "점수":
      message = "점수 기능은 다음 단계에서 추가할게!";
      break;

    case "랭킹":
      message = "랭킹 기능은 다음 단계에서 추가할게!";
      break;

    case "힌트":
      message = "💡 힌트: 과일 이름을 생각해 봐!";
      break;

    case "포기":
      message = "게임을 종료했어. 다시 하려면 혼자를 입력해!";
      break;

    default:
      message =
        "입력한 말: " + text +
        "\n도움말을 입력해서 명령어를 확인해 봐!";
  }

  res.json(reply(message));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("서버 실행 중: " + PORT);
});

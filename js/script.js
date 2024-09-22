document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
  });


 function showCharacter(character) {
  let characterInfo = {
    yohei: {
      name: "<span style='color:#F7CF00'>이치노세 요헤이</span>",
      imageLeft: "https://via.placeholder.com/400x700?text=400x700", //전신
      imageRight: "https://via.placeholder.com/700x300?text=700x300",  //두상
      description: `
        3학년 1반. 히가시야마고교의 학생회장.<br>
        검도부 출신으로 목소리가 크고 호탕한 성격.<br>
        품행단정, 성적우수. 자신에게 엄격한 태도를 갖고 있으나<br>
        가끔씩 문제를 힘으로 해결하려는 모습을 보이기도 한다.
      `
    },
    yoshino: {
      name: "<span style='color:#658A5A'>요시노 린</span>",
      imageLeft: "https://via.placeholder.com/400x700?text=400x700", //전신
      imageRight: "https://via.placeholder.com/700x300?text=700x300",  //두상
      description: `
        내용
      `
    },
    chiharu: {
      name: "<span style='color:#C4C2D3'>사카가미 치하루</span>",
      imageLeft: "https://via.placeholder.com/400x700?text=400x700", //전신
      imageRight: "https://via.placeholder.com/700x300?text=700x300",  //두상
      description: `
        내용
      `
    },
    shigeto: {
      name: "<span style='color:#32465C'>시게토 미사오</span>",
      imageLeft: "https://via.placeholder.com/400x700?text=400x700", //전신
      imageRight: "https://via.placeholder.com/700x300?text=700x300",  //두상
      description: `
        내용
      `
    },
    moe: {
      name: "<span>혼</span>다 모에",
      imageLeft: "https://via.placeholder.com/400x700?text=400x700", //전신
      imageRight: "https://via.placeholder.com/700x300?text=700x300",  //두상
      description: `
        내용
      `
    },
    takanashi: {
      name: "<span>타</span>카나시 료마",
      imageLeft: "https://via.placeholder.com/400x700?text=400x700", //전신
      imageRight: "https://via.placeholder.com/700x300?text=700x300",  //두상
      description: `
        내용
      `
    },
    konomi: {
      name: "<span>사</span>사모리 코노미",
      imageLeft: "https://via.placeholder.com/400x700?text=400x700", //전신
      imageRight: "https://via.placeholder.com/700x300?text=700x300",  //두상
      description: `
        내용
      `
    },
    endo: {
      name: "<span>엔</span>도 미츠키",
      imageLeft: "https://via.placeholder.com/400x700?text=400x700", //전신
      imageRight: "https://via.placeholder.com/700x300?text=700x300",  //두상
      description: `
        내용
      `
    }
  };

   // 캐릭터 정보 변경
   document.getElementById('character-info').innerHTML = `
   <div class="character-info-left">
     <img src="${characterInfo[character].imageLeft}" alt="${characterInfo[character].name}">
   </div>
   <div class="character-info-right">
     <h2>${characterInfo[character].name}</h2>
     <p>${characterInfo[character].description}</p>
     <img src="${characterInfo[character].imageRight}" alt="${characterInfo[character].name}">
   </div>
 `;
}
  
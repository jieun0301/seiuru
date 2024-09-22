document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
  });


 function showCharacter(character) {
  let characterInfo = {
    yohei: {
      name: "이치노세 요헤이",
      imageLeft: "https://via.placeholder.com/400x700?text=image", //전신
      imageRight: "https://via.placeholder.com/700x300?text=image+Side",  //두상
      description: `
        3학년 1반. 히가시야마고교의 학생회장.<br>
        검도부 출신으로 목소리가 크고 호탕한 성격.<br>
        품행단정, 성적우수. 자신에게 엄격한 태도를 갖고 있으나<br>
        가끔씩 문제를 힘으로 해결하려는 모습을 보이기도 한다.
      `
    },
    yoshino: {
      name: "요시노 린",
      imageLeft: "https://via.placeholder.com/400x700?text=image", //전신
      imageRight: "https://via.placeholder.com/700x300?text=image+Side",  //두상
      description: `
        내용
      `
    },
    chiharu: {
      name: "사카가미 치하루",
      imageLeft: "https://via.placeholder.com/400x700?text=image", //전신
      imageRight: "https://via.placeholder.com/700x300?text=image+Side",  //두상
      description: `
        내용
      `
    },
    shigeto: {
      name: "시게토 미사오",
      imageLeft: "https://via.placeholder.com/400x700?text=image", //전신
      imageRight: "https://via.placeholder.com/700x300?text=image+Side",  //두상
      description: `
        내용
      `
    },
    moe: {
      name: "혼다 모에",
      imageLeft: "https://via.placeholder.com/400x700?text=image", //전신
      imageRight: "https://via.placeholder.com/700x300?text=image+Side",  //두상
      description: `
        내용
      `
    },
    takanashi: {
      name: "타카나시 료마",
      imageLeft: "https://via.placeholder.com/400x700?text=image", //전신
      imageRight: "https://via.placeholder.com/700x300?text=image+Side",  //두상
      description: `
        내용
      `
    },
    konomi: {
      name: "사사모리 코노미",
      imageLeft: "https://via.placeholder.com/400x700?text=image", //전신
      imageRight: "https://via.placeholder.com/700x300?text=image+Side",  //두상
      description: `
        내용
      `
    },
    endo: {
      name: "엔도 미츠키",
      imageLeft: "https://via.placeholder.com/400x700?text=image", //전신
      imageRight: "https://via.placeholder.com/700x300?text=image+Side",  //두상
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
  
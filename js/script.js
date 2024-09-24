document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
  });


 function showCharacter(character) {
  let characterInfo = {
    yohei: {
      name: "<span style='color:#F7CF00'>이치노세<br>요헤이</span>",
      voice:"&quot;학생회의 저력을 보여주마!&quot;",
      teg1:"#성적우수",
      teg2:"#품행단정",
      teg3:"#도련님",
      imageLeft: "https://via.placeholder.com/250x250?text=250x250", //전신
      imageRight: "image/yohei.png",  //sd
      description: `
        3학년 1반. 히가시야마고교의 학생회장.<br>
        검도부 출신으로 목소리가 크고 호탕한 성격.<br>
        자신에게 엄격한 태도를 갖고 있으나<br>
        가끔씩 문제를 힘으로 해결하려는 모습을 보이기도 한다.
      `
      ,
      voiceClass: "yohei-voice"
    },
    yoshino: {
      name: "<span style='color:#FFAB5D'>요시노<br>린</span>",
      voice:"&quot;미안,미안~ 까먹었다!&quot;",
      teg1:"#외향형",
      teg2:"#요령이 좋은",
      teg3:"#센스있는",
      imageLeft: "https://via.placeholder.com/250x250?text=250x250", //전신
      imageRight: "image/yoshino.png",  //sd
      description: `
        내용
      `,
      voiceClass: "yoshino-voice"
    },
    chiharu: {
      name: "<span style='color:#C4C2D3'>사카가미<br>치하루</span>",
      voice:"&quot;운명을 시험해보실래요?&quot;",
      teg1:"#온화한",
      teg2:"#괴짜",
      teg3:"#운명론자",
      imageLeft: "https://via.placeholder.com/250x250?text=250x250", //전신
      imageRight: "image/chiharu.png",  //sd
      description: `
        내용
      `
      ,
      voiceClass: "chiharu-voice"
    },
    shigeto: {
      name: "<span style='color:#3E4961'>시게토<br>미사오</span>",
      voice:"&quot;너 따위가 알아서 뭐하게… 내 이름이 '시게토'란 걸….&quot;",
      teg1:"#내성적",
      teg2:"#사교성 부족",
      teg3:"#시건방진",
      imageLeft: "https://via.placeholder.com/250x250?text=250x250", //전신
      imageRight: "image/shigeto.png",  //sd
      description: `
        내용
      `
      ,
      voiceClass: "shigeto-voice"
    },
    moe: {
      name: "<span style='color:#FFE182'>혼다<br>모에</span>",
      voice:"&quot;영광으로 아시라구요-!&quot;",
      teg1:"#제멋대로인 바보",
      teg2:"#부끄러움 많고 어설픈",
      teg3:"#사랑에 빠져있음!",
      imageLeft: "https://via.placeholder.com/250x250?text=250x250", //전신
      imageRight: "https://via.placeholder.com/380x450?text=380x450",  //sd
      description: `
        내용
      `
      ,
      voiceClass: "moe-voice"
    },
    takanashi: {
      name: "<span style='color:#D6C0AF'>타카나시<br>료마</span>",
      voice:"&quot;여기보고 웃어봐~.&quot;",
      teg1:"#능글맞은",
      teg2:"#명랑한",
      teg3:"#성실한",
      imageLeft: "https://via.placeholder.com/250x250?text=250x250", //전신
      imageRight: "https://via.placeholder.com/380x450?text=380x450",  //sd
      description: `
        내용
      `
      ,
      voiceClass: "takanashi-voice"
    },
    konomi: {
      name: "<span style='color:#F99AC1'>사사모리<br>코노미</span>",
      voice:"&quot;ㅈ,죄,죄송해요!&quot;",
      teg1:"#소심한",
      teg2:"#수줍음 많은",
      teg3:"#순진한",
      imageLeft: "https://via.placeholder.com/250x250?text=250x250", //전신
      imageRight: "https://via.placeholder.com/380x450?text=380x450",  //sd
      description: `
        내용
      `
      ,
      voiceClass: "konomi-voice"
    },
    endo: {
      name: "<span style='color:#B5A6B8'>엔도<br>미츠키</span>",
      voice:"&quot;멍청하긴….&quot;",
      teg1:"#용의주도한",
      teg2:"#자존심 강한",
      teg3:"#냉혈한",
      imageLeft: "https://via.placeholder.com/250x250?text=250x250", //전신
      imageRight: "https://via.placeholder.com/380x450?text=380x450",  //sd
      description: `
        내용
      `
      ,
      voiceClass: "endo-voice"
    }
  };

   // 캐릭터 정보 변경
   document.getElementById('character-info').innerHTML = `
   <div class="character-info-left">
     <img src="${characterInfo[character].imageLeft}" alt="${characterInfo[character].name}">
     <h2>${characterInfo[character].name}</h2>
     <div class="left-bottom">
      <p class="left-bottom-1 ${characterInfo[character].voiceClass}">
        ${characterInfo[character].teg1}
      </p>
      <p class="left-bottom-2 ${characterInfo[character].voiceClass}">
        ${characterInfo[character].teg2}
      </p>
      <p class="left-bottom-3 ${characterInfo[character].voiceClass}">
        ${characterInfo[character].teg3}
      </p>
     </div>
   </div>
   <div class="character-info-right">
      <div class="right-top">
        <h3 class="${characterInfo[character].voiceClass}">${characterInfo[character].voice}</h3>
      </div>
      <div class="right-bottom">
       <p>${characterInfo[character].description}</p>
       <img src="${characterInfo[character].imageRight}" alt="${characterInfo[character].name}">
      </div>
   </div>
 `;
}
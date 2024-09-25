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
        <span style='display: block; color:#F7CF00; font-size: 30pt; font-weight: 700; margin: 0 0 10px 0;'>Profile</span>
        <span style='display: block; margin: 0 0 30px 0; height: 160px;'>
        3학년 1반. 히가시야마고교의 학생회장.<br>
        검도부 출신으로 목소리가 크고 호탕한 성격.<br>
        자신에게 엄격한 태도를 갖고 있으나<br>
        가끔씩 문제를 힘으로 해결하려는 모습을 보이기도 한다.
        </span>
        <span style='display: block; text-align:right; color:#F7CF00; font-size: 30pt; font-weight: 700; margin: 0 21px 10px 0;'>Others</span>
        <span style='display: block; text-align:right;  margin: 0 21px 10px 0;'>
        키 : 179cm<br>
        혈액형 : O형<br>
        취미 : 물건 일렬로 정리하기<br>
        특기 : 검도
        </span>
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
         <span style='display: block; color:#FFAB5D; font-size: 30pt; font-weight: 700; margin: 0 0 10px 0;'>Profile</span>
        <span style='display: block; margin: 0 0 30px 0; height: 160px;'>
        3학년 3반. 히가시야마고교의 부학생회장.<br>
        밝고 명랑한 성격의 미인으로 인기가 많다.<br>
        장난꾸러기 기질이 있지만<br>
        믿고 의지 할 수 있는 연상이기도 하다.
        </span>
        <span style='display: block; text-align:right; color:#FFAB5D; font-size: 30pt; font-weight: 700; margin: 0 21px 10px 0;'>Others</span>
        <span style='display: block; text-align:right;  margin: 0 21px 10px 0;'>
        키 : 168cm<br>
        혈액형 : B형<br>
        취미 : 상점가에서 고로케 먹기<br>
        특기 : 타자 빨리치기, 가챠에서 좋은 것 뽑기, 말싸움 이기기
        </span>
      `,
      voiceClass: "yoshino-voice"
    },
    chiharu: {
      name: "<span style='color:#C4C2D3'>사카가미<br>치하루</span>",
      voice:"&quot;운명을 시험해보실래요?&quot;",
      teg1:"#온화한",
      teg2:"#괴짜",
      teg3:"#운명론자",
      imageLeft: "image/chiharu_head.png", //전신
      imageRight: "image/chiharu.png",  //sd
      description: `
        <span style='display: block; color:#C4C2D3; font-size: 30pt; font-weight: 700; margin: 0 0 10px 0;'>Profile</span>
        <span style='display: block; margin: 0 0 30px 0; height: 160px;'>
        1학년 1반. 히가시야마고교 학생회의 서기.<br>
        사카가미 가문의 아가씨다운 온화한 성격.<br>
        과학이 특기인 수석 입학자로서 모범생의 태도를 보이지만<br>
        점술과 운세를 보는 비과학적 취미를 갖고 있다.
        </span>
        <span style='display: block; text-align:right; color:#C4C2D3; font-size: 30pt; font-weight: 700; margin: 0 21px 10px 0;'>Others</span>
        <span style='display: block; text-align:right;  margin: 0 21px 10px 0;'>
        키 : 155cm<br>
        혈액형 : AB형<br>
        취미 : 점괘, 타로<br>
        특기 : 다도, 꽃꽂이, 서예
        </span>
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
        <span style='display: block; color:#3E4961; font-size: 30pt; font-weight: 700; margin: 0 0 10px 0;'>Profile</span>
        <span style='display: block; margin: 0 0 30px 0; height: 160px;'>
        1학년 1반. 히가시야마고교 학생회의 회계.<br>
        냉정하고 무뚝뚝한 엘리트의 이미지를 갖고 있지만<br>
        실상은 그저 내성적인 애니메이션 덕후.<br>
        학생회 임원들에게만 마음을 열고 있다.
        </span>
        <span style='display: block; text-align:right; color:#3E4961; font-size: 30pt; font-weight: 700; margin: 0 21px 10px 0;'>Others</span>
        <span style='display: block; text-align:right;  margin: 0 21px 10px 0;'>
        키 : 168cm<br>
        혈액형 : A형<br>
        취미 : 애니감상, 동인행사방문<br>
        특기 : 애니 명대사 읊기, 암산
        </span>
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
         <span style='display: block; color:#FFE182; font-size: 30pt; font-weight: 700; margin: 0 0 10px 0;'>Profile</span>
        <span style='display: block; margin: 0 0 30px 0; height: 160px;'>
        3학년 3반. 귀가부.<br>
        돌연 나타난 기부금 입학자로 유명하다.<br>
        자기중심적인 태도로 성가시지만<br>
        서방님을 찾으러 온 로맨티스트라는 소문이…?
        </span>
        <span style='display: block; text-align:right; color:#FFE182; font-size: 30pt; font-weight: 700; margin: 0 21px 10px 0;'>Others</span>
        <span style='display: block; text-align:right;  margin: 0 21px 10px 0;'>
        키 : 163cm<br>
        혈액형 : B형<br>
        취미 : 다이어리 꾸미기, 미행하기<br>
        특기 : 테니스
        </span>
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
         <span style='display: block; color:#D6C0AF; font-size: 30pt; font-weight: 700; margin: 0 0 10px 0;'>Profile</span>
        <span style='display: block; margin: 0 0 30px 0; height: 160px;'>
 	      1학년 8반. 사진부.<br>
        여자아이들의 마음을 잘 아는 가벼운 소년.<br>
        뒤처지는 성적 탓에 선생님들에게 눈총을 사지만<br>
        나름의 피치 못할 사정이 있는 듯 하다.
        </span>
        <span style='display: block; text-align:right; color:#D6C0AF; font-size: 30pt; font-weight: 700; margin: 0 21px 10px 0;'>Others</span>
        <span style='display: block; text-align:right;  margin: 0 21px 10px 0;'>
        키 : 174cm<br>
        혈액형 : O형<br>
        취미 : 가라오케 가기, 사진찍기<br>
        특기 : 바느질, 요리 등 살림
        </span>
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
         <span style='display: block; color:#F99AC1; font-size: 30pt; font-weight: 700; margin: 0 0 10px 0;'>Profile</span>
        <span style='display: block; margin: 0 0 30px 0; height: 160px;'>
      	1학년 8반. 도서부.<br>
        방치되어 있던 도서부를 홀로 지키던 소녀.<br>
        조용한 성격과 달리 엉뚱한 로맨스를 상상하곤 한다.<br>
        인터넷에서 유명한 로맨스 소설 작가.
        </span>
        <span style='display: block; text-align:right; color:#F99AC1; font-size: 30pt; font-weight: 700; margin: 0 21px 10px 0;'>Others</span>
        <span style='display: block; text-align:right;  margin: 0 21px 10px 0;'>
        키 : 157cm<br>
        혈액형 : AB형<br>
        취미 : 로맨스 소설 읽기, 쓰기<br>
        특기 : 속독
        </span>
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
         <span style='display: block; color:#B5A6B8; font-size: 30pt; font-weight: 700; margin: 0 0 10px 0;'>Profile</span>
        <span style='display: block; margin: 0 0 30px 0; height: 160px;'>
 	      엔도 가의 삼남. 사카가미 치하루의 약혼 상대.<br>
        남들 앞에서는 상냥한 태도를 보이지만<br>
        실제로는 오만한 성격으로, 사카가미를 낮잡아보고 있다.<br>
        </span>
        <span style='display: block; text-align:right; color:#B5A6B8; font-size: 30pt; font-weight: 700; margin: 0 21px 10px 0;'>Others</span>
        <span style='display: block; text-align:right;  margin: 0 21px 10px 0;'>
        키 : 176cm<br>
        혈액형 : B형<br>
        취미 : 정원 산책<br>
        특기 : 식물 관리, 독서
        </span>
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


// 모달 열기 함수
function openModal(img) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src; // 클릭한 이미지의 소스를 모달 이미지로 설정
  captionText.innerHTML = img.alt; // 이미지의 alt 값을 설명으로 설정
}

// 모달 닫기 함수
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

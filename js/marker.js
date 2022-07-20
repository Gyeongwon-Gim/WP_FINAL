const serviceKey =
  "xJXpzEXUkIPqgV1HNGPR9%2FX6Wey9dZike9lmYPH6VZ0Utqu5IWFu7RrwvNeGU7lpG%2BJ%2B0WnhkFuW97pFbWuomw%3D%3D";

//커서를 마커에 두었을 때 실행되는 함수
function mouseOverListener(map, CustomOverlay) {
  return function() {
    CustomOverlay.setMap(map); //커스텀 오버레이가 열린다.
  };
}

//커서를 마커에서 땠을 때 실행되는 함수
function mouseOutListener (CustomOverlay) {
  return function() {
    CustomOverlay.setMap(null); //커스텀 오버레이가 닫힌다.
  }
}

//contentTypeId별 마커를 담을 배열
var markers14 = [],
  markers32 = [],
  markers38 = [],
  markers39 = [];

  //contentTypeId가 14인 객체의 마커를 지도에 표시하는 함수
  async function data_ctTI14(map) {
    num_Id = 14;
    url =
    "http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/locationBasedList?serviceKey=" +
    serviceKey +
    "&numOfRows=2000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&contentTypeId=" +
    num_Id +
    "&mapX=126.961611&mapY=37.568477&radius=100000000&returnType=JSON&returnType=JSON";
  
    const res = await fetch(url + serviceKey + num_Id, {
      headers: {
        Accept: "application / json",
      },
    });
    const response = await res.json();
    const places = await response.response.body.items.item;
  
    for (var i = 0; i < places.length; i++) {

      //해당 장소의 위도와 경도, 이름을 받아옴
      var mapx = places[i]["mapx"];
      var mapy = places[i]["mapy"];
      var title = places[i]["title"];
      //var contentid = places[i]["contentid"];
  
      //마커 스타일 지정하기
      var markerImg_14 = new kakao.maps.MarkerImage(
        "imgs/museum.png",
        new kakao.maps.Size(35, 35),
        new kakao.maps.Point(17, 56)
      )

      //마커 선언하기
      var marker = new kakao.maps.Marker({
        position : new kakao.maps.LatLng(mapy, mapx),
        image : markerImg_14
      })
  
      //마커에 마우스에 올렸을 때 이름을 알려줄 인포윈도우 내용 지정
      var iwContent = '<div class="customInfo", style="padding:5px;"><strong>' + title + '</strong></div>';
  
      //iwcontent를 가진 커스텀 오버레이 생성하기
      var CustomOverlay = new kakao.maps.CustomOverlay({
        position : new kakao.maps.LatLng(mapy, mapx),
        content : iwContent
      });
  
      //marker을 배열에다 담기
      markers14.push(marker);
  
      //마커에 마우스 이벤트 등록하기
      kakao.maps.event.addListener(marker, 'mouseover', mouseOverListener(map, CustomOverlay));
      kakao.maps.event.addListener(marker, "mouseout", mouseOutListener(CustomOverlay));
      //kakao.maps.event.addListener(marker, 'click', getInfo(map, marker, contentid));
    }
    //마커를 지도에다 표시하기
    for (var i = 0; i < markers14.length; i++) {
      markers14[i].setMap(map);
    }
  }

//실패한 닫기가 가능한 커스텀 오버레이 함수
// function getInfo(map, marker, contentid) {
//   var contentTypeId = 14;
//   var url = "http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/detailCommon?encodeURIcomponet('serviceKey')" + "=" + 
//   serviceKey + "&" + dencodeURIcomponent('numOfRows') + "=" + "10" + "&" + encodeURIcomponent('pageNo') + "=" + "1" + "&" + dencodeURIcomponent('MobileOS') + "=" + "ETC" + "&" + dencodeURIcomponent('MobileApp') + "=" + 'AppTest' 
//   + "&" + dencodeURIcomponent('contentId') + "=" + 
//   contentid + "&" + dencodeURIcomponent('contentTypeId') + "=" + 
//   contentTypeId + "&" + dencodeURIcomponent('defaultYN') + "=" + "Y" + "&" + dencodeURIcomponent(firstImageYN) + "=Y&" 
//   + dencodeURIcomponent('areacodeYN') + "=Y&" + dencodeURIcomponent('catcodeYN') + "=Y&" +
//   dencodeURIcomponent('addrinfoYN') + "=Y&" + dencodeURIcomponent('mapinfoYN') + "=Y&" +
//   dencodeURIcomponent(overviewYN) + "=Y&" + "returnType=Json";

//   fetch(url, {
//     headers: {
//       'Accept' : 'application / json'
//     }
//   })
//   .then((res) => res.json())
//   .then((resJson) => {
//     place = resJson.response.body.items.item;

//     var content = '<div class="wrap">' + 
//                 '    <div class="info">' + 
//                 '        <div class="title">' + 
//                               place.title + 
//                 '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
//                 '        </div>' + 
//                 '        <div class="body">' + 
//                 '            <div class="img">' +
//                 '                <img src="' + place.firstimage + '" width="73" height="70">' +
//                 '           </div>' + 
//                 '            <div class="desc">' + 
//                 '                <div class="ellipsis">' + place.addr1 + '</div>' + 
//                 '                <div class="jibun ellipsis">' + '(우)' + place.zipcode + '(지번)' + place.addr2 + '</div>' + 
//                 '                <div>' + place.homepage + '</div>' + 
//                 '            </div>' + 
//                 '        </div>' + 
//                 '    </div>' +    
//                 '</div>';

//       var overlay = new kakao.maps.CustomOverlay({
//         content: content,
//         map: map,
//         position: marker.getPosition()
//       });

//       overlay.setMap(map);
//   })
// }

//contentTypeId가 32인 객체의 마커를 지도에 표시하는 함수
async function data_ctTI32(map) {
  num_Id = 32;
  url =
  "http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/locationBasedList?serviceKey=" +
  serviceKey +
  "&numOfRows=2000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&contentTypeId=" +
  num_Id +
  "&mapX=126.961611&mapY=37.568477&radius=100000000&returnType=JSON&returnType=JSON";

  const res = await fetch(url + serviceKey + num_Id, {
    headers: {
      Accept: "application / json",
    },
  });
  const response = await res.json();
  const places = await response.response.body.items.item;

  for (var i = 0; i < places.length; i++) {
    //해당 장소의 위도와 경도, 이름을 받아옴
    var mapx = places[i]["mapx"];
    var mapy = places[i]["mapy"];
    var title = places[i]["title"];

    //마커 스타일 지정하기
    var markerImg_32 = new kakao.maps.MarkerImage(
      "imgs/sleeping.png",
      new kakao.maps.Size(35, 35),
      new kakao.maps.Point(17, 56)
    )

    //마커 선언하기
    var marker = new kakao.maps.Marker({
      position : new kakao.maps.LatLng(mapy, mapx),
      image : markerImg_32
    })

    //마커에 마우스에 올렸을 때 이름을 알려줄 인포윈도우 내용 지정
    var iwContent = '<div class="customInfo", style="padding:5px;"><strong>' + title + '</strong></div>';


    //iwcontent를 가진 커스텀 오버레이 생성하기
    var CustomOverlay = new kakao.maps.CustomOverlay({
      position : new kakao.maps.LatLng(mapy, mapx),
      content : iwContent
    });

    //marker을 배열에다 담기
    markers32.push(marker);

    //마커에 마우스 이벤트 등록하기
    kakao.maps.event.addListener(marker, 'mouseover', mouseOverListener(map, CustomOverlay));
    kakao.maps.event.addListener(marker, "mouseout", mouseOutListener(CustomOverlay));
  }
  //마커를 지도에다 표시하기
  for (var i = 0; i < markers32.length; i++) {
    markers32[i].setMap(map);
  }
}

function closeOverlay() {
  overlay.setMap(null);
}

//contentTypeId가 38인 객체의 마커를 지도에 표시하는 함수
async function data_ctTI38(map) {
  num_Id = 38;
  url =
  "http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/locationBasedList?serviceKey=" +
  serviceKey +
  "&numOfRows=2000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&contentTypeId=" +
  num_Id +
  "&mapX=126.961611&mapY=37.568477&radius=100000000&returnType=JSON&returnType=JSON";

  const res = await fetch(url + serviceKey + num_Id, {
    headers: {
      Accept: "application / json",
    },
  });
  const response = await res.json();
  const places = await response.response.body.items.item;

  for (var i = 0; i < places.length; i++) {
    //해당 장소의 위도와 경도, 이름을 받아옴
    var mapx = places[i]["mapx"];
    var mapy = places[i]["mapy"];
    var title = places[i]["title"];

    //마커 스타일 지정하기
    var markerImg_38 = new kakao.maps.MarkerImage(
      "imgs/shop.png",
      new kakao.maps.Size(35, 35),
      new kakao.maps.Point(17, 56)
    )

    //마커 선언하기
    var marker = new kakao.maps.Marker({
      position : new kakao.maps.LatLng(mapy, mapx),
      image : markerImg_38
    })

    //마커에 마우스에 올렸을 때 이름을 알려줄 인포윈도우 내용 지정
    var iwContent = '<div class="customInfo", style="padding:5px;"><strong>' + title + '</strong></div>';


    //iwcontent를 가진 커스텀 오버레이 생성하기
    var CustomOverlay = new kakao.maps.CustomOverlay({
      position : new kakao.maps.LatLng(mapy, mapx),
      content : iwContent
    });

    //marker을 배열에다 담기
    markers38.push(marker);

    //마커에 마우스 이벤트 등록하기
    kakao.maps.event.addListener(marker, 'mouseover', mouseOverListener(map, CustomOverlay));
    kakao.maps.event.addListener(marker, "mouseout", mouseOutListener(CustomOverlay));
  }
  //마커를 지도에다 표시하기
  for (var i = 0; i < markers38.length; i++) {
    markers38[i].setMap(map);
  }
}


//contentTypeId가 39인 객체의 마커를 지도에 표시하는 함수
async function data_ctTI39(map) {
  num_Id = 39;
  url =
  "http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/locationBasedList?serviceKey=" +
  serviceKey +
  "&numOfRows=2000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&contentTypeId=" +
  num_Id +
  "&mapX=126.961611&mapY=37.568477&radius=100000000&returnType=JSON&returnType=JSON";

  const res = await fetch(url + serviceKey + num_Id, {
    headers: {
      Accept: "application / json",
    },
  });
  const response = await res.json();
  const places = await response.response.body.items.item;

  for (var i = 0; i < places.length; i++) {
    //해당 장소의 위도와 경도, 이름을 받아옴
    var mapx = places[i]["mapx"];
    var mapy = places[i]["mapy"];
    var title = places[i]["title"];

    //마커 스타일 지정하기
    var markerImg_39 = new kakao.maps.MarkerImage(
      "imgs/restaurant.png",
      new kakao.maps.Size(35, 35),
      new kakao.maps.Point(17, 56)
    )

    //마커 선언하기
    var marker = new kakao.maps.Marker({
      position : new kakao.maps.LatLng(mapy, mapx),
      image : markerImg_39
    })

    //마커에 마우스에 올렸을 때 이름을 알려줄 인포윈도우 내용 지정
    var iwContent = '<div class="customInfo", style="padding:5px;"><strong>' + title + '</strong></div>';

    //iwcontent를 가진 커스텀 오버레이 생성하기
    var CustomOverlay = new kakao.maps.CustomOverlay({
      position : new kakao.maps.LatLng(mapy, mapx),
      content : iwContent
    });

    //marker을 배열에다 담기
    markers39.push(marker);

    //마커에 마우스 이벤트 등록하기
    kakao.maps.event.addListener(marker, 'mouseover', mouseOverListener(map, CustomOverlay));
    kakao.maps.event.addListener(marker, "mouseout", mouseOutListener(CustomOverlay));
  }
  //마커를 지도에다 표시하기
  for (var i = 0; i < markers39.length; i++) {
    markers39[i].setMap(map);
  }
}

//마커 필터의 체크 박스를 실행했을 때 시행되는 함수이다.
function checkBox(){
  //체크박스에 따라 마커를 표시
  //check박스 체크 여부에 따라 해당 마커가 표시됨
  if(document.getElementsByName("category")[0].checked == true) {
    data_ctTI14(map);
  }
  else{
    data_ctTI14(null);
  }
  
  if(document.getElementsByName("category")[1].checked == true) {
    data_ctTI32(map);
  }
  else{
    data_ctTI32(null);
  }
  
  if(document.getElementsByName("category")[2].checked == true) {
    data_ctTI38(map);
  }
  else{
    data_ctTI38(null);
  }
  
  if(document.getElementsByName("category")[3].checked == true) {
    data_ctTI39(map);
  }
  else{
    data_ctTI39(null);
  }
}

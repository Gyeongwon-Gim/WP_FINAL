var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
		center: new kakao.maps.LatLng(35.13417, 129.11397), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
	}; 

//지도 생성 
var map = new kakao.maps.Map(mapContainer, mapOption);

//지도 타입 컨트롤
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//줌 컨트롤
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 5, // 클러스터 할 최소 지도 레벨
});

//현재위치 버튼	
function myPosition(){
        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
           // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude, // 경도
                mymarkers = [];

            clusterer.removeMarkers(mymarkers);

            var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            map.setCenter(locPosition); //지도의 중심 좌표를 사용자의 위치로 바꿈
			
            //사용자의 위치를 알려줄 마커 표시
			var mymarkerImage = new kakao.maps.MarkerImage("imgs/user.png", new kakao.maps.Size(30, 40), new kakao.maps.Point(27, 69));
			var mymarker = new kakao.maps.Marker({
				position : locPosition,
				image : mymarkerImage
			});

            //사용자 위치를 나타내는 마커를 mymarkers 배열에 넣기
            mymarkers.push(mymarker);
			mymarker.setMap(map);

        });
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
            map.setCenter(locPosition);
        //console.log(message);
    }
}


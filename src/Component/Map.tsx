import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const kakao = (window as any).kakao;

  useEffect(() => {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    // for (let i = 0; i < dummy.data.length; i++) {
    //   displayMarker(dummy.data[i], i);
    // }

    function displayMarker<
      T extends {
        name: string;
        location_y: number;
        location_x: number;
        active: boolean;
        point: number;
      }
    >(data: T, i: number) {
      // 인포윈도우 표시될 위치(좌표)
      let iwPosition = new window.kakao.maps.LatLng(
        data.location_y,
        data.location_x
      );

      // 인포윈도우에 표출될 내용. HTML 문자열이나 document element 등이 가능하다.
      var inactiveInfoWindow = `<div class="inactive infowindow""><span>${data.name}</span></div>`;

      //인포윈도우
      let infowindow;

      infowindow = new window.kakao.maps.InfoWindow({
        zIndex: 1,
        position: iwPosition,
        content: inactiveInfoWindow,
        disableAutoPan: false,
        map: map, //map에 해당 인포윈도우를 적용한다.
      });
    }

    function getInfo() {
      // 지도의 현재 중심좌표를 얻어옵니다
      var center = map.getCenter();

      // 지도의 현재 레벨을 얻어옵니다
      var level = map.getLevel();

      // 지도타입을 얻어옵니다
      var mapTypeId = map.getMapTypeId();

      // 지도의 현재 영역을 얻어옵니다
      var bounds = map.getBounds();

      // 영역의 남서쪽 좌표를 얻어옵니다
      var swLatLng = bounds.getSouthWest();

      // 영역의 북동쪽 좌표를 얻어옵니다
      var neLatLng = bounds.getNorthEast();

      // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
      var boundsStr = bounds.toString();

      var message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>";
      message += "경도 " + center.getLng() + " 이고 <br>";
      message += "지도 레벨은 " + level + " 입니다 <br> <br>";
      message += "지도 타입은 " + mapTypeId + " 이고 <br> ";
      message +=
        "지도의 남서쪽 좌표는 " +
        swLatLng.getLat() +
        ", " +
        swLatLng.getLng() +
        " 이고 <br>";
      message +=
        "북동쪽 좌표는 " +
        neLatLng.getLat() +
        ", " +
        neLatLng.getLng() +
        " 입니다";

      // 개발자도구를 통해 직접 message 내용을 확인해 보세요.
      console.log(message);
    }

    //중심좌표 재설정
    var position = new window.kakao.maps.LatLng(37.586272, 127.029005);
    map.setCenter(position);
  }, []);

  return <div id="map" style={{ width: "50vw", height: "50vh" }} />;
};

export default Map;

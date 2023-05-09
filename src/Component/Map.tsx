import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = ({
  addres,
  setLat,
  setLang,
}: {
  addres: string;
  setLat: any;
  setLang: any;
}) => {
  console.log(addres);
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
      var Lat = center.getLat();
      const Lng = center.getLng();
    }

    //중심좌표 재설정
    var position = new window.kakao.maps.LatLng(37.586272, 127.029005);
    map.setCenter(position);

    getInfo();

    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(`${addres}`, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        setLat(coords.Ma);
        setLang(coords.La);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${addres}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, [addres]);

  return <div id="map" style={{ width: "50vw", height: "50vh" }} />;
};

export default Map;

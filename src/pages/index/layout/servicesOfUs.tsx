import React, { FC, useEffect, useRef } from 'react';
import { Box, Icon, Text } from 'zmp-ui';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Loader } from "@googlemaps/js-api-loader"

const GOOGLE_MAPS_API_KEY = 'AIzaSyDq3fVaC8bs1uxThPk9hshdNZxaEpbA6bs'; 

const mapContainerStyle = {
    width: '100%',
    height: '300px',
}; 
const center = {
    lat: 10.774372306968068,
    lng: 106.72898201180249,
};

const ServicesOfUs: FC = () => {
    const mapRef = useRef(null);

    // Sử dụng useEffect để tải và khởi tạo Google Maps
    useEffect(() => {
        const loader = new Loader({
            apiKey: GOOGLE_MAPS_API_KEY,
            version: "weekly",
        });
    
        loader.load().then(() => {
            if (mapRef.current) {
                // Tạo bản đồ với tọa độ và thuộc tính đã chọn
                const map = new google.maps.Map(mapRef.current, {
                    center: center,
                    zoom: 15,
                });
                
                // Thêm Marker vào vị trí hiện tại
                const marker = new google.maps.Marker({
                    position: center,
                    map: map,
                    title: 'Vị trí của bạn'
                });
                // Marker sẽ giúp hiển thị vị trí của bạn trên bản đồ với một dấu đỏ
            }
        });
    }, []);

    // Mã hiển thị giao diện và thông tin liên hệ
    return (
        <Box className="space-y-3 m-2 p-3" style={{ background: '#435d52' }}>
            <div className="font-content p-3" style={{ background: '#222a22', borderRadius: '10px' }}>
                <div className="flex flex-col-2 mb-3" style={{ borderBottom: '1px solid #665c4b', paddingBottom: '10px' }}>
                    <Icon icon="zi-home" style={{ color: 'white' }} className="mr-3" />
                    <p className="text-white">Công ty Cổ phần Đầu tư Địa ốc AKAHOMES</p>
                </div>
                <div className="flex flex-col-2 mb-3" style={{ borderBottom: '1px solid #665c4b', paddingBottom: '10px' }}>
                    <Icon icon="zi-location" style={{ color: 'white' }} className="mr-3" />
                    <p className="text-white">112 đường B2, Khu đô thị Sala, phường An Lợi Đông, thành phố Thủ Đức, HCMC</p>
                </div>
                <div className="flex flex-col-2 mb-3" style={{ borderBottom: '1px solid #665c4b', paddingBottom: '10px' }}>
                    <Icon icon="zi-call" style={{ color: 'white' }} className="mr-3" />
                    <p className="text-white">091 758 73 87</p>
                </div>
                <div className="flex flex-col-2 mb-3" style={{ borderBottom: '1px solid #665c4b', paddingBottom: '10px' }}>
                    <Icon icon="zi-at" style={{ color: 'white' }} className="mr-3" />
                    <p className="text-white">info@akahomes.com.vn</p>
                </div>

                {/* Nhúng Google Maps vào div */}
                <div ref={mapRef} style={mapContainerStyle} />
            </div>
        </Box>
    );
};

export default ServicesOfUs;
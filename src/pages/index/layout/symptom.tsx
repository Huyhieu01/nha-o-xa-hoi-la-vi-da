import React, { FC } from "react";
import { Box } from "zmp-ui";
import img from "static/map.png";
// import icon1 from 'static/icon3.png'
// import icon2 from 'static/icon1.png'
// import icon3 from 'static/icon2.png'

export const Symptom: FC = () => {
    const nen1 = "https://res.cloudinary.com/dfzc1gkqr/image/upload/v1726736155/Nh%C3%A0%20%E1%BB%9E%20X%C3%A3%20H%E1%BB%99i%20-%20New%20LaVIDA/w5hywbuv5r8elwkajlsd.png"
    return (
        <Box className="m-2"
        style={{
            backgroundImage: `url(${nen1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className=" p-3">
                <div className="text-center font-tinhHoaHoiTu mb-5">
                    <h2 className="text-white text-[1.5em]">Vị trí & Kết nối</h2>
                    <strong className="text-[#ffdb8f] text-[2em]">VỊ TRÍ TRUNG TÂM, KẾT NỐI ĐA ĐIỂM</strong>
                </div>

                <div className="font-content text-white">
                    <p>Sở hữu vị trí đắc địa liền kề trung tâm thương mại Vincom Dĩ An, ngay mặt tiền đường ĐT 743C mở ra cuộc sống tiện nghi với nhiều trải nghiệm khác biệt.</p>
                </div>

                {/* <div className="mt-5">
                    <div className="flex flex-col-2 justify-left items-center">
                        <img src={icon1} alt="" className="mr-4" />
                        <div>
                            <p className="font-tinhHoaHoiTu text-[#eabf9b]">5 phút:</p>
                            <strong className="text-white">Đến các trường Đại học lớn</strong>
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-col-2 justify-left items-center">
                        <img src={icon2} alt="" className="mr-3" />
                        <div>
                            <p className="font-tinhHoaHoiTu text-[#eabf9b]">10 phút:</p>
                            <strong className="text-white">Đến Trung tâm tài chính Thủ Thiêm</strong>
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-col-2 justify-left items-center">
                        <img src={icon3} alt="" className="mr-3" />
                        <div>
                            <p className="font-tinhHoaHoiTu text-[#eabf9b]">15 phút:</p>
                            <strong className="text-white">Đến trung tâm TP.HCM</strong>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="">
                <img src="https://res.cloudinary.com/dfzc1gkqr/image/upload/v1726736069/Nh%C3%A0%20%E1%BB%9E%20X%C3%A3%20H%E1%BB%99i%20-%20New%20LaVIDA/mmfbcjrcpsrdcwrorgox.png" alt="" />
            </div>
            <br />
        </Box>
    );
};

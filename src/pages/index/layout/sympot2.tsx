import React, { FC } from "react";
import { Box } from "zmp-ui";

import icon1 from 'static/1.png'
import icon2 from 'static/2.png'
import icon3 from 'static/3.png'
import icon4 from 'static/4.png'
import icon5 from 'static/5.png'
import icon6 from 'static/6.png'
import icon from 'static/ico-rhomebus.png'

export const Symptom2: FC = () => {


    return (
        <Box className="m-4">
            <div className="text-center font-tinhHoaHoiTu mb-5">
                <h2 className="text-[#4a5d52] text-[2em]">Những lợi thế nổi bật</h2>
                <strong className="text-[#f9856f] text-[3em]">CỦA THE CLASSIA</strong>
            </div>

            <div className="font-content tex-[#4a5d52]">
                <p>Sứ mệnh của chúng tôi là kiến tạo đô thị văn minh, môi trường sống xanh, cộng đồng nhân văn và mang lại giá trị thiết thực nhất cho khách hàng, cổ đông và đối tác.</p>
                <br />
                <p>Chúng tôi có tầm nhìn trở thành doanh nghiệp hàng đầu trong phát triển bất động sản bền vững.</p>
            </div>
            <br />
            <div className="relative p-4">
                <div className="grid grid-cols-2 gap-7">
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon1} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Pháp lý minh bạch gần 100% căn đã có sổ hồng</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon2} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Sở hữu vị trí đắc địa và giá trị cộng hưởng</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon3} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Kiến trúc tân cổ điển, đẹp mãi theo thời gian</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon4} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Tiện ích cho chuẩn sống cuộc sống thảnh thơi</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon5} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Cộng đồng cư dân hoà đồng, tinh anh, thành đạt</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon6} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Giải thưởng danh giá, khẳng định giá trị</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

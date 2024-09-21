import React, { FC } from "react"
import { Box, Button } from "zmp-ui"
import nen1 from "static/nen-1.jpg"
import nen2 from "static/nen-2.jpg"

export const About: FC = () => {
    return (
        <Box className="col-inner m-4">
            <Box className="text-center"
                style={{
                    backgroundImage: `url(${nen1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mt-8">
                    <h2 className="font-tinhHoaHoiTu font-bold" style={{ fontSize: "1.8em", textTransform: "uppercase", color: "#1f726f" }}>
                        TỔNG QUAN DỰ ÁN
                    </h2>
                </div>

                <br />
                <div className="font-content text-[#4a5d52] text-[1em] text-left " style={{ lineHeight: "30px" }}>
                    <ul className="list-disc ml-8"><li>Tên dự án:<strong> New Lavida Dĩ An Bình Dương</strong></li>
                        <li>Vị trí: TL743C, phường Tân Đông Hiệp, Thành phố Dĩ An, Tỉnh Bình Dương</li>
                        <li>Chủ đầu tư:<strong> Tập đoàn Lê Phong</strong></li>
                        <li>Diện tích đất quy hoạch: 10.320 m2 </li>
                        <li>Diện tích xây dựng: 60.721,4 m2 (bao gồm diện tích sân thượng + mái công trình)</li>
                        <li>Quy mô dự án: 4 block gồm B1, B2, B3, B4</li>
                        <li>Mật độ xây dựng: ≤ 60%</li>
                        <li>Quy mô dân số: Dự kiến 1426 người</li>
                        <li>Tổng số tầng: Dự án có 2 tháp liền. Tổng dự án có 873 căn hộ và 9 căn hộ kinh doanh.</li>
                        <li>Tổng số căn hộ: Tháp A có 308 căn (200 Căn NOXH, 108 Căn NOTM) và Tháp B có 565 Căn NOXH.</li>
                        <li>Giá bán: 770 triệu / căn</li>
                        <li>Pháp lý: Sở hữu lâu dài</li>
                    </ul>
                </div>
            </Box>
        </Box>
    );
};
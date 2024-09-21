import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";

export const BannerHome: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const img = "https://res.cloudinary.com/dfzc1gkqr/image/upload/v1726731484/Nh%C3%A0%20%E1%BB%9E%20X%C3%A3%20H%E1%BB%99i%20-%20New%20LaVIDA/bnvfp4el9sbxxihkxeya.jpg"

  const images = [
    {
      key: "banner_notification",
      src: img,
      alt: "Banner Notification"
    },
  ];

  return (
    <Box className="m-4">
      <Box flexDirection="row">
        {images.map((img, index) => (
          <Box
            key={img.key}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              role="presentation"
              onClick={() => {
                setActiveIndex(index);
                setVisible(true);
              }}
              src={img.src}
              alt={img.alt}
            />
          </Box>
        ))}
      </Box>
      <ImageViewer
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images}
        visible={visible}
      />
    </Box>
  );
};

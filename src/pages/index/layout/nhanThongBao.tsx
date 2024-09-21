import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";

import img from "static/nen_thongbao.jpg"

export const NotifiPage: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

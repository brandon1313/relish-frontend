import { Card, Col } from "antd";
import { Photo } from "../model/Photo";

const PhotoInformationSection = ({
  selectedImage,
}: {
  selectedImage: Photo | null;
}) => (
  <Col span={8}>
    {selectedImage && (
      <Card
        title={
          <div
            style={{
              whiteSpace: "normal",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {selectedImage.title}
          </div>
        }
        bordered
      >
        <p>
          <b>Album:</b> {selectedImage.album.title}
        </p>
        <p>
          <b>User:</b> {selectedImage.album.user.name}
        </p>
        <p>
          <b>Email:</b> {selectedImage.album.user.email}
        </p>
        <p>
          <b>Website:</b> {selectedImage.album.user.website}
        </p>
        <p>
          <b>Company:</b> {selectedImage.album.user.company.name}
        </p>
      </Card>
    )}
  </Col>
);

export default PhotoInformationSection;

import { Row, Col } from "antd";
import Search from "antd/es/input/Search";

const FilterSection = ({
  userEmail,
  title,
  albumTitle,
  setUserEmail,
  setTitle,
  setAlbumTitle,
  applyFilters,
}: {
  userEmail: string;
  title: string;
  albumTitle: string;
  setUserEmail: (value: string) => void;
  setTitle: (value: string) => void;
  setAlbumTitle: (value: string) => void;
  applyFilters: () => void;
}) => (
  <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
    <Col span={8}>
      <Search
        placeholder="Filter by user email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        allowClear
        onSearch={applyFilters}
      />
    </Col>
    <Col span={8}>
      <Search
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        allowClear
        onSearch={applyFilters}
      />
    </Col>
    <Col span={8}>
      <Search
        placeholder="Filter by album title"
        value={albumTitle}
        onChange={(e) => setAlbumTitle(e.target.value)}
        allowClear
        onSearch={applyFilters}
      />
    </Col>
  </Row>
);

export default FilterSection;

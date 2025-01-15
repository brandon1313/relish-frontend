import { Pagination, Row } from "antd";

const PaginationSection = ({
  currentPage,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
}: {
  currentPage: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (current: number, size: number) => void;
}) => (
  <Row justify="center" style={{ marginTop: 20 }}>
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={total}
      onChange={onPageChange}
      pageSizeOptions={["5", "10", "25"]}
      onShowSizeChange={onPageSizeChange}
    />
  </Row>
);

export default PaginationSection;

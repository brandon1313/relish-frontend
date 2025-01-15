import  { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {  Row, } from "antd";
import FilterSection from "./FilterSection";
import { Photo } from "../model/Photo";
import CarouselSection from "./CarouselSection";
import PhotoInformationSection from "./PhotoInformationSection";
import PaginationSection from "./PaginationSection";

const ImageCarousel = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [pageSize, setPageSize] = useState(25);

  const fetchData = useCallback(async (page = 1, size = pageSize) => {
    setLoading(true);
    try {
      const offset = (page - 1) * size;
      const response = await axios.get("http://localhost:3000/photos", {
        params: {
          limit: size,
          offset,
          userEmail: userEmail || undefined,
          title: title || undefined,
          albumTitle: albumTitle || undefined,
        },
      });

      setData(response.data.data);
      setTotal(parseInt(response.data.total, 10));
      setSelectedImage(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [userEmail, title, albumTitle, pageSize]);

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [pageSize, currentPage, fetchData]);

  return (
    <div style={{ padding: 20 }}>
      <FilterSection
        userEmail={userEmail}
        title={title}
        albumTitle={albumTitle}
        setUserEmail={setUserEmail}
        setTitle={setTitle}
        setAlbumTitle={setAlbumTitle}
        applyFilters={() => {
          setCurrentPage(1);
          fetchData(1);
        }}
      />
      <Row gutter={[16, 16]} style={{ padding: 20 }}>
        <CarouselSection
          data={data}
          loading={loading}
          onSlideChange={(index) => setSelectedImage(data[index])}
        />
        <PhotoInformationSection selectedImage={selectedImage} />
      </Row>
      <PaginationSection
        currentPage={currentPage}
        pageSize={pageSize}
        total={total}
        onPageChange={(page) => setCurrentPage(page)}
        onPageSizeChange={(_, size) => {
          setPageSize(size);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default ImageCarousel;
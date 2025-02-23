const SliderPaginationBullets = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-6 z-10 mt-10">
        <button className="swiper-button-prev !static !w-4 !h-4 !text-gray-400 !m-0 after:content-['←'] after:!text-lg">
          <span className="sr-only">Previous slide</span>
        </button>

        <div className="swiper-pagination !static !w-auto flex gap-3" />

        <button className="swiper-button-next !static !w-4 !h-4 !text-gray-400 !m-0 after:content-['→'] after:!text-lg">
          <span className="sr-only">Next slide</span>
        </button>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 !important;
          cursor: pointer;
          padding: 0;
          border: none;
          transition: all 0.3s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          background: #6366f1;
          opacity: 1;
          scale: 1.2;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-weight: normal;
        }
      `}</style>
    </>
  );
};

export default SliderPaginationBullets;

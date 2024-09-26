import Add from "@/components/Add";
import CustomProducts from "@/components/CustomProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG CONTAINER */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT CONTAINER */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="color-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam
          aliquam laboriosam quia voluptates eum. Distinctio quae veniam hic
          saepe iure, possimus officiis asperiores! Dignissimos placeat
          voluptatibus earum eligendi recusandae!
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-gray-500 line-through text-xl">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            provident, natus, sapiente illo similique vero dicta eum quibusdam
            ipsa, unde facere eaque eius minima architecto quo praesentium.
            Saepe, esse earum.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            provident, natus, sapiente illo similique vero dicta eum quibusdam
            ipsa, unde facere eaque eius minima architecto quo praesentium.
            Saepe, esse earum.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            provident, natus, sapiente illo similique vero dicta eum quibusdam
            ipsa, unde facere eaque eius minima architecto quo praesentium.
            Saepe, esse earum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;

import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/23120035/pexels-photo-23120035.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/25194070/pexels-photo-25194070.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/24284213/pexels-photo-24284213.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/25158812/pexels-photo-25158812.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/25232985/pexels-photo-25232985.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link><Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/23017583/pexels-photo-23017583.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/24512875/pexels-photo-24512875.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/25194063/pexels-photo-25194063.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/19254459/pexels-photo-19254459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              sizes="20vw"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
      </div>
    </div>
  );
};
export default Categories;

import React from "react";

export const MainArticle = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-6 border-gray-200">
      <div className="w-full lg:w-1/2 px-4">
        <img src="/images/2.webp" alt="" className="w-full" />
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <div className="text-center ">
          <h1 className="p-4">Lorem, ipsum dolor.</h1>
          <p className="text-left overflow-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            molestiae eum dolorum numquam iusto facere non, placeat dolorem
            eligendi ad accusamus minima saepe, obcaecati similique, neque sint
            voluptate hic praesentium! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempora molestiae eum dolorum numquam iusto facere
            non, placeat dolorem eligendi ad accusamus minima saepe, obcaecati
            similique, neque sint voluptate hic praesentium!
          </p>
        </div>
      </div>
    </div>
  );
};

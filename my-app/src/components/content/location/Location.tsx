import React from "react";

export const Location = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center">lorem ipsum</h1>
        <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga
          voluptatibus voluptate at nulla eveniet suscipit, rem dolorem quaerat
          corporis!
        </p>
        <button className="inline-flex  items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ">
          Learn more
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <div className="w-full mt-8">
        <iframe
          className="w-full aspect-video h-50 w-50"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25033.126529725065!2d8.687050300000001!3d51.52011165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sde!4v1735756031114!5m2!1sen!2sde"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

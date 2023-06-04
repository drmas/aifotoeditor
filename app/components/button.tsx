import React from "react";

export const Button = ({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) => (
  <button
    type="button"
    className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white p-3  hover:border-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    <span className="">{icon}</span>
    <span className="">{title}</span>
  </button>
);

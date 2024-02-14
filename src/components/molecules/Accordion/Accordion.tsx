"use client";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type AccordionType = {
  title: string;
  description: string;
};
export const Accordion = ({ title, description }: AccordionType) => {
  const [toggleAction, setToggleAction] = useState<boolean>(false);
  return (
    <div>
      <div>
        <div>
          <div
            className="flex flex-row justify-between items-center py-5 px-3"
            onClick={() => setToggleAction((prevState) => !prevState)}
          >
            <p className="w-2/3 text-sm items-center align-middle font-semibold">
              {title}
            </p>
            {toggleAction ? (
              <FaArrowUp
                className="flex items-center align-middle "
                size={15}
              />
            ) : (
              <FaArrowDown
                className="flex items-center align-middle "
                size={15}
              />
            )}
          </div>
        </div>
      </div>
      {toggleAction && (
        <div className="px-4 text-xs py-4 bg-slate-100">{description}</div>
      )}
    </div>
  );
};

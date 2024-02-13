import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";

export const InputFormCheckInMobile = () => {
  return (
    <div className="flex flex-col justify-start items-center align-middle lg:hidden px-4 md:px-0  py-6">
      <div className="relative z-10 shadow-sm">
        <div className="flex flex-col w-full ">
          <div className="flex w-full flex-col gap-1">
            <p className="font-medium text-slate-500 text-lg">Good Morning</p>
            <h5 className="text-2xl lg:heading-5 font-semibold">
              Where do you want to stay?
            </h5>
            <div className="flex flex-row justify-center align-middle gap-5 py-6 px-3">
              <form className="w-full">
                <div className="flex flex-row w-full">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="border rounded-sm py-5 px-4 w-full flex flex-col gap-3">
                      <label className="font-semibold text-slate-400">
                        Location
                      </label>
                      <div className="flex flex-row py-3 gap-2">
                        <IoLocationOutline color="#720455" size={30} />
                        <select
                          className="border-none border-0 py-2 px-5 rounded-lg w-full"
                          style={{ border: "none" }}
                        >
                          <option
                            className="border-none border-0 py-4 w-full bg-white"
                            style={{
                              border: "none",
                              borderColor: "white",
                              borderWidth: 0,
                            }}
                          >
                            Bandung
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="border rounded-sm py-5 px-4 w-full flex flex-col gap-3 w-full">
                      <label className="font-semibold text-slate-400">
                        Check In
                      </label>
                      <div className="flex flex-row py-3 gap-2 w-full">
                        <IoCalendarOutline color="#720455" size={30} />
                        <input
                          type="date"
                          className="border-none border-0 py-2 px-5 rounded-lg w-full"
                          style={{
                            border: "none",
                            borderColor: "white",
                            borderWidth: 0,
                          }}
                        />
                      </div>
                    </div>
                    <div className="border rounded-sm py-5 px-4 w-full flex flex-col gap-3">
                      <label className="font-semibold text-slate-400">
                        Check Out
                      </label>
                      <div className="flex flex-row py-3 gap-2 w-full">
                        <IoCalendarOutline color="#720455" size={30} />
                        <input
                          type="date"
                          className="border-none border-0 py-2 px-5 rounded-lg w-full"
                          style={{
                            border: "none",
                            borderColor: "white",
                            borderWidth: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button className="w-full px-8 py-3 relative top-9  bg-[#910A67] hover:bg-[#720455] text-white rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

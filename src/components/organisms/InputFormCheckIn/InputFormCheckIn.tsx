import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";

export const InputFormCheckIn = () => {
  return (
    <div className="hidden lg:flex px-4 md:px-0 ">
      <div className="relative z-10 h-auto w-full max-w-7xl mt-5 md:mt-0 md:block md:translate-y-14 lg:absolute  lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 rounded-md bg-white p-3 lg:top-[400px] drop-shadow-md space-y-4 md:space-y-6">
        <div className="flex w-full flex-wrap items-center justify-start gap-4 md:flex-nowrap md:justify-between px-4">
          <div className="flex w-full flex-col gap-1">
            <p className="font-medium text-slate-500 text-lg">Good Morning</p>
            <h5 className="text-2xl lg:heading-5 font-semibold">
              Where do you want to stay?
            </h5>
            <div className="flex flex-row gap-5 py-6">
              <form>
                <div className="flex flex-row">
                  <div className="flex flex-col gap-4">
                    <div className="border rounded-sm py-5 px-4 flex flex-col gap-3">
                      <label>Location</label>
                      <div className="flex flex-rowpy-3 gap-2">
                        <IoLocationOutline color="#720455" size={30} />
                        <select
                          className="border-none border-0 py-2 px-5 w-[300px] rounded-lg"
                          style={{ border: "none" }}
                        >
                          <option
                            className="border-none border-0 py-4"
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
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border rounded-sm py-5 px-4 flex flex-col gap-3">
                      <label>Check In</label>
                      <div className="flex flex-rowpy-3 gap-2">
                        <IoCalendarOutline color="#720455" size={30} />
                        <input
                          type="date"
                          className="border-none border-0 py-2 px-5 w-[300px] rounded-lg"
                          style={{
                            border: "none",
                            borderColor: "white",
                            borderWidth: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border rounded-sm py-5 px-4 flex flex-col gap-3">
                      <label>Check Out</label>
                      <div className="flex flex-rowpy-3 gap-2">
                        <IoCalendarOutline color="#720455" size={30} />
                        <input
                          type="date"
                          className="border-none border-0 py-2 px-5 w-[300px] rounded-lg"
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
          <button className="px-5 py-12 relative top-9  bg-[#910A67] hover:bg-[#720455] text-white rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

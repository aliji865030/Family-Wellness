import { data } from "./../component/colorData";

function ColorScreen() {
  return (
    <div className="w-full flex flex-wrap gap-5 justify-center py-14 ">
      {data.map((item) => {
        return (
          <div className="w-2/12 h-80 border border-black shadow-2xl">
            <div
              style={{ backgroundColor: item.colorCode }}
              className="h-60 w-full"
            ></div>
            <div className="p-3">
              <h1 className="text-xl font font-medium">{item.colorCode}</h1>
              <p style={{ color: item.colorCode }} className="font-bold">
                {item.colorName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ColorScreen;

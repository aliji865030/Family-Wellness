import Button from "./Button";

function ThinkCard() {
  return (
    <div
      style={{ backgroundColor: "#991f48" }}
      className="text-center text-white p-9"
    >
      <h1 className="text-4xl p-3"> Think Health. Think Massage.</h1>
      <p className="p-3">
        We are open 9am to 6pm; Monday through Sunday. If you would like to
        schedule an appointment
        <br /> with us, please call us at 987-654-3210 today!
      </p>
      <div className="p-3 flex gap-2 justify-center">
        <Button
          backgroundColor="transparent"
          padding="10px 120px"
          border="3px solid white"
        >
          LEARN MORE ABOUT US
        </Button>
        <Button
          backgroundColor="transparent"
          padding="10px 120px"
          border="3px solid white"
        >
          CONTACT US TODAY
        </Button>
      </div>
    </div>
  );
}

export default ThinkCard;

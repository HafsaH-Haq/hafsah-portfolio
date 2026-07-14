import Doodle from "./Doodle";

function DoodleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">

      <Doodle
        type="arrow"
        size={80}
        className="absolute top-24 left-16 rotate-[-15deg]"
      />

      <Doodle
        type="star"
        color="#B58B42"
        size={40}
        className="absolute top-44 right-44"
      />

      <Doodle
        type="search"
        size={60}
        className="absolute top-[45%] right-24"
      />

      <Doodle
        type="browser"
        color="#B58B42"
        size={75}
        className="absolute bottom-24 right-52"
      />

      <Doodle
        type="chat"
        size={70}
        className="absolute bottom-40 left-44"
      />

      <Doodle
        type="wifi"
        size={60}
        className="absolute top-32 left-[48%]"
      />

    </div>
  );
}

export default DoodleBackground;
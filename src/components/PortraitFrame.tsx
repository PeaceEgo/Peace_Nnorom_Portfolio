import "./PortraitFrame.css";

export default function PortraitFrame() {
  return (
    <div className="portrait">
      <div className="portrait__frame">
        <img className="portrait__photo" src="/assets/peace.jpg" alt="Peace Nnorom" />
      </div>
      <img className="portrait__flower" src="/assets/flower.png" alt="" width={112.342} height={112.342} />
    </div>
  );
}

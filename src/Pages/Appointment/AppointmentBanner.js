import chair from "../../assets/images/chair.png";
import assignmentBannerBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const BannerBackground = {
  background: `url(${assignmentBannerBg})`,
  minHeight: "90vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center left",
  boxShadow: "25px 25px 50px 0 #F6F7F9 inset, -25px -25px 50px 0 #F6F7F9 inset"
};
const css = `
.my-selected { 
    font-weight: bold; 
    color: #0FCFEC;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: black;
    color: black;
  }
.my-today { 
  font-weight: bold;
  font-size: 140%; 
  color: #0FCFEC;
}
`;

const AppointmentBanner = ({date, setDate}) => {
  return (
    <section className="hero min-h-screen bg-base-100" style={BannerBackground}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-xl w-3/4 rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <style>{css}</style>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
            required
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;

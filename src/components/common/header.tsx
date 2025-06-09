import LgCombobox from "./lg-combobox"

export default function Header() {
  return (
    <>
      <div className="min-w-screen">
        <div className="w-8/12 h-[150px] mx-auto flex flex-row justify-between items-center">
          <LgCombobox />
          <div className="w-[276px] h-[98.25px]">
            <img src="logo.png" alt="logo" className="w-full h-full object-contain" />
          </div>
          <div className="w-[91.99px] h-[19.23]">
            <img src="bndes-logo.png" alt="bnds-logo" className="w-full h-full object-contain"/>
          </div>
        </div>
      </div>
    </>
  );
}
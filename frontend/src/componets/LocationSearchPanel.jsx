import React from "react";

const LocationSearchPanel = (props) => {
  const { setVehiclePanel } = props; 
      console.log(props);
      
const locations=[
  " 24B,Near Kapoor's cafe, sheryians coding school, Bhopal",
  " 24c,Near Kapoor's cafe, sheryians coding school, Bhopal",
  " 200,Near Kapoor's cafe, sheryians coding school, Bhopal",
  " 184,Near Kapoor's cafe, sheryians coding school, Bhopal",
]

  return (
    <div>
      {
        locations.map(function(elem){
          return <div onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}  className="flex  gap-4 mt-8 border-2 border-gray-100  active:border-black  p-3  rounded-xl items-center my-2 justify-start">
          <h2 className="bg-[#eee] h-10 p-2 flex- items-center justify-between rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">
            {elem}
          </h4>
        </div>
        })
      }
    
    </div>
  );
};

export default LocationSearchPanel;

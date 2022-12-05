type stausprops = {
  status: string;
};
const Status = (props:stausprops) => {
    let message
    if(props.status ==="loding"){
        message = "loding...."
    }else if(props.status ==="success"){
        message = "Data Fetched Successfully"
    }else if(props.status === "error"){
        message = "Error Fetching Data"
    }
  return <div>
Staus;-{message}
  </div>;
};

export default Status;

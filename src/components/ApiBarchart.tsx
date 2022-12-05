import React, { useEffect, useState } from "react";
import {usertype,apidatatype} from '../type/type'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
ChartJS.register(CategoryScale,LinearScale,BarElement,ArcElement,Title,Tooltip,Legend);

const ApiBarchart = () => {
  const [abc, setAbc] = useState<any>({});
  let options: usertype = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart With Api Data Using TypeScript",
      },
    },
  };
  let labels: string[] = [];
  let values: string[] = [];
  async function getData() {
    await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    )
      .then((response) => response.json())

      .then((data) => {
        let temp = {};
        console.log("data", data);
        data?.data?.map((item: apidatatype) => {
          labels.push(item.Year);
          values.push(item.Population);
        });
        temp = {
          labels: labels,
          datasets: [
            {
              label: "Level of Temperature",
              data: values,
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: "",
            },
          ],
        };
        setAbc(temp);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  console.log("abc", abc);
  return (
    <div>
      {abc?.labels?.length > 0 ? <div className="Doughnutchart"><Bar data={abc} options={options} /></div> : []}
      {!(abc?.labels?.length > 0) ? "" : <div className="Doughnutchart"><Doughnut data={abc} options={options} /></div>}
      {!(abc?.labels?.length > 0) ? "" : <div className="Doughnutchart"><Pie data={abc} options={options} /></div>}
    </div>
  );
};

export default ApiBarchart;

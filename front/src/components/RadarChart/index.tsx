import dynamic from 'next/dynamic';
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadarChart = () => {

  /**
   * S: 国内上位10%級
   * A: 技術部エース級
   * B: プロジェクト内の技術リーダー級
   * C: プロジェクト内で1メンバー
   * D: 0.5~1人未満の戦力要因
   * E: 戦力外
   */
  const skillList = [
    {
      category: 'BackEnd',
      current: 2,
      after: 3.5,
      color: '#000000',
    },
    {
      category: 'DataScience',
      current: 1,
      after: 4,
      color: '#000000',
    },
    {
      category: 'DataBase',
      current: 1,
      after: 3,
      color: '#000000',
    },
    {
      category: 'FrontEnd',
      current: 1.5,
      after: 2.5,
      color: '#000000',
    },
    {
      category: 'DevOps',
      current: 0.5,
      after: 2,
      color: '#000000',
    },
    {
      category: 'InfraStracture',
      current: 0.5,
      after: 3,
      color: '#000000',
    },
  ];

  const getRank = (data: number) => {
    switch (data) {
      case 0:
        return 'E';
      case 0.5:
        return 'E+';
      case 1:
        return 'D';
      case 1.5:
        return 'D+';
      case 2:
        return 'C';
      case 2.5:
        return 'C+';
      case 3:
        return 'B';
      case 3.5:
        return 'B+';
      case 4:
        return 'A';
      case 4.5:
        return 'A+';
      case 5:
        return 'S';
    }
  }


  const options: ApexOptions = {
    chart: {
      height: '100%',
      type: 'radar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: skillList.map((skill) => `${skill.category} (${getRank(skill.current)})`),
        labels: {
        show: true,
        style: {
          colors: skillList.map((skill) => skill.color),
          fontSize: "12px",
        }
      }
    },
    yaxis: {
      show: false,
      tickAmount: 5,
      min: 0,
      max: 5,
    },
    fill: {
      colors: ['#8be9fd', '#bd93f9'],
      opacity: 0.5,
    },
    stroke: {
      show: false,
    },
    markers: {
      size: 0,
    },
    dataLabels: {
      enabled: true,
      background: {
        enabled: true,
        foreColor: '#000000',
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000000',
        opacity: 0.5,
      },
      formatter: function (val: any, opts: any) {
        return getRank(val);
      },
    },
  };

  const series = [
    {
      name: '現在',
      data: skillList.map((skill) => skill.after),
    },
    {
      name: '10年後',
      data: skillList.map((skill) => skill.current),
    },
  ];


    return (
      <Chart
        options={options}
        series={series}
        type="radar"
        height={530}
        width={530}
        className="flex justify-center"
      />
    );
}

export default RadarChart;

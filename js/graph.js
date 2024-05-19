var dirDist50 = "#c93e70",
  dirDist51 = "#280F36",
  dirDist52 = "#174EA6",
  dirDist53 = "#292965",
  dirDist54 = "#CE751D",
  dirDist55 = "#E7A553",
  dirDist10 = "#2a2a2a",
  dirDistLess10 = "#a2a2a2";

Highcharts.chart("graphskill", {
  chart: {
    type: "networkgraph",
    marginTop: 1,
    backgroundColor: "#101010",
  },

  title: {
    text: "",
  },

  plotOptions: {
    networkgraph: {
      keys: ["from", "to"],
      layoutAlgorithm: {
        enableSimulation: true,
        initialPositions: "random",

        integration: "verlet",
        // Half of the repulsive force
        gravitationalConstant: 5,
        linkLength: 150,
      },
    },
  },

  tooltip: {
    enabled: false,
  },

  credits: {
    enabled: false,
  },

  series: [
    {
      marker: {
        radius: 13,
      },
      dataLabels: {
        enabled: true,
        linkFormat: "",
        allowOverlap: true,
        color: "#ffffff",
        align: "center",

        style: {
          // fontWeight: 'bold',
          fontSize: "20",
          textColor: "#000000",
        },
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -10,
        y: 100,
        borderWidth: 0,
      },

      data: [
        ["Programming Languages", "C#"],
        ["Programming Languages", "Java"],
        ["Programming Languages", "C++"],
        ["Programming Languages", "Python"],
        ["Programming Languages", "JavaScript"],
        ["Programming Languages", "TypeScript"],

        ["Cloud", "Amazon Web Services"],
        ["Cloud", "Microsoft Azure"],
        ["Cloud", "Google Cloud Platform"],

        ["Frameworks", ".NET Framework"],
        ["Frameworks", ".NET Core"],
        ["Frameworks", ".NET Latest"],
        ["Frameworks", "Spring Boot"],
        ["Frameworks", "React"],
        ["Frameworks", "Angular"],

        // ["Animation VFX", "Jenkins"],
        // ["Animation VFX", "C++"],
        // ["Animation VFX", "3dsMax"],
        // ["Animation VFX", "Adobe_creativesuite"],

        ["DevOps", "Jenkins"],
        ["DevOps", "Docker"],
        ["DevOps", "Kubernetes"],
        ["DevOps", "Ansible"],
        ["DevOps", "Terraform"],

        // ["GameDev", "Terraform"],
        // ["GameDev", "Armoury3D"],
        // ["GameDev", "Unreal"],

        // ["Visual Scripting", "Java"],
        // ["Visual Scripting", "Jenkins"],
        // ["Visual Scripting", "C++"],
        // ["Visual Scripting", "TouchDesigner"],
        // ["Visual Scripting", "VVVV"],
        // ["Visual Scripting", "Unreal"],

        // ["Coding", "ProcessingJS"],
        // ["Coding", "P5js"],
        // ["Coding", "Python"],
        // ["Coding", "HTML/CSS"],
        // ["Coding", "C#(Grasshopper API)"],
        // ["Coding", "ThreeJS"],
        // ["Coding", "WebGL"],

        // ["Creative coding", "ProcessingJS"],
        // ["Creative coding", "P5js"],
        // ["Creative coding", "TouchDesigner"],
        // ["Creative coding", "VVVV"],

        // ["Simulation/Analysis", "Ecotect"],
        // ["Simulation/Analysis", "Java"],
        // ["Simulation/Analysis", "ROS_gazebo"],
        // ["Simulation/Analysis", "DesignBuilder"],
        // ["Simulation/Analysis", "Terraform"],
        // ["Simulation/Analysis", "DesignBuilder"],

        // ["Fabrication", "CAM/CNC"],
        // ["Fabrication", "3D printing"],
        // ["Fabrication", "VR/AR"],
        // ["Fabrication", "Gcode"],
        // ["Fabrication", "ExtendedReality"],

        // ["Data Capture", "Photogrammetry"],
        // ["Data Capture", "SyntheticData"],
        // ["Data Capture", "LiDAR"],
        // ["Data Capture", "IOT"],
        // ["Data Capture", "Arduino/RaspberryPi"],
      ],
      nodes: [
        {
          id: "Programming Languages",
          marker: {
            radius: 30,
          },
          color: dirDist50,
        },
        {
          id: "Cloud",
          marker: {
            radius: 30,
          },
          color: dirDist51,
        },

        {
          id: "Frameworks",
          marker: {
            radius: 30,
          },
          color: dirDist52,
        },
        // {
        //   id: "GameDev",
        //   marker: {
        //     radius: 30,
        //   },
        //   color: dirDist52,
        // },
        // {
        //   id: "Animation VFX",
        //   marker: {
        //     radius: 30,
        //   },
        //   color: dirDist53,
        // },
        {
          id: "DevOps",
          marker: {
            radius: 30,
          },
          color: dirDist54,
        },
        // {
        //   id: "Visual Scripting",
        //   marker: {
        //     radius: 30,
        //   },
        //   color: dirDist55,
        // },
        // {
        //   id: "Coding",
        //   marker: {
        //     radius: 30,
        //   },
        //   color: dirDist54,
        // },
        // {
        //   id: "Creative coding",
        //   marker: {
        //     radius: 30,
        //   },
        //   color: dirDist53,
        // },
        // {
        //   id: "Simulation/Analysis",
        //   marker: {
        //     radius: 30,
        //   },
        //   color: dirDist52,
        // },
        // {
        //   id: "Fabrication",
        //   marker: {
        //     radius: 30,
        //   },
        //   color: dirDist51,
        // },
        // {
        //   id: "Data Capture",
        //   marker: {
        //     radius: 30,
        //   },
        //   color: dirDist50,
        // },

        //----------------

        // ["Cloud", "Amazon Web Services"],
        // ["Cloud", "Microsoft Azure"],
        // ["Cloud", "Google Cloud Platform"],
        // ["Cloud", "MeshLab"],

        // ["Interpoblity", ".NET Framework"],
        // ["Interpoblity", ".NET Core"],
        // ["Interpoblity ", "C++"],
        // ["Interpoblity ", ".NET Latest"],
        // ["Interpoblity ", "Spring Boot"],
        // ["Interpoblity ", "React"],
        // ["Interpoblity ", "Angular"],
        {
          id: "React",
          marker: {
            radius: 20,
          },
          color: dirDist51,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Amazon Web Services",
          marker: {
            radius: 20,
          },
          color: dirDist55,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: ".NET Latest",
          marker: {
            radius: 20,
          },
          color: dirDist51,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Angular",
          marker: {
            radius: 20,
          },
          color: dirDist51,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Spring Boot",
          marker: {
            radius: 20,
          },
          color: dirDist51,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Google Cloud Platform",
          marker: {
            radius: 20,
          },
          color: dirDist55,
          dataLabels: { style: { fontSize: "10px" } },
        },
        // {
        //   id: "MeshLab",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        {
          id: ".NET Core",
          marker: {
            radius: 20,
          },
          color: dirDist51,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "TypeScript",
          marker: {
            radius: 20,
          },
          color: dirDist53,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "C#",
          marker: {
            radius: 20,
          },
          color: dirDist53,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Java",
          marker: {
            radius: 20,
          },

          color: dirDist53,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "C++",
          marker: {
            radius: 20,
          },
          color: dirDist53,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Python",
          marker: {
            radius: 20,
          },
          color: dirDist53,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "JavaScript",
          marker: {
            radius: 20,
          },
          color: dirDist53,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: ".NET Framework",
          marker: {
            radius: 20,
          },
          color: dirDist51,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Microsoft Azure",
          marker: {
            radius: 20,
          },
          color: dirDist55,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Terraform",
          marker: {
            radius: 20,
          },
          color: dirDist52,
          dataLabels: { style: { fontSize: "10px" } },
        },
        // {
        //   id: "Armoury3D",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "Unreal",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        {
          id: "Jenkins",
          marker: {
            radius: 20,
          },
          color: dirDist52,
          dataLabels: { style: { fontSize: "10px" } },
        },
        // {
        //   id: "3dsMax",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "Adobe_creativesuite",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        {
          id: "Docker",
          marker: {
            radius: 20,
          },
          color: dirDist52,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Kubernetes",
          marker: {
            radius: 20,
          },
          color: dirDist52,
          dataLabels: { style: { fontSize: "10px" } },
        },
        {
          id: "Ansible",
          marker: {
            radius: 20,
          },
          color: dirDist52,
          dataLabels: { style: { fontSize: "10px" } },
        },
        // {
        //   id: "Omniverse",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "TouchDesigner",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "VVVV",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "ProcessingJS",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "P5js",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "Python",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "HTML/CSS",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "C#(Grasshopper API)",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "ThreeJS",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "WebGL",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "Ecotect",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "ROS_gazebo",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "DesignBuilder",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "CAM/CNC",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "3D printing",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "VR/AR",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "Gcode",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "CAM/CNC",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "ExtendedReality",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "Photogrammetry",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "SyntheticData",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "LiDAR",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "IOT",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
        // {
        //   id: "Arduino/RaspberryPi",
        //   marker: {
        //     radius: 20,
        //   },
        //   color: dirDist10,
        //   dataLabels: { style: { fontSize: "10px" } },
        // },
      ],
    },
  ],
});

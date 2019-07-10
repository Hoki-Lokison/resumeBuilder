

var app= new Vue ({
  el: "#app1",

  data: {


      educationlist:[],
      workexplist:[],
      accomplishmentlist: [],
      extracurricularlist:[],
      languageslist:[],
      programslist:[],
      softskillslist:[],
      awardslist:[],

      workexpEdit: {
          work_company: "",
          work_title: "",
          work_startdate: new Date().toISOString().substr(0, 10),
          work_enddate: new Date().toISOString().substr(0, 10),
          work_description: "",
          start_menu: false,
          end_menu: false,

      },

      educationEdit: {
        college: "",
        degree: "",
        gradyear: "",
        menu: false
      },

      accomplishmentEdit: {
        title: "",
        description: "",
      },
      extracurricularEdit: {
        title: "",
        description: "",
        date: "",
      },
      languagesEdit: {
        title: "",
        proficiency:  "",
      },
      programsEdit: {
        title: "",
        proficiency:  "",
      },
      softskillsEdit: {
        title: "",
      },
      awardsEdit: {
        title: "",
        receivedfrom:  "",
        date: "",
        description: "",
      },
      proficiencylist: [
        "Beginner",
        "Intermediate",
        "Proficient",
        "Advanced",
        "Expert"
      ],
      page: "form",
      template: "malia",
      templateLabel: "Choose a Template",
      templates: [
        {
          model: "malia",
          name: "Template 1"
        },
        {
          model: "hannah",
          name: "Template 2"
        },
        {
          model: "taft",
          name: "Template 3"
        },
        {
          model: "sharon",
          name: "Template 4"
        },
      ],
      colors: [
          "orange",
          "black",
          "red",
          "blue",
          "green"
      ],
      selected_color: "",
      picked_color: "black",
      pickingColor: false,
      color_brightness: 6,
      accent: 0,
      info:
          {
              first_name:"",
              last_name:"",
              address: "",
              city:"",
              state:"",
              zip:"",
              country: "",
              email: "",
              phone: "",
          },
  },

  methods: {
    addWork: function(){
      this.workexplist.push(this.workexpEdit)
      this.workexpEdit={
        work1company: "",
        work1title: "",
        work1startdate: "",
        work1enddate: "",
        work1description: "",

      }
    },
      addEducation: function(){
        this.educationlist.push(this.educationEdit)

        this.educationEdit= {
          college: "",
          degree: "",
          gradyear: "",
          menu: false
        }

    },

    addAccomplishment: function(){
      this.accomplishmentlist.push(this.accomplishmentEdit)

      this.accomplishmentEdit= {
        title: "",
        description: "",
      }

    },

    addLanguage: function(){
      this.languageslist.push(this.languagesEdit)

      this.languagesEdit= {
        title: "",
        proficiency:  "",
      }


    },

    addSkill: function(){
      this.programslist.push(this.programsEdit)

      this.programsEdit= {
        title: "",
        proficiency:  "",
      }


    },

    addAward: function(){
      this.awardslist.push(this.awardsEdit)

      this.awardsEdit= {
        title: "",
        receivedfrom:  "",
        date: "",
        description: "",
      }
    },
    newKellyColorPicker: function () {
      if (this.pickingColor == false) {
        new KellyColorPicker({
          place : 'color-picker',
          size : 150,
          input : 'color',
          method: 'triangle',
          input_format: "rgba",
          alpha_slider: true,
        });
        this.pickingColor = true;
      } else if (this.pickingColor == false) {
      }

    },

  },

  computed: {
    display = function () {
      if (this.pickingColor == true) {
        document.getElementById("colorPick").style.display = "block";
      } else if (this.pickingColor == false) {

      }
    }

  },

  created: function () {
    new KellyColorPicker({
      place : 'color-picker',
      size : 150,
      input : 'color',
      method: 'triangle',
      input_format: "rgba",
      alpha_slider: true,

    });
  },
});



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
      statementlist:[],

      personalinfoEdit:
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
            branding_statement: "",
            professional_title: "",
            linkedin: "",
        },

      statementEdit: {
        statement: "",
      },

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
        start_menu: false,
        end_menu: false,
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
      selected_color_main: "", //changed
      selected_color_accent: "", //changed
      picked_color: "black",
      pickingColor: false,
      color_brightness: 6,
      accent: 0,

      statementdisplay: [],
      workexpdisplay: [],
      educationdisplay: [],
      accomplishmentdisplay: [],
      extracurriculardisplay: [],
      languagesdisplay: [],
      programsdisplay: [],
      softskillsdisplay: [],
      awardsdisplay: [],



  },

  created: function () {

    new KellyColorPicker({ //changed
      place : 'color-picker-main',
      size : 150,
      input : 'colorMain',
      method: 'triangle',
      input_format: "rgba",
      alpha_slider: true,
    });
    new KellyColorPicker({ //changed
      place : 'color-picker-accent',
      size : 150,
      input : 'colorAccent',
      method: 'triangle',
      input_format: "rgba",
      alpha_slider: true,
    });
    addEventListener("click", function () { //changed
      this.selected_color_main = document.getElementById("colorMain").style.backgroundColor;
      console.log("Main Color: ", this.selected_color_main);
      this.selected_color_accent = document.getElementById("colorAccent").style.backgroundColor;
      console.log("Accent Color: ", this.selected_color_accent);
    });
  },

  methods: {
    addStatement: function(){
      this.statementlist.push(this.statementEdit)

      this.statementEdit= {
        statement: "",
      }
    },
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
      this.softskillslist.push(this.softskillsEdit)

      this.softskillsEdit= {
        title: "",
        proficiency:  "",
      }
    },

    addExtracurricular: function(){
      this.extracurricularlist.push(this.extracurricularEdit)

      this.extracurricularEdit= {
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

    includeWork: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },
    includeEducation: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },
    includeAccomplishment: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },
    includeAward: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },
    includeProgram: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },
    includeSkill: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },
    includeExtracurricular: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },
    includeLanguage: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },
    includeStatement: function(exp) {
      this.workexpdisplay.push(exp);
      return true;
    },

    newKellyColorPickerMain: function () { //changed
      if (this.pickingColor == false) {
        new KellyColorPicker({
          place : 'color-picker-main',
          size : 150,
          input : 'colorMain',
          method: 'triangle',
          input_format: "rgba",
          alpha_slider: true,
          display: 'block',
        });
        this.pickingColor = true;
      } else if (this.pickingColor == true) {
        this.pickingColor = false;
        x = document.getElementById("main");
        x.style.setAttribute("style", "display: hidden;");

      };
    },
    newKellyColorPickerAccent: function () { //changed
      if (this.pickingColor == false) {
        new KellyColorPicker({
          place : 'color-picker-accent',
          size : 150,
          input : 'colorAccent',
          method: 'triangle',
          input_format: "rgba",
          alpha_slider: true,
          display: 'block',
        });
        this.pickingColor = true;
      } else if (this.pickingColor == true) {
        this.pickingColor = false;
      };
    },

  },

  computed: {

    },
})
